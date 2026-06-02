// src/lib/cvData.ts

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Product {
  name: string;
  type: "Theme" | "Plugin";
  description: string;
  platform: "ThemeForest" | "CodeCanyon";
  links: {
    item?: string;
    mobile?: string;
  };
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
  type: "WordPress" | "Full-Stack" | "Custom Theme" | "WooCommerce";
  features?: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export const personalInfo = {
  name: "Arslan Ejaz",
  title: "Full Stack Software Developer",
  tagline: "Building High-Performance Web Ecosystems & Advanced AI Automations",
  email: "me.arslanejaz@gmail.com",
  phone: "+92 300 4254863",
  location: "Lahore · Toronto · London",
  linkedin: "https://linkedin.com/in/arslanejzmalik",
  github: "https://github.com/arslanejzmalik",
  summary:
    "Full Stack Software Developer specialising in WordPress, Laravel, JavaScript frameworks (Next.js, React, Node.js), and AI-powered workflow automation (n8n, Make.com, Zapier). Building enterprise-grade digital experiences that scale.",
};

export const productsData: Product[] = [
  {
    name: "Workreap",
    type: "Theme",
    description:
      "A highly advanced freelance marketplace WordPress theme facilitating comprehensive employer and freelancer business workflows, secure milestone payments, and proposal bidding structures.",
    platform: "ThemeForest",
    links: {
      item: "https://themeforest.net/item/workreap-freelance-marketplace-wordpress-theme/23712454",
      mobile:
        "https://codecanyon.net/item/workreap-react-native-android-ios-mobile-app/26815331",
    },
  },
  {
    name: "Taskbot",
    type: "Plugin",
    description:
      "An elegant micro-job and service-selling gig marketplace WordPress plugin supporting custom tax structures, escrow systems, and advanced task filtering for professional task ecosystems.",
    platform: "CodeCanyon",
    links: {
      item: "https://codecanyon.net/item/taskbot-service-marketplace-wordpress-plugin/35368383",
    },
  },
  {
    name: "Servento",
    type: "Plugin",
    description:
      "A comprehensive service provider finder directory and business listing WordPress plugin featuring real-time availability booking, review systems, and dynamic service search filters.",
    platform: "CodeCanyon",
    links: {
      item: "https://codecanyon.net/item/servento-service-providers-directory-wordpress-plugin/39561002",
      mobile:
        "https://codecanyon.net/item/servento-flutter-android-ios-mobile-app/42223849",
    },
  },
  {
    name: "Tuturn",
    type: "Plugin",
    description:
      "An interactive, feature-rich tutor marketplace and e-learning find-a-tutor WordPress plugin tailored for schools, tuition centers, and independent teachers with advanced scheduling mechanisms.",
    platform: "CodeCanyon",
    links: {
      item: "https://codecanyon.net/item/tuturn-tutor-marketplace-wordpress-plugin/40541785",
    },
  },
  {
    name: "Journalo",
    type: "Plugin",
    description:
      "A specialized journal management and peer-review system plugin developed to regulate academic publication flows, submission review pipelines, and reviewer scoring rubrics.",
    platform: "CodeCanyon",
    links: {
      item: "https://codecanyon.net/item/journalo-academic-journal-management-wordpress-plugin/45229012",
    },
  },
];

export const projectsData: Project[] = [
  {
    name: "CarbonHalo",
    description:
      "A futuristic environmental technology platform focusing on carbon offset calculators, green credentials tracking, and eco-auditing workflows with real-time analytics dashboards.",
    tech: ["WordPress", "Custom Plugin", "API Integration", "React", "Tailwind CSS"],
    image: "/images/carbonhalo.webp",
    type: "Custom Theme",
    features: [
      "Interactive carbon calculator",
      "Automated PDF certificate generation",
      "Multi-tier subscription billing",
      "Lighthouse Score: 98/100",
    ],
  },
  {
    name: "Boss Tab",
    description:
      "A premium hospitality management and digital menu interface offering direct POS synching, table order systems, and rapid load speed optimization for high-density restaurants.",
    tech: ["WordPress", "WooCommerce Engine", "POS REST API", "Vue.js", "Tailwind CSS"],
    image: "/images/bosstab.webp",
    type: "WooCommerce",
    features: [
      "Table QR ordering mechanism",
      "Dynamic receipt printing synch",
      "Real-time kitchen display syncing",
      "Optimized Web Vitals",
    ],
  },
  {
    name: "Custom Packaging Lane",
    description:
      "A leading international B2B e-commerce platform for custom packaging, featuring high-fidelity custom design request tools, complex quoting engines, and high-frequency bulk discount logic.",
    tech: [
      "WordPress Core",
      "WooCommerce Customization",
      "ACF Pro JSON",
      "Custom Quoting Engine",
      "Redis Cache",
    ],
    image: "/images/cpl.webp",
    type: "WooCommerce",
    features: [
      "Multi-variable dynamic pricing matrix",
      "Bulk ordering quoting flow",
      "Custom SVG mockup visualizer integration",
      "Drastically reduced page load to 1.2s",
    ],
  },
  {
    name: "Madco",
    description:
      "A high-performance brand consultancy portal with sleek editorial layout designs, fluid interactive case study sections, and complex scroll-driven visual narratives.",
    tech: ["WordPress", "Custom Theme", "GSAP Animations", "Lenis Scroll", "Tailwind CSS"],
    image: "/images/madco.webp",
    type: "Custom Theme",
    features: [
      "Awwwards-style horizontal web sections",
      "Sleek canvas mouse hover distortion",
      "Fluid page transitions",
      "Lighthouse Performance: 99",
    ],
  },
  {
    name: "Hellerbass",
    description:
      "An elegant, high-end design showroom website built with meticulous attention to detail, showing off furniture design portfolios and custom manufacturer booking frameworks.",
    tech: ["WordPress Core", "ACF Blocks", "Tailwind CSS", "Framer Motion", "Object Cache"],
    image: "/images/hellerbass.webp",
    type: "WordPress",
    features: [
      "Ultra-minimalist editorial UI",
      "Meticulous Figma-to-WordPress build",
      "Cloudflare full-page caching system",
      "Fully responsive design grid",
    ],
  },
  {
    name: "Pantry Life",
    description:
      "A modern culinary booking and healthy lifestyle e-commerce portal integrated with custom recipe calculators, dynamic meal planners, and recurring delivery structures.",
    tech: [
      "WordPress",
      "WooCommerce Subscriptions",
      "Custom AJAX Filters",
      "Tailwind CSS",
      "WP Query Engine",
    ],
    image: "/images/pantrylife.webp",
    type: "WooCommerce",
    features: [
      "Dynamic weekly meal selector",
      "Subscription-based checkout logic",
      "AJAX-powered instant recipe filtering",
      "Custom Gutenberg blocks",
    ],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Sargodha",
    period: "Graduated",
    icon: "GraduationCap",
  },
  {
    degree: "F.Sc (Pre-Engineering)",
    school: "Govt. Islamia College Civil Lines",
    period: "Completed",
    icon: "BookOpen",
  },
  {
    degree: "Matriculation (Science)",
    school: "The Nation School",
    period: "Completed",
    icon: "Award",
  },
];

export const certificationsData = [
  {
    title: "Certified n8n Workflow Automation Engineer",
    issuer: "n8n Academy",
    description:
      "Expertise in designing complex workflow automations, custom API requests, webhook endpoints, error routing systems, and AI agent nodes.",
    date: "2025",
  },
  {
    title: "Certified Make.com Integration Specialist",
    issuer: "Make Academy",
    description:
      "Expertise in building visual integration scenarios, custom apps, complex filters, variables handling, data parsing, and high-frequency synchronizations.",
    date: "2025",
  },
  {
    title: "Expert WordPress Core & Plugin Architect",
    issuer: "Amentotech Development Labs",
    description:
      "Specialized in advanced custom theme/plugin architectures, custom taxonomies, meta boxes, hooks, actions, filters, and Gutenberg blocks.",
    date: "2021",
  },
  {
    title: "Core Web Vitals & Web Performance Engineer",
    issuer: "Salsoft Tech Performance Division",
    description:
      "Specialized in caching systems (Redis, Cloudflare, Object Cache), database optimization, render blocking minimization, and asset critical delivery.",
    date: "2024",
  },
  {
    title: "Advanced REST API & Headless WP Integration",
    issuer: "TxLabz Engineering",
    description:
      "Specialized in designing secure REST API endpoints, routing patterns, JWT authentication, and syncing custom WordPress setups with mobile applications.",
    date: "2023",
  },
];
