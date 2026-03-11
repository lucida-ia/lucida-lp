"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Privacy() {
  return (
    <section className="m-auto max-w-5xl mt-40 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
        transition={{ duration: 0.25 }}
        className="flex justify-center flex-col"
      >
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            Política de Privacidade — Lucida
          </h1>
          <p className="mt-3 text-sm text-zinc-600">
            Última atualização: 09 de março de 2026
          </p>
        </header>

        <section className="space-y-6 text-base leading-7 text-zinc-700">
          <p>
            A <strong>Lucida</strong> valoriza a privacidade e a proteção dos
            dados pessoais de seus usuários. Esta Política de Privacidade
            descreve como coletamos, utilizamos, armazenamos e protegemos as
            informações de pessoas que acessam ou utilizam nossa plataforma.
          </p>

          <p>
            Ao utilizar a plataforma Lucida, você concorda com as práticas
            descritas nesta Política.
          </p>
        </section>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              1. Quem somos
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-7">
              <p>
                A <strong>Lucida</strong> é uma plataforma digital voltada à
                criação, gestão e aplicação de avaliações educacionais,
                oferecendo ferramentas para instituições de ensino, empresas e
                profissionais da área educacional.
              </p>
              <p>
                Caso tenha dúvidas sobre esta Política ou sobre o tratamento de
                seus dados pessoais,{" "}
                <Link href={"/contact"} className="text-primary underline">
                  entre em contato conosco
                </Link>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              2. Dados que coletamos
            </h2>
            <div className="mt-4 space-y-6 text-zinc-700 leading-7">
              <p>
                Podemos coletar diferentes tipos de informações para fornecer e
                melhorar nossos serviços.
              </p>

              <div>
                <h3 className="text-xl font-medium text-primary">
                  2.1 Dados fornecidos pelo usuário
                </h3>
                <p className="mt-2">
                  Ao se cadastrar ou utilizar nossa plataforma, podemos coletar:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Telefone</li>
                  <li>Instituição ou empresa vinculada</li>
                  <li>Informações de login (credenciais de acesso)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary">
                  2.2 Dados de uso da plataforma
                </h3>
                <p className="mt-2">
                  Também coletamos automaticamente algumas informações quando
                  você utiliza nossos serviços:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Endereço IP</li>
                  <li>Tipo de dispositivo e navegador</li>
                  <li>Páginas acessadas</li>
                  <li>Tempo de utilização da plataforma</li>
                  <li>Logs de acesso</li>
                </ul>
                <p className="mt-3">
                  Esses dados são utilizados para melhorar a experiência do
                  usuário, segurança e desempenho da plataforma.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary">
                  2.3 Dados de pagamento
                </h3>
                <p className="mt-2">
                  Quando aplicável, pagamentos podem ser processados por{" "}
                  <strong>plataformas terceiras de pagamento</strong>. Nesses
                  casos, a Lucida não armazena dados completos de cartão de
                  crédito ou informações financeiras sensíveis.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              3. Como utilizamos seus dados
            </h2>
            <div className="mt-4 text-zinc-700 leading-7">
              <p>Utilizamos os dados coletados para:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Criar e gerenciar contas de usuários</li>
                <li>Fornecer acesso às funcionalidades da plataforma</li>
                <li>Melhorar a experiência e desempenho do sistema</li>
                <li>Realizar comunicações relacionadas ao serviço</li>
                <li>Prestar suporte ao usuário</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraudes e garantir segurança da plataforma</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              4. Compartilhamento de dados
            </h2>
            <div className="mt-4 space-y-6 text-zinc-700 leading-7">
              <p>
                A Lucida <strong>não vende dados pessoais</strong>.
              </p>
              <p>Podemos compartilhar dados nas seguintes situações:</p>

              <div>
                <h3 className="text-xl font-medium text-primary">
                  4.1 Prestadores de serviço
                </h3>
                <p className="mt-2">
                  Podemos compartilhar dados com empresas parceiras que auxiliam
                  na operação da plataforma, como:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Serviços de hospedagem</li>
                  <li>Processadores de pagamento</li>
                  <li>Ferramentas de analytics</li>
                  <li>Serviços de suporte e comunicação</li>
                </ul>
                <p className="mt-3">
                  Esses parceiros possuem obrigações contratuais de proteção de
                  dados.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary">
                  4.2 Obrigações legais
                </h3>
                <p className="mt-2">
                  Podemos divulgar dados pessoais quando necessário para:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Cumprimento de obrigação legal</li>
                  <li>Atender solicitações de autoridades públicas</li>
                  <li>Proteger direitos da Lucida ou de terceiros</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              5. Armazenamento e segurança dos dados
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-7">
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger os dados pessoais contra:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Acesso não autorizado</li>
                <li>Perda</li>
                <li>Destruição</li>
                <li>Alteração indevida</li>
              </ul>
              <p>
                Apesar de nossos esforços, nenhum sistema é completamente
                seguro. Por isso, recomendamos que os usuários também adotem
                boas práticas de segurança, como manter suas credenciais
                protegidas.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              6. Retenção de dados
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-7">
              <p>
                Os dados pessoais são mantidos apenas pelo tempo necessário
                para:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Cumprir as finalidades descritas nesta política</li>
                <li>Atender obrigações legais ou regulatórias</li>
                <li>Resolver disputas e garantir cumprimento de contratos</li>
              </ul>
              <p>
                Após esse período, os dados poderão ser excluídos ou
                anonimizados.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              7. Direitos dos titulares de dados
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-7">
              <p>
                De acordo com a{" "}
                <strong>Lei Geral de Proteção de Dados (LGPD)</strong>, os
                usuários possuem os seguintes direitos:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>
                  Solicitar anonimização ou exclusão de dados desnecessários
                </li>
                <li>Solicitar portabilidade dos dados</li>
                <li>Revogar consentimento quando aplicável</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              8. Cookies e tecnologias semelhantes
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-7">
              <p>
                Podemos utilizar{" "}
                <strong>cookies e tecnologias similares</strong> para:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Melhorar o funcionamento da plataforma</li>
                <li>Lembrar preferências do usuário</li>
                <li>Analisar o uso da plataforma</li>
              </ul>
              <p>
                O usuário pode configurar seu navegador para bloquear cookies,
                mas isso pode impactar algumas funcionalidades do sistema.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              9. Alterações nesta política
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-7">
              <p>
                Esta Política de Privacidade poderá ser atualizada
                periodicamente para refletir melhorias na plataforma ou mudanças
                legais.
              </p>
              <p>
                Sempre que ocorrerem alterações relevantes, os usuários poderão
                ser notificados através da plataforma ou por e-mail.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              10. Contato
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-7">
              <p>
                Caso tenha qualquer dúvida sobre esta Política de Privacidade ou
                sobre o tratamento de dados pessoais,{" "}
                <Link href={"/contact"} className="text-primary underline">
                  entre em contato conosco.
                </Link>
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </section>
  );
}
