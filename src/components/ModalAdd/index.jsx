import { useContext, useState } from "react"
import { MusicsContext } from "../../contexts/musics"
import { addMusicToPlaylist } from "../../services/addMusicToPlaylist"
import { Button } from "../Button/styles"
import { ModalCreateContainer } from "../ModalCreate/styles"
import { ModalContainer } from "../ModalDelete/styles"

const ModalAdd = ({showModal, song_name, setShowModal}) => {

    const [value, setValue] = useState("")

    const { userPlaylists } = useContext(MusicsContext)

    async function handleChange(e, add){
        e.preventDefault()
        if(add){
            await addMusicToPlaylist(value, song_name)
        }
        setShowModal(false)
    }

    if(!showModal){
        return <></>
    }

    return (
        <ModalContainer>
            <ModalCreateContainer>
                <select value={value} onChange={(e) => {setValue(e.target.value)}}>
                    {userPlaylists?.map(playlist => <option value={playlist.id} key={playlist.id}>{playlist.name}</option>)}
                </select>
                <div>
                    <Button onClick={(e) => handleChange(e, true)} className="no" color="white">Adicionar</Button>
                    <Button onClick={(e) => handleChange(e, false)} color="red">Cancelar</Button>
                </div>
            </ModalCreateContainer>
        </ModalContainer>
    )
}

export default ModalAdd