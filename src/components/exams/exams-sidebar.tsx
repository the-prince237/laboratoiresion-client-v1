import { examsByCategories } from "@/app/exams/data";
import { cn } from "@/lib";
import Link from "next/link";

export function ExamsSidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 border-r h-screen min-h-screen overflow-y-auto min-w-64 px-4 pt-40 sticky top-0 bg-white">
      <h3 className="font-bold text-lg mb-4">Catégories</h3>
      <ul className="space-y-2">
        {examsByCategories.map((cat, index) => (
          <li key={cat.tag} className={cn("border-b-[0.5px] border-solid border-gray-200", { "border-b-0": index === examsByCategories.length -1  })}>
            <Link
              href={`/exams/${cat.tag}`}
              className="block px-2 py-1 hover:bg-gray-100 rounded"
            >
              {cat.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
