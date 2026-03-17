import PriceCard from "./price-card";
import PriceCustomCard from "./price-custom-card";
import { TabsContent } from "./ui/tabs";

export default function TabsAnnual() {
  return (
    <TabsContent value="annual">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
        <PriceCard
          title="Básico"
          description="Estruture suas avaliações e economize tempo no dia a dia."
          price="R$ 449,10"
          planText="até 250 alunos"
          period="R$ 37,43/mês"
        />
        <PriceCard
          title="Essencial"
          description="Para professores com múltiplas turmas que precisam de escala."
          price="R$ 497,30"
          planText="de 251 à 500 alunos"
          period="R$ 41,44/mês"
        />
        <PriceCard
          title="Pro"
          description="Estrutura completa para professores com grande volume de turmas."
          price="R$ 710,74"
          planText="de 501 à 1000 alunos"
          period="R$ 59,23/mês"
        />{" "}
        <PriceCustomCard />
      </div>
    </TabsContent>
  );
}
