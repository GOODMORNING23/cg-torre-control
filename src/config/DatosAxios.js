import axios from "axios";

const DatosAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_DATOS}/api`,
});

export default DatosAxios;
