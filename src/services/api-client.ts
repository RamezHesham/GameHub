import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key:'ae4da831895544e29b99a55f411ab5f0'

    }

})