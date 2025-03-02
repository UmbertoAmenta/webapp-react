// variant
// indica il livello d'importanza dell'intestazione, da 1 (il più importante) a 6

export default function Heading({ children, variant }) {
  if (variant === 1) {
    return <h1 className="text-2xl md:text-4xl font-bold">{children}</h1>;
  }

  if (variant === 2) {
    return <h2 className="text-xl md:text-3xl font-bold">{children}</h2>;
  }

  if (variant === 3) {
    return <h3 className="text-lg md:text-2xl font-semibold">{children}</h3>;
  }
  if (variant === 4) {
    return <h4 className="text-base md:text-xl font-medium">{children}</h4>;
  }

  if (variant === 5) {
    return <h5 className="text-sm md:text-lg font-medium">{children}</h5>;
  }

  if (variant === 6) {
    return <h6 className="text-sm md:text-md font-medium">{children}</h6>;
  }
}
