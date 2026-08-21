import {
  Camera,
  Laptop,
  Network,
  Receipt,
  type LucideIcon,
} from "lucide-react";

export interface ServiceGroup {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  icon: LucideIcon;
  items: { title: string; description: string }[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "cctv",
    title: "CCTV Solutions",
    shortTitle: "CCTV",
    summary:
      "Sales, installation, configuration and repair for home and business security — including solar-powered CCTV for locations without reliable power.",
    icon: Camera,
    items: [
      {
        title: "CCTV Sales",
        description: "Genuine CCTV cameras, DVRs/NVRs and accessories from trusted brands.",
      },
      {
        title: "CCTV Installation",
        description: "Professional site survey, cabling and camera installation.",
      },
      {
        title: "CCTV Configuration",
        description: "DVR/NVR setup, mobile app linking and recording configuration.",
      },
      {
        title: "CCTV Repair",
        description: "Diagnosis and repair of faulty cameras, DVRs, NVRs and cabling.",
      },
      {
        title: "CCTV Maintenance",
        description: "Periodic checkups to keep your surveillance system running reliably.",
      },
      {
        title: "Remote Monitoring Setup",
        description: "View your cameras live from your phone, anywhere.",
      },
      {
        title: "Residential CCTV",
        description: "Security systems designed for homes and apartments.",
      },
      {
        title: "Commercial CCTV",
        description: "Scalable surveillance for shops, offices, warehouses and factories.",
      },
      {
        title: "Solar CCTV",
        description: "Solar-powered CCTV for remote sites, farms and locations without grid power.",
      },
    ],
  },
  {
    slug: "computers",
    title: "Computer & Laptop",
    shortTitle: "Computers & Laptops",
    summary:
      "Sales, repair and upgrades for laptops and desktops — for individuals, students, professionals and businesses.",
    icon: Laptop,
    items: [
      { title: "Laptop Sales", description: "New and configured laptops to match your budget and use case." },
      { title: "Laptop Repair", description: "Screen, keyboard, battery, motherboard and general repairs." },
      { title: "Desktop Sales", description: "Custom-built and branded desktop computers." },
      { title: "Desktop Repair", description: "Hardware diagnosis and repair for desktop PCs." },
      { title: "Windows Installation", description: "Fresh OS installation, licensing and driver setup." },
      { title: "Data Backup", description: "Safe backup and transfer of your important files and data." },
      { title: "Hardware Upgrade", description: "Performance upgrades to extend the life of your device." },
      { title: "SSD/RAM Upgrade", description: "Faster boot times and smoother multitasking with SSD and RAM upgrades." },
    ],
  },
  {
    slug: "networking",
    title: "Networking & IT",
    shortTitle: "Networking & IT",
    summary:
      "Reliable wired and wireless networks for homes, shops and offices, plus ongoing IT infrastructure support.",
    icon: Network,
    items: [
      { title: "LAN Networking", description: "Structured cabling and local network setup." },
      { title: "Wi-Fi Setup", description: "Whole-premises Wi-Fi coverage planning and setup." },
      { title: "Router Configuration", description: "Secure router setup and configuration." },
      { title: "Network Troubleshooting", description: "Diagnosing and fixing network slowdowns and outages." },
      { title: "Printer Setup", description: "Network and local printer installation and sharing." },
      { title: "IT Infrastructure Support", description: "Ongoing support for your business IT setup." },
    ],
  },
  {
    slug: "billing-software",
    title: "Billing Software",
    shortTitle: "Billing Software",
    summary:
      "TechDepo Billing is a simple, reliable POS and billing solution built for shops and small businesses.",
    icon: Receipt,
    items: [
      { title: "Product Management", description: "Organize your full product catalog with ease." },
      { title: "POS Billing", description: "Fast, simple billing at the counter." },
      { title: "Customer Management", description: "Keep track of customer details and purchase history." },
      { title: "Supplier Management", description: "Manage suppliers and purchase records in one place." },
      { title: "Payment Tracking", description: "Track payments received and outstanding dues." },
      { title: "Reports", description: "Sales and business reports whenever you need them." },
      { title: "Ledger", description: "Clear ledger records for your accounts." },
      { title: "Profit/Loss", description: "Understand your business performance at a glance." },
      { title: "Receipt Printing", description: "Print professional receipts for every sale." },
    ],
  },
];

export function getServiceGroup(slug: string): ServiceGroup | undefined {
  return serviceGroups.find((group) => group.slug === slug);
}

export const salesProductOptions = [
  "CCTV Camera",
  "CCTV Installation",
  "CCTV System",
  "Laptop",
  "Desktop",
  "Computer Accessories",
  "Networking",
  "Solar CCTV",
  "Billing Software",
  "Other",
] as const;

export const serviceDeviceOptions = [
  "CCTV Camera",
  "DVR",
  "NVR",
  "Laptop",
  "Desktop",
  "Printer",
  "Router",
  "Networking",
  "Other",
] as const;
