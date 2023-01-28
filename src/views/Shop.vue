<template>
    <section class="w3l-banner-slider-main inner-pagehny">
        <div class="breadcrumb-infhny">

            <div class="top-header-content">

                <Header></Header>
                <div class="breadcrumb-contentnhy">
                    <div class="container">
                        <nav aria-label="breadcrumb">
                            <h2 class="hny-title text-center">COMPRE CON NOSOTROS</h2>
                            <ol class="breadcrumb mb-0">
                                <li>
                                    <RouterLink to='/'>Inicio</RouterLink>
                                    <span class="fa fa-angle-double-right"></span>
                                </li>
                                <li class="active">Tienda</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="wrapper">
        <div class="category-filter">
            <div class="container">
                <div class="title">
                    <h1>Featured Products</h1>
                </div>

                <div class="filter-btns">
                    <button @:click="resetFilter" type="button" class="filter-btn" id="all">all</button>
                    <a v-for="categoria in productCategoria">
                        <button @:click="Filter(categoria.definicion)" type="button" class="filter-btn" id="specials">{{
                            categoria.nombre
                        }}</button>

                    </a>
                </div>

                <div class="filter-items">
                    <template v-for="(product, index) of productsList" :key="index">
                        <div v-show="product.categoria === categoriaActiva || categoriaActiva === 'all'"
                            class="filter-item all specials">
                            <div class="item-img">
                                <img src="../assets/images/c_polo-shirt.png" alt="Item image">
                                <span class="discount">{{ product.descuento }}%</span>
                            </div>
                            <div class="item-info">
                                <p>{{ product.nombre }}</p>
                                <div>
                                    <span class="old-price">${{ product.oldPrice }}</span>
                                    <span class="new-price">${{ product.newPrice }}</span>
                                </div>
                                <a href="#" class="add-btn">Agregar al Carrito</a>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <!-- //Footer section-->
    <section class="w3l-footer-22">
        <Footer></Footer>
    </section>
    <!-- //Footer section-->
</template>

<script lang="ts" setup>
import { ref } from 'vue'

//importing bootstrap 5 Modules
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';

let categoriaActiva = ref('all')

const productsList = ref([
    {
        imgUrl: "../assets/images/c_polo-shirt.png",
        descuento: 20,
        nombre: 'Cool Item Name Special',
        oldPrice: 2.50,
        newPrice: 1.70,
        categoria: 'special'
    },
    {
        imgUrl: "../assets/images/c_pant_girl.png",
        descuento: 20,
        nombre: 'Cool Item Name Best Seller',
        oldPrice: 6.50,
        newPrice: 2.70,
        categoria: 'bestSeller'
    },
    {
        imgUrl: "../assets/images/c_tunic-shirt_girl.png",
        descuento: 20,
        nombre: 'Cool Item Name New',
        oldPrice: 20.50,
        newPrice: 15.70,
        categoria: 'newest'
    },
    {
        imgUrl: "../assets/images/c_polo-shirt.png",
        descuento: 20,
        nombre: 'Cool Item Name Special',
        oldPrice: 6.50,
        newPrice: 1.70,
        categoria: 'special'
    },
    {
        imgUrl: "../assets/images/c_polo-shirt.png",
        descuento: 20,
        nombre: 'Cool Item Name Special',
        oldPrice: 2.50,
        newPrice: 1.70,
        categoria: 'special'
    },
    {
        imgUrl: "../assets/images/c_pant_girl.png",
        descuento: 20,
        nombre: 'Cool Item Name Best Seller',
        oldPrice: 6.50,
        newPrice: 2.70,
        categoria: 'bestSeller'
    },
    {
        imgUrl: "../assets/images/c_tunic-shirt_girl.png",
        descuento: 20,
        nombre: 'Cool Item Name New',
        oldPrice: 20.50,
        newPrice: 15.70,
        categoria: 'newest'
    },
    {
        imgUrl: "../assets/images/c_polo-shirt.png",
        descuento: 20,
        nombre: 'Cool Item Name Special',
        oldPrice: 6.50,
        newPrice: 1.70,
        categoria: 'special'
    }

])

const productCategoria = ref([

    {
        id: '34ersdffgbnn',
        definicion: 'bestSeller',
        nombre: 'Best Seller'
    },
    {
        id: '34esdfsdfrfgbnn',
        definicion: 'newest',
        nombre: 'News'
    },
    {
        id: '34erfgbnn',
        definicion: 'special',
        nombre: 'Especial'
    }
])

const resetFilter = () => {
    categoriaActiva.value = 'all'
}

const Filter = (categoria) => {
    console.log(categoria);

    if (categoria === 'special') {
        console.log('es especial');
        categoriaActiva.value = 'special'
    }
    if (categoria === 'newest') {
        console.log('es nueva');
        categoriaActiva.value = 'newest'
    }
    if (categoria === 'bestSeller') {
        console.log('es best seller');
        categoriaActiva.value = 'bestSeller'
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');

.block {
    display: block;
}

.none {
    display: none;
}

* {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    font-family: 'Nunito', sans-serif;
    color: #555;
}

.wrapper {
    width: 100%;
    overflow-x: hidden;
}

.wrapper .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

.category-filter {
    margin-top: 40px;
}

.title {
    margin-bottom: 40px;
}

.title h1 {
    color: #1b1919;
    text-align: center;
    font-weight: 800;
    font-size: 36px;
    letter-spacing: 1px;
}

.filter-btns {
    text-align: center;
}

.filter-btn {
    background: none;
    cursor: pointer;
    border: none;
    font-family: inherit;
    text-transform: uppercase;
    display: inline-block;
    margin: 10px 30px;
    font-size: 16px;
    color: #d3d3d3;
    font-weight: 600;
    letter-spacing: 2px;
    position: relative;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.filter-btn::after {
    content: "";
    position: absolute;
    top: 110%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 2px;
    width: 0;
    background-color: #555;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out
}

.filter-btn:hover {
    color: #555;
}

.filter-btn:hover::after {
    width: 100%;
}

/* active button */
.active-btn {
    color: #555;
}

.active-btn::after {
    width: 100%;
}

/*  */

.filter-items {
    margin-top: 40px;
}

.item-img {
    position: relative;
    overflow: hidden;
}

.item-img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(212, 203, 203, 0.1);
}

.item-img .discount {
    position: absolute;
    right: 0;
    top: 20px;
    background-color: #95bf47;
    z-index: 1;
    border-radius: 2px;
    color: #fff;
    font-size: 12px;
    padding: 4px 16px;
}

.item-img img {
    width: 100%;
    display: block;
    -webkit-transition: -webkit-transform 0.2s ease-in-out;
    transition: -webkit-transform 0.2s ease-in-out;
    -o-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}

.filter-item:hover .item-img img {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}

.item-info {
    padding: 14px 0;
}

.item-info p {
    font-weight: 600;
    font-size: 17px;
    margin-top: 8px;
}

.item-info .old-price {
    font-size: 14px;
    font-weight: 700;
    text-decoration: line-through;
}

.item-info .new-price {
    display: inline-block;
    margin-left: 6px;
    font-weight: 600;
    color: #f53939;
}

.add-btn {
    display: inline-block;
    margin-top: 20px;
    background-color: #95bf47;
    text-decoration: none;
    color: #fff;
    padding: 8px 20px;
    border-radius: 2px;
    border: 2px solid #95bf47;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.add-btn:hover {
    border-color: #95bf47;
    background-color: #fff;
    color: #95bf47;
}


.filter-items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
}

.filter-item {
    width: 100%;
    margin-bottom: 40px;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
}

@-webkit-keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media screen and (min-width: 768px) {
    .filter-item {
        width: calc(50% - 30px);
    }
}

@media screen and (min-width: 992px) {
    .filter-item {
        width: calc(33.3333% - 30px);
    }
}

@media screen and (min-width: 1200px) {
    .filter-item {
        width: calc(25% - 30px);
    }
}
</style>