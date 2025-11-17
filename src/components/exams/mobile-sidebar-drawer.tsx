'use client';
import { useState } from "react";
import Link from "next/link";
import { examsByCategories } from "@/app/exams/data";
import { Button } from "../ui";
import { Blocks, X } from "lucide-react";
import { cn } from "@/lib";

export function MobileSidebarDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
      variant="outline"
        className="px-4 z-[1001] gap-4 fixed top-25 left-4 py-2 rounded"
        onClick={() => setOpen(!open)}
      >
        <Blocks />
        Categories
      </Button>

      {open && (
        <div className="fixed w-screen h-screen z-[1001] bg-white shadow-lg p-4">
          <X
            size={32}
            className="mb-4 cursor-pointer px-2 py-1 border rounded"
            onClick={() => setOpen(false)}
          >
            Close
          </X>
          <ul className="space-y-2 overflow-y-auto">
            {examsByCategories.map((cat, index) => (
              <li key={cat.tag} className={cn("border-b-[0.5px] border-solid border-gray-200", { "border-b-0": index === examsByCategories.length -1  })}>
                <Link
                  href={`/exams/${cat.tag}`}
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                  onClick={() => setOpen(false)}
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
