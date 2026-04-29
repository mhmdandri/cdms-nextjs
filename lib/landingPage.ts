import {
  BarChart3,
  ClipboardList,
  Clock,
  LogIn,
  Map,
  Package,
  Shield,
  TrendingUp,
  User,
  Zap,
} from "lucide-react";

export const features = [
  {
    icon: Package,
    title: "Real-Time Container Tracking",
    description:
      "Track every container's location, status, and movement history in real-time with out advanced tracking system.",
  },
  {
    icon: Map,
    title: "Yard Management System",
    description:
      "Visualize and optimize your yard layout with interactive grid-based management and automated slot allocation.",
  },
  {
    icon: LogIn,
    title: "Gate In / Gate Out Automation",
    description:
      "Streamline entry and exit operations with automated gate processing and digital documentation.",
  },
  {
    icon: ClipboardList,
    title: "Inventory Monitoring",
    description:
      "Real-time inventory visibility with automated alerts for capacity thresholds and container availability.",
  },
  {
    icon: BarChart3,
    title: "Report & Analytics",
    description:
      "Comprehensive reports and dashboards for data-driver decision making and operatinal insights.",
  },
  {
    icon: User,
    title: "User & Role Management",
    description:
      "Secure access control with customizable user roles and permission for team collaboration.",
  },
];

export const benefits = [
  {
    icon: Shield,
    title: "Reduce Operational Errors",
    description:
      "Eliminate manual data entry mistakes with automated tracking and validation.",
  },
  {
    icon: TrendingUp,
    title: "Improve Container Visibility",
    description:
      "Get complete visibility of all containers with real-time status updates.",
  },
  {
    icon: Zap,
    title: "Increase Yard Efficiency",
    description:
      "Optimize space utilization and reduce container retrieval time by up to 40%.",
  },
  {
    icon: Clock,
    title: "Save Time with Automation",
    description: "Automate routine tasks and reduce processing time by 60%.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Register Your Depot",
    description:
      "Set up your depot profile and configure zones, gates, and capacity settings.",
  },
  {
    number: "02",
    title: "Manage Containers & Yard",
    description:
      "Add containers, assign locations, and manage movements with our intuitive interface.",
  },
  {
    number: "03",
    title: "Track & Optimize Operations",
    description:
      "Monitor performance metrics and optimize operations with real-time analytics.",
  },
];

export const testimonials = [
  {
    quote:
      "CDMS transformed our operations. We've reduced container retrieval time by 45% and eliminated manual tracking errors completely.",
    author: "Michael Chen",
    role: "Operations Manager",
    company: "Global Logistics Inc.",
  },
  {
    quote:
      "The yard visualization feature is a game-changer. We can now manage 30% more containers in the same space with better efficiency.",
    author: "Sarah Williams",
    role: "Depot Supervisor",
    company: "Pacific Containers Ltd.",
  },
  {
    quote:
      "Best investment we've made. The ROI was clear within 3 months. Highly recommend for any container depot operation.",
    author: "Robert Taylor",
    role: "COO",
    company: "Maritime Solutions Group",
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "$299",
    period: "per month",
    features: [
      "Up to 500 containers",
      "Basic yard management",
      "Gate operations",
      "Standard reports",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$599",
    period: "per month",
    features: [
      "Up to 2,000 containers",
      "Advanced yard optimization",
      "Automated gate processing",
      "Custom reports & analytics",
      "Priority support",
      "API access",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited containers",
      "Multi-depot management",
      "White-label solution",
      "Advanced integrations",
      "Dedicated account manager",
      "24/7 phone support",
    ],
    highlighted: false,
  },
];
