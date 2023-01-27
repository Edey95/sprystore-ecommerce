<template>
    <footer>
        <div class="footer-content">
            <p>
                Creado por <a href="https://ertyglez95.com/" target="_blank">Edey González Sosa</a> © 2023
            </p>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
    name: "Footer",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    footer{
        width: 100%;
        background-color: #fff;
        text-align: center;
    }

    footer .footer-content{
        margin-left: 337px;
    }

    @media only screen and (max-width: 768px){
        footer .footer-content{
            margin-left: 0;
        }
    }
</style>
