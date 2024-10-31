<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Selección de mercados posibles 

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema6/img_1.png', alt='')

    p.mb-4(data-aos="fade-right") La selección de los mercados de interés de la empresa, es un proceso que se inicia con la recolección de información del macroentorno, microentorno y del interior de la organización y termina con la elaboración de un informe, donde se presente de manera argumentada la selección de los mercados más atractivos, alcanzables para la empresa y con mayores expectativas de rentabilidad. Para las empresas, las decisiones que se tomen a partir de esta información son muy serias, ya que gran cantidad de recursos financieros, humanos, materiales y técnicos, se verán comprometidos en esta acción y cualquier error que se cometa puede afectar, incluso la estabilidad de la organización. 
    
    p.mb-5(data-aos="fade-right") Partiendo de lo anterior, en esta temática se ampliará sobre los criterios para la selección de mercados y de una herramienta que apoya la toma de decisiones, como lo es la matriz DOFA.

    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Criterios para la selección de mercados

    p.mb-5(data-aos="fade-right") Los criterios son juicios de valor o discernimiento que emite una persona o una empresa para tomar una decisión. En el caso de las empresas, cuando toman una decisión sobre los mercados donde incursionaran, deben tener en cuenta los siguientes aspectos:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12.mb-4.mb-lg-2
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3.</b> <i>Aspectos para la definición de criterios</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema6/fig-3a.svg', alt='Figura que relaciona los tres aspectos que se deben tener en cuenta para la definición de criterios, estos son: la organización, el microentorno y el macroentorno.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema6/fig-3b.svg', alt='Figura que relaciona los tres aspectos que se deben tener en cuenta para la definición de criterios, estos son: la organización, el microentorno y el macroentorno.') 
      .col-lg-10.col-12
        p El número de criterios que determinará la empresa, depende de los objetivos planteados por esta, frente a cada mercado, rentabilidad, costos, competencia, etc. A continuación, se presentan algunos de ellos:

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-down")
      .col-12.p-md-5.p-4.fondo-3 
        SlyderB(:datos="datosSlyder")

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Matriz DOFA

    p.mb-4(data-aos="fade-right") La matriz DOFA es una herramienta de planeación estratégica utilizada frecuentemente por las empresas y los formuladores de proyectos para identificar posibles y viables rumbos de acción. Esta metodología consiste en seleccionar y clasificar variables según debilidades, fortalezas, oportunidades y amenazas, y cruzarlas para identificar estrategias ofensivas, defensivas, etc. Para la selección de los mercados de interés puede ser muy útil, ya que permite observar a partir de la información recopilada, no solo los pros y los contras, sino incursionar en cada uno planteando estrategias pertinentes que permitan posicionar exitosamente a la empresa.
    p.mb-5(data-aos="fade-right") Es recomendable que en la construcción de la DOFA se describa concretamente cada factor y se le asigne un nivel de importancia, esto se puede hacer por medio de una escala cuantitativa o cualitativa; es decir, si para la empresa la capacidad financiera es considerada más relevante que la mano de obra calificada, se le puede asignar 5 a la primera y 2 a la segunda. A continuación, se presenta el ejemplo de una DOFA:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12.mb-4.mb-lg-2
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4.</b> <i>Matriz DOFA</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema6/fig-4a.svg', alt='Figura que contiene un ejemplo sobre la matriz DOFA, destacando que hay aspectos positivos y negativos, así como variables internas y externas, catalogados de la siguiente manera: fortalezas: variable interna y aspecto positivo, Debilidades: variable interna y aspecto negativo, Oportunidades: variable externa y aspecto positivo, Amenazas: variable externa y aspecto negativo.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema6/fig-4b.svg', alt='Figura que contiene un ejemplo sobre la matriz DOFA, destacando que hay aspectos positivos y negativos, así como variables internas y externas, catalogados de la siguiente manera: fortalezas: variable interna y aspecto positivo, Debilidades: variable interna y aspecto negativo, Oportunidades: variable externa y aspecto positivo, Amenazas: variable externa y aspecto negativo.') 
      
    p.mb-5(data-aos="fade-right") La información relacionada en esta matriz y sus clasificaciones sirven para identificar estrategias que potencialicen los aspectos fuertes de la empresa y fortalezcan los que no son. Al respecto Correa & Trujillo (2007), afirman “La matriz, debilidades – amenazas – fortalezas – oportunidades (DOFA), es una herramienta que ayuda a desarrollar cuatro tipos de estrategias: estrategias de debilidades y oportunidades, estrategias de fuerzas y debilidades, estrategias de fuerzas, amenazas y estrategias de debilidades y amenazas”; las cuales, de acuerdo a los autores, se presentan en la siguiente gráfica:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.d-none.d-sm-none.d-lg-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema6/info-4A.svg', alt='')
          .tarjeta.color-morado.p-3(x="22%" y="43%" numero="+")
            p.mb-0 Se formulan para superar las debilidades internas a partir de las oportunidades externas. Pueden existir oportunidades externas críticas, pero una organización tiene debilidades internas que le impiden aprovechar dichas oportunidades.
          .tarjeta.color-morado.p-3(x="41%" y="73%" numero="+")
            p.mb-0 Reconociendo las fortalezas de la empresa para poder evitar o disminuir las repercusiones de las amenazas externas.
          .tarjeta.color-morado.p-3(x="60%" y="43%" numero="+")
            p.mb-0 Aprovechando las fortalezas internas de la empresa para sacar ventaja de las oportunidades externas.
          .tarjeta.color-morado.p-3(x="78%" y="73%" numero="+")
            p.mb-0 Son tácticas de conservación que aspiran disminuir las debilidades internas e impedir las amenazas del entorno.
      .col-12.d-block.d-lg-none
        figure
          img(src='@/assets/curso/temas/tema6/info-4B.svg', alt='')
          


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo:
          'Compatibilidad con la P.E.E. (Planeación estratégica de la empresa)',
        texto: `<p>La selección de los mercados debe ser pertinente con la misión, visión, objetivos estratégicos y operacionales, así como las políticas institucionales de la empresa.</p>`,
        imagen: require('@/assets/curso/temas/tema6/sl1-a.png'),
      },
      {
        titulo: 'Tamaño del mercado',
        texto: `<p>Es importante determinar si el mercado es lo suficientemente grande como para arrojar una tasa mínima de ganancia.</p>`,
        imagen: require('@/assets/curso/temas/tema6/sl1-b.png'),
      },
      {
        titulo: 'Perspectivas de crecimiento',
        texto: `<p>Es recomendable que el mercado seleccionado se encuentre en una senda de crecimiento; es decir, que su demanda y la capacidad adquisitiva de los consumidores mantenga un crecimiento estable.</p>`,
        imagen: require('@/assets/curso/temas/tema6/sl1-c.png'),
      },
      {
        titulo: 'Acceso',
        texto: `<p>El mercado no debe presentar barreras u obstáculos que le impidan a la empresa hacer efectiva su intención de entrada, al menos con las condiciones mínimas para competir.</p>`,
        imagen: require('@/assets/curso/temas/tema6/sl1-d.png'),
      },
      {
        titulo: 'Ventaja competitiva',
        texto: `<p>La empresa debe establecer cuáles serán sus ventajas competitivas en ese mercado y si estas le permitirán obtener y mantener una posición competitiva.</p>`,
        imagen: require('@/assets/curso/temas/tema6/sl1-e.png'),
      },
      {
        titulo: 'Precio de aceptación',
        texto: `<p>El precio que los consumidores están dispuestos a pagar en ese mercado, debe permitirle a la empresa obtener un margen de ganancia aceptable por unidad.</p>`,
        imagen: require('@/assets/curso/temas/tema6/sl1-f.png'),
      },
      {
        titulo: 'La rentabilidad',
        texto: `<p>Se debe establecer si el mercado puede arrojar el margen de rentabilidad esperado por la empresa a corto y mediano plazo.</p>`,
        imagen: require('@/assets/curso/temas/tema6/sl1-g.png'),
      },
      {
        titulo: 'Saturación del mercado',
        texto: `<p>Es recomendable que el mercado seleccionado no tenga un número excesivo de oferentes con respecto a la demanda.</p>`,
        imagen: require('@/assets/curso/temas/tema6/sl1-h.png'),
      },
    ],
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
