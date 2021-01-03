import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);//state = { videos: [], selectedVideo: null }

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async (term) => {
        const { data } = await youtube.get("/search", {
            params: {
                q: term
            }
        })
        setVideos(data.items);

        // this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    return [videos, search]
}

export default useVideos;