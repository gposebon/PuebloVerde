import styled from "styled-components"

const Contacto = () => {
    return (
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <ProductItem>
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="img/product-1.jpg" alt="">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                        </div>
                    </div>
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
            </div>
    )
}

const ProductItem = styled.div `
    transition: .5s;
    margin-bottom: 10px;

    &:hover {
        box-shadow: 0 0 30px #DDDDDD;
        opacity: 1;
        margin-top: 0;
        transition: .3s .05s;
        
        &:first-child {
            opacity: 1;
            margin-top: 0;
            transition: .3s 0s;
        }

        &:nth-chill(2) {
            position: relative;
            margin: 0 3px;
            margin-top: 100px;
            opacity: 0;
        }
    }
`

const ProductAction = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;
    background: rgba(256, 256, 256, .7);
    opacity: 1;
    margin-top: 0;
    transition: .3s .05s;
`

const ABtn = styled.a `
    position: relative;
    margin: 0 3px;
    margin-top: 100px;
    opacity: 0;

    &:nth-chill(2) {
        position: relative;
        margin: 0 3px;
        margin-top: 100px;
        opacity: 0;
    }

    }
}
`

.product-item:hover .product-action a.btn:nth-child(3) {
    opacity: 1;
    margin-top: 0;
    transition: .3s .1s;
}

.product-item:hover .product-action a.btn:nth-child(4) {
    opacity: 1;
    margin-top: 0;
    transition: .3s .15s;
}

.product-item .product-img img  {
    transition: .5s;
}

.product-item:hover .product-img img {
    transform: scale(1.2);
}

.product-item .btn:hover {
    color: $primary !important;
}


export default Contacto

