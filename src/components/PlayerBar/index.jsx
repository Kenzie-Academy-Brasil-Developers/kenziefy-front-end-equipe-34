import { Button } from "../Button/styles"
import {  PlayerBarContainer } from "./styles"
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';

const PlayerBar = ({music_id, nextMusicFnc, backMusicFnc}) => {
    return (
        <PlayerBarContainer>
            <Button className="left"><SkipPreviousOutlinedIcon color="primary" onClick={() => nextMusicFnc()} /></Button>
            <Button className="right"><SkipNextOutlinedIcon color="primary" onClick={() => backMusicFnc()}/></Button>
            
            <iframe title="deezer-widget" src={`https://widget.deezer.com/widget/dark/track/${music_id}`} width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        </PlayerBarContainer>
    )
}

export default PlayerBar