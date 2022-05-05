// other
import { Heading } from "./components/heading/Heading";
import { Start } from "./components/start/Start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailPage } from "./components/details/DetailPage";
const xlarge = true;
function App() {
  return (
    <Router>
      <Heading xlarge={xlarge}></Heading>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/:countryParam" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
