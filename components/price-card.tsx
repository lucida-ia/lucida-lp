import { Button } from "./ui/button";

export default function PriceCard({
  title,
  description,
  price,
  period,
  planText,
}: {
  title: string;
  description: string;
  price: string;
  period?: string;
  planText: string;
}) {
  return (
    <div className="border rounded-lg p-6 flex flex-col gap-6">
      <div>
        <span className=" text-2xl">{title}</span>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div>
        <span className="font-instrument text-4xl">{price}</span>
        <p className="text-sm">{period}</p>
        <p className="text-sm text-gray-500">{planText}</p>
      </div>

      <Button>Escolher Plano</Button>
    </div>
  );
}
