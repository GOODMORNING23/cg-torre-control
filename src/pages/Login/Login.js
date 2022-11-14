import React, { useState } from "react";
import Swal from 'sweetalert2';
import UsuarioAxios from "../../config/UsuarioAxios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom"


export const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const { setAuth } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault();

        if ([usuario, password].includes('')) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
            })
            return
        }
        try {
            const { data } = await UsuarioAxios.post(`/login`, {usuario, password})
            localStorage.setItem('token', data.token)

            setAuth(data)

            Swal.fire({
                icon: 'success',
                title: 'Bienvenido !!',
                text: data.nombre
            })
            navigate('/home')
            setUsuario('')
            setPassword('')
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!!',
                text: error.response.data.respuesta
            })
        }
    }


  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <p className="h1">
              <b>Torre de Control</b> COA
            </p>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Inicia Sesion Aqui !!</p>
            <form onSubmit={handleSubmit}  method="post">
              <div className="input-group mb-3">
                <input
                  type="usuario"
                  className="form-control"
                  placeholder="ej. saguilarda"
                  value={usuario}
                  onChange={e => setUsuario(e.target.value)}

                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Iniciar Sesion
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
