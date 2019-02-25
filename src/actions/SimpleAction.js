import axios from 'axios';

export const getInstaData = (params) => dispatch => {
    axios(`http://localhost:3000/recent`)
        .then((data) => { 
            dispatch({
                type: 'INSTA_DATA',
                payload: data.data.data
            }) 
        });
   }