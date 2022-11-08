import NavBar from "../../components/NavBar"
import Header from "../../components/Header"
import PlayerBar from "../../components/PlayerBar"

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <Header name={"Wilson"}/>
            <PlayerBar music_id={"1795032347"}></PlayerBar>
        </div>
    )
}

export default Dashboard