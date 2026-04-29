import ComoFunciona from "./components/ComoFunciona";
import ProfesoresMejorEvaluados from "./components/ProfesoresMejorEvaluados";
import Header from "../components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <ComoFunciona />
      <ProfesoresMejorEvaluados />
    </main>
  );
}