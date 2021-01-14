import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, ContentContainer, SidebarContainer } from "./styles";

export default function Layout({ children }){
    return (
        <>
            <Header></Header>
            <Container>
                <SidebarContainer>
                    <Sidebar></Sidebar>
                </SidebarContainer>
                <ContentContainer>
                    {children}
                </ContentContainer>
            </Container>
        </>
    )
}