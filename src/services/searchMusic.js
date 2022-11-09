import axios from "axios"

export const searchMusic = async (value) => {
    const response = await axios.get(`https://api.deezer.com/search?q=track:"${value}"`).then(res => res).catch(err => console.error(err))
    return response.data.data
}