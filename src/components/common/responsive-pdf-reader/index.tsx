'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Logo from '../logo';

interface PDFReaderProps {
  pdfPath: string;
  title: string;
}

export function PDFReader({ pdfPath, title }: PDFReaderProps) {
  const router = useRouter()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-1001 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 text-white px-4 h-[90px] w-full gap-3 flex items-center justify-between">
        <Logo />

        <h2 className="text-lg font-semibold flex-1">{title}</h2>
        
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-700 rounded"
          title="Fermer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 overflow-auto bg-gray-800 flex items-center justify-center">
        <div 
          className="bg-white shadow-2xl w-screen"
          style={{ transformOrigin: 'top center' }}
        >
          <iframe
            src={`${pdfPath}#view=FitH`}
            className="w-screen h-[calc(100vh-90px)]"
            title={title}
          />
        </div>
      </div>
    </div>
  );
}