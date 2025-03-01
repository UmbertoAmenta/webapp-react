import { BrowserRouter, Route, Routes } from "react-router";

// LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/movies/:id" Component={MovieDetailsPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="*" Component={PageNotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
