import axios from "axios";

const KEY = "AIzaSyCT9arYA20OsfcW9Kh57ZTTSrZzCigWOWY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part :"snippet",
        maxResults:5,
        key:KEY
    }
})