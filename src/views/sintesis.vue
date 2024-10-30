<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe a través de un mapa conceptual la temática tratada durante este componente formativo, el cual trata los aspectos más relevantes, tanto de la segmentación de mercados, como de los mercados de interés.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que contiene el mapa conceptual que resume la temática tratada durante este componente formativo, la cual parte de dos aspectos clave: primero, la segmentación de mercados, la cual debe tener en cuenta factores internos y diversos métodos de medición para obtener los resultados deseados. Y segundo, los mercados de interés, los cuales parten de un análisis del macroentorno y sectorial, para llegar a la selección adecuada de mercados.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
