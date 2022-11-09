import { ModalContainer, ModalDeleteContainer } from "./styles"
import { Button } from "../Button/styles"
import { useContext, useState } from "react"
import { deletePlaylist } from "../../services/deletePlaylist"
import { MusicsContext } from "../../contexts/musics"

const ModalDelete = ({id, showModal, setShowModal}) => {
    const { setUserPlaylists } = useContext(MusicsContext)

    if(!showModal){
        return (
            <></>
        )
    }

    async function handleClick (del){
        if(del){
           await deletePlaylist(id)
           setUserPlaylists(oldList => oldList.filter(playlist => playlist.id !== id))
        }
        setShowModal(false)
    }

    return (
        <ModalContainer>
            <ModalDeleteContainer>
                <h1>Tens o que é preciso?</h1>
                <div>
                    <Button onClick={(e) => handleClick(false)} className="no" color="white">Não</Button>
                    <Button onClick={(e) => handleClick(true)} color="red">Sim</Button>
                </div>
            </ModalDeleteContainer>
        </ModalContainer>
    )
}

export default ModalDelete