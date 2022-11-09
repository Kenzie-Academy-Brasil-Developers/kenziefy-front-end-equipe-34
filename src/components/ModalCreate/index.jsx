import { TextField } from "@mui/material"
import { useContext, useState } from "react"
import { MusicsContext } from "../../contexts/musics"
import { createPlaylist } from "../../services/createPlaylist"
import { Button } from "../Button/styles"
import { ModalContainer } from "../ModalDelete/styles"
import { ModalCreateContainer } from "./styles"

const ModalCreate = ({showModal, setShowModal}) => {
    const { setUserPlaylists } = useContext(MusicsContext)
    const [name, setName] = useState("")

    if(!showModal){
        return (
            <></>
        )
    }

    async function handleClick (adc){
        if(adc){
            const newPlaylist = await createPlaylist(name)
            console.log(newPlaylist)
            setUserPlaylists(oldList => [...oldList, newPlaylist])
        }
        setShowModal(false)
    }

    return (
        <ModalContainer>
            <ModalCreateContainer>
                <h1>Nome</h1>
                <TextField onChange={(e) => setName(e.target.value)}/>
                <Button onClick={(e) => handleClick(true)} className="no" color="white">Criar</Button>
                <Button onClick={(e) => handleClick(false)} color="red">Cancelar</Button>
            </ModalCreateContainer>
        </ModalContainer>
    )
}

export default ModalCreate