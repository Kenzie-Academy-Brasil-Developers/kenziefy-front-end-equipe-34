import { TextField } from "@mui/material"
import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { MusicsContext } from "../../contexts/musics"
import { searchMusic } from "../../services/searchMusic"
import MusicCard from "../MusicCard"
import { DivCenter, MainContainer, MusicContainer } from "./styles"

const MusicList = () => {
    const { handleSearch, musicsList} = useContext(MusicsContext)
    
    function changeList (value) {
        handleSearch(value)
    }


    return (
        <MainContainer>
            <DivCenter>
                <div>
                    <h1>Músicas</h1>
                    <TextField id="filled-basic" label="Busque sua música" variant="filled" sx={{input: {color:'white'}}} onChange={(e) => changeList(e.target.value)} />           
                </div>
                <MusicContainer>
                    { musicsList && musicsList.map((music) => <MusicCard music={music} key={music.id}/>)}
                </MusicContainer>
            </DivCenter>
        </MainContainer>
    )
}

export default MusicList