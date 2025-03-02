import { NavLink, Link } from "react-router";

// UI
import Logo from "./ui/Logo";
import Heading from "./ui/Heading";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-[var(--color-secondary)]">
      <div className="flex flex-col sm:flex-row gap-5 justify-between items-center mx-auto max-w-6xl px-3">
        <div className="flex items-center py-3 gap-5">
          <Link to={import.meta.env.VITE_HOME_URL}>
            <Logo />
          </Link>
          <Heading variant={1}>
            <span className="text-[var(--color-primary)] md">
              BoolMovies 138
            </span>
          </Heading>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  );
}
