import { motion } from "motion/react";
import Image from "next/image";

export default function HowItWorksCard({
  imageSrc,
  title,
  description,
  size,
}: {
  imageSrc: string;
  title: string;
  description: string;
  size?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-muted rounded-lg p-6 flex flex-col gap-4"
    >
      <Image
        src={imageSrc}
        width={size || 65}
        height={size || 65}
        alt={title}
      />

      <h4 className="font-instrument text-3xl">{title}</h4>
      <span className="text-sm">{description}</span>
    </motion.div>
  );
}
