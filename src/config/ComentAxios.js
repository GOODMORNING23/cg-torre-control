import axios from "axios";

const ComentAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_DATOS_COMENTARIOS}/api`,
});

export default ComentAxios;
