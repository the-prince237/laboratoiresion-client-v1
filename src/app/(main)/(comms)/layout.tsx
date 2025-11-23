import { Contacts, GridBackground, GridPattern, Spotlight } from "@/components";
import { cn } from "@/lib";
import { CustomLayoutProps } from "@/types";

const Layout = ({ children }: CustomLayoutProps) => {
  return(
    <div>
      <div className="opacity-40 animate-pulse">
        <Spotlight />
      </div>
      {children}
    </div>
  )
}

export default Layout