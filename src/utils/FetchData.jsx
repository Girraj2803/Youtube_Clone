import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com' 
const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'c1384bc159msh739cf287b654a18p1c5cdbjsn0c77fc4d3ed3',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};
export const FetchData = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    //  console.log(response.data);
     return data;
}
