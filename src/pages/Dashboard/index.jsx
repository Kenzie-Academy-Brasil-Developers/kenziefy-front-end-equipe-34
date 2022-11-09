import NavBar from "../../components/NavBar"
import Header from "../../components/Header"
import PlayerBar from "../../components/PlayerBar"
import MusicList from "../../components/MusicList"
import MusicsProvider from "../../contexts/musics"
import { useContext } from "react"

const Dashboard = () => {

    return (
        <div>
            <MusicsProvider>
                <NavBar />
                <Header name={"Wilson"} />
                <MusicList />
                <PlayerBar />
            </MusicsProvider>
        </div>
    )
}

export default Dashboard