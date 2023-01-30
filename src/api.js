import axios from "axios";


const searchImages = async () => {
    const response = await axios.get( 'https//api.unsplash.com/search/phots', {
        headers: {

            Authorization: 'Client-ID YLQv_0cMErle5_ASKzszRa_pLZAtKo8sJPwYv6KrVys'
        },
        params: {
            query: 'cars'
        }
    });
    return response;
}

export default searchImages;