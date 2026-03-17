"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FileUp, Sparkles, Send, ChevronRight } from "lucide-react";

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
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border p-5 md:p-8 w-full md:w-2/3 rounded-2xl space-y-2"
          >
            <h3 className="text-2xl text-primary">
              Criação de provas simplificada
            </h3>
            <p className="text-gray-500 text-md">
              Monte suas avaliações de forma simples utilizando seu próprio
              material e modelos bem estruturados. Crie provas completas em
              minutos, não em horas.
            </p>

            <div className="mt-6 flex items-start gap-2">
              {[
                { icon: FileUp, label: "Envie seu\nmaterial" },
                { icon: Sparkles, label: "Lulu cria\nquestões" },
                { icon: Send, label: "Publique\nsua prova" },
              ].map((step, i) => (
                <div key={i} className="contents">
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-center text-gray-500 whitespace-pre-line leading-tight">
                      {step.label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className="shrink-0 mt-4">
                      <ChevronRight className="w-4 h-4 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border bg-gray-50/50 p-4">
              <div className="text-xs text-gray-400 mb-2 font-medium">
                Questão gerada pela Lulu
              </div>
              <p className="text-sm font-medium text-gray-700 mb-3">
                Qual é a principal função do sistema nervoso central?
              </p>
              <div className="space-y-1.5">
                {[
                  "Bombear sangue pelo corpo",
                  "Coordenar e controlar as atividades do organismo",
                  "Realizar trocas gasosas",
                  "Produzir hormônios",
                ].map((option, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 text-xs ${i === 1 ? "text-primary font-medium" : "text-gray-400"}`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full border shrink-0 ${i === 1 ? "border-primary bg-primary/10" : "border-gray-300"}`}
                    />
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col w-full md:w-1/3 gap-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border p-5 md:p-8 rounded-2xl space-y-2"
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

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-1/3 gap-4 order-last md:order-first">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border p-5 md:p-8 rounded-2xl space-y-2"
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
            className="border p-5 md:p-8 w-full md:w-2/3 rounded-2xl space-y-2 order-first md:order-last"
          >
            <h3 className="text-2xl text-primary">Análises e relatórios</h3>
            <p className="text-gray-500 text-md">
              Dashboards detalhados com desempenho por turma, aluno e questão.
              Identifique padrões, dificuldades e evolução ao longo do tempo.
            </p>

            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Média geral", value: "7.8" },
                  { label: "Aprovação", value: "82%" },
                  { label: "Alunos avaliados", value: "24" },
                ].map((kpi, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-gray-50 border p-3 text-center"
                  >
                    <div className="text-xl font-bold text-primary">
                      {kpi.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {[
                  { label: "Turma A", pct: 88 },
                  { label: "Turma B", pct: 74 },
                  { label: "Turma C", pct: 61 },
                  { label: "Turma D", pct: 79 },
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-14 shrink-0">
                      {bar.label}
                    </span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${bar.pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-8 text-right">
                      {bar.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
