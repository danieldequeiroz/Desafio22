//Código de Daniel de Queiroz Cavalcanti
import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com"
});

export default api;
