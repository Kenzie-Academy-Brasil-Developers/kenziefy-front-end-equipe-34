import { HeaderMain } from "./styles"
import { CircularProgress } from '@mui/material'

const Header = ({name}) => {
    return (
        <HeaderMain>
            <div>
                {name ? <h1>Olá, {name}</h1> : <CircularProgress/>}
            </div>
        </HeaderMain>
    )
}

export default Header