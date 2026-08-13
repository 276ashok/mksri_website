import homeModernImage from "@/assets/images/home_modern.jpg";
import homeModern1Image from "@/assets/images/home_modern1.jpg";
import homeModern2Image from "@/assets/images/home_modern2.jpg";
import homeModern3Image from "@/assets/images/home_modern3.jpg";
import homeDowntownImage from "@/assets/images/home_downtown.png";
import downtown1Image from "@/assets/images/downtown1.png";
import downtown2Image from "@/assets/images/downtown2.png";
import downtown3Image from "@/assets/images/downtown3.png";
import homeIndustrialImage from "@/assets/images/home_industrial.png";
import industrial1Image from "@/assets/images/industrial1.png";
import industrial2Image from "@/assets/images/industrial2.png";
import industrial3Image from "@/assets/images/industrial3.png";
import precision1Image from "@/assets/images/precision1.png";
import precision2Image from "@/assets/images/precision2.png";
import precision3Image from "@/assets/images/precision3.png";
import commercialGallery1Image from "@/assets/images/commercial_gallery_1.png";
import commercialGallery2Image from "@/assets/images/commercial_gallery_2.png";
import infrastructureHeroImage from "@/assets/images/infrastructure_hero.png";
import infrastructureGallery1Image from "@/assets/images/infrastructure_gallery_1.png";
import industrialGallery1Image from "@/assets/images/industrial_gallery_1.png";
import industrialGallery2Image from "@/assets/images/industrial_gallery_2.png";
import customVilla1Image from "@/assets/images/custom_villa1.png";
import customVilla2Image from "@/assets/images/custom_villa2.png";
import customVilla3Image from "@/assets/images/custom_villa3.png";

export interface ProjectStat {
  value: string;
  label: string;
  icon: "building" | "ruler" | "calendar" | "clock" | "check";
}

export interface ProjectDetail {
  label: string;
  value: string;
  icon: "location" | "calendar" | "user" | "type" | "status" | "style" | "area" | "contract";
}

export interface ProjectHighlight {
  title: string;
  description: string;
  icon: "design" | "sustainable" | "quality" | "client" | "precision" | "tech";
}

export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  heroImage: string;
  location: string;
  timeline: string;
  client: string;
  projectType: string;
  status: string;
  overviewText: string[];
  statistics: ProjectStat[];
  details: ProjectDetail[];
  services: string[];
  challenges: string[];
  solutions: string[];
  gallery: string[];
  highlights: ProjectHighlight[];
  completionYear?: string;
  area?: string;
  architecturalStyle?: string;
  contractType?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: "premium-apartment-project",
    title: "Premium Apartment Project",
    category: "Residential",
    tagline: "Thoughtfully designed. Carefully built. Spaces that inspire a better way of living.",
    heroImage: homeModernImage,
    location: "Chennai, Tamil Nadu",
    timeline: "Mar 2022 - Present",
    client: "Private Client",
    projectType: "Residential Development",
    status: "Completed",
    overviewText: [
      "A premium 12-unit residential complex featuring contemporary architecture and energy-efficient design. This project, located in Chennai, Tamil Nadu, showcases our expertise in delivering high-quality residential developments with attention to detail and a commitment to excellence.",
      "The structure incorporates modern spaces, high-end materials, and smart automation systems. Through detailed structural engineering and sustainable material sourcing, our team ensured a durable, premium product that stands out in the residential corridor of Chennai.",
    ],
    statistics: [
      { value: "12", label: "Luxury Units", icon: "building" },
      { value: "25,000 sq.ft.", label: "Total Built-up Area", icon: "ruler" },
      { value: "18 Months", label: "Project Duration", icon: "calendar" },
      { value: "2023", label: "Completed", icon: "check" },
    ],
    details: [
      { label: "Location", value: "Chennai, Tamil Nadu", icon: "location" },
      { label: "Timeline", value: "Mar 2022 - Present", icon: "calendar" },
      { label: "Client", value: "Private Client", icon: "user" },
      { label: "Project Type", value: "Residential Development", icon: "type" },
      { label: "Status", value: "Completed", icon: "status" },
      { label: "Architectural Style", value: "Modern Contemporary", icon: "style" },
    ],
    services: [
      "Custom Home Design",
      "Luxury Apartment Construction",
      "Landscape Architecture",
      "Smart Building Integration",
      "Project Management",
    ],
    challenges: [
      "Maximizing space utilization while maintaining privacy and aesthetics.",
      "Implementing energy-efficient systems within budget.",
      "Ensuring timely delivery with high-quality finishes.",
    ],
    solutions: [
      "Innovative architectural planning with optimized layouts.",
      "Use of sustainable materials and energy-efficient systems.",
      "Proactive project management and strict quality control.",
    ],
    gallery: [
      homeModernImage,
      homeModern1Image,
      homeModern2Image,
      homeModern3Image,
      customVilla1Image,
      customVilla2Image,
      customVilla3Image,
    ],
    highlights: [
      { title: "Modern Design", description: "Contemporary architecture with premium finishes.", icon: "design" },
      { title: "Sustainable", description: "Eco-friendly materials and energy-efficient systems.", icon: "sustainable" },
      { title: "Quality Assured", description: "Strict quality control at every stage of construction.", icon: "quality" },
      { title: "Client Focused", description: "Building spaces that match our clients' vision.", icon: "client" },
    ],
  },
  {
    id: 2,
    slug: "it-park-development",
    title: "IT Park Development",
    category: "Commercial",
    tagline: "Innovative spaces designed for peak productivity, sustainable operations, and modern business demands.",
    heroImage: homeDowntownImage,
    location: "Sholinganallur, Chennai",
    timeline: "Jan 2023 - Dec 2024",
    client: "Trident Tech Spaces",
    projectType: "Commercial IT Park",
    status: "Completed",
    overviewText: [
      "A state-of-the-art commercial IT park with flexible office spaces and intelligent infrastructure. Nestled in Sholinganallur, the IT corridor of Chennai, this building features high-velocity elevators, double-glazed soundproof glass cladding, and dedicated solar power grids.",
      "MK Srinidhi managed the complete planning and execution phases, providing topographical mapping, excavation surveying, and vertical alignment checks during structural framing to guarantee total stability.",
    ],
    statistics: [
      { value: "85,000 sq.ft.", label: "Office Floor Space", icon: "ruler" },
      { value: "450 Cars", label: "Basement Parking Cap", icon: "building" },
      { value: "24 Months", label: "Project Duration", icon: "calendar" },
      { value: "2024", label: "Completed", icon: "check" },
    ],
    details: [
      { label: "Location", value: "Sholinganallur, Chennai", icon: "location" },
      { label: "Timeline", value: "Jan 2023 - Dec 2024", icon: "calendar" },
      { label: "Client", value: "Trident Tech Spaces", icon: "user" },
      { label: "Project Type", value: "Commercial IT Park", icon: "type" },
      { label: "Status", value: "Completed", icon: "status" },
      { label: "Architectural Style", value: "Corporate Glass & Steel", icon: "style" },
    ],
    services: [
      "Excavation & Setting Out",
      "Reinforced Concrete Work",
      "Glass Facade Engineering",
      "Solar Grid Integration",
      "HVAC Duct Mapping",
    ],
    challenges: [
      "Deep basement excavation mapping close to adjacent active office towers.",
      "Achieving absolute vertical precision on glass facade support brackets.",
      "Scheduling deliveries through busy metropolitan traffic segments.",
    ],
    solutions: [
      "Continuous automated prism tracking for surrounding buildings to monitor soil shift.",
      "Centimeter-level alignment checks utilizing dual GNSS total stations.",
      "Night shift material transfers coordinated with traffic authority permits.",
    ],
    gallery: [
      homeDowntownImage,
      downtown1Image,
      downtown2Image,
      downtown3Image,
      commercialGallery1Image,
      commercialGallery2Image,
    ],
    highlights: [
      { title: "Advanced Technology", description: "Integrated smart HVAC systems and structural automation.", icon: "tech" },
      { title: "Sustainable", description: "BREEAM-certified materials and renewable solar grid integration.", icon: "sustainable" },
      { title: "Quality Assured", description: "Continuous testing of high-strength concrete mixes.", icon: "quality" },
      { title: "Innovative Engineering", description: "Post-tensioned slabs for large column-free interior spans.", icon: "design" },
    ],
  },
  {
    id: 3,
    slug: "road-bridge-project",
    title: "Road & Bridge Project",
    category: "Infrastructure",
    tagline: "Connecting regions. Bridging gaps. Engineered infrastructure built to endure the elements.",
    heroImage: infrastructureHeroImage,
    location: "Tenkasi District, Tamil Nadu",
    timeline: "Nov 2023 - Present",
    client: "National Highway Authority & State PWD",
    projectType: "Infrastructure Development",
    status: "Completed",
    overviewText: [
      "Detailed construction and alignment surveys for major highway and bridge projects. This project, located across a river crossing in Tenkasi District, features a 400-meter pre-stressed girder bridge and a 4-lane connecting approach highway.",
      "The engineering challenge involved mapping soft riverbed soil, planning massive concrete piers, and conducting precise level checks on the deck slabs. MK Srinidhi delivered accurate topographical surveys and civil engineering supervision from concept to deck paving.",
    ],
    statistics: [
      { value: "4-Lane", label: "Highway Configuration", icon: "building" },
      { value: "400 Metres", label: "Bridge Span Length", icon: "ruler" },
      { value: "15 Months", label: "Project Duration", icon: "calendar" },
      { value: "2024", label: "Completed", icon: "check" },
    ],
    details: [
      { label: "Location", value: "Tenkasi District, Tamil Nadu", icon: "location" },
      { label: "Timeline", value: "Nov 2023 - Present", icon: "calendar" },
      { label: "Client", value: "State PWD", icon: "user" },
      { label: "Project Type", value: "Infrastructure Development", icon: "type" },
      { label: "Status", value: "Completed", icon: "status" },
      { label: "Contract Type", value: "Government EPS Contract", icon: "contract" },
    ],
    services: [
      "Topographical Survey",
      "Piling Alignment Mapping",
      "Deformation Monitoring",
      "Highway Cross Section Leveling",
      "Quality Control Inspection",
    ],
    challenges: [
      "Severe soil variability across riverbank piers requiring custom foundation depth calculations.",
      "Conducting precision levelling measurements during seasonal water currents.",
      "Keeping approach road gradients within strict limits for heavy freight transport.",
    ],
    solutions: [
      "Conducted deep borehole drilling surveys and automated level checks.",
      "Utilized water-resistant GPS antennas fixed to safe river platforms.",
      "Advanced 3D surface scanning to layout precise gradient profiles before asphalt paving.",
    ],
    gallery: [
      infrastructureHeroImage,
      precision1Image,
      precision2Image,
      precision3Image,
      infrastructureGallery1Image,
    ],
    highlights: [
      { title: "Precision Surveying", description: "Sub-centimeter topographical mapping for girders.", icon: "precision" },
      { title: "Structural Excellence", description: "High-grade pre-stressed concrete spans.", icon: "quality" },
      { title: "Safety First", description: "Seismic-resistant bearing pads and robust crash barriers.", icon: "design" },
      { title: "Timely Delivery", description: "Delivered bridge spans ahead of flood seasons.", icon: "client" },
    ],
  },
  {
    id: 4,
    slug: "factory-warehouse-project",
    title: "Factory & Warehouse",
    category: "Industrial",
    tagline: "Industrial scale. Operational efficiency. Robust spaces custom-built for high-load workflows.",
    heroImage: homeIndustrialImage,
    location: "Sriperumbudur, Tamil Nadu",
    timeline: "Feb 2024 - Present",
    client: "Apex Manufacturing Ltd.",
    projectType: "Industrial Development",
    status: "Completed",
    overviewText: [
      "Industrial warehouse and manufacturing facility development with exact structural alignment. Located in the industrial manufacturing hub of Sriperumbudur, this project comprises a 60,000 sq.ft. clear-span fabrication shed and high-load capacity logistics warehousing.",
      "MK Srinidhi managed the industrial layout planning, utilizing 3D laser scanning to model overhead crane rails, steel gantries, and precision flat floors to support automated forklift operations.",
    ],
    statistics: [
      { value: "60,000 sq.ft.", label: "Clear Span Shed Area", icon: "ruler" },
      { value: "10 Tonne", label: "Overhead Crane Capacity", icon: "building" },
      { value: "12 Months", label: "Project Duration", icon: "calendar" },
      { value: "2025", label: "Completed", icon: "check" },
    ],
    details: [
      { label: "Location", value: "Sriperumbudur, Tamil Nadu", icon: "location" },
      { label: "Timeline", value: "Feb 2024 - Present", icon: "calendar" },
      { label: "Client", value: "Apex Manufacturing Ltd.", icon: "user" },
      { label: "Project Type", value: "Industrial Fabrication Facility", icon: "type" },
      { label: "Status", value: "Completed", icon: "status" },
      { label: "Architectural Style", value: "Pre-Engineered Metal Building", icon: "style" },
    ],
    services: [
      "Foundation Base Setting",
      "Steel Portal Frame Erection",
      "Overhead Crane Alignment",
      "Super-flat Concrete Paving",
      "Stormwater System Layout",
    ],
    challenges: [
      "Achieving absolute level tolerances on concrete floors for automated guided vehicles (AGVs).",
      "Precisely aligning overhead crane rails across a 150-meter run to prevent wear and tear.",
      "Integrating heavy power ventilation and transformer stations into the shed envelope.",
    ],
    solutions: [
      "Laser screed concrete casting with continuous digital floor flatness (FF) testing.",
      "Total station radial tracking on anchor bolt grids during structural steel assembly.",
      "Coordinated MEP layout models using integrated BIM clashes detection software.",
    ],
    gallery: [
      homeIndustrialImage,
      industrial1Image,
      industrial2Image,
      industrial3Image,
      industrialGallery1Image,
      industrialGallery2Image,
    ],
    highlights: [
      { title: "Precision Alignment", description: "Overhead crane rails aligned to millimeter level.", icon: "precision" },
      { title: "Quality Assured", description: "Wear-resistant fiber concrete flooring with flat tolerances.", icon: "quality" },
      { title: "Safety First", description: "Integrated automated fire suppression and exit corridors.", icon: "design" },
      { title: "Advanced Technology", description: "Full digital 3D model handover for industrial facility management.", icon: "tech" },
    ],
  },
  {
    id: 5,
    slug: "precision-land-survey",
    title: "Precision Land Survey for Infrastructure",
    category: "Surveying Projects",
    tagline: "Pinpoint accuracy. Evolutionary mapping. The essential foundation for civil engineering success.",
    heroImage: precision2Image,
    location: "Tenkasi, Tamil Nadu",
    timeline: "Jan 2024 - Feb 2024",
    client: "Green infra Developers",
    projectType: "Topographical Surveying",
    status: "Completed",
    overviewText: [
      "Detailed land surveying for a major infrastructure project, ensuring accurate route planning and boundary demarcation.",
      "Utilizing GPS total stations and RTK GNSS receivers, our team gathered high-precision topographic details across 150 acres of undulating terrain.",
    ],
    statistics: [
      { value: "150 Acres", label: "Surveyed Land Area", icon: "ruler" },
      { value: "2000+", label: "Precision Data Points", icon: "building" },
      { value: "4 Weeks", label: "Project Duration", icon: "calendar" },
      { value: "2024", label: "Completed", icon: "check" },
    ],
    details: [
      { label: "Location", value: "Tenkasi, Tamil Nadu", icon: "location" },
      { label: "Timeline", value: "Jan 2024 - Feb 2024", icon: "calendar" },
      { label: "Client", value: "Green infra Developers", icon: "user" },
      { label: "Project Type", value: "Topographical Surveying", icon: "type" },
      { label: "Status", value: "Completed", icon: "status" },
    ],
    services: [
      "Boundary Demarcation",
      "Topographical Contouring",
      "GPS/RTK Survey Control",
      "Digital Terrain Modeling (DTM)",
    ],
    challenges: [
      "Steep elevations and heavy foliage blocks affecting GPS satellite visibility.",
      "Resolving historical land registry maps against existing physical boundaries.",
    ],
    solutions: [
      "Incorporated traditional optical total stations under heavy canopy covers.",
      "Coordinated with municipal land surveyors to resolve boundary offsets.",
    ],
    gallery: [
      precision2Image,
      precision1Image,
      precision3Image,
    ],
    highlights: [
      { title: "Precision Mapping", description: "Millimeter-level contour data.", icon: "precision" },
      { title: "Advanced Technology", description: "RTK GNSS and automated total station logs.", icon: "tech" },
      { title: "Quality Assured", description: "Double-checked control loops with zero loop errors.", icon: "quality" },
      { title: "Client Focused", description: "Delivered CAD drafts formatted to the design team's tools.", icon: "client" },
    ],
  },
  {
    id: 6,
    slug: "custom-villa-design",
    title: "Custom Villa Design & Build",
    category: "Residential",
    tagline: "Elegant spaces. Customized lifestyle. Quality construction tailored to your specific aspirations.",
    heroImage: homeModern2Image,
    location: "Tenkasi District, Tamil Nadu",
    timeline: "Sep 2024 - Present",
    client: "Private Client",
    projectType: "Residential Construction",
    status: "Ongoing",
    overviewText: [
      "Design and construction of a bespoke luxury villa, incorporating client-specific architectural preferences and traditional Vastu-shastra alignments.",
      "The project is structured in phases: foundation, frame erection, brickwork, plastering, interior layout, and landscaping.",
    ],
    statistics: [
      { value: "4,500 sq.ft.", label: "Villa Built Area", icon: "ruler" },
      { value: "2 Floors", label: "Building Height", icon: "building" },
      { value: "12 Months", label: "Project Duration", icon: "calendar" },
      { value: "Active", label: "Current Status", icon: "clock" },
    ],
    details: [
      { label: "Location", value: "Tenkasi District, Tamil Nadu", icon: "location" },
      { label: "Timeline", value: "Sep 2024 - Present", icon: "calendar" },
      { label: "Client", value: "Private Client", icon: "user" },
      { label: "Project Type", value: "Residential Construction", icon: "type" },
      { label: "Status", value: "Ongoing", icon: "status" },
      { label: "Architectural Style", value: "Modern Indian Villa", icon: "style" },
    ],
    services: [
      "Architectural Design & Vastu",
      "Reinforced Frame Construction",
      "Interior Space Layout",
      "Landscape Gardening",
    ],
    challenges: [
      "Integrating Vastu direction requirements while keeping modern energy flow and solar window designs.",
      "Sourcing natural stone highlights locally during region transport holidays.",
    ],
    solutions: [
      "Custom layout drawings balancing sun path models against local direction parameters.",
      "Secured alternative quarries in neighbouring districts to ensure steady supplies.",
    ],
    gallery: [
      homeModern2Image,
      homeModern1Image,
      homeModern3Image,
    ],
    highlights: [
      { title: "Modern Design", description: "Open-plan architecture with large vertical glass facade.", icon: "design" },
      { title: "Quality Assured", description: "Premium grade steel reinforcements and plastering.", icon: "quality" },
      { title: "Client Focused", description: "Bespoke modifications during plastering to suit layout requirements.", icon: "client" },
      { title: "Sustainable", description: "Rainwater harvesting pit and natural roof insulating tiles.", icon: "sustainable" },
    ],
  },
  {
    id: 7,
    slug: "topographical-layout-survey",
    title: "Topographical Layout Survey",
    category: "Surveying Projects",
    tagline: "Accurate contouring. Essential topographic details for master developers and layout planning.",
    heroImage: precision3Image,
    location: "Kadayanallur, Tamil Nadu",
    timeline: "Nov 2024 - Present",
    client: "Srinidhi Housing Layouts",
    projectType: "Topographical Surveying",
    status: "Ongoing",
    overviewText: [
      "Centimeter-level boundary marking and topographic mapping for a proposed residential housing layout in Kadayanallur.",
      "The survey will deliver precise contour coordinates, road centerline markings, and layout plan submissions to municipal layout approval boards.",
    ],
    statistics: [
      { value: "45 Acres", label: "Project Plot Area", icon: "ruler" },
      { value: "120 Plots", label: "Planned Subdivisions", icon: "building" },
      { value: "6 Weeks", label: "Project Duration", icon: "calendar" },
      { value: "Active", label: "Current Status", icon: "clock" },
    ],
    details: [
      { label: "Location", value: "Kadayanallur, Tamil Nadu", icon: "location" },
      { label: "Timeline", value: "Nov 2024 - Present", icon: "calendar" },
      { label: "Client", value: "Srinidhi Housing Layouts", icon: "user" },
      { label: "Project Type", value: "Topographical Surveying", icon: "type" },
      { label: "Status", value: "Ongoing", icon: "status" },
    ],
    services: [
      "Topographic Level Mapping",
      "Plot Layout Subdivision",
      "Road Centerline Survey",
      "CAD Land Plan Drawing",
    ],
    challenges: [
      "Boundary overlaps from older neighboring subdivisions requiring reconciliation.",
      "Setting control points across swampy terrain on the eastern block edge.",
    ],
    solutions: [
      "Conducted detailed survey research of historical land records and boundary measurements.",
      "Utilized lightweight carbon fiber tripod extensions to set markers stably.",
    ],
    gallery: [
      precision3Image,
      precision1Image,
      precision2Image,
    ],
    highlights: [
      { title: "Precision Mapping", description: "Centimeter-grade RTK survey.", icon: "precision" },
      { title: "Advanced Technology", description: "Use of Trimble total stations and multi-constellation GNSS.", icon: "tech" },
      { title: "Quality Assured", description: "Closed boundary loops checked against national coordinate grids.", icon: "quality" },
      { title: "Client Focused", description: "CAD layout sheets optimized for local government submission.", icon: "client" },
    ],
  },
];
