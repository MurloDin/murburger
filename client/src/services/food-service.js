import axios from 'axios';


export default class FoodService {

    getFood() {
        const apiUrl = 'http://localhost:8000/api/food';
        const data = axios.get(apiUrl).then((resp) => {
            return resp.data;
        });
        console.log(
            data
        )
        return data
    };
    //refact
    getComments() {
        const apiUrl = 'http://localhost:8000/api/comments';
        return axios.get(apiUrl).then((resp) => {
            return resp.data;
        });
    };

    postOrder(data) {
        const apiUrl = 'http://localhost:8000/api/order';
        axios.post(apiUrl, data).then((resp) => console.log('r', resp))
    }
}
