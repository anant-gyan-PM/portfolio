import type { LucideIcon } from "lucide-react";

interface ImagePlaceholderProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export default function ImagePlaceholder({ icon: Icon, className = "", iconClassName = "w-16 h-16" }: ImagePlaceholderProps) {
  return (
    <div className={`bg-primary/10 flex items-center justify-center ${className}`}>
      <Icon className={`${iconClassName} text-primary`} strokeWidth={1.5} />
    </div>
  );
}
