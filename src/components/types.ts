import { LucideProps } from "lucide-react";
import { IconType } from "react-icons";

export type ServiceCardProps = {
  title: string;
  Icon?:
    | IconType
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
      >;
  image: string;
  gradient?: string;
  link: string;
  description: string;
};
