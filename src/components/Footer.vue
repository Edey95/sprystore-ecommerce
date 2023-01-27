<template>
    <!-- footer-22 -->
    <div class="footer-hny py-5">
        <div class="container py-lg-5">
            <div class="text-txt row">
                <div class="left-side col-lg-4">
                    <h3><a class="logo-footer" href="index.html">
                            Gilli<span class="lohny">B</span>uying</a></h3>
                    <!-- if logo is image enable this   
                                    <a class="navbar-brand" href="#index.html">
                                        <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                                    </a> -->
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                        consectetur.Vivamus
                        a ligula quam. Ut blandit eu leo non suscipit. </p>
                    <ul class="social-footerhny mt-lg-5 mt-4">

                        <li><a class="facebook" href="#"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                        </li>
                        <li><a class="twitter" href="#"><span class="fa fa-twitter" aria-hidden="true"></span></a>
                        </li>
                        <li><a class="instagram" href="#"><span class="fa fa-instagram" aria-hidden="true"></span></a>
                        </li>
                    </ul>
                </div>

                <div class="right-side col-lg-8 pl-lg-5">
                    <h4>Excelentes Descuentos de Hasta un 20% y Muchísimo más.</h4>
                    <div class="sub-columns">
                        <div class="sub-one-left">
                            <h6>Enlaces Útiles</h6>
                            <div class="footer-hny-ul">
                                <ul>
                                    <li>
                                        <RouterLink to='/'>Inicio</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to='/shop'>Tienda</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to='/about-us'>Sobre Nosotros</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to='/contact'>Contacto</RouterLink>
                                    </li>
                                </ul>
                                <ul>
                                    <li><a href="#">Proveedores</a></li>
                                    <li><a href="#">Prolítica de Privacidad</a></li>
                                    <li><a href="#">Términos y Condiciones</a></li>
                                    <li>
                                        <RouterLink to='/contact'>Soporte</RouterLink>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div class="sub-two-right">
                            <h6>Nuestra Tienda</h6>
                            <p class="mb-5">Guanacaste, Liberia, Costa Rica</p>

                            <h6>Aceptamos:</h6>
                            <ul>
                                <li><a class="pay-method"><span class="fa fa-cc-visa" aria-hidden="true"></span></a>
                                </li>
                                <li><a class="pay-method"><span class="fa fa-cc-mastercard"
                                            aria-hidden="true"></span></a>
                                </li>
                                <li><a class="pay-method"><span class="fa fa-cc-paypal" aria-hidden="true"></span></a>
                                </li>
                                <li><a class="pay-method"><span class="fa fa-cc-amex" aria-hidden="true"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="below-section row">
                <div class="columns col-lg-6">
                    <ul class="jst-link">
                        <li><a href="#">Política de Privacidad </a> </li>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li>
                            <RouterLink to='/contact'>Quejas de Consumidores</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="columns col-lg-6 text-lg-right">
                    <p>© 2023 GilliBuying. Todos os derechos reservados. Creado por <a href="https://edeyglez95.com/"
                            target="_blank">
                            Ertyglez95</a>
                    </p>
                </div>
                <button @:click="topFunction" id="movetop" title="Go to top">
                    <span class="fa fa-angle-double-up"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
    window.scrollTo(0, 0)
})
window.onscroll = function () {
    scrollFunction()
};

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
</script>