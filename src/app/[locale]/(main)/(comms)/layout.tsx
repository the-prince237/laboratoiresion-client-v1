import { Spotlight } from "@/components";
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