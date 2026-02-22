import { Button } from "./ui/button";

export default function PriceCustomCard() {
  return (
    <div className="border rounded-lg p-6 flex flex-col gap-6 justify-between">
      <div>
        <span className=" text-2xl">Personalizado</span>
        <p className="text-sm text-gray-500">
          Precisa de mais capacidade ou recursos específicos? Fale conosco.
        </p>
      </div>

      <Button variant={"outline"}>Entre em Contato</Button>
    </div>
  );
}
