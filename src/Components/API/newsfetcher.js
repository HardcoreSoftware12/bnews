import axios from "axios"

const api_url = process.env.REACT_APP_API_URL

const api_key = process.env.REACT_APP_API_KEY;



const baseUrl = `${api_url}&apiKey=${api_key}`



//date format yyyy-mm-dd
function fetchDate(){
    
let today = new Date();
let day = today.getDate();
let month = today.getMonth() +1;
let year = today.getFullYear();

// let from,to = yea;
let from = year+"-"+month+"-"+day
let to = year+"-"+month+"-"+day
console.log(from,to)

return {from,to}

}





const fetchByCategory = async (category)=>{
    let {from,to} = await fetchDate();
    try {
        const res = await axios.get(`${baseUrl}&from=${from}&to=${to}&category=${category}&q=india`)
        return res.data.articles;
        
    } catch (error) {
        console.error("errro in fetching data")
        
    }

}

export default fetchByCategory;