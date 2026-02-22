"use client";

import React, { JSX, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { DoorOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
  type: "nav" | "cta";
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setVisible(true);
    }
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (pathname !== "/") return;

    const heroHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const halfHeroHeight = heroHeight / 2;

    if (current >= halfHeroHeight) {
      setVisible(true);
      return;
    }

    setVisible(false);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-5000 items-center justify-center",
          className,
        )}
      >
        <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/80 px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md dark:border-white/10 dark:bg-black/50">
          <Link href="/">
            <Image
              src={"/logos/logo-03.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="h-auto w-36 px-2 hidden sm:block"
            />
            <Image
              src={"/ilustrations/Lulu-11.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="h-auto w-12 px-2 block sm:hidden"
            />
          </Link>

          {/* Nav items container */}
          <div className="flex items-center gap-1">
            {navItems
              .filter((item) => item.type === "nav")
              .map((navItem, idx: number) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white",
                  )}
                >
                  <span className="block sm:hidden ">{navItem.icon}</span>
                  <span className="hidden sm:block">{navItem.name}</span>
                </Link>
              ))}
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-neutral-200 dark:bg-white/10" />

          {/* CTA Button */}

          <a
            key={`link-login}`}
            href={"/login"}
            className={cn(
              " relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white",
            )}
          >
            <span className="block sm:hidden">
              {
                <DoorOpen className="h-4 w-4 text-neutral-500 dark:text-white" />
              }
            </span>
            <span className="hidden sm:block">Entrar</span>
          </a>

          <Link href={"/prices"}>
            <button className="cursor-pointer relative rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-neutral-900/20 dark:bg-white dark:text-black dark:hover:bg-neutral-100 dark:hover:shadow-white/20 hidden sm:inline-flex">
              <span>Começar agora!</span>
            </button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
