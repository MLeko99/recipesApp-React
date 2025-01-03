import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import RecipeOverview from "./pages/RecipeOverview";
import RecipeDetails from "./pages/RecipeDetails";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h2">Recipe App</Typography>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeOverview />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
