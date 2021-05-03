import axios from 'axios';

export const put_data = (key, data) => ({
    type: "PUT_DATA",
    key,
    data
})

export const get_item = () => {
    return (dispatch) => {      
      axios
        .get('/posts')
        .then((resp) => {                        
            console.log(resp.data)
            dispatch(put_data('posts', resp.data))
        })
        .catch((err) => {                       
        })
        .then(() => {
          
        });
    };
};