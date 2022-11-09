import { Button } from "@mui/material"
import { useContext, useState } from "react"
import { MusicsContext } from "../../contexts/musics"
import ModalCreate from "../ModalCreate"
import PlaylistCard from "../PlaylistCard"
import { DivCenter, DivCreatePlaylist, PlaylistContainer, UlPlaylists } from "./styles"

const Playlist = () => {
    const { userPlaylists } = useContext(MusicsContext)
    const [ showModal, setShowModal ] = useState(false)

    return (
        <PlaylistContainer> 
            <DivCenter>
                <DivCreatePlaylist>
                    <h1>Suas playlists</h1>
                    <Button onClick={(e) => setShowModal(true)}>Criar playlist</Button>
                </DivCreatePlaylist>
                <UlPlaylists>
                    {userPlaylists?.map(playlist => <PlaylistCard key={playlist.id} playlist={playlist} />)}
                </UlPlaylists>
            </DivCenter>
            <ModalCreate showModal={showModal} setShowModal={setShowModal} />
        </PlaylistContainer>
    )
}

export default Playlist