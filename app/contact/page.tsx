"use client";

import { ContactForm } from "@/components/contact-form";
import { motion } from "motion/react";
import Link from "next/link";

export default function Contact() {
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
        <h2 className="text-3xl text-primary mb-6">Entre em contato conosco</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">
              Precisa de ajuda ou de um plano personalizado? Nossa equipe está
              pronta para conversar com você e encontrar a melhor solução com a
              Lulu.
            </p>
            <div className="flex flex-col mt-10">
              <span className="font-instrument text-2xl">
                WhatsApp:{" "}
                <Link
                  className="font-sans text-xl text-primary font-bold underline decoration-dotted hover:text-primary/70 transition-colors"
                  href={`https://wa.me/5515991668848?text=${whatsappMessage}`}
                  target="_blank"
                >
                  (15) 99166-8848
                </Link>
              </span>
              <span className="font-instrument text-2xl">
                Instagram:{" "}
                <Link
                  className="font-sans text-xl text-primary font-bold underline decoration-dotted hover:text-primary/70 transition-colors"
                  href="https://www.instagram.com/lucida.ia"
                  target="_blank"
                >
                  @lucida.ia
                </Link>
              </span>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
