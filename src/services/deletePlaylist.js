import api from "./api"

export const deletePlaylist = async (id) => {
    const response = await api.delete(`/playlist/${id}`).then(res => res).catch(err => console.error(err))
    return response.data
}