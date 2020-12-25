import axios from "axios";

const KEY = "AIzaSyBgoeEPqeK2TZUENj_OYh36Hxim-fx9FqE";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part :"snippet",
        maxResults:5,
        key:KEY
    }
})