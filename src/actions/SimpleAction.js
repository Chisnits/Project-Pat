import axios from 'axios';

export const getInstaData = (params) => dispatch => {
    axios(`http://localhost:8080/api/instagramData/${params}`)
     .then((response) => { response
        .then((data) => { 
            dispatch({
                type: 'INSTA_DATA',
                payload: data.data
            }) 
        });
    });
   }