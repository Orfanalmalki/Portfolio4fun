import * as React from "react";
import { FiDownload } from "react-icons/fi";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Button style definition
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary: "bg-primary text-white",
        outline:
          "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

const DownloadButton = ({ className, variant, size, ...props }) => {
  return (
    <a
      href="/files/cv.pdf" // Path to your CV file
      download
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </a>
  );
};

export { DownloadButton };
