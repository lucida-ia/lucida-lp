"use client";

import TabsAnnual from "@/components/tabs-annual";
import TabsMonthly from "@/components/tabs-monthly";
import TabsQuarterly from "@/components/tabs-quarterly";
import TabsSemiannual from "@/components/tabs-semiannual";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

export default function Prices() {
  const [value, setValue] = React.useState("monthly");

  return (
    <section className="m-auto max-w-5xl mt-40">
      <motion.div
        initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
        transition={{ duration: 0.25 }}
        className="flex justify-center flex-col items-center"
      >
        <div className="flex flex-col justify-center text-center mb-10 gap-2">
          <h2 className="text-3xl font-bold text-primary">
            Escolha o plano que melhor se encaixa para você.
          </h2>
          <span>Preços previsíveis, sem surpresas.</span>
        </div>

        <Tabs value={value} onValueChange={setValue} className="w-full">
          <TabsList className="m-auto mb-10">
            <TabsTrigger value="monthly">Mensal</TabsTrigger>
            <TabsTrigger value="quarterly">
              Trimestral
              <Badge
                className="border border-accent-foreground"
                variant={"secondary"}
              >
                -7%
              </Badge>
            </TabsTrigger>

            <TabsTrigger value="semiannual">
              Semestral
              <Badge
                className="border border-accent-foreground"
                variant={"secondary"}
              >
                -15%
              </Badge>
            </TabsTrigger>

            <TabsTrigger value="annual">
              Anual
              <Badge
                className="border border-accent-foreground"
                variant={"secondary"}
              >
                -25%
              </Badge>
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <TabsMonthly />
              <TabsQuarterly />
              <TabsSemiannual />
              <TabsAnnual />
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </section>
  );
}
