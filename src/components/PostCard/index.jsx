import { useRef, useState } from 'react'

import { Action, Actions, ActionsContainer, Author, Avatar, ButtonContainer, Container, Content, Description, Header, Info, PersonContainer, PlayerIcon, Song, Video, VideoContainer } from "./styles";
import Button from '../Button'


function PostCart({ post }){
    const videoRef = useRef()
    const [running, setRunning] = useState(false)

    const toggleAction = () => {
        if(videoRef?.current != null){
            if(!running) videoRef.current.play()
            else videoRef.current.pause()

            setRunning(!running)
        }
    }
    return (
        <Container>
            <Header>
                <PersonContainer>
                    <Avatar src={post?.author?.avatar}></Avatar>
                    <Info>
                        <Author>
                            {post?.author?.avatar}
                            <span>
                                {post?.author?.name}
                            </span>
                        </Author>
                        <Description>
                            <span>
                                {post?.description}
                            </span>
                            {post?.tags?.map((tag, index) => (
                                <Tag key={index}>{tag.title}</Tag>
                            ))}
                        </Description>
                    </Info>
                </PersonContainer>
                <ButtonContainer>
                    <Button fontSize={14} outlined>
                        Seguir
                    </Button>
                </ButtonContainer>
            </Header>
            <Content>
                <Song>
                    <img src='/images/songIcon.svg'/>
                    <a href="">{post?.songName}</a>            
                </Song>
                <VideoContainer>
                    <Video
                        ref={videoRef} 
                        src={post?.videoRef}
                        webkit-playsinline={true}
                        playsinline=''
                        loop=''
                        preload='medata'
                        />
                    <ActionsContainer onClick={toggleAction}>
                        <PlayerIcon 
                            src={running ? '/images/pauseIcon.svg' : '/images/playIcon.svg'}
                            />
                    </ActionsContainer>
                </VideoContainer>
            </Content>
            <Actions>
                <Action>
                    <img src="/images/heartIcon.svg" alt=" "/>
                    <a href="">{post?.comments}</a>
                </Action>
                <Action>
                    <img src="/images/bubbleIcon.svg" alt=" "/>
                    <a href="">{post?.comments}</a>
                </Action>
                <Action>
                    <img src="/images/arrowIcon.svg" alt=" "/>
                    <a href="">{post?.comments}</a>
                </Action>

            </Actions>
        </Container>
    )
}

export default PostCart