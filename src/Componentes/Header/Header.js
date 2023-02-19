import styled from "styled-components"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <ContainerFluid>
        <Fila>
            <ColIzquierda>
                <NavLink>
                    <TituloPueblo>Pueblo</TituloPueblo>
                    <TituloVerde>Verde</TituloVerde>
                </NavLink>
            </ColIzquierda>
            <div class="col-lg-8 col-6 text-rigth">
                <form action="">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for products" />
                        <div class="input-group-append">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </Fila>
    </ContainerFluid>
    )
}

const ContainerFluid = styled.div.attrs(() => ({
    className: 'container-fluid',
  }))
  ` `;

  const Fila = styled.div.attrs( () => ({
    className: 'row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex'
  }))
  ` `;

  const ColIzquierda = styled.div.attrs( () => ({
        className: 'col-lg-4'
  }))
  ` `;

  const TituloPueblo = styled.span.attrs ( () => ({
    className: 'h1 text-uppercase px-2'
  }))
  `
  background: orange;
  color: green;
   `;

   const TituloVerde = styled.span.attrs ( () => ({
    className: 'h1 text-uppercase px-2 ml-n1'
  }))
  `
  background: green;
  color: orange;
   `;

const NavLink = styled.a.attrs ( () => ({
    className: 'text-decoration-none',
}))
 ` `;

export default Header