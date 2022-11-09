import api from "./api"

export const createPlaylist = async (name) => {
    const response = await api.post("/playlist", {name}).then(res => res).catch(err => console.error(err))
    return response.data
}