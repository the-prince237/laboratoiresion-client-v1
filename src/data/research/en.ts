import { DnaOff } from "lucide-react";
import { BiClinic } from "react-icons/bi";
import { FaBacteria } from "react-icons/fa6";
import { GiHealthCapsule } from "react-icons/gi";

export   const researchUnits = [
  {
    urlSlug: "bacteriologie-medicale",
    title: "Medical Bacteriology",
    short: "Study of the bacteria responsible for human infections.",
    description: "Medical Bacteriology is dedicated to the identification, characterization and surveillance of pathogenic bacterial agents. Our work focuses on antibiotic resistance, the development of rapid diagnostic methods and the evaluation of microbiological safety protocols in order to improve the management of infections.",
    route: "/research/bacteriologie-medicale",
    image: "https://plus.unsplash.com/premium_photo-1673245588371-56698e2c5117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    imageAlt: "Microscope and bacterial cultures in the laboratory",
    Icon: FaBacteria
  },
  {
    urlSlug: "mycologie-parasitologie-medicale",
    title: "Medical Mycology - Parasitology",
    short: "Research on pathogenic fungi and parasites.",
    description: "The Mycology-Parasitology unit focuses on the study of fungal and parasitic infections: species identification, understanding of life cycles, molecular diagnostics and the development of therapeutic strategies. Its projects aim to better detect and prevent these infections, particularly in resource-limited settings.",
    route: "/research/mycologie-parasitologie-medicale",
    image: "https://plus.unsplash.com/premium_photo-1673288398662-6865a9cb3924?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    imageAlt: "Microscopic examination of fungal spores and parasitology specimens",
    Icon: DnaOff
  },
  {
    urlSlug: "epidemiologie-sante-publique",
    title: "Epidemiology and Public Health",
    short: "Analysis of health determinants and disease prevention.",
    description: "The Epidemiology and Public Health team conducts population-based studies, epidemic monitoring and the evaluation of preventive interventions. We analyze health data to inform health policies, improve the surveillance of communicable and non-communicable diseases, and strengthen community prevention campaigns.",
    route: "/research/epidemiologie-sante-publique",
    image: "https://plus.unsplash.com/premium_photo-1669395056692-59303574f242?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    imageAlt: "Maps and charts of epidemiological data on a screen",
    Icon: GiHealthCapsule
  },
  {
    urlSlug: "biologie-clinique",
    title: "Clinical Biology",
    short: "Optimization of laboratory testing methods for diagnosis.",
    description: "Clinical Biology aims to improve the accuracy, speed and relevance of the laboratory tests used in medical diagnosis. Our focus areas include the validation of new analytical techniques, quality control, process automation and the integration of results into the patient pathway to support clinical decision-making.",
    route: "/research/biologie-clinique",
    image: "https://images.unsplash.com/photo-1650295894392-7fea9aa5a5a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    imageAlt: "Laboratory technician performing a clinical analysis",
    Icon: BiClinic
  }
  ];
