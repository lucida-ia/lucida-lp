import { cn } from "@/lib/utils";
import CTAChildren from "./cta-children";

export default function CTASection() {
  return (
    <section className="relative flex h-[70vh] w-full items-center justify-center bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "[background:linear-gradient(to_top,transparent_0%,transparent_65%,#fff_100%)]",
          "dark:[background:linear-gradient(to_bottom,transparent_0%,transparent_65%,#000_100%)]",
        )}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,black,transparent)] bg-linear-to-b from-transparent to-white "></div>

      <CTAChildren />
    </section>
  );
}
