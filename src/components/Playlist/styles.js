import styled from "styled-components";

const PlaylistContainer = styled.div`
    display: flex;
    justify-content: center ;
    width: 100vw;

    margin-top: 1rem;
`

const DivCenter = styled.div`
    width: 90%;
    height: 200px;
    max-width: 1000px;


    border-top: 1px solid var(--grey-2);   
`

const DivCreatePlaylist = styled.div`   
    padding: 1rem 0;
    display: flex;
    align-items: center ;
    justify-content: space-between;
`

const UlPlaylists = styled.div`
    display: flex;
    gap: 2rem;
`

export { PlaylistContainer, DivCenter, DivCreatePlaylist, UlPlaylists }