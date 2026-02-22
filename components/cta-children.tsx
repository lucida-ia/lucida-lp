import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTAChildren() {
  return (
    <div className="relative z-20 flex flex-row items-center justify-center text-center max-w-2xl md:px-0 px-10 gap-20">
      <div className="flex flex-col text-start gap-8">
        <h1 className="text-4xl md:text-5xl ">
          Ganhe <span className="font-instrument text-primary">tempo</span> para
          o que mais importa:{" "}
          <span className="font-instrument text-primary">ensinar</span>
        </h1>

        <div className="flex flex-col">
          <Link href={"/prices"}>
            <Button className="rounded-full group cursor-pointer">
              Faça a sua primeira prova agora!
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </div>

      <Image
        src="/ilustrations/Lulu-12.svg"
        width={200}
        height={200}
        alt="CTA Image"
        className="hidden sm:block"
      />
    </div>
  );
}
