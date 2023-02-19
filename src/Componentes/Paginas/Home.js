import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from 'axios'

import { UilShoppingCartAlt, UilHeart, UilSearch  } from '@iconscout/react-unicons'

import Imagen from '../../Recursos/Imagenes/back.jpg'
import Tomate from '../../Recursos/Imagenes/tomate.jpg'
import Chaucha from '../../Recursos/Imagenes/chaucha.png'

const Home = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const getProductos = async () => {
          const { data } = await axios.get(
            "https://api.puebloverde.com.ar/productosactivos"
          );
      
          setProductos(data);
        };
      
        getProductos();
      }, []);

    return (

       
                <ContainerFluid>
                    <TituloProducto>
                        <span class="bg-secondary pr-3">Featured Products</span>
                    </TituloProducto>
                    <Fila>
                        <Col3>
                            <ProductItem>
                                <ProductImg>
                                    <Img />
                                    <ProductAction>
                                        <a class="btn btn-outline-dark btn-square" href="">
                                            <UilShoppingCartAlt />
                                        </a>
                                        <a class="btn btn-outline-dark btn-square" href="">
                                            <UilSearch />
                                        </a>
                                    </ProductAction>
                                </ProductImg>
                                <div class="text-center py-4">
                                    <a class="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                    <div class="d-flex align-items-center justify-content-center mt-2">
                                        <h5>$123.00</h5><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-center mb-1">
                                        <small class="fa fa-star text-primary mr-1"></small>
                                        <small class="fa fa-star text-primary mr-1"></small>
                                        <small class="fa fa-star text-primary mr-1"></small>
                                        <small class="fa fa-star text-primary mr-1"></small>
                                        <small class="fa fa-star text-primary mr-1"></small>
                                        <small>(99)</small>
                                    </div>
                                </div>
                            </ProductItem>
                        </Col3>
                    </Fila>
                </ContainerFluid>
    )
}

const ContainerFluid = styled.div.attrs(() => ({
    className: 'container-fluid pt-5 pb-3',
  }))
  ` `;

  const Fila = styled.div.attrs( () => ({
    className: 'row px-xl-5'
  }))
  ` `;

  const Col3 = styled.div.attrs( () => ({
        className: 'col-lg-3 col-md-4 col-sm-6 pb-1'
  }))
  ` `;

  const TituloProducto = styled.h2.attrs( () => ({
        className: 'section-title position-relative text-uppercase mx-xl-5 mb-4'
  }))
  ` `;

  const ProductItem = styled.div.attrs( ()=> ({
    className: 'bg-light mb-4'
  }))
  `
  transition: .5s;

    &:hover {
        box-shadow: 0 0 30px #DDDDDD;
        background: rgba(255, 255, 255, 0.7);
        transform: scale(1.2);
        color: #FFD333 !important
        
        &:nth-child(1) {
            opacity: 1;
            margin-top: 0;
            transition: .3s 0s;
        }

        &:nth-child(2) {
            opacity: 1;
            margin-top: 0;
            transition: .3s .05s;
        }
        
        &:nth-child(3) {
            opacity: 1;
            margin-top: 0;
            transition: .3s .1s;
        }

        &:nth-child(4) {
            opacity: 1;
            margin-top: 0;
            transition: .3s .15s;
        }
    }
  `;

  const ProductImg = styled.div.attrs( () => ({
    className: 'position-relative overflow-hidden'
  }))
`
    transition: .5s
    transform: scale(1.2)
`;

const Img = styled.img.attrs( () => ({
    className: 'w-100'
}))
`
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
    transition: .5s;
    transform: scale(1.2);
`;

const ProductAction = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;
    background: rgba(255, 255, 255, 0.7);

    &:nth-child(1) {
        opacity: 1;
        margin-top: 0;
        transition: .3s 0s;
    }

    &:nth-child(2) {
        opacity: 1;
        margin-top: 0;
        transition: .3s .05s;
    }
    
    &:nth-child(3) {
        opacity: 1;
        margin-top: 0;
        transition: .3s .1s;
    }

    &:nth-child(4) {
        opacity: 1;
        margin-top: 0;
        transition: .3s .15s;
    }

`;
export default Home

