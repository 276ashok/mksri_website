<?php
header('Content-Type: application/json');
// Get the origin of the request
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// Define allowed origins
$allowed_origins = [
    'https://mksribuilders.com',
    'https://www.mksribuilders.com'
];

// Check if the request origin is in the allowed list
if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
} else {
    // Fallback or deny if origin is not allowed
    // For now, we'll just not set the header if it's not allowed,
    // which will result in a CORS error for disallowed origins.
    // In a real production scenario, you might want to explicitly deny or log.
}
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'db_connect.php';

// Function to generate a slug from a title
function generateSlug($title) {
    $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title), '-'));
    return $slug;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $publishedFilter = $_GET['published'] ?? null;
    $postId = $_GET['id'] ?? null;
    $postSlug = $_GET['slug'] ?? null;

    $sql = "SELECT id, title, slug, excerpt, content, author, created_at, updated_at, image_url, published, category FROM blog_posts";
    $params = [];
    $types = "";
    $whereClauses = [];

    if ($publishedFilter === 'true') {
        $whereClauses[] = "published = ?";
        $params[] = 1;
        $types .= "i";
    }

    if ($postId !== null) {
        $whereClauses[] = "id = ?";
        $params[] = $postId;
        $types .= "i";
    } elseif ($postSlug !== null) {
        $whereClauses[] = "slug = ?";
        $params[] = $postSlug;
        $types .= "s";
    }

    if (!empty($whereClauses)) {
        $sql .= " WHERE " . implode(" AND ", $whereClauses);
    }

    $sql .= " ORDER BY created_at DESC";

    if ($stmt = $conn->prepare($sql)) {
        if (!empty($params)) {
            $stmt->bind_param($types, ...$params);
        }

        if ($stmt->execute()) {
            $result = $stmt->get_result();
            $posts = [];
            while ($row = $result->fetch_assoc()) {
                $row['published'] = (bool)$row['published']; // Convert tinyint to boolean
                // Apply html_entity_decode twice to handle potential double-encoding
                $row['content'] = html_entity_decode(html_entity_decode((string)($row['content'] ?? ''), ENT_QUOTES | ENT_HTML5), ENT_QUOTES | ENT_HTML5);
                $row['excerpt'] = isset($row['excerpt']) ? html_entity_decode((string)$row['excerpt'], ENT_QUOTES | ENT_HTML5) : null;
                
                // Prepend base URL to image_url if it's not null and not already a full URL
                if (!empty($row['image_url']) && !filter_var($row['image_url'], FILTER_VALIDATE_URL)) {
                    // Assuming image_url in DB is like 'blog-images/filename.jpg'
                    $row['image_url'] = BASE_URL . 'public/' . $row['image_url'];
                }
                
                $posts[] = $row;
            }

            if ($postId !== null || $postSlug !== null) {
                // If fetching a single post, return the first one found or 404
                if (!empty($posts)) {
                    // Content already decoded in the loop, no need to do it again here
                    echo json_encode($posts[0]);
                    http_response_code(200);
                } else {
                    echo json_encode(['message' => 'Blog post not found.']);
                    http_response_code(404);
                }
            } else {
                echo json_encode($posts);
                http_response_code(200);
            }
        } else {
            echo json_encode(['detail' => 'Failed to fetch blog posts: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }

} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['detail' => 'Invalid JSON input.']);
        http_response_code(400);
        exit();
    }

    $title = $data['title'] ?? '';
    $excerpt = $data['excerpt'] ?? ''; // Get excerpt from input
    $content = $data['content'] ?? '';
    $author = $data['author'] ?? 'Admin'; // Default author
    $imageUrl = $data['image_url'] ?? null;
    $published = $data['published'] ?? false;
    $category = $data['category'] ?? null;
    $slug = $data['slug'] ?? ''; // Get slug from input, if provided

    if (empty($title) || empty($content)) {
        echo json_encode(['detail' => 'Title and content are required.']);
        http_response_code(400);
        exit();
    }

    // If slug is not provided or is empty, generate it from the title
    if (empty($slug)) {
        $slug = generateSlug($title);
    }

    // Check if slug already exists (for new post)
    $sql_check_slug = "SELECT id FROM blog_posts WHERE slug = ?";
    if ($stmt_check = $conn->prepare($sql_check_slug)) {
        $stmt_check->bind_param("s", $slug);
        $stmt_check->execute();
        $stmt_check->store_result();
        if ($stmt_check->num_rows > 0) {
            echo json_encode(['detail' => 'A post with this slug already exists. Please choose a different slug.']);
            http_response_code(409); // Conflict
            $stmt_check->close();
            exit();
        }
        $stmt_check->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed for slug check: ' . $conn->error]);
        http_response_code(500);
        exit();
    }

    $sql = "INSERT INTO blog_posts (title, slug, excerpt, content, author, image_url, published, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("ssssssis", $title, $slug, $excerpt, $content, $author, $imageUrl, $published, $category);

        if ($stmt->execute()) {
            echo json_encode(['message' => 'Blog post created successfully.', 'id' => $conn->insert_id, 'slug' => $slug]);
            http_response_code(201); // Created
        } else {
            echo json_encode(['detail' => 'Failed to create blog post: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }

} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    $postId = $_GET['id'] ?? null;

    if (!$postId) {
        echo json_encode(['detail' => 'Post ID is required for updating.']);
        http_response_code(400);
        exit();
    }

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['detail' => 'Invalid JSON input.']);
        http_response_code(400);
        exit();
    }

    $title = $data['title'] ?? null;
    $excerpt = $data['excerpt'] ?? null; // Get excerpt from input
    $content = $data['content'] ?? null;
    $author = $data['author'] ?? null;
    $imageUrl = $data['image_url'] ?? null;
    $published = isset($data['published']) ? (bool)$data['published'] : null;
    $category = $data['category'] ?? null;
    $newSlug = $data['slug'] ?? null; // Get new slug from input, if provided

    $setClauses = [];
    $params = [];
    $types = "";

    // Fetch current post data to handle slug logic correctly
    $currentPost = null;
    $sql_fetch_current = "SELECT title, slug FROM blog_posts WHERE id = ?";
    if ($stmt_fetch = $conn->prepare($sql_fetch_current)) {
        $stmt_fetch->bind_param("i", $postId);
        $stmt_fetch->execute();
        $result_fetch = $stmt_fetch->get_result();
        $currentPost = $result_fetch->fetch_assoc();
        $stmt_fetch->close();
    }

    if (!$currentPost) {
        echo json_encode(['detail' => 'Blog post not found.']);
        http_response_code(404);
        exit();
    }

    $finalSlug = $currentPost['slug']; // Start with current slug

    if ($title !== null) {
        $setClauses[] = "title = ?";
        $params[] = $title;
        $types .= "s";
        
        // If title changes and no new slug is provided, regenerate slug
        if ($newSlug === null) {
            $finalSlug = generateSlug($title);
        }
    }

    // If a new slug is explicitly provided, use it
    if ($newSlug !== null) {
        $finalSlug = $newSlug;
    }

    // Only update slug if it has changed or if title was updated and slug was regenerated
    if ($finalSlug !== $currentPost['slug']) {
        // Check if the new slug already exists for another post
        $sql_check_slug_update = "SELECT id FROM blog_posts WHERE slug = ? AND id != ?";
        if ($stmt_check_update = $conn->prepare($sql_check_slug_update)) {
            $stmt_check_update->bind_param("si", $finalSlug, $postId);
            $stmt_check_update->execute();
            $stmt_check_update->store_result();
            if ($stmt_check_update->num_rows > 0) {
                echo json_encode(['detail' => 'A post with this slug already exists. Please choose a different slug.']);
                http_response_code(409); // Conflict
                $stmt_check_update->close();
                exit();
            }
            $stmt_check_update->close();
        } else {
            echo json_encode(['detail' => 'Database query preparation failed for slug update check: ' . $conn->error]);
            http_response_code(500);
            exit();
        }
        $setClauses[] = "slug = ?";
        $params[] = $finalSlug;
        $types .= "s";
    }

    if ($excerpt !== null) {
        $setClauses[] = "excerpt = ?";
        $params[] = $excerpt;
        $types .= "s";
    }

    if ($content !== null) {
        $setClauses[] = "content = ?";
        $params[] = $content;
        $types .= "s";
    }
    if ($author !== null) {
        $setClauses[] = "author = ?";
        $params[] = $author;
        $types .= "s";
    }
    if ($imageUrl !== null) {
        $setClauses[] = "image_url = ?";
        $params[] = $imageUrl;
        $types .= "s";
    }
    if ($published !== null) {
        $setClauses[] = "published = ?";
        $params[] = $published;
        $types .= "i";
    }
    if ($category !== null) {
        $setClauses[] = "category = ?";
        $params[] = $category;
        $types .= "s";
    }

    if (empty($setClauses)) {
        echo json_encode(['detail' => 'No data provided for update.']);
        http_response_code(400);
        exit();
    }

    $sql = "UPDATE blog_posts SET " . implode(", ", $setClauses) . ", updated_at = CURRENT_TIMESTAMP WHERE id = ?";
    $params[] = $postId;
    $types .= "i";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param($types, ...$params);

        if ($stmt->execute()) {
            if ($stmt->affected_rows > 0) {
                echo json_encode(['message' => 'Blog post updated successfully.']);
                http_response_code(200);
            } else {
                echo json_encode(['message' => 'No changes made or blog post not found.']);
                http_response_code(200); // Still 200 if no changes, but not an error
            }
        } else {
            echo json_encode(['detail' => 'Failed to update blog post: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }

} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $postId = $_GET['id'] ?? null;

    if (!$postId) {
        echo json_encode(['detail' => 'Post ID is required for deletion.']);
        http_response_code(400);
        exit();
    }

    $sql = "DELETE FROM blog_posts WHERE id = ?";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("i", $postId);

        if ($stmt->execute()) {
            if ($stmt->affected_rows > 0) {
                echo json_encode(['message' => 'Blog post deleted successfully.']);
                http_response_code(200);
            } else {
                echo json_encode(['message' => 'Blog post not found.']);
                http_response_code(404);
            }
        } else {
            echo json_encode(['detail' => 'Failed to delete blog post: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }
} else {
    echo json_encode(['message' => 'Invalid request method.']);
    http_response_code(405);
}

$conn->close();
?>
