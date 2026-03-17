import PriceCard from "./price-card";
import PriceCustomCard from "./price-custom-card";
import { Button } from "./ui/button";
import { TabsContent } from "./ui/tabs";

export default function TabsMonthly() {
  return (
    <TabsContent value="monthly">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
        <PriceCard
          title="Básico"
          description="Estruture suas avaliações e economize tempo no dia a dia."
          price="R$ 49,90"
          planText="até 250 alunos"
        />
        <PriceCard
          title="Essencial"
          description="Para professores com múltiplas turmas que precisam de escala."
          price="R$ 69,90"
          planText="de 251 à 500 alunos"
        />
        <PriceCard
          title="Pro"
          description="Estrutura completa para professores com grande volume de turmas."
          price="R$ 99,90"
          planText="de 501 à 1000 alunos"
        />{" "}
        <PriceCustomCard />
      </div>
    </TabsContent>
  );
}
