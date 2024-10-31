<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Métodos de medición

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema3/img_1.png', alt='')

    p.mb-5(data-aos="fade-right") Existen diversos métodos que permiten medir un segmento y a partir de ello, determinar el grupo objetivo. Entre los más importantes se encuentran:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Método inductivo

    .row.fondo-1.px-md-5.px-4.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.mb-4.mb-lg-2
        p El método inductivo parte de una situación problemática que busca ser resuelta, mediante el estudio o análisis de premisas que son observadas, clasificadas y estudiadas para compararlas y generalizarlas finalmente. Durante cada uno de estos procesos de análisis se establece una hipótesis que da una respuesta al problema planteado y a partir de esta, inducir estos mismos resultados a todos los eventos que sean similares.
      .col-lg-7.col-12.mb-4.mb-lg-2
        p.mb-3 La inferencia estadística es utilizada para extrapolar conclusiones a una población, a partir del análisis de una muestra. Para dar inicio a un análisis de la segmentación del mercado, a partir del método inductivo se pueden utilizar instrumentos como cuestionarios, formularios, formatos, encuesta, entrevistas, inspecciones oculares entre otras que permitan conocer de acuerdo con el objetivo que se pretende con la segmentación, identificar la percepción que tienen las personas acerca del producto o servicio en el que se está incursionando. Para ello, se hace necesario que quien se encuentre realizando dicho análisis aplique uno de estos instrumentos a toda la población (censo) o extraer una muestra aleatoria de la misma, para que, a partir de ella, mediante inferencia estadística (pensamiento inductivo), extrapolar los resultados para toda la población. 
        p.mb-3 Por lo general las organizaciones eligen extraer una muestra, puesto que resulta menos costoso. De acuerdo con lo anterior, existen muchos métodos de muestreo, algunos de los cuales se abordarán más adelante. 
      .col-lg-3.col-6.mb-4.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img_2.png', alt='')
      .col-12.col-lg-10.mb-4.mb-lg-2
        .cajon.color-secundario.p-4
          p.mb-2 #[b Ejemplo:] se selecciona el sector N de la ciudad de Bogotá, para responder acerca del nivel de preferencia de un producto z de aseo, en donde se obtuvieron los siguientes resultados: 90 % prefieren dicho producto, 5 % usan otro producto y 5 % no responden.
          p.mb-0 Ante esta respuesta, se induce que la ciudad de Bogotá comprará el producto z, debido a que el estudio de preferencia del sector N afirma preferirlo.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Método deductivo

    p.mb-4(data-aos="fade-right") La estadística descriptiva o deductiva, como su nombre lo indica, “describe el comportamiento de un hecho, a través de la recolección, ordenamiento, clasificación, presentación de los datos mediante cuadros y gráficas, análisis e interpretación y utilización de medidas, algunas de ellas como los promedios”. (Martínez & Levin, 2012).

    p.mb-5(data-aos="fade-right") Lo anterior, permite establecer que, para depurar datos, se requiere de una serie de instrumentos y medidas que, de manera clara, presente la verdad que encierra los datos observables y así poder dar una conclusión que se da como ley general, para inferir sobre las diversas premisas o datos, que se asemejan a dicha ley.

    .bloque-texto-g.bloque-texto-g.color-primario.mb-5.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Según Martínez & Levin (2012), algunos consideran que para aplicar un modelo deductivo se requiere investigar la totalidad de la población objetivo, a través de la recolección, presentación y análisis de la información hallada, pero esto resulta complejo, dado a los altos costos y el tiempo que se requiere para el desarrollo de todos y cada uno de estos procesos, por lo cual se busca la manera de realizar estudios micro, aplicados a una muestra y a partir de esta, inferir los resultados. Los censos de población, los censos aplicados al sector industrial y cualquier otro donde se aplique a la totalidad de un universo por investigar, son muestras de este tipo de método. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.align-items-center.cajon.color-primario.p-4
          .col-md-2.col-4
            figure
              img(src='@/assets/curso/temas/tema3/img_4.svg', alt='')
          .col-md-10.col-12 
            p.mb-3 #[b Ejemplo:] se realizó un estudio de competitividad a nivel suramericano, en el cual Colombia obtuvo un alto porcentaje ocupando el primer puesto. 
            p.mb-0 Ante esta respuesta se deduce que Vaupés es un departamento competitivo, ya que en el país ocupa el primer puesto en competitividad.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Método de regresión

    p.mb-4(data-aos="fade-right") El método de regresión estima una variable en función de otra que supuestamente es conocida; para ello, se establece una ecuación matemática que permite relacionar una variable dependiente Y, y las variables independientes X. Existen diferentes tipos de relaciones, entre las más utilizadas está la lineal, parabólica, exponencial y logarítmica.

    p.mb-5(data-aos="fade-right") A continuación, se explica la manera de cómo establecer la regresión a través de los siguientes pasos:
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        PasosA.color-acento-contenido(tipo="l")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              p Se elaboran las tablas que contengan la información que será analizada, estas estarán compuestas por pares de observaciones, que no son más que la relación entre un valor X y un valor Y. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/slid-1a.png', alt='')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/slid-1b.png', alt='')
                figcaption Leyenda de la Imagen
            .col-md-6.text-start
              p Se grafican los conjuntos de pares de observaciones, que también son llamados diagrama de dispersión. Cada par estará representado por un punto dentro del diagrama, así que en este habrá tantos puntos como pares existan. 
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              p Determinar la forma que toma la dispersión de puntos, para establecer la línea que mayor número de puntos contenga. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/slid-1c.png', alt='')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/slid-1d.png', alt='')
            .col-md-6.text-start
              p Realizar el análisis respectivo.

    .row.fondo-4.p-md-5.p-4.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-7
        ul.lista-ul.mb-0
          li 
            i.fas.fa-certificate
            b.mb-2(style="color:#3C5756") Ejemplo
        p un investigador puede estar interesado en averiguar si existe una posible relación, entre el precio de un producto A y el precio de un producto B; es decir, hay que suponer que el producto A y B son dos productos que están en el mercado y son competencia directa. El Producto A es el líder del mercado y por tanto, fijan los precios a su antojo (variable Independiente) y el producto B puede fijar el precio dependiendo del precio del líder o de forma independiente. 
        p Cuando la cuota de muestreo es muy pequeña, porque no hay recursos suficientes, se hace necesario simular la variable a estudiar; es decir, a partir de las pocas observaciones obtenidas generar otras nuevas que permitan simular la población completa. Representando esto así: el tamaño de la población es 2000 y solamente se logró sacar una muestra de 100, eso es menos del 1 % del total de la población, entonces por medio de la simulación (algoritmos computacionales) se pueden generar las posibles respuestas de las otras 1900.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img-5.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Método de simulación

    p.mb-5(data-aos="fade-right") Corresponde a una técnica de muestreo estadístico que es utilizado simultáneamente, con un modelo para hallar aproximaciones de respuestas que surgen de problemas complejos de tipo probabilístico. Los métodos de simulación responden a dos aspectos que caracterizan la medición: la complejidad y la aleatoriedad; lo cual permite una oportunidad para su análisis. Los métodos de simulación de Montecarlo y de remuestreo de Bootstrap son importantes para identificar las propiedades estadísticas de las mediciones. (Villa, 2011). A continuación, se da una breve explicación de cada uno:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.d-none.d-sm-none.d-lg-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/info-1A.svg', alt='')
          .tarjeta.color-morado.p-3(x="76%" y="24%" numero="+")
            p.mb-0 #[b El método de simulación de Montecarlo], permite el análisis de la distribución de variables aleatorias bajo una serie de procedimientos, que buscan solucionar problemas de tipo matemáticos con muestreos estadísticos. 
          .tarjeta.color-morado.p-3(x="76%" y="72%" numero="+")
            p.mb-0 #[b El método de remuestreo de Bootstrap], permite dar solución a problemas relacionados con la intervención de intervalos de confianza, ya que admite visualizar una muestra como una población, en donde su función de distribución es empírica de los datos y la estimación de los parámetros en dicha muestra observada son tomados como modelos actuales.
      .col-12.d-block.d-lg-none
        figure
          img(src='@/assets/curso/temas/tema3/info-1B.svg', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Método de muestreo

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-9.col-12.order-lg-1.order-2
        p.mb-4 Este método consiste en analizar el comportamiento y las características de un grupo pequeño de la población total u objetivo, para inferir finalmente en toda la población. Esta parte de la población debe ser representativa y aleatoria; es decir, que los números de elementos a estudiar deben contener todos los elementos en la misma proporción que existen en su totalidad y por otra parte esta muestra debe elegirse al azar, de tal manera que se pueda medir el nivel de confianza y obtener una porción representativa del total de la población a investigar (Céspedes, 2012).
        .cajon.color-secundario.p-4
          p.mb-2 El muestreo suele aplicarse cuando la población o universo de estudio sea infinito o demasiado grande, lo cual resulte inconveniente medir uno a uno sus componentes, también cuando las unidades de la población sean semejantes y cuando el estudio tiene unos recursos limitados (personas, tiempo y dinero), que no logre cubrir la totalidad del estudio del universo. 
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img-6.svg', alt='')

    p.mb-5(data-aos="fade-right") Para que la muestra sea aceptada y sus datos puedan inferir en la totalidad del universo, debe contar con las siguientes características:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.d-none.d-sm-none.d-lg-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/info-2A.svg', alt='')
          .tarjeta.color-morado.p-3(x="79%" y="16%" numero="+")
            p.mb-0 Consiste en obtener al azar o de manera aleatoria, una porción suficiente del universo, el cual contenga todas las características a estudiar, de tal manera que, al repetir sus procesos en las mismas condiciones, sea difícil predecir su resultado. 
          .tarjeta.color-morado.p-3(x="87.5%" y="50%" numero="+")
            p.mb-0 Debe proporcionar medidas precisas de las estimaciones que se tengan de la población, como lo son promedios, porcentajes, totales, etc., las cuales servirán para establecer el error máximo en las estimaciones esperadas siguiendo los procedimientos. 
          .tarjeta.color-morado.p-3(x="79%" y="84.3%" numero="+")
            p.mb-0 Se hace con el fin de obtener la mayor información a un menor costo; es decir, lograr eficiencia en el manejo de los recursos disponibles.
      .col-12.d-block.d-lg-none
        figure
          img(src='@/assets/curso/temas/tema3/info-2B.svg', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Clases de muestreo

    p.mb-4(data-aos="fade-right") Existen dos clases que son probabilístico y no probabilístico.

    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-12
        ul.lista-ul.mb-0
          li 
            i.fas.fa-certificate
            b.mb-2(style="color:#3C5756") 1. Probabilístico

    p.mb-4(data-aos="fade-right") Es el método que permite seleccionar al azar, basándose en las probabilidades. Se calcula de manera anticipada la probabilidad de obtener cada una de las muestras que se puedan seleccionar y la probabilidad de elegir un elemento en la muestra. 
    p.mb-5(data-aos="fade-right") Este tipo de muestreo es el más utilizado “porque la selección de la muestra es objetiva y el error muestral es medido en términos de probabilidad bajo la curva normal” (Céspedes, 2012). Por lo anterior, se darán las pautas necesarias para poder elegir una muestra a partir de este método. 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.mb-5.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para obtener una muestra aleatoria o probabilística se debe iniciar con la identificación de cada elemento que constituye la población, esto se puede realizar mediante el diligenciamiento por separado de los nombres de dichos elementos y posteriormente, colocarlos dentro de una urna. Al mezclar cada uno de los elementos dentro de la urna, se procede a elegir la muestra. Este sistema puede ser remplazado por medios electrónicos o #[em software] como el SPSS, SAS, MATLAB, STATISTICA y STATA. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12.mb-lg-3.mb-4
        p Este método se subdivide en los siguientes muestreos:
      .col-lg-10.col-12
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-primario.p-4(titulo="Aleatorio simple")
            h4 Aleatorio simple
            p En este método los elementos de la población tienen la misma probabilidad de ser elegidos para formar la muestra, para lo cual se requiere de elaborar un listado que contenga los elementos que hacen parte de la población y que son sujetos de elección por algún método al azar; por ejemplo, un sorteo, uso de tablas de números aleatorios u utilización de medios electrónicos o #[em software] para elegir la muestra. 
            p Este tipo de muestreo, se aplica en casos donde el estudio es poco variable, disperso geográficamente y no es muy grande (Martínez & Levin, 2012).
          .tarjeta.color-primario.p-4(titulo="Sistemático")
            h4 Sistemático
            p La elección de los elementos que conforman la muestra se hace de manera ordenada, ya sea numéricamente, alfabéticamente, cronológicamente, etc. Para hallar este muestreo, se hace necesario dividir el tamaño del universo por el número de elementos que conformarán la muestra y así hallar un intervalo de selección; a partir de este último, se toma un número que esté dentro de él, de tal manera que sea el punto inicial o primer elemento elegido y posteriormente, se va sumando el valor del intervalo calculado para hallar los demás elementos.
          .tarjeta.color-primario.p-4(titulo="Estratificado")
            h4 Estratificado
            p A diferencia del muestreo aleatorio simple, el estratificado presenta un alto grado de variabilidad, lo cual hace que se deba dividir en diferentes estratos o subpoblaciones, que son agrupados lo más homogéneo posible. Una vez se realice dicha estratificación se recurre a la elección de elementos en cada uno para conformar la muestra. 
          .tarjeta.color-primario.p-4(titulo="Conglomerados")
            h4 Conglomerados
            p Se elige un grupo de las unidades de muestreo o conglomerado, con el fin de reducir el costo de muestreo de un universo disperso en una amplia área geográfica. Generalmente, este conglomerado representa la población y a partir de esto, se elige en su interior los elementos que tomarán como muestra.

    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-12
        ul.lista-ul.mb-0
          li 
            i.fas.fa-certificate
            b.mb-2(style="color:#3C5756") 2. No probabilístico

    p.mb-5(data-aos="fade-right") Es el método que permite seleccionar de manera caprichosa o por conveniencia, lo cual concluye que sus resultados no son confiables. Este método se subdivide en estos muestreos: 

    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4.col-12.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/tema3/slid-2a.svg', alt='')
          h4.text-center A juicio
          p Se elige a partir de la intención del investigador, ya sea intención o conveniencia. En auditorías, se presenta este tipo de muestreo. 
      .col-lg-4.col-12.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/tema3/slid-2b.svg', alt='')
          h4.text-center Por cuotas
          p Se caracteriza por delegar o empoderar a quienes recolectan la información, la función de seleccionar los elementos muéstrales o unidades que serán objeto de análisis, con un nivel mínimo de directrices. 
      .col-lg-4.col-12.mb-4.mb-sm-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/tema3/slid-2c.svg', alt='')
          h4.text-center Voluntarios
          p Se genera a partir de la colaboración voluntaria de las unidades o elementos muéstrales para formar parte de la muestra, a partir de la respuesta a cierto llamado como diligenciamiento de un formato, llamada para participar en determinado evento u opinión.
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12.cajon.color-primario.p-4
        p.mb-2 A pesar de que existe junto con estos métodos, algunos otros que, aunque no se mencionan específicamente, si es importante que se conozca de su existencia. Estos son: muestreo bietápico, bifásico, polifásico, submuestras interpenetrantes y métodos mixtos.


</template>

<script>
export default {
  name: 'Tema3',
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
