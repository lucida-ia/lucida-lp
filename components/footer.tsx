import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pt-8 text-sm text-white bg-primary h-[30vh] justify-between">
      <div className="w-full max-w-5xl flex flex-row justify-between h-full md-px-0 px-6 text-xs md:text-sm">
        <Image
          className=" hidden sm:flex sm:w-36 h-auto self-start "
          src="/logos/logo-02.svg"
          width={150}
          height={150}
          alt="Lucida Logo"
        />

        <div className="flex flex-col gap-1">
          <h5 className="font-bold">Sobre</h5>
          <div className="flex flex-col">
            <Link href="https://www.instagram.com/lucida.ia/" target="_blank">
              Sobre nós
            </Link>
            <Link href="/contact">Contato</Link>
            <Link href="/contact/institutions">Para instituições</Link>
            <Link href="/privacy">Política de Privacidade</Link>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h5 className="font-bold">Social & Contato</h5>
          <div className="flex flex-col">
            <Link href="https://www.instagram.com/lucida.ia/" target="_blank">
              Instagram
            </Link>
            <Link
              href="https://wa.me/5515991668848?text=Olá,%20vim%20pelo%20site%20da%20Lucida%20e%20quero%20saber%20mais."
              target="_blank"
            >
              WhatsApp
            </Link>
            <Link href="mailto:contato@lucidaexam.com" target="_blank">
              Email
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t w-full">
        <span className="flex justify-center items-center text-xs h-full py-2">
          &copy; {new Date().getFullYear()} Lucida. Todos os direitos
          reservados.
        </span>
      </div>
    </footer>
  );
}
