import React, { useState, useEffect } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { API_BASE_URL } from '@/lib/constants';

interface BlogImageUploadProps {
  onImageUploaded: (imageUrl: string) => void;
  currentImage?: string | null;
}

const BlogImageUpload: React.FC<BlogImageUploadProps> = ({ onImageUploaded, currentImage }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null); // Initialize with null, update via useEffect
  const { toast } = useToast();

  // Update preview when currentImage prop changes
  useEffect(() => {
    if (currentImage) {
      // Check if currentImage is already a full URL
      if (currentImage.startsWith('http://') || currentImage.startsWith('https://')) {
        setPreview(currentImage);
      } else {
        // If it's a relative path (e.g., 'blog-images/filename.jpg'), construct the full URL
        const baseUrl = API_BASE_URL.replace('/backend', '/public');
        setPreview(`${baseUrl}/${currentImage}`);
      }
    } else {
      setPreview(null);
    }
  }, [currentImage]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "File too large",
        description: "Image must be less than 5MB",
        variant: "destructive",
      });
      return;
    }

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Only image files are allowed",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsUploading(true);
      
      const formData = new FormData();
      formData.append('file', file); // 'file' should match the parameter name in FastAPI endpoint

      const response = await fetch(`${API_BASE_URL}/upload_image.php`, { // New endpoint for image uploads
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      const imageUrl = result.file_path; // e.g., "blog-images/unique-name.jpg"
        
      // Construct the public URL for the preview
      const baseUrl = window.location.origin;
      setPreview(`${baseUrl}/uploads/blog-images/${imageUrl.split('/').pop()}`);
      
      // Pass the relative URL to the parent component
      onImageUploaded(imageUrl);
      
      toast({
        title: "Image uploaded",
        description: "Your image has been uploaded successfully",
      });
      
    } catch (error: any) {
      console.error('Error uploading image:', error);
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    onImageUploaded('');
  };

  return (
    <div className="space-y-4">
      {preview ? (
        <div className="relative">
          <img 
            src={preview} 
            alt="Featured image preview" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemoveImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <label className="cursor-pointer block">
            <div className="flex flex-col items-center">
              <Upload className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500 mb-1">Click to upload featured image</span>
              <span className="text-xs text-gray-400">PNG, JPG, GIF up to 5MB</span>
            </div>
            <input 
              type="file" 
              className="hidden" 
              accept="image/*"
              onChange={handleUpload}
              disabled={isUploading}
            />
          </label>
        </div>
      )}
      
      {isUploading && (
        <div className="flex justify-center">
          <Loader2 className="h-5 w-5 animate-spin text-brand-orange" />
          <span className="ml-2 text-sm text-gray-500">Uploading...</span>
        </div>
      )}
    </div>
  );
};

export default BlogImageUpload;
