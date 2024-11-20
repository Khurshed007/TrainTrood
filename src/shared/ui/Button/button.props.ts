
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface Buttonprops extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>  {
    children :ReactNode;
    appearance : "primary" | "ghost";
    arrow ?: "right" | "down" | "none"
}

