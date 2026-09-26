import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm min-h-11 px-5 text-sm font-medium transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cedar disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-cedar text-bg hover:brightness-110",
        ghost: "border border-line bg-transparent text-fg hover:bg-fg hover:text-bg",
        light: "bg-bg text-fg hover:bg-surface",
        inverse: "border border-bg/40 bg-transparent text-bg hover:bg-bg hover:text-fg",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, asChild, type, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant }), className)}
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    />
  );
}
