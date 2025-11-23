'use client';
import { useState } from "react";
import Link from "next/link";
import { Button } from "../../../ui";
import { Blocks, X } from "lucide-react";
import { cn } from "@/lib";
import { SidebarProps } from "@/types";

export function ResponsiveSidebarDrawer({ title, sections }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="md:hidden">
        <Button
        variant="outline"
          className="px-4 z-[1001] gap-4 fixed top-25 left-4 py-2 rounded"
          onClick={() => setOpen(!open)}
        >
          <Blocks />
          {title}
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
              {sections.map((cat, index) => (
                <li key={`${cat.label}-${index}`} className={cn("border-b-[0.5px] border-solid border-gray-200", { "border-b-0": index === sections.length -1  })}>
                  <Link
                    href={cat.link}
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
      </aside>
      <aside className="hidden md:flex md:flex-col w-64 border-r h-screen min-h-screen overflow-y-auto min-w-64 px-4 pt-40 sticky top-0 bg-white">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {sections.map((cat, index) => (
          <li key={`${cat.label}-${index}`} className={cn("border-b-[0.5px] border-solid border-gray-200", { "border-b-0": index === sections.length -1  })}>
            <Link
              href={cat.link}
              className="block px-2 py-1 hover:bg-gray-100 rounded"
            >
              {cat.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
    </>
  );
}
