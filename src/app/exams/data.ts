import type { ExamCategory } from "@/types";

export const defaultExamCategoryColumns = [
  { tag: "code", label: "Code" },
  { tag: "name", label: "Libellé" },
  { tag: "unit_price", label: "Prix Unitaire" },
  { tag: "insurance_price", label: "Prix Assurances" },
  { tag: "specimen", label: "Spécimen ou Échantillon" },
  { tag: "delivery_time", label: "Délai Rendu" }
];

export const examsByCategories: ExamCategory[] = [
  {
    tag: "blood_biochemistry",
    label: "Biochimie sanguine",
    columns: defaultExamCategoryColumns,
    exams: [
      { code: "ALB", name: "Albumine sérique", b_code: 30, unit_price: 5000, insurance_price: 5500, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "AMY", name: "Amylase", b_code: 30, unit_price: 9000, insurance_price: 10350, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "APOA", name: "Apolipoprotéines A1", b_code: 166, unit_price: 25000, insurance_price: 28750, specimen: "Sérum ou plasma hépariné", delivery_time: "3j" },
      { code: "APOB", name: "Apolipoprotéines B", b_code: 166, unit_price: 25000, insurance_price: 28750, specimen: "Sérum ou plasma hépariné", delivery_time: "3j" },
      { code: "AU", name: "Acide urique", b_code: 27, unit_price: 4500, insurance_price: 4600, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "B2MG", name: "Beta 2 macroglobuline", b_code: 80, unit_price: 12000, insurance_price: 13800, specimen: "Sérum ou plasma hépariné", delivery_time: "10j" },
      { code: "BIC", name: "Bicarbonates (réserve alcaline)", b_code: 70, unit_price: 12000, insurance_price: 13800, specimen: "Plasma hépariné", delivery_time: "8h" },
      { code: "BILIP", name: "Profil lipidique (HDL+LDL+TG+CHLT)", b_code: 80, unit_price: 12000, insurance_price: 13800, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "BLBT", name: "Bilirubine libre + Bilirubine totale", b_code: 40, unit_price: 6000, insurance_price: 7000, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "BLCR", name: "Biochimie du LCR", b_code: 60, unit_price: 9000, insurance_price: 10350, specimen: "LCR non réfrigéré", delivery_time: "2h" },
      { code: "BNP", name: "BNP (NT-proBNP)", b_code: 160, unit_price: 24000, insurance_price: 27600, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "BPONC", name: "Biochimie des liquides de ponction", b_code: 60, unit_price: 9000, insurance_price: 10350, specimen: "Liquide de ponction", delivery_time: "8h" },
      { code: "CA", name: "Calcium", b_code: 20, unit_price: 3500, insurance_price: 3950, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "CK-MB", name: "CK-MB isoenzyme", b_code: 40, unit_price: 6000, insurance_price: 7000, specimen: "Sérum ou plasma hépariné", delivery_time: "1j" },
      { code: "CO-FE", name: "Coefficient de saturation du fer", b_code: 50, unit_price: 15000, insurance_price: 16600, specimen: "Sérum ou plasma hépariné", delivery_time: "1j" },
      { code: "CPK", name: "Créatine phosphokinase", b_code: 40, unit_price: 6000, insurance_price: 7000, specimen: "Sérum ou plasma hépariné", delivery_time: "1j" },
      { code: "CR", name: "Créatinine", b_code: 13, unit_price: 3000, insurance_price: 3500, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "EPPS", name: "Electrophorèse des protéines sériques", b_code: 120, unit_price: 20000, insurance_price: 22000, specimen: "Sérum", delivery_time: "10j" },
      { code: "FE", name: "Fer sérique", b_code: 34, unit_price: 6000, insurance_price: 6750, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "FERI", name: "Ferritine", b_code: 167, unit_price: 25000, insurance_price: 28750, specimen: "Sérum ou plasma hépariné", delivery_time: "1j" },
      { code: "FOL", name: "Acide folique", b_code: 70, unit_price: 10500, insurance_price: 12000, specimen: "Sérum ou plasma hépariné", delivery_time: "10j" },
      { code: "G", name: "Glycémie à jeun", b_code: 10, unit_price: 2000, insurance_price: 2500, specimen: "Plasma fluoré", delivery_time: "8h" },
      { code: "G6PD", name: "G6PD érythrocytaire", b_code: 70, unit_price: 12000, insurance_price: 13800, specimen: "Plasma EDTA", delivery_time: "8h" },
      { code: "GGT", name: "Gamma glutamyl transférase", b_code: 23, unit_price: 5000, insurance_price: 6000, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "GPPR", name: "Glycémie post prandiale", b_code: 10, unit_price: 2000, insurance_price: 2500, specimen: "Plasma fluoré", delivery_time: "8h" },
      { code: "HBA1c", name: "Hémoglobine glyquée", b_code: 70, unit_price: 10500, insurance_price: 12000, specimen: "Plasma EDTA", delivery_time: "8h" },
      { code: "HGPO", name: "Hyperglycémie provoquée par voie orale", b_code: 100, unit_price: 15000, insurance_price: 17250, specimen: "Plasma fluoré", delivery_time: "8h" },
      { code: "HPT", name: "Haptoglobine", b_code: 134, unit_price: 20000, insurance_price: 23000, specimen: "Sérum ou plasma hépariné", delivery_time: "10j" },
      { code: "IEP", name: "Immunofixation des protéines", b_code: 300, unit_price: 45000, insurance_price: 52000, specimen: "Sérum", delivery_time: "15j" },
      { code: "IONO", name: "Ionogramme simple (Na+, K+, Cl)", b_code: 50, unit_price: 8500, insurance_price: 9500, specimen: "Plasma hépariné", delivery_time: "8h" },
      { code: "IONOC", name: "Ionogramme complet (Na, K, Cl, Ca2+, Mg2+, P)", b_code: 110, unit_price: 18000, insurance_price: 19200, specimen: "Plasma hépariné", delivery_time: "8h" },
      { code: "LDH", name: "Lactate déshydrogénase", b_code: 20, unit_price: 6000, insurance_price: 6600, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "LIPA", name: "Lipase sérique", b_code: 60, unit_price: 12000, insurance_price: 13800, specimen: "Sérum ou plasma hépariné", delivery_time: "1j" },
      { code: "LIT", name: "Lithium", b_code: 30, unit_price: 4500, insurance_price: 5200, specimen: "Sérum ou plasma hépariné", delivery_time: "1j" },
      { code: "MGG", name: "Magnésium globulaire", b_code: 20, unit_price: 3500, insurance_price: 3950, specimen: "Sérum ou plasma hépariné", delivery_time: "1j" },
      { code: "MGS", name: "Magnésium plasmatique", b_code: 20, unit_price: 3500, insurance_price: 3950, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "MYO", name: "Myoglobine", b_code: 150, unit_price: 22500, insurance_price: 25900, specimen: "Sérum ou plasma hépariné", delivery_time: "10j" },
      { code: "ORO", name: "Orosomucoide", b_code: 100, unit_price: 15000, insurance_price: 17250, specimen: "Sérum ou plasma hépariné", delivery_time: "10j" },
      { code: "OSUL", name: "Test d'O'Sullivan", b_code: 70, unit_price: 10500, insurance_price: 12000, specimen: "Plasma fluoré", delivery_time: "1j" },
      { code: "P", name: "Phosphore", b_code: 20, unit_price: 3500, insurance_price: 3950, specimen: "Sérum ou plasma hépariné", delivery_time: "1j" },
      { code: "PAL", name: "Phosphatases alcalines", b_code: 30, unit_price: 5000, insurance_price: 5700, specimen: "Sérum ou plasma hépariné", delivery_time: "1j" },
      { code: "PT", name: "Protéines totales", b_code: 30, unit_price: 5000, insurance_price: 5700, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "TRANSA", name: "Transaminases (GOT + GPT)", b_code: 43, unit_price: 6500, insurance_price: 7500, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "TRF", name: "Transferrine", b_code: 70, unit_price: 10500, insurance_price: 12000, specimen: "Sérum ou plasma hépariné", delivery_time: "1j" },
      { code: "TROP", name: "Troponine I", b_code: 100, unit_price: 15000, insurance_price: 17250, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "U", name: "Urée", b_code: 13, unit_price: 3000, insurance_price: 3300, specimen: "Sérum ou plasma hépariné", delivery_time: "8h" },
      { code: "VIT B12", name: "Vitamine B12", b_code: 120, unit_price: 18000, insurance_price: 20000, specimen: "Sérum ou plasma hépariné", delivery_time: "10j" },
      { code: "VIT D", name: "Vitamine D", b_code: 120, unit_price: 18000, insurance_price: 20000, specimen: "Sérum ou plasma hépariné", delivery_time: "10j" }
    ]
  },
  {
    tag: "urine_biochemistry",
    label: "Biochimie urinaire",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Libellé" },
      { tag: "code_b", label: "Code B" },
      { tag: "unit_price", label: "Prix Unitaire" },
      { tag: "insurance_price", label: "Prix Assurances" },
      { tag: "specimen", label: "Spécimen / Échantillon" },
      { tag: "turnaround_time", label: "Délai Rendu" }
    ],
    exams: [
      {
        code: "AS",
        name: "Albumine sucre",
        code_b: 10,
        unit_price: 2000,
        insurance_price: 2250,
        specimen: "Urine totales",
        turnaround_time: "8h"
      },
      {
        code: "BU",
        name: "Bandelette urinaire",
        code_b: 20,
        unit_price: 3500,
        insurance_price: 3800,
        specimen: "Urine totales",
        turnaround_time: "8h"
      },
      {
        code: "DFG",
        name: "Débit de filtration glomérulaire (clairance de la créatinine)",
        code_b: 40,
        unit_price: 6000,
        insurance_price: 6900,
        specimen: "Sérum",
        turnaround_time: "8h"
      },
      {
        code: "GROSS",
        name: "Test de grossesse",
        code_b: 20,
        unit_price: 3000,
        insurance_price: 3500,
        specimen: "Urines totales",
        turnaround_time: "8h"
      },
      {
        code: "HLM",
        name: "Compte d'addis",
        code_b: 30,
        unit_price: 4500,
        insurance_price: 5200,
        specimen: "#",
        turnaround_time: "#"
      },
      {
        code: "IONOU",
        name: "Ionogramme urinaire",
        code_b: 54,
        unit_price: 8500,
        insurance_price: 9400,
        specimen: "Urines totales",
        turnaround_time: "8h"
      },
      {
        code: "MA",
        name: "Microalbuminurie",
        code_b: 40,
        unit_price: 6000,
        insurance_price: 6900,
        specimen: "Urines totales",
        turnaround_time: "8h"
      },
      {
        code: "UA24",
        name: "Albumine de 24h",
        code_b: 30,
        unit_price: 5000,
        insurance_price: 5600,
        specimen: "Urines de 24h",
        turnaround_time: "2j"
      },
      {
        code: "UCR",
        name: "Créatinine urinaire",
        code_b: 13,
        unit_price: 3000,
        insurance_price: 3400,
        specimen: "Urine totales",
        turnaround_time: "8h"
      },
      {
        code: "UCUL",
        name: "Culot urinaire",
        code_b: 30,
        unit_price: 4500,
        insurance_price: 5200,
        specimen: "Urine totales",
        turnaround_time: "8h"
      },
      {
        code: "UMAY",
        name: "Amylase urinaire",
        code_b: 30,
        unit_price: 9000,
        insurance_price: 9800,
        specimen: "Urine totales",
        turnaround_time: "8h"
      },
      {
        code: "UMEL",
        name: "Immunoélectrophorèse des protéines urinaires",
        code_b: 366,
        unit_price: 55000,
        insurance_price: 63250,
        specimen: "Urine totales",
        turnaround_time: "15j"
      }
    ]
  },
  {
    tag: "immuno_serology",
    label: "Immuno-sérologie",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Libellé" },
      { tag: "code_b", label: "Code B" },
      { tag: "unit_price", label: "Prix Unitaire" },
      { tag: "insurance_price", label: "Prix Assurances" },
      { tag: "specimen", label: "Spécimen / Échantillon" },
      { tag: "turnaround_time", label: "Délai Rendu" }
    ],
    exams: [
      { code: "Ac-VHD", name: "Ac-anti delta", code_b: 166, unit_price: 25000, insurance_price: 31750, specimen: "Sérum", turnaround_time: "5j" },
      { code: "Ac-VHB", name: "Ac-anti VHB", code_b: 70, unit_price: 10500, insurance_price: 12000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "AMISER", name: "Amibiase", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "ASD", name: "Anticorps anti streptodornase", code_b: 70, unit_price: 10500, insurance_price: 12000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "ASLO", name: "Anticorps anti streptolysine", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Sérum", turnaround_time: "8h" },
      { code: "ASPER", name: "Sérologie aspergillose", code_b: 233, unit_price: 35000, insurance_price: 40000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "BILHS", name: "Bilharziose", code_b: 128, unit_price: 20000, insurance_price: 23000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "BW", name: "Syphilis TPHA-VDRL", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Sérum", turnaround_time: "8h" },
      { code: "C3", name: "Complément C3", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "1j" },
      { code: "C4", name: "Complément C4", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "1j" },
      { code: "CHALM1", name: "Chlamydia IgG+IgA", code_b: 80, unit_price: 12000, insurance_price: 13800, specimen: "Sérum", turnaround_time: "3j" },
      { code: "CHLAM2", name: "Chlamydia IgG+IgM", code_b: 80, unit_price: 12000, insurance_price: 13800, specimen: "Sérum", turnaround_time: "3j" },
      { code: "CHLAM3", name: "Chlamydia IgG+IgM+IgA", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "3j" },
      { code: "CMV", name: "Cytomégalovirus IgG+IgM", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "3j" },
      { code: "CRP", name: "Protéine C-réactive", code_b: 34, unit_price: 5000, insurance_price: 5750, specimen: "Sérum", turnaround_time: "8h" },
      { code: "FR", name: "Facteurs rhumatoides", code_b: 40, unit_price: 6000, insurance_price: 7500, specimen: "Sérum", turnaround_time: "8h" },
      { code: "HAVG", name: "Ac-anti hépatite A IgG", code_b: 150, unit_price: 22500, insurance_price: 25900, specimen: "Sérum", turnaround_time: "15j" },
      { code: "HAVM", name: "Ac-anti Hépatite A IgM", code_b: 150, unit_price: 22500, insurance_price: 25900, specimen: "Sérum", turnaround_time: "15j" },
      { code: "HBC", name: "Ac-anti HBc totaux", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HBCM", name: "Ac-anti HBc IgM", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HBE", name: "Antigène HBe", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HBEC", name: "Ac-anti HBe", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HBS", name: "Antigene HBS", code_b: 54, unit_price: 10500, insurance_price: 12500, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HBSQ", name: "Quantification Ag-HBS", code_b: 234, unit_price: 35000, insurance_price: 40250, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HIVC", name: "HIV confirmation", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HIVD", name: "HIV dépistage", code_b: 34, unit_price: 5000, insurance_price: 5750, specimen: "Sérum", turnaround_time: "1j" },
      { code: "HPYLAC", name: "Ac-anti H-pylori", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Sérum", turnaround_time: "8h" },
      { code: "HPYLAG", name: "Antigène H-pylori", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Selles", turnaround_time: "1j" },
      { code: "HPV", name: "Virus du papillome", code_b: 367, unit_price: 55000, insurance_price: 63250, specimen: "Sérum", turnaround_time: "15j" },
      { code: "HSV1G", name: "Herpès simplex virus I IgG", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HSV1M", name: "Herpès simplex virus I IgM", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HSV2G", name: "Herpès simplex virus II IgG", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HSV2M", name: "Herpès simplex virus II IgM", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HSV I", name: "Herpès simplex virus I IgG + IgM", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "3j" },
      { code: "HSV II", name: "Herpès simplex virus II IgG + IgM", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "3j" },
      { code: "IGE", name: "IGE totales", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "1j" },
      { code: "MNI", name: "Mononucléose infectieuse", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "PHAD", name: "PHADIATOP (Allergie Respiratoire)", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "RAST", name: "IGE spécifiques (par allergène)", code_b: 100, unit_price: 25000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "RUBG", name: "Rubéole IgG", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Sérum", turnaround_time: "3j" },
      { code: "RUBGM", name: "Rubéole IgG+IgM", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "RUBM", name: "Rubéole IgM", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Sérum", turnaround_time: "3j" },
      { code: "SERMYCO", name: "Sérologie mycoplasme", code_b: 80, unit_price: 12000, insurance_price: 13800, specimen: "Sérum", turnaround_time: "3j" },
      { code: "TOXG", name: "Toxoplasmose IgG", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Sérum", turnaround_time: "3j" },
      { code: "TOXM", name: "Toxoplasmose IgG+IgM", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "TOXM2", name: "Toxoplasmose IgM", code_b: 60, unit_price: 10500, insurance_price: 10350, specimen: "Sérum", turnaround_time: "3j" },
      { code: "VHC", name: "Ac-anti VHC", code_b: 60, unit_price: 10500, insurance_price: 10350, specimen: "Sérum", turnaround_time: "3j" },
      { code: "WIDAL", name: "Réaction de Felix et Widal", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Sérum", turnaround_time: "8h" },
      { code: "PROCAL", name: "Procalcitonine", code_b: 70, unit_price: 10000, insurance_price: 15000, specimen: "Sérum", turnaround_time: "2h" },
      { code: "CYS-C", name: "Cystatine-C", code_b: 1000, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "2h" },
      { code: "GASP", name: "Gastropanel", code_b: 120, unit_price: 25000, insurance_price: 29500, specimen: "Plasma EDTA", turnaround_time: "3j" }
    ]
  },
  {
    tag: "hematology",
    label: "Hématologie",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Libellé" },
      { tag: "code_b", label: "Code B" },
      { tag: "unit_price", label: "Prix Unitaire" },
      { tag: "insurance_price", label: "Prix Assurances" },
      { tag: "specimen", label: "Spécimen / Échantillon" },
      { tag: "turnaround_time", label: "Délai Rendu" }
    ],
    exams: [
      { code: "RAI", name: "Recherche des agglutinines irrégulières", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Plasma EDTA", turnaround_time: "3j" },
      { code: "AT3", name: "Anti thrombine III", code_b: 90, unit_price: 13500, insurance_price: 15500, specimen: "Plasma citraté", turnaround_time: "3j" },
      { code: "COODIR", name: "Coombs direct", code_b: 40, unit_price: 7000, insurance_price: 8200, specimen: "Plasma EDTA", turnaround_time: "1j" },
      { code: "COOIND", name: "Coombs indirect", code_b: 40, unit_price: 10500, insurance_price: 11200, specimen: "Plasma EDTA", turnaround_time: "1j" },
      { code: "TC", name: "Temps de coagulation", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Sérum et plasma EDTA", turnaround_time: "8h" },
      { code: "TS", name: "Temps de saignement", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Sang capillaire", turnaround_time: "8h" },
      { code: "ELHB", name: "Électrophorèse de l'hémoglobine", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Sang total EDTA", turnaround_time: "3j" },
      { code: "NFS", name: "Numération formule sanguine", code_b: 32, unit_price: 5000, insurance_price: 5600, specimen: "Sang total EDTA", turnaround_time: "8h" },
      { code: "GE", name: "Recherche des hémoparasites", code_b: 14, unit_price: 2000, insurance_price: 2300, specimen: "Sang total EDTA", turnaround_time: "8h" },
      { code: "GS-Rh", name: "Groupe sanguin rhésus", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Sang total EDTA", turnaround_time: "8h" },
      { code: "RH-PH", name: "Phénotypage du rhésus", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sang total EDTA", turnaround_time: "1j" },
      { code: "VS", name: "Vitesse de sédimentation", code_b: 10, unit_price: 2000, insurance_price: 2200, specimen: "Plasma sur citrate de sodium", turnaround_time: "8h" },
      { code: "FAC-COA", name: "Facteurs de coagulation", code_b: 167, unit_price: 25000, insurance_price: 28750, specimen: "Plasma citraté", turnaround_time: "3j" },
      { code: "FIBRI", name: "Fibrinogène", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Plasma citraté", turnaround_time: "8h" },
      { code: "DDIM", name: "D-dimères", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Plasma citraté", turnaround_time: "8h" },
      { code: "RETI", name: "Réticulocytes", code_b: 20, unit_price: 6000, insurance_price: 6500, specimen: "Sang total EDTA", turnaround_time: "8h" },
      { code: "TP", name: "Taux de prothrombine", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Plasma citraté", turnaround_time: "8h" },
      { code: "TCK", name: "Temps de céphaline", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Plasma citraté", turnaround_time: "8h" },
      { code: "TT", name: "Temps de thrombine", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Plasma citraté", turnaround_time: "8h" },
      { code: "CD4", name: "Taux de CD4", code_b: 70, unit_price: 30000, insurance_price: 38000, specimen: "Sang total EDTA", turnaround_time: "1j" },
      { code: "CD4/CD8", name: "Rapport CD4/CD8", code_b: 70, unit_price: 30000, insurance_price: 38000, specimen: "Sang total EDTA", turnaround_time: "1j" }
    ]
  },
  {
    tag: "microbio_parasitology",
    label: "Bactériologie, mycologie et parasitologie",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Libellé" },
      { tag: "code_b", label: "Code B" },
      { tag: "unit_price", label: "Prix Unitaire" },
      { tag: "insurance_price", label: "Prix Assurances" },
      { tag: "specimen", label: "Spécimen / Échantillon" },
      { tag: "turnaround_time", label: "Délai Rendu" }
    ],
    exams: [
      { code: "AGSOL", name: "AGSOL", code_b: 80, unit_price: 12000, insurance_price: 13800, specimen: "Liquide de ponction", turnaround_time: "8h" },
      { code: "CHLAD", name: "Chlamydia direct", code_b: 67, unit_price: 10500, insurance_price: 12500, specimen: "Sécrétions génitales", turnaround_time: "1j" },
      { code: "COPROC", name: "Coproculture", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Selles fraiches", turnaround_time: "4j" },
      { code: "KOAP", name: "Coprologie(conc. de Ritchie)", code_b: 20, unit_price: 3000, insurance_price: 3500, specimen: "Selles fraiches", turnaround_time: "8h" },
      { code: "PARAOP", name: "Parasites opportunistes (cryptosporidies et isospora)", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Selles fraiches", turnaround_time: "1j" },
      { code: "ECBU", name: "Examen cytobactériologique de l'urine", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Urine du milieu de jet", turnaround_time: "4j" },
      { code: "MYCO", name: "Recherche des dermatophytes", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Squames", turnaround_time: "21j" },
      { code: "ECBE", name: "Examen cytobactériologique des expectorations", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Crachats", turnaround_time: "4j" },
      { code: "GORG", name: "Examen cytobactériologique du prélèvement de gorge", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Ecouvillonnage de gorge", turnaround_time: "4j" },
      { code: "HEMOCULT", name: "Hémoculture", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sang total", turnaround_time: "8j" },
      { code: "CYLCR", name: "Cytologie du LCR", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "LCR", turnaround_time: "2h" },
      { code: "BACLCR", name: "Examen cytobactériologique du LCR (biochimie, cytologie, bactériologie)", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "LCR", turnaround_time: "4j" },
      { code: "MYCPL", name: "Mycoplasmes", code_b: 80, unit_price: 13000, insurance_price: 14500, specimen: "Sécrétions génitales", turnaround_time: "3j" },
      { code: "SSG", name: "Urogénitaux Sang occulte", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Selles fraiches", turnaround_time: "1j" },
      { code: "ROTA", name: "Ag rotavirus dans les selles", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Selles fraiches", turnaround_time: "1j" },
      { code: "SCO", name: "Scotch test", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Scotch anal", turnaround_time: "8h" },
      { code: "SNIP", name: "Snip test", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Biopsie de peau", turnaround_time: "8h" },
      { code: "SPERMCULT", name: "Spermoculture", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Sperme frais", turnaround_time: "4j" },
      { code: "URET", name: "Prélèvement urétral", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Secrétions génitales", turnaround_time: "4j" },
      { code: "PCV", name: "Prélèvement génital féminin", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Secrétions vaginales", turnaround_time: "4j" },
      { code: "CYPONC", name: "Cytologie des liquides de ponction", code_b: 20, unit_price: 3000, insurance_price: 3500, specimen: "Liquide de ponction", turnaround_time: "8h" },
      { code: "BACPONC", name: "Bactériologie des liquides de ponction", code_b: 80, unit_price: 12000, insurance_price: 13500, specimen: "Liquide de ponction", turnaround_time: "4j" },
      { code: "SPERM", name: "Spermogramme-spermocytogramme", code_b: 80, unit_price: 12000, insurance_price: 13500, specimen: "Sperme frais", turnaround_time: "4j" },
      { code: "PONCT", name: "Biochimie, cytologie et bactériologie des liquides de ponctions", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Liquide de ponction", turnaround_time: "4j" },
      { code: "PUS", name: "Examen cytobacteriologique du pus", code_b: 80, unit_price: 12000, insurance_price: 13500, specimen: "Pus", turnaround_time: "5j" },
      { code: "HUN", name: "Test de post coïtal de Hunner", code_b: 90, unit_price: 15000, insurance_price: 18000, specimen: "Glaire cervicale post coïtale", turnaround_time: "1j" },
      { code: "BAARS", name: "Recherche des BAARS (1, 2, 3)", code_b: 60, unit_price: 10000, insurance_price: 11350, specimen: "Crachats", turnaround_time: "5j" },
      { code: "ORL", name: "Examen bactériologique et mycologique des prélèvements ORL (oreille, nez, sinus)", code_b: 90, unit_price: 15000, insurance_price: 18000, specimen: "Sécrétions ORL", turnaround_time: "5-7j" }
    ]
  },
  {
    tag: "hormones",
    label: "Hormones",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Libellé" },
      { tag: "code_b", label: "Code B" },
      { tag: "unit_price", label: "Prix Unitaire" },
      { tag: "insurance_price", label: "Prix Assurances" },
      { tag: "specimen", label: "Spécimen / Échantillon" },
      { tag: "turnaround_time", label: "Délai Rendu" }
    ],
    exams: [
      { code: "ACTH", name: "ACTH", code_b: 200, unit_price: 40000, insurance_price: 45000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "ANDRO", name: "Androstenedione", code_b: 200, unit_price: 30000, insurance_price: 35000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "BHCG", name: "Béta HCG plasmatique (quantitatif)", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "2h" },
      { code: "COR", name: "Cortisol", code_b: 200, unit_price: 30000, insurance_price: 35000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "SDHA", name: "DHA sulfate", code_b: 200, unit_price: 30000, insurance_price: 35000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "FSH", name: "FSH", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "LH", name: "LH", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "OEST", name: "17-ß-Estradiol", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "PTH", name: "Parathormone", code_b: 200, unit_price: 30000, insurance_price: 35000, specimen: "Sérum", turnaround_time: "15j" },
      { code: "PROG", name: "Progestérone", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "PROL", name: "Prolactine", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "FT3", name: "Triiodothyronine libre", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "FT4", name: "Tétraïodothyronine libre", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "TSH", name: "Thyréostimuline", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "3j" },
      { code: "TSHus", name: "Thyréostimuline ultrasensible", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "3j" },
      { code: "TESTO", name: "Testostérone", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "3j" },
      { code: "AMH", name: "Hormone antimüllérienne", code_b: 300, unit_price: 50000, insurance_price: 58000, specimen: "Sérum", turnaround_time: "3j" }
    ]
  },
  {
    tag: "tumor_markers",
    label: "Marqueurs tumoraux",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Libellé" },
      { tag: "code_b", label: "Code B" },
      { tag: "unit_price", label: "Prix Unitaire" },
      { tag: "insurance_price", label: "Prix Assurances" },
      { tag: "specimen", label: "Spécimen / Échantillon" },
      { tag: "turnaround_time", label: "Délai Rendu" }
    ],
    exams: [
      { code: "ACE", name: "Antigène carcino embryonnaire", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "1j" },
      { code: "PSAT", name: "PSA totale", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "PSAL", name: "PSA libre", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "3j" },
      { code: "AFP", name: "Alpha foetoproteine", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Sérum", turnaround_time: "1j" },
      { code: "C153", name: "Antigène CA 15-3", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "3j" },
      { code: "C199", name: "Antigène CA 19-9", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "3j" },
      { code: "C125", name: "Antigène CA-125", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Sérum", turnaround_time: "3j" }
    ]
  },
  {
    tag: "molecular_biology",
    label: "Biologie moléculaire",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Libellé" },
      { tag: "code_b", label: "Code B" },
      { tag: "unit_price", label: "Prix Unitaire" },
      { tag: "insurance_price", label: "Prix Assurances" },
      { tag: "specimen", label: "Spécimen / Échantillon" },
      { tag: "turnaround_time", label: "Délai Rendu" }
    ],
    exams: [
      {
        code: "CHLAMPCR",
        name: "Chlamydia PCR",
        code_b: 267,
        unit_price: 40000,
        insurance_price: 46000,
        specimen: "Urin, secrétions",
        turnaround_time: "15j"
      },
      {
        code: "TUBPCR",
        name: "Tuberculose PCR",
        code_b: 567,
        unit_price: 35000,
        insurance_price: 40000,
        specimen: "Crachats",
        turnaround_time: "15j"
      },
      {
        code: "CVHIV",
        name: "Charge virale HIV",
        code_b: 106,
        unit_price: 75000,
        insurance_price: 85000,
        specimen: "Plasma EDTA",
        turnaround_time: "10j"
      },
      {
        code: "ADNVHB",
        name: "Charge virale VHB",
        code_b: 280,
        unit_price: 50000,
        insurance_price: 56300,
        specimen: "Plasma EDTA",
        turnaround_time: "15j"
      },
      {
        code: "VHCG",
        name: "Génotypage VHC",
        code_b: 570,
        unit_price: 110000,
        insurance_price: 126000,
        specimen: "Plasma EDTA",
        turnaround_time: "15j"
      },
      {
        code: "CVHCV",
        name: "Charge virale VHC",
        code_b: 400,
        unit_price: 65000,
        insurance_price: 71000,
        specimen: "Plasma EDTA",
        turnaround_time: "15j"
      },
      {
        code: "ARNDELTA",
        name: "Charge virale VHD",
        code_b: 600,
        unit_price: 95000,
        insurance_price: 106000,
        specimen: "Plasma EDTA",
        turnaround_time: "15j"
      }
    ]
  },
  {
    tag: "anatomopathology",
    label: "Anatomo-pathologie",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Libellé" },
      { tag: "code_b", label: "Code B" },
      { tag: "unit_price", label: "Prix Unitaire" },
      { tag: "insurance_price", label: "Prix Assurances" },
      { tag: "specimen", label: "Spécimen / Échantillon" },
      { tag: "turnaround_time", label: "Délai Rendu" }
    ],
    exams: [
      {
        code: "FCV",
        name: "Frottis cervico-vaginal",
        code_b: 100,
        unit_price: 15000,
        insurance_price: 18000,
        specimen: "Brossage cervical",
        turnaround_time: "15j"
      },
      {
        code: "ANALIQ",
        name: "Anapath des liquides",
        code_b: 134,
        unit_price: 20000,
        insurance_price: 24000,
        specimen: "Liquide de ponction",
        turnaround_time: "15j"
      },
      {
        code: "ASAF",
        name: "Aspiration à l'aiguille fine",
        code_b: 150,
        unit_price: 25000,
        insurance_price: 28500,
        specimen: "Réservé au spécialiste",
        turnaround_time: "15j"
      },
      {
        code: "BIOSOP",
        name: "Biopsies opératoires",
        code_b: "variable",
        unit_price: "idem",
        insurance_price: "idem",
        specimen: "Pièce opératoire",
        turnaround_time: "15j"
      }
    ]
  },
  {
    tag: "special_exams",
    label: "Examens spécialisés",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Libellé" },
      { tag: "code_b", label: "Code B" },
      { tag: "unit_price", label: "Prix Unitaire" },
      { tag: "insurance_price", label: "Prix Assurances" },
      { tag: "specimen", label: "Spécimen / Échantillon" },
      { tag: "turnaround_time", label: "Délai Rendu" }
    ],
    exams: [
      {
        code: "DIGO",
        name: "Digoxine",
        code_b: 150,
        unit_price: 26000,
        insurance_price: 30900,
        specimen: "Sérum, plasma EDTA",
        turnaround_time: "15j",
      },
      {
        code: "CARB",
        name: "Carbamazepine",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Sérum, plasma EDTA",
        turnaround_time: "15j",
      },
      {
        code: "DEPA",
        name: "Depakine",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Sérum",
        turnaround_time: "15j",
      },
      {
        code: "BARB",
        name: "Phénobarbital",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Sérum",
        turnaround_time: "15j",
      },
      {
        code: "ACAN",
        name: "Anticorps antinucléaire",
        code_b: 180,
        unit_price: 27000,
        insurance_price: 31000,
        specimen: "Sérum",
        turnaround_time: "15j",
      },
      {
        code: "AcDNA",
        name: "Anticorps anti DNA natifs",
        code_b: 180,
        unit_price: 27000,
        insurance_price: 31000,
        specimen: "Sérum",
        turnaround_time: "15j",
      },
      {
        code: "ENA",
        name: "Anticorps anti antigènes solubles",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Sérum",
        turnaround_time: "15j",
      },
      {
        code: "CCP",
        name: "Anticorps anti gliadine (transglutaminase)",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Sérum",
        turnaround_time: "15j",
      },
      {
        code: "AATG",
        name: "Anticorps anti thyroglobuline",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Sérum",
        turnaround_time: "15j",
      },
      {
        code: "TPO",
        name: "Anticorps anti thyroperoxydase",
        code_b: 294,
        unit_price: 45000,
        insurance_price: 51700,
        specimen: "Sérum",
        turnaround_time: "15j",
      },
      {
        code: "ACRTS",
        name: "Anticorps anti TSH",
        code_b: 217,
        unit_price: 32500,
        insurance_price: 37400,
        specimen: "Sérum",
        turnaround_time: "15j",
      },
      {
        code: "FIBROTEST",
        name: "Fibrotest",
        code_b: 640,
        unit_price: 105000,
        insurance_price: 105000,
        specimen: "Sérum",
        turnaround_time: "30j",
      },
      {
        code: "SPERMLAV",
        name: "Lavage du sperme",
        code_b: 167,
        unit_price: 50000,
        insurance_price: 52000,
        specimen: "Sperme frais",
        turnaround_time: "4h",
      },
      {
        code: "BCHSPERM",
        name: "Biochimie du sperme",
        code_b: 267,
        unit_price: 40000,
        insurance_price: 45000,
        specimen: "Sperme frais",
        turnaround_time: "7j",
      },
      {
        code: "DROGUES",
        name: "Recherche des drogues dans les urines",
        code_b: 134,
        unit_price: 20000,
        insurance_price: 24000,
        specimen: "Urines fraiches",
        turnaround_time: "1j",
      },
    ]
  },
  {
    tag: "echography",
    label: "Échographies",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Libellé" },
      { tag: "unit_price", label: "Prix Unitaire" },
      { tag: "insurance_price", label: "Prix Assurances" }
    ],
    exams: [
      {
        code: "OBST",
        name: "Obstétricale",
        unit_price: 7000,
        insurance_price: 10500,
      },
      {
        code: "PELV",
        name: "Pelvienne",
        unit_price: 7000,
        insurance_price: 10500,
      },
      {
        code: "ABDO",
        name: "Abdominale",
        unit_price: 10000,
        insurance_price: 12500,
      },
      {
        code: "ENDO",
        name: "Endo-vaginale",
        unit_price: 12000,
        insurance_price: 14500,
      },
      {
        code: "ABDOPELV",
        name: "Abdomino-pelvienne",
        unit_price: 17000,
        insurance_price: 19500,
      },
      {
        code: "RENOVES",
        name: "Rénale, vésicale",
        unit_price: 20000,
        insurance_price: 25000,
      },
      {
        code: "THYR",
        name: "Thyroïde",
        unit_price: 20000,
        insurance_price: 25000,
      },
      {
        code: "RENOVESIPROST",
        name: "Rénale, vésicale et prostatique",
        unit_price: 25000,
        insurance_price: 30000,
      },
      {
        code: "MAM",
        name: "Mammaire",
        unit_price: 15000,
        insurance_price: 17500,
      },
      {
        code: "MOLLES",
        name: "Parties molles",
        unit_price: "≥15000",
        insurance_price: "≥17500",
      },
      {
        code: "ECHOCOEUR",
        name: "Echographie cardiaque",
        unit_price: 25000,
        insurance_price: 30000,
      },
      {
        code: "ECG",
        name: "Électrocardiogramme",
        unit_price: 15000,
        insurance_price: 17500,
      },
      {
        code: "DOPPLER",
        name: "Echographie Doppler",
        unit_price: 35000,
        insurance_price: 40000,
      },
      {
        code: "TEST",
        name: "Doppler testiculaire",
        unit_price: 20000,
        insurance_price: 25000,
      },
      {
        code: "OCC",
        name: "Oculaire",
        unit_price: 25000,
        insurance_price: 30000,
      },
      {
        code: "ART",
        name: "Articulaire",
        unit_price: 35000,
        insurance_price: 40000,
      },
      {
        code: "ETF",
        name: "Transfontanellaire",
        unit_price: 30000,
        insurance_price: 35000,
      },
    ]
  },
  {
    tag: "radiology",
    label: "Radiologies",
    columns: [
      { tag: "name", label: "Examens" },
      { tag: "cession_price", label: "Prix cession" }
    ],
    exams: [
      { name: "Radio thorax (face)", cession_price: 9000 },
      { name: "Radio des 2 pieds (F/P)", cession_price: 22000 },

      { name: "Radio thorax (F/P)", cession_price: 15000 },
      { name: "Radio de la cheville (F/P)", cession_price: 12000 },

      { name: "Radio abdomen sans préparation (ASP)", cession_price: 9000 },
      { name: "Radio des 2 chevilles (F/P)", cession_price: 22000 },

      { name: "Radio rachis cervical (F/P)", cession_price: 15000 },
      { name: "Radio jambe (F/P)", cession_price: 12000 },

      { name: "Radio rachis cervical (F/P, 3/4)", cession_price: 22000 },
      { name: "Radio des 2 jambes (F/P)", cession_price: 22000 },

      { name: "Radio rachis dorsal (F/P)", cession_price: 18000 },
      { name: "Radio du genou (F/P)", cession_price: 15000 },

      { name: "Radio rachis lombaire (F/P)", cession_price: 15000 },
      { name: "Radio des 2 genoux (F/P)", cession_price: 22000 },

      { name: "Radio rachis lombaire (F/P, 3/4)", cession_price: 22000 },
      { name: "Radio du fémur (F/P)", cession_price: 12000 },

      { name: "Radio du crâne (F/P)", cession_price: 15000 },
      { name: "Radio des 2 fémurs (F/P)", cession_price: 22000 },

      { name: "Radio des sinus", cession_price: 12000 },
      { name: "Radio de la hanche (F/3/4)", cession_price: 15000 },

      { name: "Radio de la main (F/P)", cession_price: 12000 },
      { name: "Radio du bassin (Face)", cession_price: 12000 },

      { name: "Radio des 2 mains (F/P)", cession_price: 22000 },
      { name: "Radio du bassin (Face et hanche D ou G en 3/4)", cession_price: 18000 },

      { name: "Radio du poignet (F/P)", cession_price: 12000 },
      { name: "Radio du bassin (Face et 2 hanches en 3/4)", cession_price: 26000 },

      { name: "Radio des 2 poignets (F/P)", cession_price: 22000 },
      { name: "Radio du rachis dorso lombaire (F/P)", cession_price: 30000 },

      { name: "Radio avant-bras (F/P)", cession_price: 12000 },
      { name: "Radio axiale de la rotule", cession_price: 12000 },

      { name: "Radio des 2 avant-bras (F/P)", cession_price: 22000 },
      { name: "Radio des pieds en charge (mesure) (F/P)", cession_price: 15000 },

      { name: "Radio du coude (F/P)", cession_price: 12000 },
      { name: "Radio du cavum de profil", cession_price: 12000 },

      { name: "Radio des 2 coudes (F/P)", cession_price: 22000 },
      { name: "Radio cervico-dorsal (F/P)", cession_price: 30000 },

      { name: "Radio du bras (F/P)", cession_price: 12000 },
      { name: "Radio des 2 bras (F/P)", cession_price: 22000 },

      { name: "Radio de l’épaule (F/P et profil de coiffe)", cession_price: 19000 },
      { name: "Radio de 2 épaules (F/P et profil de coiffe)", cession_price: 38000 },

      { name: "Radio épaule (F/P)", cession_price: 15000 },
      { name: "Radio des 2 épaules (F/P)", cession_price: 28000 },

      { name: "Radio de la main gauche de face (âge osseux)", cession_price: 20000 },
      { name: "Hystérosalpingographie (HSG)", cession_price: 35000 },

      { name: "Radio clavicule", cession_price: 12000 },
      { name: "Urographie intra-veineuse (UIV)", cession_price: 45000 },

      { name: "TOGD : Transit Œsogastro-Duodénal", cession_price: 45000 },
      { name: "UCRM : Urocystographie rétrograde et mictionnelle", cession_price: 45000 },

      { name: "TO", cession_price: 35000 }
    ]
  }
].map((examCategory) => ({...examCategory, columns: examCategory.columns || defaultExamCategoryColumns}));
