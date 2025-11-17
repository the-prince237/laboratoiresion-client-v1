import { Footer, Header } from "../common";
import { Contacts } from "../home";
import { ExamsContent } from "./exams-content";
import { ExamsSidebar } from "./exams-sidebar";
import { MobileSidebarDrawer } from "./mobile-sidebar-drawer";


export function ExamsPage({ scrollTo }: { scrollTo?: string }) {
  return (
    <div className="flex padded-y flex-col md:flex-row min-h-screen">
      <MobileSidebarDrawer />
      <ExamsSidebar />
      <Header />
      <main className="flex-1">
        {scrollTo && <a href={`#${scrollTo}`} className="hidden">scroll</a>}
        <ExamsContent />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}