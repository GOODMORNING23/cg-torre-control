import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Footer, Header, Menu } from "../components";
import React from 'react'

const RutaProtegida = () => {
    const { auth, cargando} = useAuth();

  if (cargando) return "cargando";
  return (
    <>
        {auth.id ? (
            <>
                <Header />
                <Menu />
                <Outlet />
                <Footer />
            </>
        ) : 
            <Navigate to="/" />
        }
    </>
  )
}

export default RutaProtegida