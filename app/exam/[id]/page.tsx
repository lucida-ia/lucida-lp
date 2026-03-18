import { redirect } from "next/navigation";

export default async function ExamPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const examBaseUrl = "https://app.lucidaexam.com/exam";

  const searchParamsObject = await searchParams;

  const searchParamsString = Object.entries(searchParamsObject)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  redirect(`${examBaseUrl}/${(await params).id}?${searchParamsString}`);
}
