import Image from "next/image";
import TestemonialCard from "./testemonial-card";
import { motion } from "motion/react";

export default function SocialProofSection() {
  return (
    <section className="m-auto max-w-5xl mt-4 px-6 mb-24">
      <h2 className="text-3xl md:text-4xl mb-8 font-instrument text-center justify-center flex items-center gap-2">
        <Image
          src="/ilustrations/Lulu-06.svg"
          width={75}
          height={75}
          alt="Logo Lulu"
          className="inline-block mx-2"
        />{" "}
        Como a Lulu está transformando aulas{" "}
      </h2>

      <div className="m-auto mt-4 px-6 bg-accent p-8 rounded-lg gap-2 flex flex-col">
        <p className="text-center max-w-2xl m-auto text-xl font-instrument">
          "A plataforma tem me ajudado bastante em sala de aula, especialmente
          na criação de simulados online, o que me permite avaliar os alunos de
          forma instantânea, com a correção já pronta. Além disso, tem
          contribuído muito para o desenvolvimento das aulas por gerar
          atividades inéditas, que vão além de simples cópias da internet."
        </p>

        <Image
          className="m-auto rounded-xl mt-4"
          src="/testemonials/wanderson-profile.jpg"
          width={50}
          height={50}
          alt="Wanderson Schneider - Professor"
        />

        <div className="flex flex-col md:flex-row justify-center items-center md:gap-2">
          <span className="font-bold">Wanderson Schneider</span>
          <span className="hidden md:block">•</span>
          <span>Professor</span>
        </div>
      </div>
    </section>
  );
}
