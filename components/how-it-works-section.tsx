"use client";

import Image from "next/image";
import HowItWorksCard from "./how-it-works-card";
import { motion } from "motion/react";

export default function HowItWorksSection() {
  return (
    <section className="m-auto max-w-5xl mt-20 px-6 mb-24" id="how-it-works">
      <h2 className="text-3xl md:text-4xl mb-8 font-instrument text-center">
        4 passos simples para criar provas incríveis com a Lulu
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // dispara quando 20% aparecer
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15, // mais perceptível
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        <HowItWorksCard
          imageSrc="/ilustrations/Lulu-13.svg"
          title="Faça upload do seu material"
          description="Envie PDFs, DOCs, textos ou vídeos. Nossa IA analisa automaticamente o conteúdo."
          size={50}
        />
        <HowItWorksCard
          imageSrc="/ilustrations/Lulu-08.svg"
          title="Personalize sua prova"
          description="Escolha formato, dificuldade e tipos de questões em poucos cliques."
        />
        <HowItWorksCard
          imageSrc="/ilustrations/Lulu-02.svg"
          title="Gere sua prova em segundos"
          description="Nossa IA cria uma prova completa, pronta para imprimir ou compartilhar online."
        />
        <HowItWorksCard
          imageSrc="/ilustrations/Lulu-05.svg"
          title="Aplique e avalie facilmente"
          description="Seja online ou offline, nossa plataforma ajuda a aplicar e corrigir as provas de forma eficiente."
        />
      </motion.div>
    </section>
  );
}
