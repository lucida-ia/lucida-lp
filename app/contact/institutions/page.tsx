"use client";

import { ContactForm } from "@/components/contact-form";
import { InstitutionalContactForm } from "@/components/instituional-contact-form";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Arrow } from "radix-ui/internal";

export default function Institution() {
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de saber mais sobre a Lulu!",
  );

  return (
    <section className="m-auto max-w-5xl mt-40 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
        transition={{ duration: 0.25 }}
      >
        <h2 className="text-3xl text-primary mb-6">
          Soluções personalizadas para{" "}
          <span className="font-bold">instituições de ensino</span> e{" "}
          <span className="font-bold">empresas</span>
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="text-sm text-gray-500 gap-4 flex flex-col">
            <p className="">
              A Lucida se adapta à realidade de{" "}
              <span className="font-bold">
                instituições de ensino, redes educacionais e empresas
              </span>{" "}
              que precisam padronizar, escalar e profissionalizar seus processos
              de avaliação.
            </p>

            <p>
              Criamos provas com{" "}
              <span className="font-bold">identidade visual personalizada</span>
              , alinhadas ao modelo pedagógico da instituição, com diferentes
              formatos de questão e níveis de dificuldade. Tudo organizado para
              manter padrão, qualidade e agilidade.
            </p>

            <p>
              Além disso, a Lucida permite{" "}
              <span className="font-bold">
                integração com sistemas internos
              </span>
              , facilitando o fluxo de dados, cadastro de turmas, alunos e
              aplicação das avaliações — sem retrabalho e sem fricção
              operacional.
            </p>

            <p>
              Seja para{" "}
              <span className="font-bold">
                escolas, cursinhos, universidades ou empresas
              </span>{" "}
              com programas de capacitação, a Lucida oferece uma solução
              flexível, escalável e pronta para crescer junto com a sua
              instituição.
            </p>

            <span className="font-bold text-primary flex flex-row items-center gap-2 mt-4">
              Entre em contato conosco para saber mais!{" "}
              <ArrowRight className="inline" />{" "}
            </span>
          </div>

          <div>
            <InstitutionalContactForm />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
