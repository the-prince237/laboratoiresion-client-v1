import { Contacts, GridBackground, GridPattern, Spotlight } from "@/components";
import { cn } from "@/lib";
import { CustomLayoutProps } from "@/types";

const Layout = ({ children }: CustomLayoutProps) => {
  return(
    <div className="overflow-x-hidden">
      <div className="opacity-10 lg:opacity-30 animate-pulse  repeat-infinite">
        <Spotlight />
      </div>
      {children}
    </div>
  )
}

export default Layout