<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Premisas para segmentar

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema2/img_1.png', alt='')

    p.mb-5(data-aos="fade-right") Existen diversos factores o procesos a tener en cuenta al momento de realizar una segmentación de mercados, hasta el punto de llegar a la meta deseada; es por esto, que es importante conocer y aplicar lo que representa cada una de las siguientes premisas.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Criterios de segmentación  

    p.mb-5(data-aos="fade-right") A continuación, se relacionan los siguientes criterios utilizados por cada uno de los tipos de segmentos, los cuales a pesar de tener un componente cualitativo frente a las variables que presenta cada uno, requieren de mediciones altamente cuantitativas que en ciertos eventos resultan ser complejas:

    SlyderA.p-md-5.p-4.fondo-2.mb-5(tipo="b" data-aos="fade-down")
      .row.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Geográficas
          p Este criterio o variable permite dividir el mercado en diferentes unidades geográficas como países, provincias, municipios, ciudades, localidades, barrios, etc. Dicho fraccionamiento identifica el área o áreas a las cuales podrían llegar los productos o servicios ofertados y de esta manera, satisfacer las necesidades y deseos de los consumidores allí presentes. (Adaptado de Kotler & Armstrong, 2008).
          p #[b Variables:] nombre de la región, tamaño de la ciudad, densidad y clima.
        .col-lg-5.col-10
          figure
            img(src='@/assets/curso/temas/tema2/slid-1a.png', alt='')
      .row.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Demográficas
          p Este criterio o variable permite dividir el mercado en diferentes unidades, de acuerdo con las características y estructura de la población objeto de estudio. (Adaptado de Kotler & Armstrong, 2008).
          p #[b Variables:] genero, edad, estado civil, ocupación, educación, ciclo de vida familiar, tamaño familiar, religión, raza, generación y nacionalidad.
        .col-lg-5.col-10
          figure
            img(src='@/assets/curso/temas/tema2/slid-1b.png', alt='')
      .row.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Psicográficas
          p Este criterio o variable permite dividir el mercado en diferentes unidades, de acuerdo con las características de la personalidad de la población objeto de estudio y su comportamiento o conducta de compra.
          p La identificación de este criterio es complejo, dado a la dificultad en la accesibilidad de información por parte de algunos grupos de consumidores, donde es complicado obtener información. (Adaptado de Kotler & Armstrong, 2008).	
          p #[b Variables:] clase social, estilo de vida y personalidad.
        .col-lg-5.col-10
          figure
            img(src='@/assets/curso/temas/tema2/slid-1c.png', alt='')
      .row.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          h4 Conductuales
          p Este tipo de fraccionamiento del mercado permite observar aspectos, tales como el tipo de establecimiento, las horas en las que el cliente compra, frecuencia de compra y lealtad a la marca.
          p Los parámetros son fácilmente cuantificables y las porciones de mercado suelen ser tácticos de alta accesibilidad. (Adaptado de Kotler & Armstrong, 2008).
          p #[b Variables:] ocasiones, beneficios, tipo de usuario, regularidad, fidelidad, nivel de conocimiento y actitud.
        .col-lg-5.col-10
          figure
            img(src='@/assets/curso/temas/tema2/slid-1d.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Políticas de segmentación

    p.mb-5(data-aos="fade-right") Las políticas son definidas a partir de los objetivos estratégicos y de los planes diseñados para lograr su cumplimiento; por tal motivo, se han establecido algunas políticas que recaen en las estrategias o caminos a emprender para determinar el mercado meta, entre las cuales se tiene: 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img_2.svg', alt='')
      .col-lg-9.col-12
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-primario.p-4(titulo="Política no diferenciadora")
            h4 Política no diferenciadora
            p Esta política apunta a todos los consumidores de manera masiva. Las decisiones tomadas son orientadas a la realización de campañas publicitarias y promocionales a un macro sector, señalando similitudes más que diferencias. Quien se arriesgan a orientar sus acciones frente a este #[em marketing], pueden verse perjudicado por competidores que se enfocan en satisfacer las necesidades de grupos específicos. 
          .tarjeta.color-primario.p-4(titulo="Política diferenciada")
            h4 Política diferenciada
            p Esta política va orientada a la realización de acciones particulares para cada uno de los segmentos a elegir. 
          .tarjeta.color-primario.p-4(titulo="Política concentrada")
            h4 Política concentrada
            p La decisión se enfoca en lograr llegar a un grupo específico y generalmente minoritario con características únicas, que están dispuestos de manera certera a optar por productos o servicios que los satisfaga, sin tener en cuenta otros aspectos que muy posiblemente si son relevantes en la estrategia no diferenciadora. Esta decisión se fundamenta en lograr ser más eficientes con el uso de recursos, ya que disponen de información más concreta de las necesidades de ese pequeño grupo, lo cual permite enfocar sus acciones de manera más precisa, logrando una mejor posición y reconocimiento. No obstante, suelen percibirse menos competidores, pues la gran mayoría de estos apuntan a segmentos más grandes y diversos. 
          .tarjeta.color-primario.p-4(titulo="Política individual")
            h4 Política individual
            p Su orientación busca satisfacer mercados locales o individuales, los cuales permiten a los clientes obtener a la medida los productos o servicios que satisfagan plenamente sus deseos, expectativas y necesidades.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Proceso de segmentación 

    p.mb-4(data-aos="fade-right") Un factor clave para todas las empresas es saber en qué negocio están y a quién van a dirigir sus productos o servicios. Es allí donde la segmentación se hace cada vez más necesaria para poder descubrir las características de los consumidores, frente a sus gustos, motivaciones y, sobre todo, necesidades que lo impulsan a dirigir su elección hacia determinado producto o servicio. 

    p.mb-4(data-aos="fade-right") Por lo anterior, se hace necesario saber cómo llegar a ese reconocimiento; es decir, cuál es el proceso que permite finalmente obtener la información que será clave para diseñar las estrategias de #[em marketing] y buscar un mejor posicionamiento en el mercado. 

    p.mb-5(data-aos="fade-right") A continuación, podrán analizar e identificar de manera sencilla, cada uno de los pasos que se siguen para realizar una segmentación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Necesidad de encontrar un mercado") 
            p.mb-2 Surge a partir de la necesidad de obtener información fidedigna para llevar a cabo la investigación y para ello, continúa con la elección de las fuentes a partir de la observación. 
          div(numero="2" titulo="Observación") 
            p.mb-2 La búsqueda de oportunidad de mercado se puede hacer a través de varias fuentes: 
            p.mb-2 #[b a.	Primarias:] investigaciones por parte de departamentos internos de la compañía o investigaciones externas (consultoras, instituciones, fuentes públicas, entre otras). 
            p.mb-2 #[b b. Secundarias:] basada en estudios anteriores (intuición empírica y expertos).
          div(numero="3" titulo="Determinación del mercado potencial y necesidades genéricas") 
            p.mb-2 Es decir, se debe identificar la máxima posibilidad de venta en la industria y las necesidades reales de los posibles compradores futuros. 
          div(numero="4" titulo="Establecimiento de las variables relevantes para la segmentación") 
            p.mb-2 Se deben identificar aquellas variables o características importantes, que permitan llegar a una división o agrupación de estos mismos, dado los objetivos. 
          div(numero="5" titulo="Determinación y proyección potencial de cada segmento") 
            p.mb-2 Una vez definido cada grupo, se obtendrá una matriz de segmentos, donde cada segmento o “nicho de mercado” tendrá una característica peculiar y, por tanto, un probable potencial propio. 
          div(numero="6" titulo="Determinación y proyección de la acción de la competencia") 
            p.mb-2 En cada segmento, antes de seleccionar un nicho al cual dirigirse, se debe tener presente las actividades o roles que juega la competencia en cada uno de ellos. 
          div(numero="7" titulo="DOFA de cada segmento") 
            p.mb-2 Determinar las fortalezas, oportunidades, debilidades y amenazas que ofrece cada segmento, es una tarea estratégica antes de optar por una posición. Esta visión permitirá saber el lugar en el que se encuentra para competir en el mercado, dado el segmento elegido. 
          div(numero="8" titulo="Selección del mercado meta") 
            p.mb-2 Luego de haber realizado dicho proceso, la segmentación finaliza, pues ya se han seleccionado uno o más segmentos para competir. 
          div(numero="9" titulo="Estrategia de mercado") 
            p.mb-2 Una vez realizado el diagnóstico situacional, se procede al diseño de las estrategias o caminos que permitirá posicionamiento en el mercado. Se tendrá en cuenta el #[em marketing mix], para que a partir de cada uno de sus componentes se analice y dirijan acciones que logre cautivar el mercado: estrategias de producto, precio, distribución, etc.
          div(numero="10" titulo="Posicionamiento") 
            p.mb-2 Una vez aplicadas las estrategias, se busca cubrir una gran porción del mercado, a través de una mayor recordación del producto o servicio, de tal manera que se incremente las ventas y con esta las utilidades.
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Selección del mercado meta

    p.mb-5(data-aos="fade-right") El mercado meta es llamado también target o población objetivo y surge de la necesidad que tienen las empresas para elegir de un segmento un grupo de consumidores o industrias a las cuales se les va a direccionar las estrategias de #[em marketing], para lograr posicionar los productos o servicios ofrecidos. Por lo anterior, hay que tener en cuenta los siguientes tipos de #[em marketing]:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris-b")
          .row(titulo="<em>Marketing</em> no diferenciador")
            .col-12.mb-4.mb-md-0
              p Su principal característica es que no marca ningún tipo de diferencia entre las variables que existen dentro del mercado, lo cual le permite llegar de manera masiva a todos los consumidores. Esta decisión hace posible orientar sus campañas publicitarias y promocionales a un macrosector señalando similitudes, más que diferencias. Quien se arriesgan a orientar sus acciones frente a este #[em marketing], pueden verse perjudicados por competidores que se enfocan en satisfacer las necesidades de grupos específicos. Ejemplo: fabricación y comercialización de prendas talla única. 
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/sl1-a.png', alt='')
          .row(titulo="<em>Marketing</em> diferenciado")
            .col-12.mb-4.mb-md-0
              p Cuando se asume la decisión de llevar a cabo estrategias diferenciadoras, se está viendo la posibilidad de orientar acciones particulares para cada uno de los segmentos o nichos a los que se decide abarcar. Ejemplo: compañía de cosméticos que ofrece productos para pieles jóvenes y maduras. Los equipos celulares de determinada marca utilizan estrategias, de acuerdo con los grupos objetivos con el cual se estableció el propósito de diseño de equipos de baja, media o alta gama, los cuales van dirigidos por sus colores y diseños a personas jóvenes y maduras.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/sl1-b.png', alt='')
          .row(titulo="<em>Marketing</em> concentrado o nichos de mercado")
            .col-12.mb-4.mb-md-0
              p La decisión se enfoca en lograr llegar a un grupo específico y generalmente, minoritario con características únicas que están dispuestos de manera certera a optar por productos o servicios que los satisfaga sin tener en cuenta otros aspectos que muy posiblemente si son relevantes en la estrategia no diferenciadora, como lo es el precio. Los nichos permiten a las compañías ser más eficientes con el uso de recursos, ya que disponen de información más concreta de las necesidades de ese pequeño grupo, lo cual permite enfocar sus acciones de manera más precisa, logrando una mejor posición y reconocimiento. No obstante, suelen percibirse menos competidores, pues la gran mayoría de estos apuntan a segmentos más grandes y diversos. Ejemplo: una empresa que vende productos orgánicos se dirige a consumidores preocupados por la salud y la sostenibilidad.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/sl1-c.png', alt='')
          .row(titulo="<em>Marketing</em> individual")
            .col-12.mb-4.mb-md-0
              p Orientado a satisfacer mercados locales o individuales, los cuales permiten a los clientes obtener a la medida los productos o servicios que satisfagan plenamente sus deseos, expectativas y necesidades. Ejemplo: los servicios de sastrería y fabricación de autos para determinadas celebridades.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/sl1-d.png', alt='')


</template>

<script>
export default {
  name: 'Tema2',
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
