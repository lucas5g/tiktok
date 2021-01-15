import styled from 'styled-components'

export const Container = styled.div`
    width: 592px;
    max-width: 592px;
    position: relative;
    padding-bottom: 25px;
    border-bottom: 0.5px solid rgba(22, 24, 35, .12);
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PersonContainer = styled.div`
    display: flex;
`

export const Avatar = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    width: 56px;
    border-radius: 50%;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 12px;
`

export const Author = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-right: 5px;
    margin-bottom: 5px;
    display: flex;
    :hover{
        text-decoration: underline;
    }
    > span{
        margin-top: 1px;
        margin-left: 4px;
        font-weight: 400;
        font-size: 14px;
        color: var(--black);
    }
`

export const Description = styled.div``

export const Song = styled.div``

export const Tag = styled.div``

export const Content = styled.div``

export const VideoContainer = styled.div``

export const Video = styled.div``

export const ActionsContainer = styled.div``

export const PlayerIcon = styled.div``

export const Actions = styled.div``

export const Action = styled.div``

export const ButtonContainer = styled.div`
    width: 118px;
    height: 28px;
    font-weight: 600;
    font-size: 16px;
`



