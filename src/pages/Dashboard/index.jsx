import NavBar from "../../components/NavBar"
import Header from "../../components/Header"
import PlayerBar from "../../components/PlayerBar"
import MusicList from "../../components/MusicList"
import MusicsProvider from "../../contexts/musics"
import Playlist from "../../components/Playlist"

const Dashboard = () => {

    return (
        <div>
            <MusicsProvider>
                <NavBar />
                <Header name={"Wilson"} />
                <MusicList />
                <PlayerBar />
                <Playlist />
            </MusicsProvider>
        </div>
    )
}

export default Dashboard