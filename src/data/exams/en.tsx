import type { ExamCategory } from "@/types";
import { services } from "@/data/services/fr";

export const defaultExamCategoryColumns = [
  { tag: "code", label: "Code" },
  { tag: "name", label: "Test Name" },
  { tag: "unit_price", label: "Unit Price" },
  { tag: "insurance_price", label: "Insurance Price" },
  { tag: "specimen", label: "Specimen" },
  { tag: "delivery_time", label: "Turnaround Time" }
];

export const examsByCategories: ExamCategory[] = [
  {
    tag: "blood_biochemistry",
    label: "Blood Biochemistry",
    columns: defaultExamCategoryColumns,
    exams: [
      { code: "ALB", name: "Serum albumin", b_code: 30, unit_price: 5000, insurance_price: 5500, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "AMY", name: "Amylase", b_code: 30, unit_price: 9000, insurance_price: 10350, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "APOA", name: "Apolipoprotein A1", b_code: 166, unit_price: 25000, insurance_price: 28750, specimen: "Serum or heparinized plasma", delivery_time: "3d" },
      { code: "APOB", name: "Apolipoprotein B", b_code: 166, unit_price: 25000, insurance_price: 28750, specimen: "Serum or heparinized plasma", delivery_time: "3d" },
      { code: "AU", name: "Uric acid", b_code: 27, unit_price: 4500, insurance_price: 4600, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "B2MG", name: "Beta-2 macroglobulin", b_code: 80, unit_price: 12000, insurance_price: 13800, specimen: "Serum or heparinized plasma", delivery_time: "10d" },
      { code: "BIC", name: "Bicarbonates (alkaline reserve)", b_code: 70, unit_price: 12000, insurance_price: 13800, specimen: "Heparinized plasma", delivery_time: "8h" },
      { code: "BILIP", name: "Lipid profile (HDL+LDL+TG+CHLT)", b_code: 80, unit_price: 12000, insurance_price: 13800, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "BLBT", name: "Free bilirubin + total bilirubin", b_code: 40, unit_price: 6000, insurance_price: 7000, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "BLCR", name: "CSF biochemistry", b_code: 60, unit_price: 9000, insurance_price: 10350, specimen: "Non-refrigerated CSF", delivery_time: "2h" },
      { code: "BNP", name: "BNP (NT-proBNP)", b_code: 160, unit_price: 24000, insurance_price: 27600, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "BPONC", name: "Puncture fluid biochemistry", b_code: 60, unit_price: 9000, insurance_price: 10350, specimen: "Puncture fluid", delivery_time: "8h" },
      { code: "CA", name: "Calcium", b_code: 20, unit_price: 3500, insurance_price: 3950, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "CK-MB", name: "CK-MB isoenzyme", b_code: 40, unit_price: 6000, insurance_price: 7000, specimen: "Serum or heparinized plasma", delivery_time: "1d" },
      { code: "CO-FE", name: "Iron saturation coefficient", b_code: 50, unit_price: 15000, insurance_price: 16600, specimen: "Serum or heparinized plasma", delivery_time: "1d" },
      { code: "CPK", name: "Creatine phosphokinase", b_code: 40, unit_price: 6000, insurance_price: 7000, specimen: "Serum or heparinized plasma", delivery_time: "1d" },
      { code: "CR", name: "Creatinine", b_code: 13, unit_price: 3000, insurance_price: 3500, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "EPPS", name: "Serum protein electrophoresis", b_code: 120, unit_price: 20000, insurance_price: 22000, specimen: "Serum", delivery_time: "10d" },
      { code: "FE", name: "Serum iron", b_code: 34, unit_price: 6000, insurance_price: 6750, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "FERI", name: "Ferritin", b_code: 167, unit_price: 25000, insurance_price: 28750, specimen: "Serum or heparinized plasma", delivery_time: "1d" },
      { code: "FOL", name: "Folic acid", b_code: 70, unit_price: 10500, insurance_price: 12000, specimen: "Serum or heparinized plasma", delivery_time: "10d" },
      { code: "G", name: "Fasting blood glucose", b_code: 10, unit_price: 2000, insurance_price: 2500, specimen: "Fluoride plasma", delivery_time: "8h" },
      { code: "G6PD", name: "Erythrocyte G6PD", b_code: 70, unit_price: 12000, insurance_price: 13800, specimen: "EDTA plasma", delivery_time: "8h" },
      { code: "GGT", name: "Gamma-glutamyl transferase", b_code: 23, unit_price: 5000, insurance_price: 6000, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "GPPR", name: "Postprandial blood glucose", b_code: 10, unit_price: 2000, insurance_price: 2500, specimen: "Fluoride plasma", delivery_time: "8h" },
      { code: "HBA1c", name: "Glycated hemoglobin", b_code: 70, unit_price: 10500, insurance_price: 12000, specimen: "EDTA plasma", delivery_time: "8h" },
      { code: "HGPO", name: "Oral glucose tolerance test", b_code: 100, unit_price: 15000, insurance_price: 17250, specimen: "Fluoride plasma", delivery_time: "8h" },
      { code: "HPT", name: "Haptoglobin", b_code: 134, unit_price: 20000, insurance_price: 23000, specimen: "Serum or heparinized plasma", delivery_time: "10d" },
      { code: "IEP", name: "Protein immunofixation", b_code: 300, unit_price: 45000, insurance_price: 52000, specimen: "Serum", delivery_time: "15d" },
      { code: "IONO", name: "Basic electrolyte panel (Na+, K+, Cl)", b_code: 50, unit_price: 8500, insurance_price: 9500, specimen: "Heparinized plasma", delivery_time: "8h" },
      { code: "IONOC", name: "Complete electrolyte panel (Na, K, Cl, Ca2+, Mg2+, P)", b_code: 110, unit_price: 18000, insurance_price: 19200, specimen: "Heparinized plasma", delivery_time: "8h" },
      { code: "LDH", name: "Lactate dehydrogenase", b_code: 20, unit_price: 6000, insurance_price: 6600, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "LIPA", name: "Serum lipase", b_code: 60, unit_price: 12000, insurance_price: 13800, specimen: "Serum or heparinized plasma", delivery_time: "1d" },
      { code: "LIT", name: "Lithium", b_code: 30, unit_price: 4500, insurance_price: 5200, specimen: "Serum or heparinized plasma", delivery_time: "1d" },
      { code: "MGG", name: "Erythrocyte magnesium", b_code: 20, unit_price: 3500, insurance_price: 3950, specimen: "Serum or heparinized plasma", delivery_time: "1d" },
      { code: "MGS", name: "Plasma magnesium", b_code: 20, unit_price: 3500, insurance_price: 3950, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "MYO", name: "Myoglobin", b_code: 150, unit_price: 22500, insurance_price: 25900, specimen: "Serum or heparinized plasma", delivery_time: "10d" },
      { code: "ORO", name: "Orosomucoid", b_code: 100, unit_price: 15000, insurance_price: 17250, specimen: "Serum or heparinized plasma", delivery_time: "10d" },
      { code: "OSUL", name: "O'Sullivan test", b_code: 70, unit_price: 10500, insurance_price: 12000, specimen: "Fluoride plasma", delivery_time: "1d" },
      { code: "P", name: "Phosphorus", b_code: 20, unit_price: 3500, insurance_price: 3950, specimen: "Serum or heparinized plasma", delivery_time: "1d" },
      { code: "PAL", name: "Alkaline phosphatase", b_code: 30, unit_price: 5000, insurance_price: 5700, specimen: "Serum or heparinized plasma", delivery_time: "1d" },
      { code: "PT", name: "Total protein", b_code: 30, unit_price: 5000, insurance_price: 5700, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "TRANSA", name: "Transaminases (GOT + GPT)", b_code: 43, unit_price: 6500, insurance_price: 7500, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "TRF", name: "Transferrin", b_code: 70, unit_price: 10500, insurance_price: 12000, specimen: "Serum or heparinized plasma", delivery_time: "1d" },
      { code: "TROP", name: "Troponin I", b_code: 100, unit_price: 15000, insurance_price: 17250, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "U", name: "Urea", b_code: 13, unit_price: 3000, insurance_price: 3300, specimen: "Serum or heparinized plasma", delivery_time: "8h" },
      { code: "VIT B12", name: "Vitamin B12", b_code: 120, unit_price: 18000, insurance_price: 20000, specimen: "Serum or heparinized plasma", delivery_time: "10d" },
      { code: "VIT D", name: "Vitamin D", b_code: 120, unit_price: 18000, insurance_price: 20000, specimen: "Serum or heparinized plasma", delivery_time: "10d" }
    ]
  },
  {
    tag: "urine_biochemistry",
    label: "Urine Biochemistry",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Test Name" },
      { tag: "code_b", label: "B Code" },
      { tag: "unit_price", label: "Unit Price" },
      { tag: "insurance_price", label: "Insurance Price" },
      { tag: "specimen", label: "Specimen" },
      { tag: "turnaround_time", label: "Turnaround Time" }
    ],
    exams: [
      {
        code: "AS",
        name: "Albumin and sugar",
        code_b: 10,
        unit_price: 2000,
        insurance_price: 2250,
        specimen: "Whole urine",
        turnaround_time: "8h"
      },
      {
        code: "BU",
        name: "Urine dipstick",
        code_b: 20,
        unit_price: 3500,
        insurance_price: 3800,
        specimen: "Whole urine",
        turnaround_time: "8h"
      },
      {
        code: "DFG",
        name: "Glomerular filtration rate (creatinine clearance)",
        code_b: 40,
        unit_price: 6000,
        insurance_price: 6900,
        specimen: "Serum",
        turnaround_time: "8h"
      },
      {
        code: "GROSS",
        name: "Pregnancy test",
        code_b: 20,
        unit_price: 3000,
        insurance_price: 3500,
        specimen: "Whole urine",
        turnaround_time: "8h"
      },
      {
        code: "HLM",
        name: "Addis count",
        code_b: 30,
        unit_price: 4500,
        insurance_price: 5200,
        specimen: "#",
        turnaround_time: "#"
      },
      {
        code: "IONOU",
        name: "Urine electrolyte panel",
        code_b: 54,
        unit_price: 8500,
        insurance_price: 9400,
        specimen: "Whole urine",
        turnaround_time: "8h"
      },
      {
        code: "MA",
        name: "Microalbuminuria",
        code_b: 40,
        unit_price: 6000,
        insurance_price: 6900,
        specimen: "Whole urine",
        turnaround_time: "8h"
      },
      {
        code: "UA24",
        name: "24-hour urine albumin",
        code_b: 30,
        unit_price: 5000,
        insurance_price: 5600,
        specimen: "24-hour urine",
        turnaround_time: "2d"
      },
      {
        code: "UCR",
        name: "Urine creatinine",
        code_b: 13,
        unit_price: 3000,
        insurance_price: 3400,
        specimen: "Whole urine",
        turnaround_time: "8h"
      },
      {
        code: "UCUL",
        name: "Urine sediment",
        code_b: 30,
        unit_price: 4500,
        insurance_price: 5200,
        specimen: "Whole urine",
        turnaround_time: "8h"
      },
      {
        code: "UMAY",
        name: "Urine amylase",
        code_b: 30,
        unit_price: 9000,
        insurance_price: 9800,
        specimen: "Whole urine",
        turnaround_time: "8h"
      },
      {
        code: "UMEL",
        name: "Urine protein immunoelectrophoresis",
        code_b: 366,
        unit_price: 55000,
        insurance_price: 63250,
        specimen: "Whole urine",
        turnaround_time: "15d"
      }
    ]
  },
  {
    tag: "immuno_serology",
    label: "Immuno-serology",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Test Name" },
      { tag: "code_b", label: "B Code" },
      { tag: "unit_price", label: "Unit Price" },
      { tag: "insurance_price", label: "Insurance Price" },
      { tag: "specimen", label: "Specimen" },
      { tag: "turnaround_time", label: "Turnaround Time" }
    ],
    exams: [
      { code: "Ac-VHD", name: "Anti-delta antibodies", code_b: 166, unit_price: 25000, insurance_price: 31750, specimen: "Serum", turnaround_time: "5d" },
      { code: "Ac-VHB", name: "Anti-HBV antibodies", code_b: 70, unit_price: 10500, insurance_price: 12000, specimen: "Serum", turnaround_time: "3d" },
      { code: "AMISER", name: "Amoebiasis", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "15d" },
      { code: "ASD", name: "Anti-streptodornase antibodies", code_b: 70, unit_price: 10500, insurance_price: 12000, specimen: "Serum", turnaround_time: "15d" },
      { code: "ASLO", name: "Anti-streptolysin antibodies", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Serum", turnaround_time: "8h" },
      { code: "ASPER", name: "Aspergillosis serology", code_b: 233, unit_price: 35000, insurance_price: 40000, specimen: "Serum", turnaround_time: "15d" },
      { code: "BILHS", name: "Schistosomiasis (bilharzia)", code_b: 128, unit_price: 20000, insurance_price: 23000, specimen: "Serum", turnaround_time: "15d" },
      { code: "BW", name: "Syphilis TPHA-VDRL", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Serum", turnaround_time: "8h" },
      { code: "C3", name: "Complement C3", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "1d" },
      { code: "C4", name: "Complement C4", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "1d" },
      { code: "CHALM1", name: "Chlamydia IgG+IgA", code_b: 80, unit_price: 12000, insurance_price: 13800, specimen: "Serum", turnaround_time: "3d" },
      { code: "CHLAM2", name: "Chlamydia IgG+IgM", code_b: 80, unit_price: 12000, insurance_price: 13800, specimen: "Serum", turnaround_time: "3d" },
      { code: "CHLAM3", name: "Chlamydia IgG+IgM+IgA", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "3d" },
      { code: "CMV", name: "Cytomegalovirus IgG+IgM", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "3d" },
      { code: "CRP", name: "C-reactive protein", code_b: 34, unit_price: 5000, insurance_price: 5750, specimen: "Serum", turnaround_time: "8h" },
      { code: "FR", name: "Rheumatoid factors", code_b: 40, unit_price: 6000, insurance_price: 7500, specimen: "Serum", turnaround_time: "8h" },
      { code: "HAVG", name: "Anti-hepatitis A IgG antibodies", code_b: 150, unit_price: 22500, insurance_price: 25900, specimen: "Serum", turnaround_time: "15d" },
      { code: "HAVM", name: "Anti-hepatitis A IgM antibodies", code_b: 150, unit_price: 22500, insurance_price: 25900, specimen: "Serum", turnaround_time: "15d" },
      { code: "HBC", name: "Total anti-HBc antibodies", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Serum", turnaround_time: "3d" },
      { code: "HBCM", name: "Anti-HBc IgM antibodies", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "HBE", name: "HBe antigen", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Serum", turnaround_time: "3d" },
      { code: "HBEC", name: "Anti-HBe antibodies", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Serum", turnaround_time: "3d" },
      { code: "HBS", name: "HBs antigen", code_b: 54, unit_price: 10500, insurance_price: 12500, specimen: "Serum", turnaround_time: "3d" },
      { code: "HBSQ", name: "HBs antigen quantification", code_b: 234, unit_price: 35000, insurance_price: 40250, specimen: "Serum", turnaround_time: "3d" },
      { code: "HIVC", name: "HIV confirmation", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Serum", turnaround_time: "3d" },
      { code: "HIVD", name: "HIV screening", code_b: 34, unit_price: 5000, insurance_price: 5750, specimen: "Serum", turnaround_time: "1d" },
      { code: "HPYLAC", name: "Anti-H. pylori antibodies", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Serum", turnaround_time: "8h" },
      { code: "HPYLAG", name: "H. pylori antigen", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Stool", turnaround_time: "1d" },
      { code: "HPV", name: "Papillomavirus", code_b: 367, unit_price: 55000, insurance_price: 63250, specimen: "Serum", turnaround_time: "15d" },
      { code: "HSV1G", name: "Herpes simplex virus I IgG", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Serum", turnaround_time: "3d" },
      { code: "HSV1M", name: "Herpes simplex virus I IgM", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Serum", turnaround_time: "3d" },
      { code: "HSV2G", name: "Herpes simplex virus II IgG", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Serum", turnaround_time: "3d" },
      { code: "HSV2M", name: "Herpes simplex virus II IgM", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Serum", turnaround_time: "3d" },
      { code: "HSV I", name: "Herpes simplex virus I IgG + IgM", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "3d" },
      { code: "HSV II", name: "Herpes simplex virus II IgG + IgM", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "3d" },
      { code: "IGE", name: "Total IgE", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "1d" },
      { code: "MNI", name: "Infectious mononucleosis", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "15d" },
      { code: "PHAD", name: "PHADIATOP (respiratory allergy)", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "15d" },
      { code: "RAST", name: "Specific IgE (per allergen)", code_b: 100, unit_price: 25000, insurance_price: 18000, specimen: "Serum", turnaround_time: "15d" },
      { code: "RUBG", name: "Rubella IgG", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Serum", turnaround_time: "3d" },
      { code: "RUBGM", name: "Rubella IgG+IgM", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "RUBM", name: "Rubella IgM", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Serum", turnaround_time: "3d" },
      { code: "SERMYCO", name: "Mycoplasma serology", code_b: 80, unit_price: 12000, insurance_price: 13800, specimen: "Serum", turnaround_time: "3d" },
      { code: "TOXG", name: "Toxoplasmosis IgG", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "Serum", turnaround_time: "3d" },
      { code: "TOXM", name: "Toxoplasmosis IgG+IgM", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "TOXM2", name: "Toxoplasmosis IgM", code_b: 60, unit_price: 10500, insurance_price: 10350, specimen: "Serum", turnaround_time: "3d" },
      { code: "VHC", name: "Anti-HCV antibodies", code_b: 60, unit_price: 10500, insurance_price: 10350, specimen: "Serum", turnaround_time: "3d" },
      { code: "WIDAL", name: "Widal and Felix test", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Serum", turnaround_time: "8h" },
      { code: "PROCAL", name: "Procalcitonin", code_b: 70, unit_price: 10000, insurance_price: 15000, specimen: "Serum", turnaround_time: "2h" },
      { code: "CYS-C", name: "Cystatin C", code_b: 1000, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "2h" },
      { code: "GASP", name: "GastroPanel", code_b: 120, unit_price: 25000, insurance_price: 29500, specimen: "EDTA plasma", turnaround_time: "3d" }
    ]
  },
  {
    tag: "hematology",
    label: "Hematology",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Test Name" },
      { tag: "code_b", label: "B Code" },
      { tag: "unit_price", label: "Unit Price" },
      { tag: "insurance_price", label: "Insurance Price" },
      { tag: "specimen", label: "Specimen" },
      { tag: "turnaround_time", label: "Turnaround Time" }
    ],
    exams: [
      { code: "RAI", name: "Irregular antibody screening", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "EDTA plasma", turnaround_time: "3d" },
      { code: "AT3", name: "Antithrombin III", code_b: 90, unit_price: 13500, insurance_price: 15500, specimen: "Citrated plasma", turnaround_time: "3d" },
      { code: "COODIR", name: "Direct Coombs test", code_b: 40, unit_price: 7000, insurance_price: 8200, specimen: "EDTA plasma", turnaround_time: "1d" },
      { code: "COOIND", name: "Indirect Coombs test", code_b: 40, unit_price: 10500, insurance_price: 11200, specimen: "EDTA plasma", turnaround_time: "1d" },
      { code: "TC", name: "Clotting time", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Serum and EDTA plasma", turnaround_time: "8h" },
      { code: "TS", name: "Bleeding time", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Capillary blood", turnaround_time: "8h" },
      { code: "ELHB", name: "Hemoglobin electrophoresis", code_b: 60, unit_price: 9000, insurance_price: 10350, specimen: "EDTA whole blood", turnaround_time: "3d" },
      { code: "NFS", name: "Complete blood count", code_b: 32, unit_price: 5000, insurance_price: 5600, specimen: "EDTA whole blood", turnaround_time: "8h" },
      { code: "GE", name: "Blood parasite detection", code_b: 14, unit_price: 2000, insurance_price: 2300, specimen: "EDTA whole blood", turnaround_time: "8h" },
      { code: "GS-Rh", name: "Blood group and Rh typing", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "EDTA whole blood", turnaround_time: "8h" },
      { code: "RH-PH", name: "Rh phenotyping", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "EDTA whole blood", turnaround_time: "1d" },
      { code: "VS", name: "Erythrocyte sedimentation rate", code_b: 10, unit_price: 2000, insurance_price: 2200, specimen: "Sodium citrate plasma", turnaround_time: "8h" },
      { code: "FAC-COA", name: "Coagulation factors", code_b: 167, unit_price: 25000, insurance_price: 28750, specimen: "Citrated plasma", turnaround_time: "3d" },
      { code: "FIBRI", name: "Fibrinogen", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Citrated plasma", turnaround_time: "8h" },
      { code: "DDIM", name: "D-dimers", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Citrated plasma", turnaround_time: "8h" },
      { code: "RETI", name: "Reticulocytes", code_b: 20, unit_price: 6000, insurance_price: 6500, specimen: "EDTA whole blood", turnaround_time: "8h" },
      { code: "TP", name: "Prothrombin time", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Citrated plasma", turnaround_time: "8h" },
      { code: "TCK", name: "Activated partial thromboplastin time", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Citrated plasma", turnaround_time: "8h" },
      { code: "TT", name: "Thrombin time", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Citrated plasma", turnaround_time: "8h" },
      { code: "CD4", name: "CD4 count", code_b: 70, unit_price: 30000, insurance_price: 38000, specimen: "EDTA whole blood", turnaround_time: "1d" },
      { code: "CD4/CD8", name: "CD4/CD8 ratio", code_b: 70, unit_price: 30000, insurance_price: 38000, specimen: "EDTA whole blood", turnaround_time: "1d" }
    ]
  },
  {
    tag: "microbio_parasitology",
    label: "Bacteriology, Mycology and Parasitology",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Test Name" },
      { tag: "code_b", label: "B Code" },
      { tag: "unit_price", label: "Unit Price" },
      { tag: "insurance_price", label: "Insurance Price" },
      { tag: "specimen", label: "Specimen" },
      { tag: "turnaround_time", label: "Turnaround Time" }
    ],
    exams: [
      { code: "AGSOL", name: "AGSOL", code_b: 80, unit_price: 12000, insurance_price: 13800, specimen: "Puncture fluid", turnaround_time: "8h" },
      { code: "CHLAD", name: "Chlamydia direct detection", code_b: 67, unit_price: 10500, insurance_price: 12500, specimen: "Genital secretions", turnaround_time: "1d" },
      { code: "COPROC", name: "Stool culture", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Fresh stool", turnaround_time: "4d" },
      { code: "KOAP", name: "Stool parasitology (Ritchie concentration)", code_b: 20, unit_price: 3000, insurance_price: 3500, specimen: "Fresh stool", turnaround_time: "8h" },
      { code: "PARAOP", name: "Opportunistic parasites (Cryptosporidium and Isospora)", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Fresh stool", turnaround_time: "1d" },
      { code: "ECBU", name: "Urine cytobacteriological examination", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Midstream urine", turnaround_time: "4d" },
      { code: "MYCO", name: "Dermatophyte detection", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Skin scales", turnaround_time: "21d" },
      { code: "ECBE", name: "Sputum cytobacteriological examination", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Sputum", turnaround_time: "4d" },
      { code: "GORG", name: "Throat swab cytobacteriological examination", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Throat swab", turnaround_time: "4d" },
      { code: "HEMOCULT", name: "Blood culture", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Whole blood", turnaround_time: "8d" },
      { code: "CYLCR", name: "CSF cytology", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "CSF", turnaround_time: "2h" },
      { code: "BACLCR", name: "CSF cytobacteriological examination (biochemistry, cytology, bacteriology)", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "CSF", turnaround_time: "4d" },
      { code: "MYCPL", name: "Mycoplasmas", code_b: 80, unit_price: 13000, insurance_price: 14500, specimen: "Genital secretions", turnaround_time: "3d" },
      { code: "SSG", name: "Occult blood in stool", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Fresh stool", turnaround_time: "1d" },
      { code: "ROTA", name: "Rotavirus antigen in stool", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Fresh stool", turnaround_time: "1d" },
      { code: "SCO", name: "Scotch tape test", code_b: 40, unit_price: 6000, insurance_price: 7200, specimen: "Anal adhesive tape", turnaround_time: "8h" },
      { code: "SNIP", name: "Skin snip test", code_b: 30, unit_price: 4500, insurance_price: 5250, specimen: "Skin biopsy", turnaround_time: "8h" },
      { code: "SPERMCULT", name: "Semen culture", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Fresh semen", turnaround_time: "4d" },
      { code: "URET", name: "Urethral swab", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Genital secretions", turnaround_time: "4d" },
      { code: "PCV", name: "Female genital swab", code_b: 70, unit_price: 10500, insurance_price: 12500, specimen: "Vaginal secretions", turnaround_time: "4d" },
      { code: "CYPONC", name: "Puncture fluid cytology", code_b: 20, unit_price: 3000, insurance_price: 3500, specimen: "Puncture fluid", turnaround_time: "8h" },
      { code: "BACPONC", name: "Puncture fluid bacteriology", code_b: 80, unit_price: 12000, insurance_price: 13500, specimen: "Puncture fluid", turnaround_time: "4d" },
      { code: "SPERM", name: "Spermogram-spermocytogram", code_b: 80, unit_price: 12000, insurance_price: 13500, specimen: "Fresh semen", turnaround_time: "4d" },
      { code: "PONCT", name: "Puncture fluid biochemistry, cytology and bacteriology", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Puncture fluid", turnaround_time: "4d" },
      { code: "PUS", name: "Pus cytobacteriological examination", code_b: 80, unit_price: 12000, insurance_price: 13500, specimen: "Pus", turnaround_time: "5d" },
      { code: "HUN", name: "Hunner post-coital test", code_b: 90, unit_price: 15000, insurance_price: 18000, specimen: "Post-coital cervical mucus", turnaround_time: "1d" },
      { code: "BAARS", name: "Acid-fast bacilli (AFB) detection (1, 2, 3)", code_b: 60, unit_price: 10000, insurance_price: 11350, specimen: "Sputum", turnaround_time: "5d" },
      { code: "ORL", name: "Bacteriological and mycological examination of ENT specimens (ear, nose, sinus)", code_b: 90, unit_price: 15000, insurance_price: 18000, specimen: "ENT secretions", turnaround_time: "5-7d" }
    ]
  },
  {
    tag: "hormones",
    label: "Hormones",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Test Name" },
      { tag: "code_b", label: "B Code" },
      { tag: "unit_price", label: "Unit Price" },
      { tag: "insurance_price", label: "Insurance Price" },
      { tag: "specimen", label: "Specimen" },
      { tag: "turnaround_time", label: "Turnaround Time" }
    ],
    exams: [
      { code: "ACTH", name: "ACTH", code_b: 200, unit_price: 40000, insurance_price: 45000, specimen: "Serum", turnaround_time: "15d" },
      { code: "ANDRO", name: "Androstenedione", code_b: 200, unit_price: 30000, insurance_price: 35000, specimen: "Serum", turnaround_time: "15d" },
      { code: "BHCG", name: "Plasma beta-hCG (quantitative)", code_b: 100, unit_price: 15000, insurance_price: 18000, specimen: "Serum", turnaround_time: "2h" },
      { code: "COR", name: "Cortisol", code_b: 200, unit_price: 30000, insurance_price: 35000, specimen: "Serum", turnaround_time: "15d" },
      { code: "SDHA", name: "DHEA sulfate", code_b: 200, unit_price: 30000, insurance_price: 35000, specimen: "Serum", turnaround_time: "15d" },
      { code: "FSH", name: "FSH", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "LH", name: "LH", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "OEST", name: "17-ß-Estradiol", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "PTH", name: "Parathyroid hormone", code_b: 200, unit_price: 30000, insurance_price: 35000, specimen: "Serum", turnaround_time: "15d" },
      { code: "PROG", name: "Progesterone", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "PROL", name: "Prolactin", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "FT3", name: "Free triiodothyronine", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "FT4", name: "Free thyroxine", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "TSH", name: "Thyroid-stimulating hormone", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "3d" },
      { code: "TSHus", name: "Ultrasensitive thyroid-stimulating hormone", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "3d" },
      { code: "TESTO", name: "Testosterone", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "3d" },
      { code: "AMH", name: "Anti-Müllerian hormone", code_b: 300, unit_price: 50000, insurance_price: 58000, specimen: "Serum", turnaround_time: "3d" }
    ]
  },
  {
    tag: "tumor_markers",
    label: "Tumor Markers",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Test Name" },
      { tag: "code_b", label: "B Code" },
      { tag: "unit_price", label: "Unit Price" },
      { tag: "insurance_price", label: "Insurance Price" },
      { tag: "specimen", label: "Specimen" },
      { tag: "turnaround_time", label: "Turnaround Time" }
    ],
    exams: [
      { code: "ACE", name: "Carcinoembryonic antigen", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "1d" },
      { code: "PSAT", name: "Total PSA", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "PSAL", name: "Free PSA", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Serum", turnaround_time: "3d" },
      { code: "AFP", name: "Alpha-fetoprotein", code_b: 100, unit_price: 16000, insurance_price: 18000, specimen: "Serum", turnaround_time: "1d" },
      { code: "C153", name: "CA 15-3 antigen", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "3d" },
      { code: "C199", name: "CA 19-9 antigen", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "3d" },
      { code: "C125", name: "CA-125 antigen", code_b: 120, unit_price: 18000, insurance_price: 20700, specimen: "Serum", turnaround_time: "3d" }
    ]
  },
  {
    tag: "molecular_biology",
    label: "Molecular Biology",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Test Name" },
      { tag: "code_b", label: "B Code" },
      { tag: "unit_price", label: "Unit Price" },
      { tag: "insurance_price", label: "Insurance Price" },
      { tag: "specimen", label: "Specimen" },
      { tag: "turnaround_time", label: "Turnaround Time" }
    ],
    exams: [
      {
        code: "CHLAMPCR",
        name: "Chlamydia PCR",
        code_b: 267,
        unit_price: 40000,
        insurance_price: 46000,
        specimen: "Urine, secretions",
        turnaround_time: "15d"
      },
      {
        code: "TUBPCR",
        name: "Tuberculosis PCR",
        code_b: 567,
        unit_price: 35000,
        insurance_price: 40000,
        specimen: "Sputum",
        turnaround_time: "15d"
      },
      {
        code: "CVHIV",
        name: "HIV viral load",
        code_b: 106,
        unit_price: 75000,
        insurance_price: 85000,
        specimen: "EDTA plasma",
        turnaround_time: "10d"
      },
      {
        code: "ADNVHB",
        name: "HBV viral load",
        code_b: 280,
        unit_price: 50000,
        insurance_price: 56300,
        specimen: "EDTA plasma",
        turnaround_time: "15d"
      },
      {
        code: "VHCG",
        name: "HCV genotyping",
        code_b: 570,
        unit_price: 110000,
        insurance_price: 126000,
        specimen: "EDTA plasma",
        turnaround_time: "15d"
      },
      {
        code: "CVHCV",
        name: "HCV viral load",
        code_b: 400,
        unit_price: 65000,
        insurance_price: 71000,
        specimen: "EDTA plasma",
        turnaround_time: "15d"
      },
      {
        code: "ARNDELTA",
        name: "HDV viral load",
        code_b: 600,
        unit_price: 95000,
        insurance_price: 106000,
        specimen: "EDTA plasma",
        turnaround_time: "15d"
      }
    ]
  },
  {
    tag: "anatomopathology",
    label: "Anatomical Pathology",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Test Name" },
      { tag: "code_b", label: "B Code" },
      { tag: "unit_price", label: "Unit Price" },
      { tag: "insurance_price", label: "Insurance Price" },
      { tag: "specimen", label: "Specimen" },
      { tag: "turnaround_time", label: "Turnaround Time" }
    ],
    exams: [
      {
        code: "FCV",
        name: "Cervicovaginal smear",
        code_b: 100,
        unit_price: 15000,
        insurance_price: 18000,
        specimen: "Cervical brushing",
        turnaround_time: "15d"
      },
      {
        code: "ANALIQ",
        name: "Fluid cytopathology",
        code_b: 134,
        unit_price: 20000,
        insurance_price: 24000,
        specimen: "Puncture fluid",
        turnaround_time: "15d"
      },
      {
        code: "ASAF",
        name: "Fine needle aspiration",
        code_b: 150,
        unit_price: 25000,
        insurance_price: 28500,
        specimen: "Specialist only",
        turnaround_time: "15d"
      },
      {
        code: "BIOSOP",
        name: "Surgical biopsies",
        code_b: "variable",
        unit_price: "idem",
        insurance_price: "idem",
        specimen: "Surgical specimen",
        turnaround_time: "15d"
      }
    ]
  },
  {
    tag: "special_exams",
    label: "Specialized Tests",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Test Name" },
      { tag: "code_b", label: "B Code" },
      { tag: "unit_price", label: "Unit Price" },
      { tag: "insurance_price", label: "Insurance Price" },
      { tag: "specimen", label: "Specimen" },
      { tag: "turnaround_time", label: "Turnaround Time" }
    ],
    exams: [
      {
        code: "DIGO",
        name: "Digoxin",
        code_b: 150,
        unit_price: 26000,
        insurance_price: 30900,
        specimen: "Serum, EDTA plasma",
        turnaround_time: "15d",
      },
      {
        code: "CARB",
        name: "Carbamazepine",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Serum, EDTA plasma",
        turnaround_time: "15d",
      },
      {
        code: "DEPA",
        name: "Depakine (valproate)",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Serum",
        turnaround_time: "15d",
      },
      {
        code: "BARB",
        name: "Phenobarbital",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Serum",
        turnaround_time: "15d",
      },
      {
        code: "ACAN",
        name: "Antinuclear antibodies",
        code_b: 180,
        unit_price: 27000,
        insurance_price: 31000,
        specimen: "Serum",
        turnaround_time: "15d",
      },
      {
        code: "AcDNA",
        name: "Anti-native DNA antibodies",
        code_b: 180,
        unit_price: 27000,
        insurance_price: 31000,
        specimen: "Serum",
        turnaround_time: "15d",
      },
      {
        code: "ENA",
        name: "Anti-soluble antigen antibodies",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Serum",
        turnaround_time: "15d",
      },
      {
        code: "CCP",
        name: "Anti-gliadin antibodies (transglutaminase)",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Serum",
        turnaround_time: "15d",
      },
      {
        code: "AATG",
        name: "Anti-thyroglobulin antibodies",
        code_b: 150,
        unit_price: 22500,
        insurance_price: 25900,
        specimen: "Serum",
        turnaround_time: "15d",
      },
      {
        code: "TPO",
        name: "Anti-thyroid peroxidase antibodies",
        code_b: 294,
        unit_price: 45000,
        insurance_price: 51700,
        specimen: "Serum",
        turnaround_time: "15d",
      },
      {
        code: "ACRTS",
        name: "Anti-TSH antibodies",
        code_b: 217,
        unit_price: 32500,
        insurance_price: 37400,
        specimen: "Serum",
        turnaround_time: "15d",
      },
      {
        code: "FIBROTEST",
        name: "Fibrotest",
        code_b: 640,
        unit_price: 105000,
        insurance_price: 105000,
        specimen: "Serum",
        turnaround_time: "30d",
      },
      {
        code: "SPERMLAV",
        name: "Sperm washing",
        code_b: 167,
        unit_price: 50000,
        insurance_price: 52000,
        specimen: "Fresh semen",
        turnaround_time: "4h",
      },
      {
        code: "BCHSPERM",
        name: "Semen biochemistry",
        code_b: 267,
        unit_price: 40000,
        insurance_price: 45000,
        specimen: "Fresh semen",
        turnaround_time: "7d",
      },
      {
        code: "DROGUES",
        name: "Urine drug screening",
        code_b: 134,
        unit_price: 20000,
        insurance_price: 24000,
        specimen: "Fresh urine",
        turnaround_time: "1d",
      },
    ]
  },
  {
    tag: "echography",
    label: "Ultrasound Scans",
    columns: [
      { tag: "code", label: "Code" },
      { tag: "name", label: "Test Name" },
      { tag: "unit_price", label: "Unit Price" },
      { tag: "insurance_price", label: "Insurance Price" }
    ],
    exams: [
      {
        code: "OBST",
        name: "Obstetric",
        unit_price: 7000,
        insurance_price: 10500,
      },
      {
        code: "PELV",
        name: "Pelvic",
        unit_price: 7000,
        insurance_price: 10500,
      },
      {
        code: "ABDO",
        name: "Abdominal",
        unit_price: 10000,
        insurance_price: 12500,
      },
      {
        code: "ENDO",
        name: "Endovaginal",
        unit_price: 12000,
        insurance_price: 14500,
      },
      {
        code: "ABDOPELV",
        name: "Abdominopelvic",
        unit_price: 17000,
        insurance_price: 19500,
      },
      {
        code: "RENOVES",
        name: "Renal, bladder",
        unit_price: 20000,
        insurance_price: 25000,
      },
      {
        code: "THYR",
        name: "Thyroid",
        unit_price: 20000,
        insurance_price: 25000,
      },
      {
        code: "RENOVESIPROST",
        name: "Renal, bladder and prostate",
        unit_price: 25000,
        insurance_price: 30000,
      },
      {
        code: "MAM",
        name: "Breast",
        unit_price: 15000,
        insurance_price: 17500,
      },
      {
        code: "MOLLES",
        name: "Soft tissue",
        unit_price: "≥15000",
        insurance_price: "≥17500",
      },
      {
        code: "ECHOCOEUR",
        name: "Cardiac ultrasound",
        unit_price: 25000,
        insurance_price: 30000,
      },
      {
        code: "ECG",
        name: "Electrocardiogram",
        unit_price: 15000,
        insurance_price: 17500,
      },
      {
        code: "DOPPLER",
        name: "Doppler ultrasound",
        unit_price: 35000,
        insurance_price: 40000,
      },
      {
        code: "TEST",
        name: "Testicular Doppler",
        unit_price: 20000,
        insurance_price: 25000,
      },
      {
        code: "OCC",
        name: "Ocular",
        unit_price: 25000,
        insurance_price: 30000,
      },
      {
        code: "ART",
        name: "Joint",
        unit_price: 35000,
        insurance_price: 40000,
      },
      {
        code: "ETF",
        name: "Transfontanellar",
        unit_price: 30000,
        insurance_price: 35000,
      },
    ]
  },
  {
    tag: "radiology",
    label: "Radiology",
    columns: [
      { tag: "name", label: "Tests" },
      { tag: "cession_price", label: "Transfer Price" }
    ],
    exams: [
      { name: "Chest X-ray (AP)", cession_price: 9000 },
      { name: "X-ray of both feet (AP/Lat)", cession_price: 22000 },

      { name: "Chest X-ray (AP/Lat)", cession_price: 15000 },
      { name: "Ankle X-ray (AP/Lat)", cession_price: 12000 },

      { name: "Plain abdominal X-ray", cession_price: 9000 },
      { name: "X-ray of both ankles (AP/Lat)", cession_price: 22000 },

      { name: "Cervical spine X-ray (AP/Lat)", cession_price: 15000 },
      { name: "Leg X-ray (AP/Lat)", cession_price: 12000 },

      { name: "Cervical spine X-ray (AP/Lat, oblique)", cession_price: 22000 },
      { name: "X-ray of both legs (AP/Lat)", cession_price: 22000 },

      { name: "Thoracic spine X-ray (AP/Lat)", cession_price: 18000 },
      { name: "Knee X-ray (AP/Lat)", cession_price: 15000 },

      { name: "Lumbar spine X-ray (AP/Lat)", cession_price: 15000 },
      { name: "X-ray of both knees (AP/Lat)", cession_price: 22000 },

      { name: "Lumbar spine X-ray (AP/Lat, oblique)", cession_price: 22000 },
      { name: "Femur X-ray (AP/Lat)", cession_price: 12000 },

      { name: "Skull X-ray (AP/Lat)", cession_price: 15000 },
      { name: "X-ray of both femurs (AP/Lat)", cession_price: 22000 },

      { name: "Sinus X-ray", cession_price: 12000 },
      { name: "Hip X-ray (AP/oblique)", cession_price: 15000 },

      { name: "Hand X-ray (AP/Lat)", cession_price: 12000 },
      { name: "Pelvis X-ray (AP)", cession_price: 12000 },

      { name: "X-ray of both hands (AP/Lat)", cession_price: 22000 },
      { name: "Pelvis X-ray (AP with right or left hip in oblique)", cession_price: 18000 },

      { name: "Wrist X-ray (AP/Lat)", cession_price: 12000 },
      { name: "Pelvis X-ray (AP with both hips in oblique)", cession_price: 26000 },

      { name: "X-ray of both wrists (AP/Lat)", cession_price: 22000 },
      { name: "Thoracolumbar spine X-ray (AP/Lat)", cession_price: 30000 },

      { name: "Forearm X-ray (AP/Lat)", cession_price: 12000 },
      { name: "Axial patella X-ray", cession_price: 12000 },

      { name: "X-ray of both forearms (AP/Lat)", cession_price: 22000 },
      { name: "Weight-bearing foot X-ray (measurement) (AP/Lat)", cession_price: 15000 },

      { name: "Elbow X-ray (AP/Lat)", cession_price: 12000 },
      { name: "Lateral nasopharynx X-ray", cession_price: 12000 },

      { name: "X-ray of both elbows (AP/Lat)", cession_price: 22000 },
      { name: "Cervicothoracic spine X-ray (AP/Lat)", cession_price: 30000 },

      { name: "Arm X-ray (AP/Lat)", cession_price: 12000 },
      { name: "X-ray of both arms (AP/Lat)", cession_price: 22000 },

      { name: "Shoulder X-ray (AP/Lat and rotator cuff view)", cession_price: 19000 },
      { name: "X-ray of both shoulders (AP/Lat and rotator cuff view)", cession_price: 38000 },

      { name: "Shoulder X-ray (AP/Lat)", cession_price: 15000 },
      { name: "X-ray of both shoulders (AP/Lat)", cession_price: 28000 },

      { name: "Left hand X-ray, AP (bone age)", cession_price: 20000 },
      { name: "Hysterosalpingography (HSG)", cession_price: 35000 },

      { name: "Clavicle X-ray", cession_price: 12000 },
      { name: "Intravenous urography (IVU)", cession_price: 45000 },

      { name: "Upper GI series (esophago-gastro-duodenal transit)", cession_price: 45000 },
      { name: "Retrograde and voiding cystourethrography (UCRM)", cession_price: 45000 },

      { name: "TO", cession_price: 35000 }
    ]
  }
].map((examCategory) => ({...examCategory, columns: examCategory.columns || defaultExamCategoryColumns}));

export const examsSlideImages = [
  ...services.map(({ images }) => images).flat(),
  ...services.map(({ content }) => content.items.map((item) => item.image)).flat(),
]

// Optional: build a test list for microdata/schema.org if rich SEO is desired
export const examList = examsByCategories.flatMap((category) =>
  category.exams.map((exam) => ({
    name: exam.exam,
    category: category.label,
    price: exam.cession_price || exam.unit_price || "",
  }))
).map((exam) => `${exam.name}`);

export const metaImages = examsSlideImages.map((src) => ({
      url: src,
      width: 800,
      height: 600,
      alt: "Complete catalog of medical laboratory tests | SION Laboratories",
}))
