import { useContext, useState } from "react";
import { DivImage, DivPlay, MusicCardContainer } from "./styles"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LongMenu from "../LongMenu";
import { MusicsContext } from "../../contexts/musics";
import ModalAdd from "../ModalAdd";

const MusicCard = ({music}) => {
    const [isShown, setIsShown] = useState(false)
    const [showModal, setShowModal] = useState(false)


    const {setPlayingMusicId} = useContext(MusicsContext)

    return (
        <MusicCardContainer onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={(e) => setPlayingMusicId(music.id)}>
            <figure>
                <DivImage>
                    {isShown &&
                        <DivPlay>
                            <PlayArrowIcon/>
                        </DivPlay>
                    }
                    <img src={`https://e-cdns-images.dzcdn.net/images/cover/${music.md5_image}/56x56-000000-80-0-0.jpg`} alt=""/>
                </DivImage>
                <figcaption>
                    <h1>{music.title_short}</h1>
                    <span>{music.artist.name}</span>
                </figcaption>
                <LongMenu isShown={isShown} setShowModal={setShowModal}/>
            </figure>
            <ModalAdd showModal={showModal} setShowModal={setShowModal} song_name={music.title} />
        </MusicCardContainer>
    )
}

export default MusicCard