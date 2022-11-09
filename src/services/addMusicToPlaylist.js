import api from "./api"

export const addMusicToPlaylist = async (playlist_id, name) => {
    console.log(playlist_id, name)

    const response = await api.post(`/song/${playlist_id}`, {name}).then(res => res).catch(err => console.error(err))
    return response.data
}