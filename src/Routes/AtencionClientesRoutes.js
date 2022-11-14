import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AtencionClientes } from '../pages/AtencionClientes/AtencionClientes'
import { AtencionClientesFISA } from '../pages/AtencionClientes/AtencionClientesFISA'
import { AtencionClientesAEF } from '../pages/AtencionClientes/AtencionClientesAEF'

export const AtencionClientesRoutes = () => {
  return (
    <Routes>
        <Route path='AtencionClientes' element={<AtencionClientes />}/>
        <Route path='AtencionClientesFISA' element={<AtencionClientesFISA />}/>
        <Route path='AtencionClientesAEF' element={<AtencionClientesAEF />}/>
    </Routes>
  )
}
