import {
  Stethoscope,
  Baby,
  HeartPulse,
  Bone,
  BriefcaseMedical,
  ChevronsRight,
} from "lucide-react";

export const dataServices = [
  {
    title: "General Medicine",
    description:
      "Comprehensive primary care services for overall health and well.",
    icon: Stethoscope,
    bgColor: "#fe5c1a",
    link: ChevronsRight,
  },
  {
    title: "Pediatrics",
    description:
      "Specialized medical care for infants, children, and adolescents.",
    icon: Baby,
    bgColor: "#8f36ff",
    link: ChevronsRight,
  },
  {
    title: "Cardiology",
    description: "Advanced heart care services including diagnostics.",
    icon: HeartPulse,
    bgColor: "#fe76fb",
    link: ChevronsRight,
  },
  {
    title: "Orthopedics",
    description: "Expert care for musculoskeletal conditions and injuries.",
    icon: Bone,
    bgColor: "#0dee9f",
    link: ChevronsRight,
  },
  {
    title: "Obstetrics Gynecology",
    description: "Comprehensive care for women's health and pregnancy.",
    icon: Baby,
    link: ChevronsRight,
    bgColor: "#8276ff",
  },
  {
    title: "Dental Care",
    description: "Comprehensive dental services for all ages.",
    icon: BriefcaseMedical,
    bgColor: "#ffbb08",
    link: ChevronsRight,
  },
];
