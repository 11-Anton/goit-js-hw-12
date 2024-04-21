import axios from 'axios';

const API_KEY = '43487203-09c4de35c13c8e4f76d56d253'
const URL = 'https://pixabay.com/api/'

export default async function getImagesFromApi(textForm = '', page, perPage) {
    const parameters = new URLSearchParams({
        per_page: perPage,
        page,
        key: API_KEY,
        q: textForm,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true'
    });
 
    const { data } = await axios.get(`${URL}?${parameters}`);

    return data;

}