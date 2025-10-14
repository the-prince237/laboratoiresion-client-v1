import React from "react";
import { IconType } from "react-icons";

export type TogglerListItem<TogglerEnum> = {
  title: string;
  tag: TogglerEnum;
  Icon: IconType;
  link?: string;
  content: React.ReactNode;
};
