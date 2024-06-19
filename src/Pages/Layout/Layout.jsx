import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../../Components/Container/Container";
import { Header } from "../../Components/Header/Header";

export const Layout = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Container>
          <Header/>
          <Outlet />
        </Container>
      </Suspense>
    </div>
  );
};
