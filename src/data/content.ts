import type { LucideIcon } from 'lucide-react'
import {
  Database,
  Globe2,
  Boxes,
  Gauge,
  BarChart3,
  Cloud,
  Code2,
  MapPinned,
  ShieldCheck,
  Workflow,
  Layers,
  Cpu,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Identity                                                          */
/* ------------------------------------------------------------------ */

export const profile = {
  name: 'Collins Anyanwu',
  firstName: 'Collins',
  lastName: 'Anyanwu',
  title: 'Database & GIS Administrator',
  subtitle: 'Geoscience & Exploration Data Management',
  roles: [
    'Database & GIS Administrator',
    'Enterprise Geodatabase Specialist',
    'Geoscience & Exploration Data',
    'Spatial ETL & Automation Engineer',
    'GIS & BI Solutions Architect',
  ],
  tagline: 'Turning spatial data into decisions that power millions.',
  availability: 'Open to Remote & International Opportunities',
  summary:
    "Database & GIS Administrator with 19+ years safeguarding the integrity, security, governance and accessibility of geological, spatial and operational datasets across the utility, oil & gas and geoscience sectors. A geologist by training (B.Tech Geology; Master's in GIS) with field-exploration experience, I administer enterprise geodatabases (PostgreSQL/PostGIS, SQL Server, Oracle Spatial) at 99.9% uptime, lead GIS platforms (ArcGIS Pro, ArcGIS Enterprise, QGIS, FME), and deliver the maps, dashboards and reporting tools that planning teams and executives rely on.",
  location: 'Open to Relocation',
}

export const contact = {
  email: 'collins.tochi@gmail.com',
  phone: '+23408062172134',
  phoneHref: '+23408062172134',
  location: 'Open to Relocation · Remote-ready',
  linkedin: 'https://linkedin.com/in/collinsanyanwu',
  linkedinLabel: 'linkedin.com/in/collinsanyanwu',
  github: 'https://github.com/collins-geodev',
  githubLabel: 'github.com/collins-geodev',
  githubUser: 'collins-geodev',
  resume: 'resume/Collins_Anyanwu_CV.pdf',
}

/* ------------------------------------------------------------------ */
/*  Headline metrics (animated counters)                              */
/* ------------------------------------------------------------------ */

export interface Stat {
  value: number
  suffix: string
  prefix?: string
  label: string
  icon: LucideIcon
}

export const heroStats: Stat[] = [
  { value: 19, suffix: '+', label: 'Years Experience', icon: Gauge },
  { value: 3800, suffix: '+ km', label: 'Network Managed', icon: MapPinned },
  { value: 1, suffix: 'M+', label: 'Customers Served', icon: Globe2 },
  { value: 20000, suffix: '+', label: 'Assets Governed', icon: Boxes },
]

export const impactStats: Stat[] = [
  { value: 19, suffix: '+', label: 'Years in GIS & Data', icon: Gauge },
  { value: 3800, suffix: '+ km', label: 'Distribution Network', icon: MapPinned },
  { value: 1, suffix: 'M+', label: 'Customers Served', icon: Globe2 },
  { value: 20641, suffix: '+', label: 'Assets Tracked', icon: Boxes },
  { value: 99.9, suffix: '%', label: 'Database Uptime', icon: ShieldCheck },
  { value: 23, suffix: '', label: 'Geospatial Layers', icon: Layers },
]

/* ------------------------------------------------------------------ */
/*  Core competencies                                                 */
/* ------------------------------------------------------------------ */

export const competencies: { label: string; icon: LucideIcon }[] = [
  { label: 'Enterprise Geodatabase Administration', icon: Database },
  { label: 'Data Governance, Integrity & Security', icon: ShieldCheck },
  { label: 'Exploration & Geological Data', icon: Globe2 },
  { label: 'Spatial ETL & Automation', icon: Workflow },
  { label: 'GIS Administration (ArcGIS / QGIS)', icon: MapPinned },
  { label: 'Dashboards & BI Reporting', icon: BarChart3 },
  { label: 'Data Standards & Validation Controls', icon: Layers },
  { label: 'Field Data Capture (Survey123 / GNSS)', icon: Cpu },
]

/* ------------------------------------------------------------------ */
/*  Skills                                                            */
/* ------------------------------------------------------------------ */

export interface SkillCategory {
  title: string
  icon: LucideIcon
  accent: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'GIS & Geospatial',
    icon: Globe2,
    accent: 'from-brand-cyan to-brand-teal',
    skills: [
      'ArcGIS Pro',
      'ArcGIS Enterprise',
      'ArcGIS Online',
      'QGIS',
      'ArcSDE',
      'Survey123',
      'FME (Safe Software)',
      'Google Earth Engine',
      'Remote Sensing & LiDAR',
      'GPS / GNSS',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    accent: 'from-brand-emerald to-brand-teal',
    skills: [
      'PostgreSQL / PostGIS',
      'SQL Server',
      'Oracle Spatial',
      'Security & Access Control',
      'Performance Tuning',
      'Migration',
    ],
  },
  {
    title: 'SQL & Scripting',
    icon: Code2,
    accent: 'from-brand-violet to-brand-indigo',
    skills: ['SQL', 'Python', 'ArcPy', 'GeoPandas', 'PyQGIS', 'Shapely', 'Pandas', 'R'],
  },
  {
    title: 'Reporting & BI',
    icon: BarChart3,
    accent: 'from-brand-sky to-brand-cyan',
    skills: [
      'Power BI',
      'Tableau',
      'ArcGIS Dashboards',
      'Power Query',
      'Power Pivot',
      'Advanced Excel / VBA',
      'Microsoft 365',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    accent: 'from-brand-indigo to-brand-violet',
    skills: ['AWS (S3, EC2, RDS)', 'Git / GitHub', 'Docker', 'CI/CD (GitHub Actions)', 'Vercel'],
  },
  {
    title: 'Web Mapping',
    icon: MapPinned,
    accent: 'from-brand-teal to-brand-sky',
    skills: ['React', 'Next.js', 'TypeScript', 'Leaflet.js', 'REST APIs', 'Supabase'],
  },
]

/* ------------------------------------------------------------------ */
/*  Projects                                                          */
/* ------------------------------------------------------------------ */

export type ProjectCategory =
  | 'GIS & Mapping'
  | 'Dashboards & BI'
  | 'AI & Productivity'
  | 'Python & Automation'

export type PreviewKind = 'qr' | 'asset' | 'idb' | 'generic'

export interface Metric {
  value: string
  label: string
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  flagship?: boolean
  featured?: boolean
  preview: PreviewKind
  tagline: string
  description: string
  tags: string[]
  metrics?: Metric[]
  features?: string[]
  liveUrl?: string
  repoUrl?: string
  accent: 'cyan' | 'violet' | 'emerald'
}

export const projects: Project[] = [
  {
    id: 'ie-smart-qr',
    title: 'IE Smart QR Asset Registry',
    category: 'GIS & Mapping',
    flagship: true,
    featured: true,
    preview: 'qr',
    accent: 'cyan',
    tagline: 'QR-powered field asset intelligence for a 1M+ customer utility',
    description:
      'Enterprise QR-powered asset registry for Ikeja Electric. Field teams scan QR tags on distribution and power transformers to instantly pull verified asset details, while command centres get real-time scan analytics and geospatial operational intelligence.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'React-Leaflet', 'QR', 'RBAC'],
    liveUrl: 'https://ie-smart-assets.vercel.app/dashboard',
    repoUrl: 'https://github.com/collins-geodev/ie-smart-assets',
    metrics: [
      { value: 'DT + PT', label: 'Asset classes' },
      { value: 'Real-time', label: 'Scan analytics' },
      { value: 'SSO', label: 'Secured access' },
    ],
    features: [
      'QR code scanning for DT & PT assets in the field',
      'GIS mapping of assets across the electrical network',
      'Real-time analytics dashboard for scan activity',
      'Public read-only lookup + restricted admin functions',
      'Field-officer mobile app (Android / iPhone)',
      'Command-centre operational intelligence',
    ],
  },
  {
    id: 'ie-asset-dashboard',
    title: 'IE Asset Dashboard',
    category: 'Dashboards & BI',
    featured: true,
    preview: 'asset',
    accent: 'violet',
    tagline: 'Single source of truth for 20,641+ distribution assets',
    description:
      'Enterprise asset-monitoring platform tracking 20,641+ distribution transformers, 21,560 network features and 16,127 upriser / feeder-pillar records across 23 geospatial data layers — with a natural-language Data Intelligence Assistant.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'React-Leaflet', 'Recharts', 'PostGIS'],
    liveUrl: 'https://ie-asset-dashboard.vercel.app/',
    repoUrl: 'https://github.com/Collins76/IE-Asset-Dashboard',
    metrics: [
      { value: '20,641+', label: 'Transformers' },
      { value: '23', label: 'Data layers' },
      { value: '9', label: 'Analytics views' },
    ],
    features: [
      'Executive summary, network, metering & maintenance views',
      'Geospatial DT map with multi-attribute filtering',
      'Capacity, ownership, metering & prepaid/postpaid analytics',
      'Natural-language Data Intelligence Assistant',
      'Sortable asset data table with CSV / PDF export',
    ],
  },
  {
    id: 'idb-v3',
    title: 'IDB 3.0 Assets Dashboard',
    category: 'Dashboards & BI',
    featured: true,
    preview: 'idb',
    accent: 'emerald',
    tagline: 'Field-enumeration monitoring across vendors & feeders',
    description:
      'Third-generation asset-tagging monitor tracking poles, distribution transformers, feeders and buildings across multiple vendors and 20 Shomolu feeders — now backed by a real-time Convex database with run-rate velocity, field-officer performance and pole-health reconciliation.',
    tags: ['JavaScript', 'Convex', 'Leaflet.js', 'Chart.js', 'AI Assistant'],
    liveUrl: 'https://idb-assets-dashboard-v3.vercel.app/',
    repoUrl: 'https://github.com/collins-geodev/IDB-Dashboard-v3',
    metrics: [
      { value: '20', label: 'Shomolu feeders' },
      { value: 'Run-rate', label: 'Velocity KPI' },
      { value: 'Vendor', label: 'Performance split' },
    ],
    features: [
      'Run-rate velocity, active users & completion-rate KPIs',
      'Geographical distribution map colour-coded by vendor',
      'Pole-type, field-issue & undertaking distributions',
      'DT performance & field-officer analysis table',
      'AI Data Assistant with Excel / PDF export',
    ],
  },
  {
    id: 'ie-asset-dashboard-v2',
    title: 'IE Asset Dashboard 2.0',
    category: 'Dashboards & BI',
    preview: 'asset',
    accent: 'cyan',
    tagline: 'Full-stack Next.js rebuild for 20,000+ transformers',
    description:
      'Full-stack Next.js rebuild of the asset-monitoring platform — richer analytics, faster server-rendered views and modernised UI for 20,000+ distribution transformers across the Ikeja Electric network.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Recharts'],
    liveUrl: 'https://ie-asset-dashboard-v2.vercel.app',
    repoUrl: 'https://github.com/Collins76/ie-asset-dashboard-v2',
  },
  {
    id: 'idb-v2',
    title: 'IDB 2.0 Assets Tracking Dashboard',
    category: 'Dashboards & BI',
    preview: 'idb',
    accent: 'violet',
    tagline: 'Second-generation field asset-tagging monitor',
    description:
      'Second-generation IDB assets-tracking monitor — the deployed predecessor to V3, tracking field enumeration of poles, transformers and buildings with vendor progress analytics and interactive mapping.',
    tags: ['JavaScript', 'Leaflet.js', 'Chart.js', 'HTML/CSS'],
    liveUrl: 'https://idb-monitor.vercel.app',
    repoUrl: 'https://github.com/Collins76/IDB-2.0-Assets-Tracking-Dashboard-V2',
  },
  {
    id: 'gis-kpis',
    title: 'GIS KPIs Dashboard',
    category: 'Dashboards & BI',
    preview: 'generic',
    accent: 'cyan',
    tagline: 'Real-time GIS team performance & productivity',
    description:
      'Real-time GIS team performance dashboard tracking operational KPIs, task-completion rates and field productivity metrics, with 250+ commits of active development.',
    tags: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Collins76/GIS-KPIs-Dashboard',
  },
  {
    id: 'nigeria-econ',
    title: 'Nigeria Economic Dashboard',
    category: 'Dashboards & BI',
    preview: 'generic',
    accent: 'emerald',
    tagline: '24+ macroeconomic indicators, one interactive view',
    description:
      'Interactive macroeconomic dashboard visualising 24+ indicators — GDP, inflation, FX rates, oil production, stock-market data and correlation analysis.',
    tags: ['React', 'TypeScript', 'Vite', 'Recharts'],
    liveUrl: 'https://nigeria-economic-dashboard.vercel.app',
    repoUrl: 'https://github.com/Collins76/Nigeria-Economic-Dashboard',
  },
  {
    id: 'dt-vandalization',
    title: 'DT Vandalization Tracker',
    category: 'Dashboards & BI',
    preview: 'generic',
    accent: 'violet',
    tagline: 'Power BI incident tracking with geographic trends',
    description:
      'Operational Power BI dashboard tracking distribution-transformer vandalization incidents with geographic mapping, status tracking and temporal trend analysis.',
    tags: ['Power BI', 'QGIS', 'DAX', 'Excel'],
    repoUrl: 'https://github.com/Collins76/Power-BI-Dashboard-for-Tracking-DT-Vandalization',
  },
  {
    id: 'upriser-inspections',
    title: 'Upriser Field Inspections',
    category: 'Dashboards & BI',
    preview: 'generic',
    accent: 'cyan',
    tagline: '8,513+ field inspections monitored across Lagos',
    description:
      'Power BI dashboard monitoring 8,513+ upriser field inspections across Lagos with geographic mapping, field-officer performance tracking and business-unit comparisons.',
    tags: ['Power BI', 'DAX', 'CSV', 'Survey123'],
    repoUrl: 'https://github.com/Collins76/DT-Uprisers-Feeder-Pillars-Power-BI-Project',
  },
  {
    id: 'feeder-extraction',
    title: 'Feeder Coordinate Extraction',
    category: 'Python & Automation',
    preview: 'generic',
    accent: 'emerald',
    tagline: 'ArcPy / PyQGIS automation for network geometry',
    description:
      'Python automation using ArcPy and PyQGIS to capture start, midpoint, intersection and end points from electrical-feeder polylines for network analysis.',
    tags: ['Python', 'ArcPy', 'PyQGIS', 'GeoPandas'],
  },
  {
    id: 'health-insights',
    title: 'Health Data Insights',
    category: 'Python & Automation',
    preview: 'generic',
    accent: 'violet',
    tagline: 'Data science meets public-health policy',
    description:
      'Nigerian health-data analysis with Jupyter notebooks, technical reports and policy recommendations — combining data science with actionable implementation roadmaps.',
    tags: ['Python', 'Jupyter', 'Pandas', 'Matplotlib'],
    repoUrl: 'https://github.com/Collins76/Heath_Data_Insights_Analyses',
  },
  {
    id: 'ecs-build-guardian',
    title: 'ECS Build-Agent Guardian',
    category: 'Python & Automation',
    preview: 'generic',
    accent: 'cyan',
    tagline: 'Hybrid-cloud CI/CD instance protection',
    description:
      'DevOps automation that monitors Azure DevOps agents running in Docker and prevents AWS ECS instance termination mid-build — protecting hybrid-cloud CI/CD pipelines with container-lifecycle heartbeats and spot-instance safeguards.',
    tags: ['Docker', 'AWS ECS', 'Azure DevOps', 'Python'],
    repoUrl: 'https://github.com/Collins76/ecsazrlc',
  },
  {
    id: 'prompt-genius',
    title: 'Prompt Genius',
    category: 'AI & Productivity',
    preview: 'generic',
    accent: 'cyan',
    tagline: 'AI prompt optimisation & management',
    description:
      'AI-powered prompt optimisation, evaluation and management tool with a prompt library, templates, context snippets and activity history.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI API'],
    liveUrl: 'https://prompt-genius-two.vercel.app',
    repoUrl: 'https://github.com/Collins76/prompt-genius',
  },
  {
    id: 'cv-expert',
    title: 'CV Expert AI',
    category: 'AI & Productivity',
    preview: 'generic',
    accent: 'emerald',
    tagline: 'ATS-aware resume analyzer & career optimizer',
    description:
      'AI-powered resume analyzer that scores CVs, surfaces improvement opportunities and tailors content for ATS screening systems — in an animated dark-theme interface.',
    tags: ['JavaScript', 'AI APIs', 'HTML/CSS'],
    liveUrl: 'https://cv-expert-ai.vercel.app',
    repoUrl: 'https://github.com/Collins76/cv-expert-ai',
  },
  {
    id: 'cv-genius',
    title: 'CV Genius',
    category: 'AI & Productivity',
    preview: 'generic',
    accent: 'violet',
    tagline: 'AI-assisted CV builder & optimizer',
    description:
      'AI-assisted CV builder and optimizer that helps craft, structure and refine professional resumes with intelligent content suggestions.',
    tags: ['TypeScript', 'Next.js', 'AI APIs'],
    liveUrl: 'https://cv-genius-beta.vercel.app',
    repoUrl: 'https://github.com/Collins76/cv_genius',
  },
  {
    id: 'nexus-calc',
    title: 'Nexus Calculator',
    category: 'AI & Productivity',
    preview: 'generic',
    accent: 'violet',
    tagline: 'Voice-enabled smart calculator with 10 themes',
    description:
      'Smart AI-powered calculator with currency & metric converters, hands-free voice commands, 10 switchable themes and a natural-language math assistant.',
    tags: ['JavaScript', 'Web Speech API', 'HTML/CSS'],
    liveUrl: 'https://nexus-calculator-ten.vercel.app',
    repoUrl: 'https://github.com/collins-geodev/nexus-calculator',
  },
  {
    id: 'scientific-calculator',
    title: 'Scientific Calculator',
    category: 'AI & Productivity',
    preview: 'generic',
    accent: 'emerald',
    tagline: 'Full-function scientific computing in the browser',
    description:
      'Feature-rich scientific calculator covering trigonometric, logarithmic and exponential functions with a clean, responsive TypeScript interface.',
    tags: ['TypeScript', 'React', 'HTML/CSS'],
    liveUrl: 'https://scientific-calculator-three-psi.vercel.app',
    repoUrl: 'https://github.com/Collins76/scientific-calculator',
  },
]

export const projectFilters: (ProjectCategory | 'All')[] = [
  'All',
  'GIS & Mapping',
  'Dashboards & BI',
  'AI & Productivity',
  'Python & Automation',
]

/* ------------------------------------------------------------------ */
/*  Experience                                                        */
/* ------------------------------------------------------------------ */

export interface Role {
  title: string
  company: string
  location: string
  period: string
  current?: boolean
  note: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: 'GIS Coordinator',
    company: 'Ikeja Electric',
    location: 'Lagos, Nigeria',
    period: 'Nov 2017 — Present',
    current: true,
    note: "Nigeria's largest electricity distributor",
    points: [
      'Own the integrity, security and accessibility of the enterprise geospatial database underpinning a 3,800+ km distribution network serving 1M+ customers — setting the data standards, automated validation rules and QA workflows that safeguard accuracy across 23 spatial layers.',
      'Administer the PostGIS-backed asset-management platform used as the single source of truth for 20,000+ assets, with role-based access control and single sign-on protecting sensitive operational data.',
      'Engineered spatial ETL pipelines (Python / ArcPy, GeoPandas, FME) integrating SCADA, billing and field-capture data with automated validation — eliminating 67% of manual data-processing effort.',
      'Deliver maps, dashboards and reporting tools (ArcGIS Dashboards, Power BI) for executives and planning teams; real-time outage dashboards cut mean incident-response time by 40%.',
      'Rolled out Esri Survey123 digital field capture across 8,500+ inspections — 45% faster collection, with paper transcription errors eliminated at source.',
    ],
  },
  {
    title: 'GIS / Data Engineering Manager',
    company: 'PoloSoft Technologies',
    location: 'Lagos, Nigeria',
    period: 'Sep 2016 — Oct 2017',
    note: 'Utility & infrastructure consultancy',
    points: [
      'Directed a team of 8 GIS professionals across concurrent Agile project streams, delivering geospatial solutions on schedule for utility and infrastructure clients across West Africa.',
      'Architected Tableau and Power BI integrations that let client stakeholders analyse spatial data alongside operational metrics for faster decisions.',
      'Designed cloud-based ETL pipelines that scaled large-volume geospatial data processing and warehousing for enterprise clients.',
      'Built team capability through structured training in GIS technologies and database management, raising delivery quality.',
    ],
  },
  {
    title: 'GIS / Database Specialist',
    company: 'SpatialMatrix Ltd',
    location: 'Lagos, Nigeria',
    period: 'Oct 2012 — Aug 2016',
    note: 'Oil & gas and infrastructure clients',
    points: [
      'Migrated and administered enterprise PostgreSQL/PostGIS databases for oil & gas and infrastructure clients, sustaining 99.9% uptime across mission-critical production environments.',
      'Optimised complex spatial SQL queries and indexing strategies, boosting database performance by 50%.',
      'Delivered interactive dashboards, spatial analytics, cartographic production and database architecture that turned raw geological and spatial data into decision-ready insight.',
    ],
  },
  {
    title: 'Geologist',
    company: 'Earth-Source Hydrocarbon',
    location: 'Nigeria',
    period: 'Jun 2010 — Aug 2012',
    note: 'Hydrocarbon exploration',
    points: [
      'Led geological field surveys and GPS-based data collection for hydrocarbon exploration, producing validated datasets that underpinned resource estimation and prospect appraisal.',
      'Produced structural and stratigraphic maps that guided drilling-target selection and reserve evaluation.',
      'Integrated geological field data into ArcGIS for spatial analysis and mapping of prospective zones.',
    ],
  },
  {
    title: 'GIS Technician',
    company: 'Spatial Technologies Limited',
    location: 'Nigeria',
    period: 'Jan 2005 — May 2010',
    note: 'Telecom & infrastructure mapping',
    points: [
      'Built and maintained ETL pipelines for spatial data ingestion, transformation and quality assurance, delivering analysis-ready datasets.',
      'Managed GPS/GNSS field data-collection campaigns and post-processing for large-scale mapping; supported geodatabase maintenance, migration and topology validation.',
      'Performed network, proximity and spatial-modelling analyses that informed planning across telecom and infrastructure projects.',
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Education & certifications                                        */
/* ------------------------------------------------------------------ */

export const education = [
  {
    degree: "Master's Degree, Geographic Information Systems",
    school: 'University of Lagos, Nigeria',
  },
  {
    degree: 'Bachelor of Technology (B.Tech), Geology',
    school: 'Federal University of Technology, Owerri, Nigeria',
  },
]

export const certifications = [
  { name: 'Python & SQL for Data Science', issuer: 'Edureka', year: '2024' },
  { name: 'Tableau for Data Visualization', issuer: 'Edureka', year: '2024' },
  {
    name: 'Big Data, Power Query, Power Pivot & VBA',
    issuer: 'UrBizEdge',
    year: '2022',
  },
  { name: 'GISP Certification', issuer: 'GISCI', year: 'In Progress' },
]

/* ------------------------------------------------------------------ */
/*  Live field-data-collection form (ArcGIS Survey123)                */
/* ------------------------------------------------------------------ */

export const survey = {
  itemId: 'ce6c0c1fe225452585955407984735da',
  title: 'IE LT Network Survey',
  category: 'Field Data Capture',
  tagline: 'Live Survey123 form for low-tension network capture',
  description:
    'The production form field crews run at the pole. Officer and network details, pole ' +
    'identification, condition grading and conductor sizing are captured across four ' +
    'validated pages, with a GPS fix and photo evidence attached before the crew moves ' +
    'on — straight into the enterprise geodatabase behind the dashboards above.',
  /** Survey123 chrome stripped so the form sits inside the site's own frame. */
  hide: 'navbar,header,description,footer',
  metrics: [
    { value: '4', label: 'Guided pages' },
    { value: '8,500+', label: 'Inspections' },
    { value: '45%', label: 'Faster capture' },
  ],
  features: [
    'GPS fix captured at the pole',
    'Photo evidence from any device',
    'Cascading BU / feeder / DT pickers',
    'Required fields gate each page',
    'Offline capture, syncs on reconnect',
    'Writes to the enterprise geodatabase',
  ],
  tags: ['ArcGIS Survey123', 'ArcGIS Online', 'Feature Services', 'Geodatabase', 'Field Ops'],
  /** Origins the embedded web form may post resize messages from. */
  allowedOrigins: ['https://survey123.arcgis.app', 'https://survey123.arcgis.com'],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Survey', href: '#survey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
