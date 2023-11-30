<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El enfoque estratégico del componente formativo Gestión integral de comunidades virtuales, destaca la importancia de la optimización y moderación del contenido para lograr un sólido posicionamiento y crecimiento en el ámbito digital. Se aborda la relevancia de comprender los distintos tipos de redes sociales y se diferencia entre audiencia y comunidad, explorando conceptos clave como valoración, reacción e interacción. Además, se resalta la significativa función de los seguidores como elementos fundamentales en la dinámica de la comunidad virtual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
