import { Link } from "react-router";

// UI
import Button from "../components/ui/Button";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md py-10">
      <div className="bg-white p-10 rounded-3xl space-y-3">
        <h1 className="mt-3 text-center">Effettua il Login</h1>
        <form id="loginForm" className="space-y-2 text-center">
          <div className="border-1 px-3  py-1 rounded-3xl space-x-2">
            <label htmlFor="email">Inserisci email</label>
            <input type="email" id="email" placeholder="..." />
          </div>
          <div className="border-1 px-3  py-1 rounded-3xl space-x-2">
            <label htmlFor="password">Inserisci password</label>
            <input type="password" id="password" placeholder="###" />
          </div>

          <Button variant="secondary" style="mt-4">
            Accedi
          </Button>
        </form>
      </div>
    </main>
  );
}
