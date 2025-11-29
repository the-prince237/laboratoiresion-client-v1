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

export type BlogSectionProps = {
   label: string;
  tag: string;
  articles?: {
      type: string;
      title: string;
      tag: string;
      pdfPath: string;
      image: string;
      number: number;
      date: string;
      pages: number;
      timeToRead: string;
      resume: string;
  }[];
}