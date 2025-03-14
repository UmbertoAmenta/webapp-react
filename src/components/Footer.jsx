import Heading from "./ui/Heading";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] mt-auto">
      <section className="mx-auto max-w-6xl py-5 px-3">
        <Heading variant={4}>
          <span className="text-[var(--color-primary)]">
            For Boolean with &lt;code&gt;
          </span>
        </Heading>
      </section>
    </footer>
  );
}
