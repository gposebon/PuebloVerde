import styled from "styled-components"

import Imagen from '../../Recursos/Imagenes/back.jpg'

const Novedades = ()=> {

    return(
        <Wrapper>
            <ContenedorNovedades>
                <NoticiaPrincipal>
                    <ImagenNoticiaPrincipal>
                        
                    </ImagenNoticiaPrincipal>
                </NoticiaPrincipal>
                <NoticiaIzquierda>

                </NoticiaIzquierda>
                <NoticiaCentro>

                </NoticiaCentro>
                <NoticiaDerecha>

                </NoticiaDerecha>
            </ContenedorNovedades>
        </Wrapper>
    )
}

const Wrapper = styled.main`
                            display: flex;
                            flex-direction: column;
                            align-content: center;
                            flex-wrap: wrap;
                            margin: 10px;
                            `;

const ContenedorNovedades = styled.div`
                                display: grid;
                                grid-template-columns: repeat(3, 1fr);
                                grid-template-rows: repeat(5, 1fr);
                                grid-column-gap: 10px;
                                grid-row-gap: 17px;
                                width: 80%;
`;

const NoticiaPrincipal = styled.div`
                                grid-area: 1 / 1 / 3 / 4;
                                background-color: red;
                                width: 100%;
                                display: flex;
                                height: 300px;
`;

const ImagenNoticiaPrincipal = styled.div`
                                width: 30%;
                                height: 90%;
                                background-color: orange;
                                margin: 10px;
`;

const NoticiaIzquierda = styled.div`
                                grid-area: 3 / 1 / 6 / 2;
                                background-color: yellow;
                                width: 100%;
`;

const NoticiaCentro = styled.div`
                                grid-area: 3 / 2 / 6 / 3;
                                background-color: blue;
                                width: 100%;
`;

const NoticiaDerecha = styled.div`
                                grid-area: 3 / 3 / 6 / 4;
                                background-color: brown;
                                width: 100%;
`;
export default Novedades