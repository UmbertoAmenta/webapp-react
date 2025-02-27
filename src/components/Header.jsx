import Logo from "./ui/Logo";
import Heading from "./ui/Heading";
import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-[var(--color-secondary)]">
      <div className=" mx-auto flex gap-5 items-center max-w-6xl py-3">
        <Link to={import.meta.env.VITE_HOME_URL}>
          <Logo />
        </Link>
        <Heading variant={1}>
          <span className="text-[var(--color-primary)]">BoolMovies 138</span>
        </Heading>
      </div>
    </header>
  );
}
