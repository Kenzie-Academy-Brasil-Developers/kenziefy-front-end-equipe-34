import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react"
import { DivMoreOptions, Gap, PlaylistCardContainer } from "./styles"
import ModalDelete from '../ModalDelete';

const PlaylistCard = ({playlist}) => {
    const [isShown, setIsShown] = useState()
    const [showModal, setShowModal] = useState(false)

        
    return (
        <Gap>
            <PlaylistCardContainer onMouseEnter={(e) => setIsShown(true)} onMouseLeave={(e) => setIsShown(false)}> 
                <div>
                    <img src="https://e-cdns-images.dzcdn.net/images/cover/12487f1d3b02a66a2e691f334cdbfb5c/56x56-000000-80-0-0.jpg" alt=""  />
                    <img src="https://e-cdns-images.dzcdn.net/images/cover/12487f1d3b02a66a2e691f334cdbfb5c/56x56-000000-80-0-0.jpg" alt=""  />
                </div>
                <div>
                    <img src="https://e-cdns-images.dzcdn.net/images/cover/12487f1d3b02a66a2e691f334cdbfb5c/56x56-000000-80-0-0.jpg" alt=""  />
                    <img src="https://e-cdns-images.dzcdn.net/images/cover/12487f1d3b02a66a2e691f334cdbfb5c/56x56-000000-80-0-0.jpg" alt=""  />
                </div>
                <DivMoreOptions isShown={isShown}>
                    <PlayArrowIcon sx={{fontSize: 56}}/>
                    <DeleteIcon className='trash' onClick={(e) => setShowModal(true)} />
                </DivMoreOptions>
            </PlaylistCardContainer>
            <span>
                <h1>{playlist.name}</h1>
                <span>{playlist?.song?.length} Músicas</span>
            </span>
            <ModalDelete id={playlist.id} showModal={showModal} setShowModal={setShowModal} />
        </Gap>
    )
}

export default PlaylistCard