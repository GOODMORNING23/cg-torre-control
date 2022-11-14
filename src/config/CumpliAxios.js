import axios from "axios";

const CumpliAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_DATOS_CUMPLIMIENTO}/api`,
});

export default CumpliAxios;
