import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Header, Menu, Footer } from "../components";

export const AtencionClientesLayout = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.id ? (
        <>
          <Header />
          <Menu />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
