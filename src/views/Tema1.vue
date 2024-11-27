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

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.align-items-center.cajon.color-primario.p-4
          .col-md-2.col-4
            figure
              img(src='@/assets/curso/temas/tema1/img_2.svg', alt='')
          .col-md-10.col-12 
            h5 Ejemplo:
            p.mb-0 Los deportistas son un segmento atractivo para el diseño de zapatos deportivos. Este grupo comparte los mismos intereses y gustos por mantenerse en forma y gozar de buena salud, a través de la práctica sana de ejercicios y para ello, existen compañías especializadas en satisfacer dichas demandas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-8.col-lg-4.mb-4.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img-3.png', alt='')
      .col-12.col-lg-6
        ul.lista-ul--color.lista-title.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Objetivos
        p.mb-2 La segmentación puede contar con diversos objetivos, dependiendo del plan estratégico de la compañía, el plan de acción o el plan de ventas del departamento comercial.
        p.mb-4 Algunos objetivos a resaltar son: 
        .tarjeta.color-secundario-a.p-4
          ul.lista-ul.mb-0
            li 
              i.fas.fa-check
              p.mb-2 Identificar y analizar el comportamiento de consumidores a la hora de decidir la compra. 
            li 
              i.fas.fa-check
              p.mb-2 Dividir el mercado en distintos grupos de compradores que requiera satisfacer necesidades, mediante productivos o servicios distintos. 
            li 
              i.fas.fa-check
              p.mb-2 Aumentar la rentabilidad de la empresa. 
            li.mb-2 
              i.fas.fa-check
              p.mb-2 Medir el nivel de operatividad.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Importancia
    
    p.mb-5(data-aos="fade-right") La segmentación de mercados es importante, porque permite mantener los actuales clientes y conseguir nuevos a partir de la definición de qué vender y a quién vender, de tal manera que facilite el diseño de productos o servicios a la medida de las necesidades, gustos y deseos de los consumidores.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Características

    p.mb-5(data-aos="fade-right") A continuación, se relacionan las características más importantes dentro de la segmentación de mercados y lo que representan:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Mensurables") 
            p.mb-2 La medición es fundamental a la hora de poder identificar el tamaño, el poder de compra y los perfiles de los segmentos. Por ejemplo: tamaño de la población de determinada región, el nivel de desempleo y el ingreso per cápita. 
          div(numero="2" titulo="Accesibles") 
            p.mb-2 Debe permitir llegar a la población general de tal manera que permita conocer sus atributos. Por ejemplo: venta de libros escolares a partir de visitas de determinados colegios ubicados en determinada localidad. 
          div(numero="3" titulo="Sustanciales") 
            p.mb-2 Los segmentos deben ser tan grandes y redituables, de tal manera que valga la pena seleccionarlos y diseñarles estrategias de #[em marketing]. Por ejemplo: medicamentos antigripales para niños menores de 5 años. 
          div(numero="4" titulo="Diferenciables") 
            p.mb-2 Permite reconocerlos por sus particularidades y no confundirse con otros grupos, ya que evitará que la mezcla del mercado sea confusa y pierda su objetivo. Por ejemplo: el segmento de la marca registrada de la tarjetahabientes de American Express Gold, la cual tiene como particularidad, el estar dirigida a personas con un nivel de vida alto. 
          div(numero="5" titulo="Procesables") 
            p.mb-2 Identifica los programas eficaces para atraer y retener a los grupos segmentados, de acuerdo con su disponibilidad de recursos y sus propias características. Por ejemplo: la compañía de calzado S.A.S. decidió que a pesar que existía reglas arancelarias atractivas que permiten una expansión a nivel internacional, optó por segmentar y seleccionar su mercado meta en otras ciudades del país, ya que no está en la capacidad de invertir a gran escala.

    .row.fondo-1.p-md-5.p-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.col-lg-8.order-lg-1.order-2
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Ventajas

        p.mb-5(data-aos="fade-right") Son las siguientes:

        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 1]
            p.mb-2 Mejor posición para analizar y detectar oportunidades de mercado.
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 2]
            p.mb-2 Estructurar los presupuestos de manera más acertada. 
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 3]
            p.mb-2 Ajuste exacto a productos o servicios, de acuerdo con las necesidades e intereses de los consumidores.
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 4]
            p.mb-2 Diseñar o rediseñar las políticas de #[em marketing] para lograr satisfacer las preferencias de los grupos metas. 
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 5]
            p.mb-2 Orientar la publicidad y promoción de acuerdo con las características de cada segmento o segmentos elegidos. 
          li 
            .lista-ol--cuadro__vineta
              span #[strong(style="color:#000000") 6]
            p.mb-2 Organizar adecuadamente los sistemas de distribución.
      .col-8.col-lg-4.order-lg-2.order-1.mb-5.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img-4.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Tipos

    p.mb-5(data-aos="fade-right") La segmentación busca dividir mercados grandes y diversos, en segmentos pequeños en los cuales puedan ofrecer sus productos y servicios que garanticen la satisfacción y un mayor reconocimiento de los productos y servicios. Por lo anterior, se hace necesario efectuar una segmentación de acuerdo con el tipo de mercado o grupo objetivo, para lo cual se tienen tres tipos de segmentos:

    .row.justify-content-center.mb-5
      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/slid-1.svg', alt='')
        h4 Consumo
        p Va dirigido al reconocimiento de las características de diferentes consumidores directos, de acuerdo con unos criterios similares que permiten agruparlos entre sí. 
      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/slid-2.svg', alt='')
        h4 Industrial
        p Son aquellos segmentos que van dirigidos a identificar las características de clientes corporativos, industriales y en sí, consumidores de productos a gran escala. 
      .col-12.col-lg-4.col-md-6.h-100.mb-md-3.mb-4(data-aos="fade-down")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/slid-3.svg', alt='')
        h4 Internacional
        p Va dirigido a consumidores o industriales residentes en otro país y que buscan, mediante su estrategia, lograr operatividad y posicionamiento en mercados foráneos. 
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12.cajon.color-secundario.p-4
        p.mb-2 Luego de decidir cuál será el segmento al que se dirigirán todas las estrategias de mercadeo, es necesario tener en cuenta los elementos fundamentales en la consecución de los objetivos corporativos, esencialmente los comerciales. Es fundamental realizar una elección eficiente de la porción que se escogerá; para esto, es necesario tener en cuenta algunas premisas que servirán de apoyo para efectuar un eficaz proceso de segmentación. 
            


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
