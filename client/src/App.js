import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home";
import MainLayout from "./components/views/MainLayout/MainLayout";
import UpperLine from "./components/views/UpperLine/UpperLine";
import { Routes, Route } from "react-router-dom";
import Gallery from "./components/pages/Gallery/Gallery";
import SingleCar from "./components/features/SingleCar/SingleCar";


function App() {
  return (
    <>
    <UpperLine />
    <Container>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<SingleCar />} />
        </Routes>
      </MainLayout>
    </Container>
    </>
  );
}

export default App;
