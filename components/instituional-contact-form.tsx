"use client";

import * as React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type ContactFormValues = {
  name: string;
  instituion: string;
  type: string;
  email: string;
  phone: string; // guardamos já formatado: "(99) 99999-9999"
  message: string;
};

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

/**
 * Formata telefone BR enquanto digita:
 * - Limita a 11 dígitos
 * - (DD) 9XXXX-XXXX (11 dígitos) ou (DD) XXXX-XXXX (10 dígitos)
 */

function formatBRPhone(raw: string) {
  const d = digitsOnly(raw).slice(0, 11);

  const ddd = d.slice(0, 2);
  const isMobile = d.length >= 11; // quando tiver 11 dígitos, assume celular
  const part1 = d.slice(2, isMobile ? 7 : 6);
  const part2 = d.slice(isMobile ? 7 : 6);

  if (!ddd) return "";
  if (d.length <= 2) return `(${ddd}`;
  if (!part1) return `(${ddd})`;
  if (!part2) return `(${ddd}) ${part1}`;
  return `(${ddd}) ${part1}-${part2}`;
}

export function InstitutionalContactForm() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      instituion: "",
      type: "",
      phone: "",
      message: "",
    },
    mode: "onBlur",
  });

  const isSubmitting = form.formState.isSubmitting;
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    setSubmitSuccess(false);

    const res = await fetch("/api/contact/institution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setSubmitError(
        data.error ?? "Falha ao enviar mensagem. Tente novamente mais tarde.",
      );
      return;
    }

    setSubmitSuccess(true);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Nome */}
        <FormField
          control={form.control}
          name="name"
          rules={{
            required: "Informe seu nome.",
            minLength: { value: 2, message: "Digite pelo menos 2 caracteres." },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tipo */}
        <FormField
          control={form.control}
          name="type"
          rules={{
            required: "Informe o tipo da sua Instituição ou Empresa.",
            minLength: {
              value: 2,
              message: "Digite pelo menos 2 caracteres.",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo da instituição</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="escola">Escola</SelectItem>
                    <SelectItem value="cursinho">Cursinho</SelectItem>
                    <SelectItem value="universidade">Universidade</SelectItem>
                    <SelectItem value="empresa">Empresa</SelectItem>
                    <SelectItem value="outra">Outra</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Instituição/Empresa */}
        <FormField
          control={form.control}
          name="instituion"
          rules={{
            required: "Informe o nome da sua Instituição ou Empresa.",
            minLength: {
              value: 2,
              message: "Digite pelo menos 2 caracteres.",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da instituição</FormLabel>
              <FormControl>
                <Input
                  placeholder="Sua instituição/empresa"
                  autoComplete="institution"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Informe seu email.",
            validate: (v) =>
              v.includes("@") || "Email inválido (precisa ter @).",
            pattern: {
              // Simples e suficiente pro seu requisito
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email inválido.",
            },
          }}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl className="w-full">
                <Input
                  className="w-full"
                  placeholder="voce@exemplo.com"
                  autoComplete="email"
                  inputMode="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Número (máscara manual + limite de dígitos) */}
        <FormField
          control={form.control}
          name="phone"
          rules={{
            required: "Informe seu número.",
            validate: (v) => {
              const digits = digitsOnly(v);

              // BR: DDD (2) + 8/9 => 10 ou 11
              if (digits.length < 10) return "Número incompleto.";
              if (digits.length > 11) return "Número muito longo.";
              return true;
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número</FormLabel>
              <FormControl>
                <Input
                  placeholder="(00) 00000-0000"
                  autoComplete="tel"
                  inputMode="tel"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(formatBRPhone(e.target.value));
                  }}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <p className="text-xs text-muted-foreground">
                Use DDD + número (10 ou 11 dígitos).
              </p>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mensagem */}
        <FormField
          control={form.control}
          name="message"
          rules={{
            required: "Escreva sua mensagem.",
            minLength: {
              value: 10,
              message: "Digite pelo menos 10 caracteres.",
            },
            maxLength: {
              value: 2000,
              message: "Mensagem muito longa (máx. 2000 caracteres).",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escreva aqui sua mensagem…"
                  className="min-h-30"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {submitError && (
          <p className="text-sm text-destructive">{submitError}</p>
        )}
        {submitSuccess && (
          <p className="text-sm text-green-600">
            Mensagem enviada com sucesso! Em breve entraremos em contato.
          </p>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Enviando..." : "Enviar mensagem"}
        </Button>
      </form>
    </Form>
  );
}
