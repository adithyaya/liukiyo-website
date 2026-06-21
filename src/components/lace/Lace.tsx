import type { HTMLAttributes, PropsWithChildren } from "react";
import laceBottom from "../../assets/lace/lace-bottom.svg";
import laceDivider from "../../assets/lace/lace-divider.svg";
import laceFrame from "../../assets/lace/lace-frame.svg";
import laceTop from "../../assets/lace/lace-top.svg";

type LaceProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function LaceDivider({ className = "" }: { className?: string }) {
  return <img src={laceDivider} alt="" aria-hidden="true" className={`mx-auto h-auto w-full max-w-5xl ${className}`} />;
}

export function LaceBorder({ position = "top", className = "" }: { position?: "top" | "bottom"; className?: string }) {
  return <img src={position === "top" ? laceTop : laceBottom} alt="" aria-hidden="true" className={`pointer-events-none w-full ${className}`} />;
}

export function LaceFrame({ children, className = "", ...props }: LaceProps) {
  return <div className={`relative ${className}`} {...props}><img src={laceFrame} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" /><div className="relative z-10 h-full px-10 py-12 sm:px-14 sm:py-16">{children}</div></div>;
}

export function LaceCard({ children, className = "", ...props }: LaceProps) {
  return <LaceFrame className={`bg-[var(--ivory)] shadow-[var(--shadow-card)] ${className}`} {...props}>{children}</LaceFrame>;
}

export function LaceSection({ children, className = "", ...props }: LaceProps) {
  return <section className={`relative ${className}`} {...props}><LaceBorder position="top" className="absolute inset-x-0 top-0 h-16 opacity-70" />{children}<LaceBorder position="bottom" className="absolute inset-x-0 bottom-0 h-16 opacity-70" /></section>;
}
