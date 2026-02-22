export default function TestemonialCard({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) {
  return (
    <div>
      <span>{name}</span>
      <span>{role}</span>
      <p>{text}</p>
    </div>
  );
}
