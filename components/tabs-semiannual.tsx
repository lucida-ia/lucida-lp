import PriceCard from "./price-card";
import PriceCustomCard from "./price-custom-card";
import { TabsContent } from "./ui/tabs";

export default function TabsSemiannual() {
  return (
    <TabsContent value="semiannual">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
        <PriceCard
          title="Básico"
          description="Estruture suas avaliações e economize tempo no dia a dia."
          price="R$ 254,49"
          planText="até 250 alunos"
          period="R$ 42,42/mês"
        />
        <PriceCard
          title="Essencial"
          description="Para professores com múltiplas turmas que precisam de escala."
          price="R$ 331,54"
          planText="de 251 à 500 alunos"
          period="R$ 55,26/mês"
        />
        <PriceCard
          title="Pro"
          description="Estrutura completa para professores com grande volume de turmas."
          price="R$ 473,83"
          planText="de 501 à 1000 alunos"
          period="R$ 78,97/mês"
        />{" "}
        <PriceCustomCard />
      </div>
    </TabsContent>
  );
}
