<template>
    <div class="corpo">
        <h1 class="centralizado">{{ titulo }}</h1>
        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto of fotos">
                <img :src="foto.url" :alt="foto.titulo">
            </li>
        </ul>
    </div>
</template>

<script>
export default {

    data(){

        return {
            titulo: 'Alurapic',
            fotos: []
        }
    },

    created(){
        /**
         * Faz a requisição que é uma promise
         * Pede os dados em json que também é uma promise
         * Recebe os dados no último then e joga no array fotos do objeto data
         */
        this.$http.get('http://localhost:3000/v1/fotos')
        .then(res => res.json())
        .then(fotos => this.fotos = fotos, err => console.log(err));
    }
}

</script>

<style>

    .corpo{
        font-family: Helvetica, sans-serif;
        margin: 0 auto;
        width: 96%;
    }

    .centralizado{
        text-align: center;
    }
    .lista-fotos{
        list-style: none;
    }
    .lista-fotos .lista-fotos-item{
        display: inline-block;
    }

</style>
