import axios from "axios"

const api_url = process.env.REACT_APP_API_URL

const api_key = process.env.REACT_APP_API_KEY;

const baseUrl = api_url+"&apiKey="+api_key
console.log(api_key);
console.log(api_url);


//date format yyyy-mm-dd
let today = new Date();
let day = today.getDate();
let month = today.getMonth() +1;
let year = today.getFullYear();

// let from,to = yea;
console.log(year+"-"+month+"-"+day);
let from,to = year+"-"+month+"-"+day

const fetchByCategory = (category)=>{
    try {
        const res = axios.get(baseUrl)
        const data = res.data()
        console.log(data);
        
    } catch (error) {
        console.error("errro in fetching data")
        
    }

}

export default fetchByCategory;