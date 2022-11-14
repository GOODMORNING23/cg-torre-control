
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const PrivateRoute = ({children}) => {
    const { auth } = useAuth()

  return (auth.id ? children: <Navigate to="/"/>)
}
