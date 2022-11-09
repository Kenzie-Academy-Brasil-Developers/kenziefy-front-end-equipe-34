import api from "./api";

export const getUserPlaylists = async () => {
    const response = await api.get("/playlist/me").then(res => res).catch(err => console.error(err))
    return response.data
}

