import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import api from "../services/api";
import { searchMusic } from "../services/searchMusic";
import { getUserPlaylists } from "../services/searchPlaylists";
import { Contexts } from "./provider";

export const MusicsContext = createContext({})

const MusicsProvider = ({children}) => {
    const [userPlaylists, setUserPlaylists] = useState([])
    const [musicsList, setMusicsList] = useState([])
    const [playingMusicId, setPlayingMusicId] = useState("")

    const { logOut } = useContext(Contexts)

    async function handleSearch (value){
        const res = await searchMusic(value)

        setMusicsList(res)
    }

    useEffect(() => {
        const savePlaylist = async () => {
            api.defaults.headers.authorization = `Bearer ${localStorage.getItem("@KENZIEFY:token")}`;
            
            if(!api.defaults.headers.authorization) logOut()

            const response = await getUserPlaylists()

            setUserPlaylists(response)
        }

        savePlaylist()
    },[])


    return (
        <MusicsContext.Provider value={{musicsList, handleSearch, playingMusicId, setPlayingMusicId, userPlaylists, setUserPlaylists}}>
            {children}
        </MusicsContext.Provider>
    )
}   

export default MusicsProvider