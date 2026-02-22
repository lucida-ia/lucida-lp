"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "./ui/avatar";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeroChildren() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
      transition={{ duration: 0.25 }}
      className="relative z-20 display-flex flex-col items-center justify-center text-center max-w-2xl md:px-0 px-6"
    >
      <div className="hidden md:flex border py-2 px-4 rounded-full w-fit m-auto bg-white  flex-row items-center gap-2 md:text-sm mb-4">
        <AvatarGroup>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="@maxleiter"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
        Junte-se aos mais de 3 mil professores que já usam a Lulu
      </div>

      <h1 className="text-4xl md:text-7xl text-primary text-center mb-4 font-semibold md:font-medium">
        Crie provas com IA em segundos
      </h1>

      <p className="max-w-lg m-auto text-lg md:text-xl">
        Transforme seu material didático em avaliações com IA. Rápido,
        inteligente e personalizado.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
        className="ml-12"
      >
        <Image
          className="m-auto my-6 md:size-50 size-36"
          src="/ilustrations/Lulu-01.svg"
          alt="Lulu"
          width={200}
          height={200}
        ></Image>
      </motion.div>

      <p className="font-instrument text-4xl md:text-5xl">
        Precisa criar uma prova?
      </p>

      <Link href={"/prices"}>
        <Button className="rounded-full mt-4 cursor-pointer group">
          Pedir para a Lulu fazer agora!
          <ArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </Button>
      </Link>
    </motion.div>
  );
}
