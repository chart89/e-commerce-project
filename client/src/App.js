import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home";
import MainLayout from "./components/views/MainLayout/MainLayout";
import UpperLine from "./components/views/UpperLine/UpperLine";
import { Routes, Route } from "react-router-dom";
import Gallery from "./components/pages/Gallery/Gallery";
import SingleCar from "./components/features/SingleCar/SingleCar";
import Cart from "./components/pages/Cart/Cart";
import Order from "./components/pages/Order/Order";
import NotFound from "./components/pages/NotFound/NotFound";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Container>
    </>
  );
}

export default App;
