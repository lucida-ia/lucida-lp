import Link from "next/link";
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

      <Link href={"/contact"} className="w-full">
        <Button variant={"outline"} className="w-full">
          Entre em Contato
        </Button>
      </Link>
    </div>
  );
}
