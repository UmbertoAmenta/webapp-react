import { NavLink } from "react-router";
import Heading from "./ui/Heading";

export default function NavBar() {
  return (
    <nav className="flex gap-10">
      <NavLink to={"/"}>
        <Heading variant={5}>HomePage</Heading>
      </NavLink>

      <NavLink to="/login">
        <Heading variant={5}>Login</Heading>
      </NavLink>
    </nav>
  );
}
