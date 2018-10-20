import { API_RECENT } from '../client-config';
export const getInstaData = () => dispatch => {
    fetch(API_RECENT)
     .then((response) => { response.json()
        .then((data) => { 
            dispatch({
                type: 'INSTA_DATA',
                payload: data.data
            }) 
        });
    });
   }