import axios from 'axios';

export async function getImages(
    keywordOfSearch,
    quantityPerPage,
    pageNumber = 1
) {
    const config = {
        url: 'https://pixabay.com/api/',
        params: {
            key: '39346778-a3a2b3c2d1dad9f1bbeaace91',
            q: keywordOfSearch,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: pageNumber,
            per_page: quantityPerPage,
        },
    };
    const response = await axios(config);
    return response.data;
}
