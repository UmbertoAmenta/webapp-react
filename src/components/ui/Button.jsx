// variant
// indica l'importanza del bottone

export default function Button({ children, variant }) {
  const variants = {
    primary: "bg-lime-800",
    secondary: "bg-yellow-300",
  };
  return (
    <button className={`p-5 rounded-2xl  ${variants[variant]}`}>
      {children}
    </button>
  );
}
