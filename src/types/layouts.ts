import React from "react";

export type CustomLayoutProps = {
  children: React.ReactNode
}

export interface SidebarSection {
  link: string;
  label: string;
}

export type SidebarProps = { title: string, sections: SidebarSection[]}

export type ContentLayoutProps = { images: string[], title: string; description: string } & Partial<CustomLayoutProps>