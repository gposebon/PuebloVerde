import styled from "styled-components"

const Menu = () => {

    return (
        <ContainerFluid>
        <Fila>
            <Col12>
                <Nav>
                    <NavLink>
                        <TituloPueblo>Pueblo</TituloPueblo>
                        <TituloVerde>Verde</TituloVerde>
                    </NavLink>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <a href="index.html" class="nav-item nav-link active">Home</a>
                            <a href="shop.html" class="nav-item nav-link">Shop</a>
                            <a href="detail.html" class="nav-item nav-link">Shop Detail</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i class="fa fa-angle-down mt-1"></i></a>
                                <div class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                    <a href="cart.html" class="dropdown-item">Shopping Cart</a>
                                    <a href="checkout.html" class="dropdown-item">Checkout</a>
                                </div>
                            </div>
                            <a href="contact.html" class="nav-item nav-link">Contact</a>
                        </div>
                        <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
                            <a href="" class="btn px-0">
                                <i class="fas fa-heart text-primary"></i>
                                <span class="badge text-secondary border border-secondary rounded-circle" >0</span>
                            </a>
                            <a href="" class="btn px-0 ml-3">
                                <i class="fas fa-shopping-cart text-primary"></i>
                                <span class="badge text-secondary border border-secondary rounded-circle" >0</span>
                            </a>
                        </div>
                    </div>
                </Nav>
            </Col12>
        </Fila>
    </ContainerFluid>
    )
}

const ContainerFluid = styled.div.attrs(() => ({
    className: 'container-fluid bg-dark mb-30',
  }))
  ` `;

  const Fila = styled.div.attrs( () => ({
    className: 'row px-xl-5'
  }))
  ` `;

  const Col12 = styled.div.attrs( () => ({
        className: 'col-lg-12'
  }))
  ` `;

  const Nav = styled.nav.attrs( () => ({
    className: 'navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0'
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
    className: 'text-decoration-none d-block d-lg-none',
    }))
    ` `;

export default Menu