// variant
// indica l'importanza del bottone

export default function Button({ children, variant }) {
  const variants = {
    primary: "bg-[var(--color-primary)] text-[var(--color-secondary)]",
    secondary: "bg-[var(--color-secondary)]",
  };
  return (
    <button
      className={`cursor-pointer hover:scale-115 p-3 rounded-2xl ${variants[variant]}`}
    >
      <strong>{children}</strong>
    </button>
  );
}
