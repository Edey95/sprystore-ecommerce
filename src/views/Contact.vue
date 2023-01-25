<template>
    <section class="w3l-banner-slider-main inner-pagehny">
        <div class="breadcrumb-infhny">

            <div class="top-header-content">

                <Header></Header>
                <div class="breadcrumb-contentnhy">
                    <div class="container">
                        <nav aria-label="breadcrumb">
                            <h2 class="hny-title text-center">CONTÁCTENOS</h2>
                            <ol class="breadcrumb mb-0">
                                <li>
                                    <RouterLink to='/'>Inicio</RouterLink>
                                    <span class="fa fa-angle-double-right"></span>
                                </li>
                                <li class="active">Contacto</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- contacts -->
    <section class="w3l-contacts-8">
        <div class="contacts-9 section-gap py-5">
            <div class="container py-lg-5">
                <div class="row top-map">
                    <div class="col-lg-6 partners">
                        <div class="cont-details">
                            <h3 class="hny-title mb-0">Estemos en <span>Contacto</span></h3>
                                <p class="mb-5">Estamos listos para atenderlo para futuras negociaciones.</p>
                                <p class="margin-top"><span class="texthny">LLámanos : </span> <a
                                        href="tel:+(506) 61571243">+(506)
                                        61571243</a></p>
                                <p> <span class="texthny">Correo : </span> <a href="mailto:ygporto65@gmail.com">
                                    ygporto65@gmail.com</a></p>
                                <p class="margin-top"> Guanacaste, Liberia, Costa Rica.</p>
                        </div>
                        <div class="hours">
                            <h3 class="hny-title">Horas <span>Laborales</span></h3>
                                <h6>Servicio de Negocios:</h6>
                                <p> Lunes a Viernes 8.00 am - 6.00 pm</p>
                                <p> Sábados y Domingos - Cerrado</p>
                                <h6 class="margin-top">Soporte al Consumidor:</h6>
                                <p> Lunes a Viernes 8.00 am - 6.00 pm</p>
                                <p> Sábados 10.00 am - 4.00 pm</p>
                                <p> Domingos - Cerrado</p>
                        </div>
                    </div>
                    <div class="col-lg-6 map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                            frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="map-content-9 form-bg-img">
            <div class="layer section-gap py-5">
                <div class="container py-lg-5">
                    <div class="form">
                        <h3 class="hny-title two text-center">Rellene el formulario.</h3>
                        <form action="https://sendmail.w3layouts.com/submitForm" class="mt-md-5 mt-4" method="post">
                            <div class="input-grids">
                                <input type="text" name="w3lName" id="w3lName" placeholder="Nombre">
                                <input type="email" name="w3lSender" id="w3lSender" placeholder="Correo" required />
                                <input type="subject" name="w3lSubject" id="w3lSubject" placeholder="Subjeto"
                                    required>
                            </div>
                            <div class="input-textarea">
                                <textarea name="w3lMessage" id="w3lMessage" placeholder="Mensaje"
                                    required></textarea>
                            </div>
                            <button type="submit" class="btn">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- //contacts -->


    <!-- //Footer section-->
    <section class="w3l-footer-22">
        <Footer></Footer>
    </section>
    <!-- //Footer section-->
</template>

<script lang="ts" setup>

//importing bootstrap 5 Modules
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';
</script>