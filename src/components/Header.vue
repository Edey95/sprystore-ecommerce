<template>
    <header class="tophny-header">
        <div class="container-fluid">
            <div class="top-right-strip row">
                <!--/left-->
                <div class="top-hny-left-content col-lg-6 pl-lg-0">
                    <h6>Hasta un 10% de Descuento, <a href="#" target="_blank"> Click aquí para <span
                                class="fa fa-hand-o-right hand-icon" aria-hidden="true"></span> <span
                                class="hignlaite">Más Detalles</span></a></h6>
                </div>
                <!--//left-->
                <!--/right-->
                <ul class="top-hnt-right-content col-lg-6">

                    <li class="button-log usernhy">
                        <a class="btn-open" href="#">
                            <span class="fa fa-user" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li class="transmitvcart galssescart2 cart cart box_1">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart">
                            <input type="hidden" name="display" value="1">
                            <button class="top_transmitv_cart" name="submit" value="">
                                Almacen
                                <span class="fa fa-shopping-cart"></span>
                            </button>
                        </form>
                    </li>
                </ul>
                <!--//right-->
                <div class="overlay-login text-left">
                    <button type="button" class="overlay-close1">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <div class="wrap">
                        <h5 class="text-center mb-4">Login Now</h5>
                        <div class="login-bghny p-md-5 p-4 mx-auto mw-100">
                            <!--/login-form-->
                            <form action="#" method="post">
                                <div class="form-group">
                                    <p class="login-texthny mb-2">Email address</p>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="" required>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your
                                        email
                                        with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <p class="login-texthny mb-2">Password</p>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                        placeholder="" required>
                                </div>
                                <div class="form-check mb-2">
                                    <div class="userhny-check">
                                        <label class="check-remember container">
                                            <input type="checkbox" class="form-check"> <span class="checkmark"></span>
                                            <p class="privacy-policy">Remember me</p>
                                        </label>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                                <button type="submit" class="submit-login btn mb-4">Sign In</button>

                            </form>
                            <!--//login-form-->
                        </div>
                        <!---->
                    </div>
                </div>
            </div>
        </div>
        <!--/nav-->
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid serarc-fluid">
                <RouterLink to='/' class="navbar-brand">Gilli<span class="lohny">B</span>uying</RouterLink>
                <!-- if logo is image enable this   
							<a class="navbar-brand" href="#index.html">
								<img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
							</a> -->
                <!--/search-right-->
                <div class="search-right">

                    <a href="#search" title="search"><span class="fa fa-search mr-2" aria-hidden="true"></span>
                        <span class="search-text">Buscar</span></a>
                    <!-- search popup -->
                    <div id="search" class="pop-overlay">
                        <div class="popup">

                            <form action="#" method="post" class="search-box">
                                <input type="search" placeholder="Keyword" name="search" required autofocus>
                                <button type="submit" class="btn">Search</button>
                            </form>

                        </div>
                        <a class="close" href="#">×</a>
                    </div>
                    <!-- /search popup -->
                </div>
                <!--//search-right-->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fa fa-bars"> </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <RouterLink to='/' class="nav-link">Inicio</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to='/shop' class="nav-link">Tienda</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to='/about-us' class="nav-link">Acerca de</RouterLink>
                        </li>                        
                        <li class="nav-item">
                            <RouterLink to='/contact' class="nav-link">Contacto</RouterLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        <!--//nav-->
    </header>
</template>

<script lang="ts" setup>

      
</script>