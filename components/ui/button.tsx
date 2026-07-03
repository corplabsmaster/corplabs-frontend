import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand-600 text-white hover:bg-brand-500",
        secondary:
          "border border-line text-zinc-200 hover:border-brand-500 hover:text-white",
        ghost: "text-zinc-400 hover:text-white",
      },
      size: {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
  /** Renders a Link (internal) or anchor (external) instead of a button. */
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

export function Button({ href, className, variant, size, ...rest }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    if (href.startsWith("http")) {
      return <a href={href} className={classes} {...rest} />;
    }
    return <Link href={href} className={classes} {...rest} />;
  }
  return <button className={classes} {...rest} />;
}
