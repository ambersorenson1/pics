import axios from "axios";


const searchImages = async (term) => {
    const response = await axios.get( 'https://api.unsplash.com/search/photos', {
        headers: {

            Authorization: 'Client-ID YLQv_0cMErle5_ASKzszRa_pLZAtKo8sJPwYv6KrVys'
        },
        params: {
            query: term,
        }
    });
    const results = await response.data.results
    return results;
}

export default searchImages;