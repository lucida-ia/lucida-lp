"use client";

import Image from "next/image";
import HowItWorksCard from "./how-it-works-card";
import { motion } from "motion/react";
import {
  CircleCheckBig,
  FileText,
  FileUp,
  LaptopIcon,
  LaptopMinimal,
  Paperclip,
} from "lucide-react";
import { CardSpotlight } from "./ui/card-spotlight";

export default function HowItWorksSection() {
  return (
    <section className="m-auto max-w-5xl pt-20 px-6 mb-24" id="how-it-works">
      <div className="flex flex-col gap-2 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-instrument text-center">
          <Image
            src="/ilustrations/Lulu-07.svg"
            width={70}
            height={70}
            alt="Logo Lulu"
            className="inline-block mx-2"
          />{" "}
          Tudo que você precisa para avaliar melhor
        </h2>
        <span>
          Da criação à análise de resultados, a Lulu cobre cada etapa do
          processo de avaliação educacional.
        </span>
      </div>

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
        className="flex flex-col gap-4"
      >
        <div className="flex flex-row gap-4">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border p-8 w-2/3 rounded-2xl space-y-2"
          >
            <h3 className="text-2xl text-primary">
              Criação de provas simplificada
            </h3>
            <p className="text-gray-500 text-md">
              Monte suas avaliações de forma simples utilizando seu próprio
              material e modelos bem estruturados. Crie provas completas em
              minutos, não em horas.
            </p>

            <div className="grid gap-2 mt-2">
              <div className="border rounded-md p-8 font-instrument text-2xl hover:bg-primary/10 transition-colors group hover:border-primary">
                <strong className="font-sans text-xl text-primary group-hover">
                  1.{" "}
                </strong>
                Envie seu conteúdo
              </div>

              <div className="border rounded-md p-8 font-instrument text-2xl hover:bg-primary/10 transition-colors group hover:border-primary">
                <strong className="font-sans text-xl text-primary">2. </strong>
                Personalize sua Avaliação
              </div>

              <div className="border rounded-md p-8 font-instrument text-2xl hover:bg-primary/10 transition-colors group hover:border-primary">
                <strong className="font-sans text-xl text-primary">3. </strong>
                Revise e gere sua avaliação
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col w-1/3 gap-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border p-8 rounded-2xl space-y-2"
            >
              <h3 className="text-2xl text-primary">
                Aplicação online e offline
              </h3>
              <p className="text-gray-500 text-md">
                Aplique provas em qualquer cenário. Seus alunos podem responder
                pelo navegador ou em folhas impressas com gabarito automatizado.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border p-6 rounded-2xl space-y-2"
            >
              <h3 className="text-2xl text-primary">Correção automática</h3>
              <p className="text-gray-500">
                Resultados instantâneos com correção inteligente. Questões
                objetivas corrigidas automaticamente e suporte para rubricas em
                questões dissertativas.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-1/3 gap-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border p-8 rounded-2xl space-y-2"
            >
              <h3 className="text-2xl text-primary">
                Gestão de turmas e alunos
              </h3>
              <p className="text-gray-500 text-md">
                Organize turmas, gerencie matrículas e acompanhe cada aluno
                individualmente. Controle total sobre suas classes em um painel
                centralizado.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border p-6 rounded-2xl space-y-2"
            >
              <h3 className="text-2xl text-primary">Exportação de dados</h3>
              <p className="text-gray-500">
                Exporte relatórios, notas e resultados em PDF, CSV ou Excel.
                Integre facilmente com outros sistemas e ferramentas que você já
                utiliza.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border p-8 w-2/3 rounded-2xl space-y-2"
          >
            <h3 className="text-2xl text-primary">Análises e relatórios</h3>
            <p className="text-gray-500 text-md">
              Dashboards detalhados com desempenho por turma, aluno e questão.
              Identifique padrões, dificuldades e evolução ao longo do tempo.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
