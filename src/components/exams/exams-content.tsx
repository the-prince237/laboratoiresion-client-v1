import { examsByCategories } from "@/app/exams/data";
import ExamsHero from "./exams-hero";

export function ExamsContent() {
  
  return (
    <div className="space-y-16 pb-40">
      <ExamsHero />
      {examsByCategories.map((cat) => (
        <section
          key={cat.tag}
          id={cat.tag}
          className="scroll-mt-28 p-4"
        >
          <h2 className="text-2xl font-bold mb-4">{cat.label}</h2>
          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  {cat.columns.map((col) => (
                    <th key={col.tag} className="px-4 py-2 border-b text-left font-semibold whitespace-nowrap">
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cat.exams.length === 0 ? (
                  <tr>
                    <td colSpan={cat.columns.length} className="px-4 py-4 text-center text-gray-500">
                      Aucun examen listé pour le moment
                    </td>
                  </tr>
                ) : (
                  cat.exams.map((exam, i) => (
                    <tr key={i} className="border-b">
                      {cat.columns.map((col) => (
                        <td key={col.tag} className="px-4 py-2 whitespace-nowrap">
                          {exam[col.tag]}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
