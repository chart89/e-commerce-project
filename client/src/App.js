import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home";
import MainLayout from "./components/views/MainLayout/MainLayout";
import UpperLine from "./components/views/UpperLine/UpperLine";
import { Routes, Route } from "react-router-dom";
import Gallery from "./components/pages/Gallery/Gallery";


function App() {
  return (
    <>
    <UpperLine />
    <Container>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </MainLayout>
    </Container>
    </>
  );
}

export default App;
