import serviceLandSurveying from "@/assets/images/service_land_surveying.png";
import serviceTopographical from "@/assets/images/service_topographical.png";
import serviceConstructionSurveying from "@/assets/images/service_construction_surveying.png";
import serviceMeasuredBuilding from "@/assets/images/service_measured_building.png";
import serviceCivilEngineering from "@/assets/images/service_civil_engineering.png";
import serviceSiteEngineering from "@/assets/images/service_site_engineering.png";
import aboutHeroImage from "@/assets/images/about_hero.png";
import projectsHeroImage from "@/assets/images/projects_hero.png";
import precision1Image from "@/assets/images/precision1.png";
import precision2Image from "@/assets/images/precision2.png";
import precision3Image from "@/assets/images/precision3.png";
import downtown1Image from "@/assets/images/downtown1.png";
import downtown2Image from "@/assets/images/downtown2.png";
import surveyingAboutImage from "@/assets/images/surveying_about_image.png";
import projectPrecisionImage from "@/assets/images/project_precision.png";
import heritage1Image from "@/assets/images/heritage1.png";
import industrial1Image from "@/assets/images/industrial1.png";
import industrial2Image from "@/assets/images/industrial2.png";
import industrial3Image from "@/assets/images/industrial3.png";
import homeAboutImage from "@/assets/images/home_about.png";

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: "accuracy" | "compliance" | "delivery" | "expert" | "mapping" | "monitoring" | "data" | "insight";
}

export interface ServiceValueProp {
  title: string;
  description: string;
  icon: "trust" | "decision" | "compliance";
}

export interface ServiceEquipment {
  name: string;
  description: string;
  image: string;
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
  icon: "consultation" | "field" | "processing" | "reporting" | "support";
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  benefits: ServiceBenefit[];
  ctaCard: {
    heading: string;
    subheading: string;
  };
  valueProps: ServiceValueProp[];
  offerings: string[];
  equipment: ServiceEquipment[];
  processTitle: string;
  process: ServiceProcessStep[];
  applications: string[];
  deliverables: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  ctaBanner: {
    title: string;
    description: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    slug: "land-surveying-plot-marking",
    title: "Land Surveying & Plot Marking",
    category: "Surveying Services",
    tagline: "Accurate measurements. Reliable data. Stronger foundations.",
    description: "We deliver precise land surveying and plot marking services using advanced technology and industry expertise, ensuring your project starts on the right ground.",
    heroImage: serviceLandSurveying,
    benefits: [
      { title: "High Accuracy", description: "Reliable & precise measurements.", icon: "accuracy" },
      { title: "Legal Compliance", description: "Reports aligned with regulations.", icon: "compliance" },
      { title: "Timely Delivery", description: "On-time results for smooth planning.", icon: "delivery" },
      { title: "Expert Surveyors", description: "Skilled professionals with rich experience.", icon: "expert" },
    ],
    ctaCard: {
      heading: "Need Accurate Survey Data for Your Project?",
      subheading: "Talk to our experts today.",
    },
    valueProps: [
      { title: "Precision You Can Trust", description: "We use advanced total stations and modern surveying techniques to ensure unmatched accuracy in every measurement.", icon: "trust" },
      { title: "Data That Drives Decisions", description: "From boundary identification to topographic mapping, we provide clear, actionable data for confident planning.", icon: "decision" },
      { title: "Built for Compliance", description: "Our surveys and reports are thorough, detailed, and legally compliant, giving you peace of mind.", icon: "compliance" },
    ],
    offerings: [
      "Total Station Surveys for precise measurements",
      "Layout Marking for construction sites",
      "Boundary Identification and demarcation",
      "Topographical Mapping for detailed terrain analysis",
      "Property subdivision and consolidation surveys",
      "Official reports and documentation for legal and planning purposes",
    ],
    equipment: [
      { name: "Total Station", description: "High precision measurements.", image: precision1Image },
      { name: "GNSS / GPS", description: "Accurate positioning & data collection.", image: precision3Image },
      { name: "Auto Level", description: "Precise leveling & alignment.", image: precision2Image },
    ],
    processTitle: "Our Surveying Process",
    process: [
      { number: "01", title: "Consultation", description: "Understanding your project requirements and objectives.", icon: "consultation" },
      { number: "02", title: "Field Survey", description: "Collecting accurate data using advanced equipment.", icon: "field" },
      { number: "03", title: "Data Processing", description: "Analyzing and processing data with precision.", icon: "processing" },
      { number: "04", title: "Reporting", description: "Delivering detailed reports and maps for your use.", icon: "reporting" },
      { number: "05", title: "Project Support", description: "Ongoing support for smooth project execution.", icon: "support" },
    ],
    applications: [
      "Residential Developments",
      "Commercial Building Layouts",
      "Government Infrastructure Projects",
      "Agriculture Land Demarcation",
      "Industrial Estate Planning",
    ],
    deliverables: [
      "Boundary Demarcation Maps",
      "Topographical Survey CAD Sheets",
      "Acreage Certification Certificates",
      "Setting Out Coordinates Log",
    ],
    faqs: [
      { question: "What is land surveying?", answer: "Land surveying is the scientific technique of determining the terrestrial 3D positions of points and the distances and angles between them to establish map boundaries." },
      { question: "Why is a land survey required before construction?", answer: "It prevents legal boundary disputes, identifies terrain constraints, and provides accurate coordinates to align the structural foundations." },
      { question: "How long does a land survey take?", answer: "A typical residential plot marking takes 1 to 2 days, while large topographical surveys can range from a week to several weeks depending on site terrain." },
    ],
    relatedSlugs: ["topographical-survey", "construction-surveying", "setting-out"],
    ctaBanner: {
      title: "Ready to Start Your Project?",
      description: "Get accurate survey data and expert guidance from MK Srinidhi Surveyors and Builders Pvt. Ltd.",
    },
    seo: {
      title: "Land Surveying & Plot Marking Services | MK Srinidhi",
      description: "Accurate land surveying and boundary plot marking in Chennai and Tenkasi, Tamil Nadu. Trust MK Srinidhi for high accuracy and compliance.",
      keywords: "land surveying, plot marking, boundary survey, total station, Tenkasi, Tamil Nadu",
    },
  },
  {
    id: 2,
    slug: "topographical-survey",
    title: "Topographical Survey",
    category: "Surveying Services",
    tagline: "Detailed terrain mapping. Elevation accuracy. Planning-ready contour sheets.",
    description: "We map physical features, elevation points, and natural contours of land, creating clear 3D representations to empower engineers and architects.",
    heroImage: serviceTopographical,
    benefits: [
      { title: "Detailed Terrain Data", description: "Complete physical feature mapping.", icon: "mapping" },
      { title: "Accurate Elevation", description: "Centimeter-level contour lines.", icon: "accuracy" },
      { title: "Advanced Mapping", description: "Ready to load CAD layers.", icon: "data" },
      { title: "Planning Ready", description: "Supports structural & civil design.", icon: "expert" },
    ],
    ctaCard: {
      heading: "Planning a New Layout Development?",
      subheading: "Get accurate contour models today.",
    },
    valueProps: [
      { title: "Unmatched Terrain Detail", description: "Our mapping locates every tree, utility, contour shift, and structure on your site.", icon: "trust" },
      { title: "CAD & BIM Ready Formats", description: "Export contour data and digital terrain models directly formatted for structural planning software.", icon: "decision" },
      { title: "Site Drainage Optimization", description: "Understand water flows and slopes to engineer optimal stormwater systems.", icon: "compliance" },
    ],
    offerings: [
      "Contour mapping with close grid intervals",
      "Digital Terrain Modeling (DTM) and elevation datasets",
      "Natural and man-made physical features cataloging",
      "Utility mapping including overhead and surface structures",
      "Cross-section and profile layouts for road channels",
    ],
    equipment: [
      { name: "GNSS / GPS", description: "High-speed satellite positioning receiver.", image: precision3Image },
      { name: "Total Station", description: "Precision angles and distances checks.", image: precision1Image },
    ],
    processTitle: "Our Topographical Process",
    process: [
      { number: "01", title: "Site Walkthrough", description: "Evaluating vegetation, terrain access, and establishing control loops.", icon: "consultation" },
      { number: "02", title: "RTK GNSS Capture", description: "Rapid coordinate capture across open grid segments.", icon: "field" },
      { number: "03", title: "Total Station Fill-in", description: "Mapping details inside tree lines and shadows.", icon: "processing" },
      { number: "04", title: "Contour Interpolation", description: "Creating smooth 3D surfaces in CAD suites.", icon: "reporting" },
      { number: "05", title: "Review & Signoff", description: "Quality validation check of all contours.", icon: "support" },
    ],
    applications: [
      "Highway Alignment Engineering",
      "Urban Master Layout Design",
      "Drainage & Flood Management Studies",
      "Resort & Estate Infrastructure Development",
    ],
    deliverables: [
      "3D Digital Elevation Models (DEM)",
      "Detailed Contour CAD Plans",
      "Feature Inventory Spreadsheets",
      "Georeferenced Ortho-images",
    ],
    faqs: [
      { question: "What is a topographical survey?", answer: "A topographical survey maps the contours, elevation points, and physical features of a land parcel, including trees, buildings, roads, and utilities." },
      { question: "What is the difference between boundary and topo surveys?", answer: "Boundary surveys establish legal land limits, whereas topographical surveys capture the vertical contours and physical shapes inside the land." },
    ],
    relatedSlugs: ["land-surveying-plot-marking", "construction-surveying", "gis-geospatial"],
    ctaBanner: {
      title: "Need Reliable Topographical Data?",
      description: "Get accurate terrain contour mapping from MK Srinidhi Surveyors & Builders.",
    },
    seo: {
      title: "Topographical Surveying & Mapping | MK Srinidhi",
      description: "Get precise topographical contour mapping and digital terrain models. Certified surveying services in Tamil Nadu.",
      keywords: "topographical survey, contour mapping, digital terrain model, elevation mapping, Tamil Nadu",
    },
  },
  {
    id: 3,
    slug: "construction-surveying",
    title: "Construction Surveying",
    category: "Surveying Services",
    tagline: "Setting structural controls. Verifying vertical alignment. Delivering building layouts.",
    description: "From initial stakeout to final as-built surveys, we guide your contractors with sub-millimeter precision at every stage of construction.",
    heroImage: serviceConstructionSurveying,
    benefits: [
      { title: "Precise Setting Out", description: "Align foundations with design plans.", icon: "accuracy" },
      { title: "Reduced Errors", description: "Stop errors before casting concrete.", icon: "monitoring" },
      { title: "Continuous Monitoring", description: "Tracks shifts & vertical alignments.", icon: "compliance" },
      { title: "Site Expertise", description: "Experienced construction engineers.", icon: "expert" },
    ],
    ctaCard: {
      heading: "Ready to Layout Foundation Piles?",
      subheading: "Ensure alignment with building grids.",
    },
    valueProps: [
      { title: "Sub-millimeter Grid Accuracy", description: "We translate architectural coordinates into physical reference grids on site with absolute precision.", icon: "trust" },
      { title: "Structural Integrity Insurance", description: "Continuous vertical laser checks prevent leans or alignment issues in high-rise concrete structures.", icon: "decision" },
      { title: "Comprehensive As-Built Audits", description: "Provides exact coordinate verification files to authorities for compliance certificates.", icon: "compliance" },
    ],
    offerings: [
      "Primary control station establishment on site",
      "Foundation pile stakeout and level control",
      "Column grid marking on cast concrete slabs",
      "Vertical structural alignment checks",
      "As-built surveys for utilities and structure hangovers",
    ],
    equipment: [
      { name: "Total Station", description: "High accuracy coordinate layout tracking.", image: precision1Image },
      { name: "Digital Level", description: "Precision elevation transfer grids.", image: precision2Image },
    ],
    processTitle: "Our Construction Survey Process",
    process: [
      { number: "01", title: "CAD Plan Sync", description: "Analyzing design files to extract grid intersection coordinates.", icon: "consultation" },
      { number: "02", title: "Control Setup", description: "Establishing stable reference survey brackets around the property.", icon: "field" },
      { number: "03", title: "Grid Stakeout", description: "Demarcating columns, pilings, and utilities with physical markings.", icon: "processing" },
      { number: "04", title: "As-Built Checks", description: "Measuring completed structures to verify dimensional limits.", icon: "reporting" },
      { number: "05", title: "Log Handovers", description: "Supplying official setting-out reports to site supervisors.", icon: "support" },
    ],
    applications: [
      "Commercial High-Rise Concrete Framing",
      "Residential Apartments foundations Layout",
      "Industrial Plant Equipment setting out",
      "Stormwater Pipe Slopes aligning",
    ],
    deliverables: [
      "Setting-Out Signoff Certificates",
      "As-Built Deviation CAD Sheets",
      "Vertical Alignment Verification Files",
      "Site Level Control Logs",
    ],
    faqs: [
      { question: "What is construction surveying?", answer: "Construction surveying (also known as setting out) is the process of translating structural designs from paper blueprints onto the actual ground using physical markers." },
      { question: "Why is vertical alignment monitoring crucial?", answer: "It guarantees that columns are perfectly plumb, ensuring proper load transfer and preventing structural failures." },
    ],
    relatedSlugs: ["setting-out", "measured-building-survey", "site-engineering"],
    ctaBanner: {
      title: "Planning Foundation Work?",
      description: "Secure centimeter-grade building grid marking from MK Srinidhi Surveyors & Builders.",
    },
    seo: {
      title: "Construction Surveying & Setting Out | MK Srinidhi",
      description: "Ensure structural alignment with expert construction surveying, grid marking, and vertical plumb monitoring.",
      keywords: "construction survey, building alignment, pile layout, grid marking, site setting out",
    },
  },
  {
    id: 4,
    slug: "measured-building-survey",
    title: "Measured Building Survey",
    category: "Surveying Services",
    tagline: "Millimeter-level building data. Detailed floor layouts. Complete structural elevations.",
    description: "We provide highly accurate measured building plans, structural elevations, and interior sections of existing buildings to support retrofits, renovations, and lease mapping.",
    heroImage: serviceMeasuredBuilding,
    benefits: [
      { title: "Millimeter Accuracy", description: "Precision laser measurement grids.", icon: "accuracy" },
      { title: "BIM Integration", description: "Detailed 3D models for retrofits.", icon: "data" },
      { title: "Detailed Floor Plans", description: "Accurate interior spatial layouts.", icon: "mapping" },
      { title: "Asset Management", description: "Perfect records for facilities.", icon: "compliance" },
    ],
    ctaCard: {
      heading: "Planning an Architectural Renovation?",
      subheading: "Obtain detailed existing CAD drawings.",
    },
    valueProps: [
      { title: "Accurate Spatial Documentation", description: "Every wall, column, beam, door, and ceiling height is captured with millimeter precision.", icon: "trust" },
      { title: "Historical Restoration Data", description: "Detailed stone and structural molding records for heritage preservation.", icon: "decision" },
      { title: "Leasable Area Calculations", description: "Independent structural audit sheets matching regional area guidelines.", icon: "compliance" },
    ],
    offerings: [
      "Detailed floor layouts showing structural walls and columns",
      "Structural cross-section plans showing slab thicknesses",
      "Exterior elevation scans including cladding and windows",
      "Reflected ceiling plans mapping electrical and ducts",
    ],
    equipment: [
      { name: "3D Laser Scanner", description: "Captures millions of data points per second.", image: heritage1Image },
      { name: "Total Station", description: "Establishes baseline dimensions and control points.", image: precision1Image },
    ],
    processTitle: "Our Measured Survey Process",
    process: [
      { number: "01", title: "Baseline Survey", description: "Setting reference coordinates on each floor.", icon: "consultation" },
      { number: "02", title: "Laser Scanning", description: "Scanning rooms to generate 3D point clouds.", icon: "field" },
      { number: "03", title: "Data Stitching", description: "Registering multiple point clouds into a cohesive dataset.", icon: "processing" },
      { number: "04", title: "CAD Drafting", description: "Drafting layout plans, sections, and structural elevations.", icon: "reporting" },
      { number: "05", title: "Client Delivery", description: "Providing final drawing sheets to the design team.", icon: "support" },
    ],
    applications: [
      "Heritage Buildings Conservation",
      "Commercial Building Tenant Fit-outs",
      "Residential Renovation Additions",
      "Facility Management Audits",
    ],
    deliverables: [
      "High-Resolution 2D CAD Plans",
      "3D Revit BIM Models",
      "Exterior Elevation Drawings",
      "Point Cloud Datasets",
    ],
    faqs: [
      { question: "What is a measured building survey?", answer: "It is a detailed measurement of a building's interior layout, structural elements, and exterior elevations to create accurate structural plans." },
      { question: "Why is a laser scan better than manual tape measurements?", answer: "It captures complex structures, avoids human errors, and logs every feature in a complete 3D model." },
    ],
    relatedSlugs: ["construction-surveying", "topographical-survey", "gis-geospatial"],
    ctaBanner: {
      title: "Need Measured Floor Plans?",
      description: "Obtain precise CAD layouts of existing structures from MK Srinidhi Surveyors & Builders.",
    },
    seo: {
      title: "Measured Building Surveys & Floor Plans | MK Srinidhi",
      description: "Accurate measured building surveys, interior floor plans, and architectural elevation drawings in Tamil Nadu.",
      keywords: "measured building survey, floor plans, structural elevations, laser scanning, CAD drafting",
    },
  },
  {
    id: 5,
    slug: "setting-out",
    title: "Setting Out",
    category: "Surveying Services",
    tagline: "Translating plans to ground. Exact offset controls. Foundation grid alignment.",
    description: "Our setting out services mark the exact coordinates of design plans onto the ground, giving your excavation and foundation crews reliable reference points to work from.",
    heroImage: surveyingAboutImage,
    benefits: [
      { title: "Exact Grid Alignment", description: "Ensures foundations match coordinates.", icon: "accuracy" },
      { title: "Fast Site Execution", description: "Clear markings keep crews moving.", icon: "delivery" },
      { title: "Reduced Rework", description: "Avoid costly alignment mistakes.", icon: "monitoring" },
      { title: "Quality Verification", description: "Sub-centimeter setting verification.", icon: "compliance" },
    ],
    ctaCard: {
      heading: "Excavation Crew Arriving Soon?",
      subheading: "Set your pile positions now.",
    },
    valueProps: [
      { title: "Flawless Design Translation", description: "We ensure every design line is marked on site in accordance with official project layouts.", icon: "trust" },
      { title: "Sturdy Site Markers", description: "We use high-durability reference pegs and offset markers to prevent shifts during excavation.", icon: "decision" },
      { title: "Continuous Setting Audits", description: "Re-verifying control stations at regular intervals to maintain project coordinate integrity.", icon: "compliance" },
    ],
    offerings: [
      "Sewer and stormwater pipe alignment staking",
      "Foundation pile center positions demarcation",
      "Excavation boundary and depth control levels",
      "Structural steel anchor bolt alignment checks",
      "Offset markers for walls and site boundaries",
    ],
    equipment: [
      { name: "Total Station", description: "High precision setting and monitoring instrument.", image: precision1Image },
      { name: "GNSS / GPS Receiver", description: "Fast control station reference marks.", image: precision3Image },
    ],
    processTitle: "Our Setting Out Process",
    process: [
      { number: "01", title: "CAD Import", description: "Extracting reference points from approved blueprints.", icon: "consultation" },
      { number: "02", title: "Control Survey", description: "Verifying boundary marks before layout marking.", icon: "field" },
      { number: "03", title: "Peg Stakeout", description: "Driving stable coordinate pegs and reference boards on site.", icon: "processing" },
      { number: "04", title: "Offset Marking", description: "Adding offset marks to guide excavation machinery.", icon: "reporting" },
      { number: "05", title: "Levelling Signoff", description: "Transferring benchmark levels to the site supervisor.", icon: "support" },
    ],
    applications: [
      "Highway Alignment Paving",
      "Residential Villa Foundations",
      "Industrial Plant Frame Erection",
      "Utility Pipelines Grid Marking",
    ],
    deliverables: [
      "Signed Setting Out Log",
      "Control Benchmark Reference Map",
      "Elevation Transfer Logs",
      "Municipal Survey Compliance Form",
    ],
    faqs: [
      { question: "What is setting out?", answer: "Setting out is the process of transferring coordinates and levels from architectural designs onto physical site pegs to guide excavation and construction." },
      { question: "How long are site pegs reliable?", answer: "They should remain undisturbed during excavation; we install offset reference boards to easily re-verify coordinates if a peg is moved." },
    ],
    relatedSlugs: ["construction-surveying", "site-engineering", "civil-engineering"],
    ctaBanner: {
      title: "Preparing for Excavation?",
      description: "Get accurate setting out services from MK Srinidhi Surveyors & Builders.",
    },
    seo: {
      title: "Site Setting Out Services | MK Srinidhi",
      description: "Get precise setting out services for foundations, grids, roads, and utilities in Tamil Nadu.",
      keywords: "setting out, building layouts, site stakeout, coordinate alignment, foundation survey",
    },
  },
  {
    id: 6,
    slug: "civil-engineering",
    title: "Civil Engineering",
    category: "Engineering Services",
    tagline: "Structural design. Drainage planning. Durable public and private infrastructure.",
    description: "We provide comprehensive civil engineering design and consultancy services, ensuring structural safety, resource optimization, and compliance with national codes.",
    heroImage: serviceCivilEngineering,
    benefits: [
      { title: "Structural Stability", description: "Design checked against stress models.", icon: "accuracy" },
      { title: "Design Verification", description: "Meets PWD/NBF safety standards.", icon: "compliance" },
      { title: "Regulatory Compliance", description: "Ensures legal and building clearances.", icon: "expert" },
      { title: "Material Optimization", description: "Smart designs reduce material waste.", icon: "data" },
    ],
    ctaCard: {
      heading: "Designing a Residential Villa Development?",
      subheading: "Get certified structural designs.",
    },
    valueProps: [
      { title: "Code-Compliant Designs", description: "All structural and drainage plans comply with Indian Standard codes (IS Codes) and municipal guidelines.", icon: "trust" },
      { title: "Safety-First Approach", description: "Advanced structural analysis checks safety factors against wind loads, soil shifts, and seismic parameters.", icon: "decision" },
      { title: "Cost-Effective Civil Solutions", description: "Efficient structural layouts reduce concrete and steel reinforcement costs without sacrificing safety.", icon: "compliance" },
    ],
    offerings: [
      "Structural foundation and column frame design",
      "Stormwater drainage and culvert planning",
      "Pavement and concrete road design sheets",
      "Soil bearing capacity evaluation support",
      "MEP services layout coordination",
    ],
    equipment: [
      { name: "Structural Design Software", description: "FEA analysis software for load mapping.", image: industrial2Image },
      { name: "BIM Modeling Suites", description: "Revit modeling for coordinated civil works.", image: homeAboutImage },
    ],
    processTitle: "Our Civil Design Process",
    process: [
      { number: "01", title: "Briefing", description: "Aligning on architectural plans and client requirements.", icon: "consultation" },
      { number: "02", title: "Soil Analysis", description: "Reviewing soil tests to determine the appropriate foundation design.", icon: "field" },
      { number: "03", title: "Load Modeling", description: "Calculating dead, live, wind, and seismic loads.", icon: "processing" },
      { number: "04", title: "Detailed Drafting", description: "Generating reinforcement schedules and layout sheets.", icon: "reporting" },
      { number: "05", title: "Approval support", description: "Providing structural calculations for building approvals.", icon: "support" },
    ],
    applications: [
      "Apartment Reinforced Concrete Frames",
      "Commercial Complex Drainage Networks",
      "Private Layout Road Infrastructure",
      "Factory Foundation Base Design",
    ],
    deliverables: [
      "Structural Drawing Blueprints",
      "Reinforcement schedules (BBS sheets)",
      "Stormwater System Layout Sheets",
      "Structural Stability Certificate",
    ],
    faqs: [
      { question: "What services does civil engineering include?", answer: "We provide structural framing design, foundation design, stormwater drainage planning, and pavement layout consulting." },
      { question: "Do you supply structural stability certificates?", answer: "Yes, our designs are vetted by qualified structural engineers who issue official structural stability certificates for municipal approvals." },
    ],
    relatedSlugs: ["site-engineering", "construction-surveying", "setting-out"],
    ctaBanner: {
      title: "Need Civil Design Consultancy?",
      description: "Get robust structural designs from MK Srinidhi Surveyors & Builders.",
    },
    seo: {
      title: "Civil & Structural Engineering | MK Srinidhi",
      description: "Professional civil engineering design, structural stability calculations, and drainage design services in Tamil Nadu.",
      keywords: "civil engineering, structural design, foundation design, drainage planning, IS codes",
    },
  },
  {
    id: 7,
    slug: "site-engineering",
    title: "Site Engineering",
    category: "Engineering Services",
    tagline: "On-site quality control. Concrete checks. Coordinate inspection support.",
    description: "We supply experienced site engineers to supervise contractors, monitor construction quality, verify levels, and coordinate site works for smooth project delivery.",
    heroImage: serviceSiteEngineering,
    benefits: [
      { title: "Efficient Workflow", description: "Site coordination reduces delays.", icon: "delivery" },
      { title: "Quality Control", description: "Checks concrete, steel, and levels on-site.", icon: "compliance" },
      { title: "Immediate Adjustments", description: "Resolves deviations instantly.", icon: "monitoring" },
      { title: "Contractor Coordination", description: "Aligns works with project plans.", icon: "expert" },
    ],
    ctaCard: {
      heading: "Need On-Site Engineering Supervision?",
      subheading: "Ensure project specifications are met.",
    },
    valueProps: [
      { title: "Proactive Quality Control", description: "Continuous supervision ensures that concrete slumps, steel spacing, and elevations match structural blueprints.", icon: "trust" },
      { title: "Rapid Problem Resolution", description: "Immediate on-site fixes for layout changes, saving time and avoiding project delays.", icon: "decision" },
      { title: "Strict Schedule Adherence", description: "Coordinating subcontractors to ensure milestones are met on schedule.", icon: "compliance" },
    ],
    offerings: [
      "Concrete pour inspection and cube test logging",
      "Steel reinforcement layout checks before casting",
      "Subcontractor task coordination and progress reporting",
      "Material quality checks against delivery logs",
      "Site safety protocol and level checks",
    ],
    equipment: [
      { name: "Precision Auto Level", description: "Daily verification of concrete levels.", image: precision2Image },
      { name: "Total Station", description: "Aligning column positions dynamically.", image: precision1Image },
    ],
    processTitle: "Our Site Management Process",
    process: [
      { number: "01", title: "Briefing", description: "Reviewing schedules and subcontractor assignments.", icon: "consultation" },
      { number: "02", title: "Level Verification", description: "Checking setting-out marks before excavation.", icon: "field" },
      { number: "03", title: "Inspection Logs", description: "Reviewing reinforcement and service conduit layouts.", icon: "processing" },
      { number: "04", title: "Quality Signoff", description: "Approving concrete pours and tracking test logs.", icon: "reporting" },
      { number: "05", title: "Progress Reporting", description: "Delivering daily progress updates to project owners.", icon: "support" },
    ],
    applications: [
      "Commercial Building Concrete Castings",
      "Infrastructure Highway Segment Paving",
      "Industrial Warehouse Steel Erection",
      "Multi-Unit Residential Developments",
    ],
    deliverables: [
      "Daily Construction Quality Logs",
      "Concrete Compressive Strength Register",
      "Site Progress Reports",
      "Site Work Sign-off Sheets",
    ],
    faqs: [
      { question: "What does a site engineer do?", answer: "A site engineer coordinates works, verifies that contractor activities match project blueprints, monitors concrete/steel quality, and checks levels." },
      { question: "Why is site supervision necessary?", answer: "It ensures construction matches specifications, maintains quality standards, and helps prevent expensive reworks." },
    ],
    relatedSlugs: ["civil-engineering", "setting-out", "construction-surveying"],
    ctaBanner: {
      title: "Planning Active Site Works?",
      description: "Secure dedicated site engineering supervision from MK Srinidhi Surveyors & Builders.",
    },
    seo: {
      title: "Site Engineering & Supervision | MK Srinidhi",
      description: "Ensure quality construction with expert site engineers, concrete quality checks, and reinforcement inspections.",
      keywords: "site engineer, construction supervision, quality control, concrete testing, grid verification",
    },
  },
  {
    id: 8,
    slug: "gis-geospatial",
    title: "GIS & Geospatial",
    category: "Surveying Services",
    tagline: "Mapping datasets. Spatial data modeling. Insights for resource management.",
    description: "We combine remote sensing, coordinate data, and GIS platforms to deliver detailed geospatial maps, spatial databases, and resource plans to support regional planning.",
    heroImage: projectPrecisionImage,
    benefits: [
      { title: "Spatial Accuracy", description: "Georeferenced data matching global coordinate grids.", icon: "accuracy" },
      { title: "Data Visualization", description: "Clear digital layers showing site metrics.", icon: "mapping" },
      { title: "Advanced GIS Analysis", description: "Uncover patterns in resource distribution.", icon: "insight" },
      { title: "Actionable Insights", description: "Empowers planning decisions.", icon: "data" },
    ],
    ctaCard: {
      heading: "Managing a Large Infrastructure Asset?",
      subheading: "Create a spatial database today.",
    },
    valueProps: [
      { title: "Data-Driven Planning", description: "Integrate terrain features, utility lines, and borders into a single interactive GIS platform.", icon: "trust" },
      { title: "Georeferenced Accuracy", description: "Ensures CAD layouts align perfectly with satellite and regional coordinate systems.", icon: "decision" },
      { title: "Efficient Asset Management", description: "Identify maintenance needs, utility overlaps, and spatial trends over time.", icon: "compliance" },
    ],
    offerings: [
      "Drone mapping orthomosaic generation",
      "Digital spatial database creation and maintenance",
      "Asset mapping for utility networks",
      "Environmental buffer analyses and zoning maps",
      "CAD-to-GIS coordinate conversions",
    ],
    equipment: [
      { name: "GIS Platforms", description: "Advanced spatial data mapping software.", image: industrial3Image },
      { name: "Trimble GNSS RTK", description: "High-precision coordinate gathering.", image: precision3Image },
    ],
    processTitle: "Our Geospatial Process",
    process: [
      { number: "01", title: "Needs assessment", description: "Defining database attributes, area limits, and layers.", icon: "consultation" },
      { number: "02", title: "Field survey", description: "Gathering georeferenced coordinates on site.", icon: "field" },
      { number: "03", title: "Remote Sensing", description: "Processing satellite and drone images.", icon: "processing" },
      { number: "04", title: "Database build", description: "Integrating coordinates, attributes, and maps.", icon: "reporting" },
      { number: "05", title: "Dashboard delivery", description: "Providing client access to interactive GIS maps.", icon: "support" },
    ],
    applications: [
      "Municipal Asset Inspections",
      "Utility Pipeline Route Analysis",
      "Agriculture Soil Quality Mapping",
      "Infrastructure Development Planning",
    ],
    deliverables: [
      "Geodatabase files (Shapefiles/GeoJSON)",
      "Interactive Digital Web Maps",
      "High-Resolution Orthomosaics",
      "Spatial Analysis Reports",
    ],
    faqs: [
      { question: "What is GIS?", answer: "A Geographic Information System (GIS) is a system designed to capture, store, manipulate, analyze, manage, and present spatial or geographic data." },
      { question: "How does GIS benefit asset management?", answer: "It allows companies to easily track the locations, specifications, and maintenance histories of physical assets on a map." },
    ],
    relatedSlugs: ["topographical-survey", "land-surveying-plot-marking", "measured-building-survey"],
    ctaBanner: {
      title: "Need Spatial Mapping Solutions?",
      description: "Get advanced GIS database design from MK Srinidhi Surveyors & Builders.",
    },
    seo: {
      title: "GIS & Geospatial Analysis Services | MK Srinidhi",
      description: "Expert GIS mapping, drone orthomosaics, spatial analysis, and geographic database services in Tamil Nadu.",
      keywords: "GIS mapping, geospatial analysis, geodatabase, drone orthomosaics, asset mapping",
    },
  },
];
