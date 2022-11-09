import { useState } from "react";
import { createContext } from "react";
import { searchMusic } from "../services/searchMusic";

export const MusicsContext = createContext({})

const MusicsProvider = ({children}) => {
    const [musicsList, setMusicsList] = useState([])
    const [playingMusicId, setPlayingMusicId] = useState("")

    async function handleSearch (value){
        const res = await searchMusic(value)

        setMusicsList(res)
    }   


    return (
        <MusicsContext.Provider value={{musicsList, handleSearch, playingMusicId, setPlayingMusicId}}>
            {children}
        </MusicsContext.Provider>
    )
}   

export default MusicsProvider