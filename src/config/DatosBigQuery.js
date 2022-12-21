import axios from "axios";

const DatosBigquery = axios.create({
  baseURL: `${process.env.REACT_APP_API_DATOS_BIGQUERY}/api`,
});

export default DatosBigquery;