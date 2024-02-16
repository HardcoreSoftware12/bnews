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

return {from,to}

}



// export const homePageNews = async ()=>{
//     let {from,to} = await fetchDate();
//     try {
//         const res = await axios.get(`${baseUrl}&from=${from}&to=${to}&q=india`)//15 results
//         return res.data.articles;
        
//     } catch (error) {
//         console.error("errro in fetching data")
        
//     }

// }

const fetchByCategory = async (category)=>{
    let {from,to} = await fetchDate();
    try {
        const res = await axios.get(`${baseUrl}&from=${from}&to=${to}&category=${category}`)
        // console.log(`${baseUrl}&from=${from}&to=${to}&category=${category}`);
        // console.log(res.data.articles);
        return res.data.articles;
        
    } catch (error) {
        console.error("errro in fetching data")
        
    }

}

export default fetchByCategory;