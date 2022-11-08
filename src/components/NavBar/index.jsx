import { DivCenter, NavMain } from "./styles"
import Logo from "../../assets/logo-no-background.svg"
import { useNavigate } from "react-router-dom"
import { Button } from "../Button/styles"

const NavBar = () => {
    const navigate = useNavigate()

    function logout(){
        navigate("/login")
    }

    return (
        <NavMain>
            <DivCenter>
                <img src={Logo} alt="logo" />
                <Button width={10} color="b2" onClick={logout}>Sair</Button>
            </DivCenter>
        </NavMain>
    )
}

export default NavBar