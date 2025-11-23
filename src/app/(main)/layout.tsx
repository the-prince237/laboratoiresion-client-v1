import { Contacts, Footer, Header } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <Header />
    <div className="pt-20 relative">
      {children}
    </div>
    <Contacts />
    <Footer />
  </>;
}