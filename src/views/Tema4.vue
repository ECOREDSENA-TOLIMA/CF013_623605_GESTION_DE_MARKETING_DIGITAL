<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Seguidores

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los seguidores, también conocidos como <em>followers,</em> desempeñan un papel crucial para las empresas, ya que representan aquellos individuos que eligen seguir la marca. La cantidad de seguidores tiene un impacto significativo, ya que determina el alcance de la publicidad generada. Cuando a un usuario le gusta la publicidad de la entidad, la comparte, lo que amplía el alcance de la información. Esta cadena de réplica se multiplica a medida que otros usuarios interactúan con la publicación inicial del seguidor, convirtiendo así a los consumidores en la mejor forma de publicidad para la marca.

    p.mb-5 La comunidad asocia la cantidad de seguidores con la confiabilidad de la marca, influyendo en la decisión de nuevos seguidores o compradores. Un número considerable de seguidores no solo contribuye a la confianza, sino que también ayuda a posicionar la marca, ampliar el alcance de las publicaciones, viralizar el contenido y expandir el mensaje. Además, existen diversos tipos de seguidores en redes sociales, algunos de los cuales se detallan a continuación:

    .row.justify-content-center.mt-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#E3ECF7")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-2.png' alt='AvatarTop')
          h3 Seguidor tranquilo
          p Es aquel usuario que sigue la marca, ve las publicaciones, pero no ha interactuado, para fidelizar este tipo de cliente se hace necesario la creación de contenido más atractivo.

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#FFFBE5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-3.png' alt='AvatarTop')
          h3 Seguidor <em>liker</em> casual
          p Ha sido cliente de las marcas y busca ser un referente para los demás usuarios.

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#E3ECF7")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-4.png' alt='AvatarTop')
          h3 Seguidor molesto
          p Aquel seguidor que está al tanto de las publicaciones de la marca para realizar un comentario que referencie el descontento con la marca o producto adquirido. 

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#FFFBE5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-5.png' alt='AvatarTop')
          h3 Seguidor <em>troll</em>
          p Aquel usuario que nunca ha sido cliente o ha adquirido algún producto, pero que realiza comentarios descalificando la marca o producto.

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#E3ECF7")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-6.png' alt='AvatarTop')
          h3 Seguidor <em>cheerleader</em>
          p Es aquel usuario que participa en todos los concursos, interactúa de manera consistente con la marca y contribuye activamente a la réplica del contenido, generando aumento de la comunidad.  

        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#FFFBE5")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-7.png' alt='AvatarTop')
          h3 Seguidor negociante
          p Usuario que al adquirir un producto se dejará cautivar más por el precio que por la marca.
        
        .tarjeta.color-primario.p-4.col-ipad(style="background-color:#E3ECF7")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-8.png' alt='AvatarTop')
          h3 Seguidor <em>fan</em>
          p Cliente que interactúa activamente, recomienda la marca, la defiende ante posibles seguidores <em>trolls</em> o seguidores molestos, está al tanto de las publicaciones y le guarda fidelidad a la marca. 

    p.mb-5 Además de los tipos de seguidores mencionados anteriormente, hay un grupo adicional: los seguidores de los seguidores. Esta métrica es utilizada por las empresas para ampliar el alcance de las campañas publicitarias, considerándolos a todos como <em>influencers.</em>

    .row.mb-5
      .col-md-4.mb-3
        figure
            img(src='@/assets/curso/temas/tema4/img-9.png', alt='')
      .col-md-8
        .row.align-items-center.mb-4
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
          .col-auto.bg-c8(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 ¿Por qué todos son <em>influencer</em>?

        p Todos, en algún momento, han recomendado alguna marca, página o empresa, lo que afecta la percepción de la marca de manera positiva o negativa, convirtiéndolos en <em>influencers.</em>

        .row.align-items-center.mb-4
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
          .col-auto.bg-c8(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 ¿Qué es un <em>influencer</em>?

        p Un <em>influencer</em> es alguien que ha ganado credibilidad en un tema específico, creando y compartiendo contenido de valor. Han construido comunidades de seguidores fidelizados y se han convertido en referentes para sus seguidores.

        .row.align-items-center.mb-4
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
          .col-auto.bg-c8(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 ¿Por qué se incluyen los <em>influencer</em> en estrategias de <em>marketing</em>?

        p Un estudio realizado por <em>Socialpubli</em> revela que el 42 % de las empresas prefieren incluir a los <em>influencers</em> en sus estrategias de <em>marketing,</em> ya que su influencia aumenta el retorno de la inversión en campañas publicitarias.

    .row.justify-content-center.align-items-center.mb-5
      .col-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4(style="background-color:#FFFBE5")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-md-8.mb-3
              .row.align-items-center.mb-4
                .col-auto.pe-0(style="z-index:2")
                  figure
                    img(src='@/assets/curso/temas/icono.svg', style="width: 30px" ,alt='').m-auto
                .col-auto.bg-c8(style="z-index:1")
                  .p-2
                    h3.mb-0.ms-3 ¿Cuáles son las características de un <em>influencer</em>?

              ul.lista-ul.mb-3
                li.mb-0
                  i.fas.fa-circle(style="color:#33ECE0")
                  | Credibilidad y confiabilidad en un tema específico.
                li.mb-0
                  i.fas.fa-circle(style="color:#33ECE0")
                  | Influencia y presencia activa en las redes sociales.
                li.mb-0
                  i.fas.fa-circle(style="color:#33ECE0")
                  | <em>Brand advocates:</em> tienen afinidad con el contenido de la marca y promocionan activamente la marca.

            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema4/img-10.png', alt='Imagen decorativa')

    p.mb-5 Existen siete tipos <em>influencers,</em> cuatro principales <em>(microinfluencers, medium influencers,</em> macro <em>influencers y celebrities)</em> y tres especializados <em>(influencers profesionales, brand advocates y everyday influencers).</em> A continuación, se describen sus principales características:

    ImagenInfografica.color-acento-botones.mb-5.desktop
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema4/img-11-1.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="14%" y="44%" numero="1")(style="background-color:#FFFBE5")
        .h5.mb-2 <em>Microinfluencer</em>
        p Es un <em>influencer</em> en crecimiento y va ganando cada vez más credibilidad con sus seguidores.

      .tarjeta.color-acento-botones.p-3(x="29%" y="58%" numero="2")(style="background-color:#FFFBE5")
        .h5.mb-2 <em>Mediuminfluencer</em>
        p Son nacidos en la era de la tecnología, ventaja tal con la que logran trascender y ganar cada vez más credibilidad de los seguidores.

      .tarjeta.color-acento-botones.p-3(x="37%" y="35%" numero="3")(style="background-color:#FFFBE5")
        .h5.mb-2 <em>Macroinfluencer</em>
        p Son personas que no solo conviven o interactúan en el mundo <em>online,</em> sino que también en el <em>offline</em> como los actores, los políticos, los modelos, entre otros.
      
      .tarjeta.color-acento-botones.p-3(x="46%" y="55%" numero="4")(style="background-color:#FFFBE5")
        .h5.mb-2 <em>Celebrities</em>
        p Las celebridades son el mayor afluente de seguidores, trasladan su vida cotidiana a las redes sociales, su interacción con la comunidad es calificada como una de las peores y sus costos para las estrategias de <em>marketing</em> son bastante elevados.
      
      .tarjeta.color-acento-botones.p-3(x="61%" y="33%" numero="5")(style="background-color:#FFFBE5")
        .h5.mb-2 <em>Influencer profesional</em>
        p Es un <em>influencer</em> que se categoriza por su alto conocimiento en un tema específico, su nicho es en torno a su tema de especialidad, su engagement es elevado, pues de acuerdo con la credibilidad adquirida los seguidores confían notablemente en sus recomendaciones.
      
      .tarjeta.color-acento-botones.p-3(x="72%" y="50%" numero="6")(style="background-color:#FFFBE5")
        .h5.mb-2 <em>Brand advocate</em>
        p Se caracterizan por ser fanáticos fieles de la marca, no pueden tener un alto número de seguidores, pero recomiendan y defienden la marca, lo que los hace muy buenos embajadores para captar más clientes potenciales.
      
      .tarjeta.color-acento-botones.p-3(x="87%" y="33%" numero="7")(style="background-color:#FFFBE5")
        .h5.mb-2 <em>Everyday influencer</em>
        p Se caracteriza por tener de 1 a 5000 seguidores, pero entre sus seguidores tiene un alto nivel de credibilidad y confiabilidad, pues consumen los productos y así mismo, los recomiendan.

    .row.justify-content-center.align-items-center.mt-5.mb-4
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img-11-2.svg', alt='En la figura 5 se muestran las audiencias específicas para el canal YouTube.') 

    p.mb-5 El alcance de las publicaciones varía según el tipo de <em>influencer,</em> mostrando una relación inversamente proporcional entre el número de seguidores y la interacción generada. En este sentido, los <em>microinfluencers,</em> con un menor número de seguidores, suelen tener un mayor <em>engagement,</em> ya que mantienen una conexión más estrecha con su audiencia. Por otro lado, los <em>macroinfluencers</em> y celebridades, con audiencias más extensas, experimentan un <em>engagement</em> menor porcentualmente, a pesar de alcanzar a un mayor número de personas. Este análisis demuestra la importancia de seleccionar cuidadosamente el tipo de <em>influencer</em> para maximizar el impacto y la efectividad de las campañas publicitarias.

    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-md-10.col-lg-8.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Audiencia para YouTube </em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema4/img-12-1.svg', alt='En la figura 6 se muestra el alcance de las publicaciones frente al número de seguidores, mostrando la relación inversamente proporcional con el engagement.')

    .row.justify-content-center.align-items-center.mt-5.mb-4
      .col-10.col-md-10.col-lg-8.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Audiencia para YouTube </em>
        figure
          img(src='@/assets/curso/temas/tema4/img-12-2.svg', alt='En la figura 6 se muestra el alcance de las publicaciones frente al número de seguidores, mostrando la relación inversamente proporcional con el engagement.') 

















</template>

<script>
export default {
  name: 'Tema4',
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
