import { Contacts, Footer, Header } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <Header />
    <div className="pt-20 overflow-x-hidden relative">
      {children}
    </div>
    <Contacts />
    <Footer />
  </>;
}