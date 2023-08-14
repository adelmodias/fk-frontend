import { Header } from "../Header/";

import { PageWrap, SidebarWrap, ContentWrap } from "./styled";

function PrivateRoute({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <PageWrap>
                    <SidebarWrap>
                        <span>Meu Perfil</span>
                        <span>Notícias</span>
                        <span>Messenger</span>
                        <span>Amigos</span>
                        <span>Comunidades</span>
                        <span>Fotos</span>
                        <span>Favoritos</span>
                    </SidebarWrap>
                    <ContentWrap>{children}</ContentWrap>
                </PageWrap>
            </div>
        </>
    );
}

export { PrivateRoute };
