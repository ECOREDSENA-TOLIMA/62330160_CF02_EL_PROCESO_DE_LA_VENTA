<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Segmentación de mercados
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img_1.png', alt='')
      .col-lg-8.col-12
        p.mb-2 La segmentación permite identificar aspectos comunes entre los componentes del mercado objetivo, ya que se logran reconocer los deseos, gustos, necesidades, entre otros aspectos de estos grupos. 
        p.mb-4 A continuación, se tratan algunas definiciones de reconocidos autores, los cuales le permitirán aclarar el concepto de segmentación: 
        .row.h-100.justify-content-center
          .col-md-6.col-lg.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/sl1-a.svg' alt='AvatarTop')
              .tarjeta.color-primario.w-100
                .p-4
                  h4.text-center Céspedes (2012)
                  p Es una subdivisión en grupos homogéneos de clientes, donde cada uno de los cuales puede señalarse como mercado.
          .col-md-6.col-lg.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/sl1-b.svg' alt='AvatarTop')
              .tarjeta.color-primario.w-100
                .p-4
                  h4.text-center Kotler & Armstrong (2008)
                  p Es la división de un mercado en grupos definidos con necesidades, características o comportamientos distintos, los cuales podrían requerir productos o mezclas de #[em marketing] distintos.

      p.mb-5(data-aos="fade-right") En general, estos autores definen la segmentación como una conformación de grupos (consumidores, industrias, etc.) con características y necesidades comunes entre sí, pero variadas entre los demás. 




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
