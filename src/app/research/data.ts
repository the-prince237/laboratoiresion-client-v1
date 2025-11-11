import { DnaOff } from "lucide-react";
import { BiClinic } from "react-icons/bi";
import { FaBacteria } from "react-icons/fa6";
import { GiHealthCapsule } from "react-icons/gi";

export   const researchUnits = [
  {
    urlSlug: "bacteriologie-medicale",
    title: "Bactériologie médicale",
    short: "Étude des bactéries responsables d'infections humaines.",
    description: "La Bactériologie médicale se consacre à l'identification, la caractérisation et la surveillance des agents bactériens pathogènes. Nos travaux portent sur la résistance aux antibiotiques, le développement de méthodes de diagnostic rapides et l’évaluation des protocoles de sécurité microbiologique afin d'améliorer la prise en charge des infections.",
    route: "/research//bacteriologie-medicale",
    image: "https://plus.unsplash.com/premium_photo-1673245588371-56698e2c5117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    imageAlt: "Microscope et cultures bactériennes en laboratoire",
    Icon: FaBacteria
  },
  {
    urlSlug: "mycologie-parasitologie-medicale",
    title: "Mycologie - Parasitologie médicale",
    short: "Recherche sur les champignons et les parasites pathogènes.",
    description: "L'unité Mycologie-Parasitologie se concentre sur l'étude des infections fongiques et parasitaires : identification d'espèces, compréhension des cycles biologiques, diagnostics moléculaires et développement de stratégies thérapeutiques. Les projets visent à mieux détecter et prévenir ces infections, particulièrement dans les contextes à ressources limitées.",
    route: "/research//mycologie-parasitologie-medicale",
    image: "https://plus.unsplash.com/premium_photo-1673288398662-6865a9cb3924?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    imageAlt: "Observation microscopique de spores fongiques et d'échantillons parasitologiques",
    Icon: DnaOff
  },
  {
    urlSlug: "epidemiologie-sante-publique",
    title: "Épidémiologie et santé publique",
    short: "Analyse des déterminants de la santé et prévention des maladies.",
    description: "L'équipe d'Épidémiologie et Santé Publique mène des études populationnelles, le suivi des épidémies et l'évaluation d'interventions de prévention. Nous analysons les données sanitaires pour orienter les politiques de santé, améliorer la surveillance des maladies transmissibles et non transmissibles, et renforcer les campagnes de prévention communautaire.",
    route: "/research//epidemiologie-sante-publique",
    image: "https://plus.unsplash.com/premium_photo-1669395056692-59303574f242?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    imageAlt: "Cartes et graphiques de données épidémiologiques sur un écran",
    Icon: GiHealthCapsule
  },
  {
    urlSlug: "biologie-clinique",
    title: "Biologie clinique",
    short: "Optimisation des méthodes d'analyses biologiques pour le diagnostic.",
    description: "La Biologie clinique vise à améliorer la précision, la rapidité et la pertinence des tests biologiques utilisés en diagnostic médical. Nos axes incluent la validation de nouvelles techniques analytiques, le contrôle qualité, l'automatisation des processus et l'intégration des résultats au parcours patient pour faciliter la prise de décision clinique.",
    route: "/research//biologie-clinique",
    image: "https://images.unsplash.com/photo-1650295894392-7fea9aa5a5a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    imageAlt: "Technicien de laboratoire réalisant une analyse clinique",
    Icon: BiClinic
  }
  ];