<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4
      .col-md-2.mb-3
        figure
            img(src='@/assets/curso/temas/introduccion/intro-1.png', alt='')
      .col-md-10
        p En el ámbito del <em>marketing</em> digital, la creación y gestión de comunidades virtuales son fundamentales. Estrategias efectivas para atraer, retener y hacer participar a los miembros son esenciales, destacando la importancia del contenido, su optimización y la moderación. Las redes sociales desempeñan un papel crucial en este proceso, siendo necesario comprender sus tipos y su impacto estratégico. La audiencia va más allá de la cantidad de seguidores, diferenciando entre tipos y destacando la valoración, reacción e interacción del público.
    


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
