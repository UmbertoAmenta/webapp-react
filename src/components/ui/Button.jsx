// variant
// indica l'importanza del bottone

export default function Button({ children, variant, style }) {
  const variants = {
    primary: "bg-[var(--color-primary)] text-[var(--color-secondary)]",
    secondary: "bg-[var(--color-secondary)] text-[var(--color-primary)]",
  };
  return (
    <button
      className={`cursor-pointer hover:scale-115 p-3 rounded-2xl ${variants[variant]} ${style}`}
    >
      <strong>{children}</strong>
    </button>
  );
}
