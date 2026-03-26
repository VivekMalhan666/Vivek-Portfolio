import { cn } from "@/app/utils";

type BadgeVariant = "default" | "accent" | "outline" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    background: "rgba(99, 220, 220, 0.1)",
    color: "var(--color-accent-cyan)",
    border: "1px solid rgba(99, 220, 220, 0.2)",
  },
  accent: {
    background: "rgba(162, 89, 255, 0.1)",
    color: "var(--color-accent-purple)",
    border: "1px solid rgba(162, 89, 255, 0.2)",
  },
  outline: {
    background: "transparent",
    color: "var(--color-text-secondary)",
    border: "1px solid var(--color-border)",
  },
  muted: {
    background: "var(--color-bg-card)",
    color: "var(--color-text-muted)",
    border: "1px solid var(--color-border)",
  },
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide",
        className
      )}
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
}
