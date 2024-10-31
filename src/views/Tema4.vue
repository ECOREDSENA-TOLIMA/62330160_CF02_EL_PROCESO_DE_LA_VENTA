<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estudio del macroentorno

    p.mb-4(data-aos="fade-right") Antes de adentrarse en el estudio del macroentorno, es importante hablar un poco sobre los mercados de interés.
    
    p.mb-5(data-aos="fade-right") Las empresas son agentes económicos que participan en el mercado con la función social de satisfacer las necesidades de las personas, a través de la oferta de productos y servicios. Esta labor social es motivada por la búsqueda de beneficios económicos, lo cual empuja a las empresas a crecer permanentemente, lo que implica entre otras cosas, la búsqueda de nuevos mercados que permitan la atención de nuevos consumidores y la captación de mayores ganancias. Estos mercados denominados de interés o preferentes, pueden estar ubicados en otros países o en el mismo donde opera la empresa y su selección depende de los objetivos, las metas y los criterios definidos por la empresa. La incursión en nuevos mercados puede ser una tarea sencilla o compleja que depende de las características del entorno, barreras de entrada, idioma, infraestructura, competencia, etc. 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.mb-5.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Ahora bien, ya entrando en materia sobre el macroentorno, es importante saber que, en las investigaciones de mercado, el análisis del entorno general o macroambiente, se considera una tarea importante, ya que permite observar el comportamiento de variables, factores o fuerzas externas que no controla la empresa directamente, pero que pueden afectar su operación. Al respecto, Stanton, Etzel & Wlaker (2003), plantean “Estas fuerzas son en general, pero no totalmente incontrolables por la administración. Una compañía puede influir en las fuerzas externas hasta cierto punto”. No es solo una tecnología… Es un proceso en el que se administra la información sobre el cliente y a su vez, esta se convierte en función vital para la negociación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12
        p En la práctica se encuentra que las empresas directamente o por medio de gremios, tratan de influir en las decisiones que toma el Estado, en el ámbito político, económico, social y ambiental. Es de aclarar, que, para facilitar el estudio del entorno, la mayoría de investigadores lo dividen en dimensiones o partes con características homogéneas para después unificar el análisis. Por esa razón, en esta temática, se hablará de los siguientes entornos:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Entorno demográfico

    p.mb-5(data-aos="fade-right") El estudio del entorno demográfico está relacionado con el análisis de las características, la dinámica y composición de la población en los mercados de interés en un periodo determinado. Para Casado & Rubio (2010), “u importancia desde el punto de vista del #[em marketing] radica en que la demografía estudia las personas y son estas últimas las que conforman los mercados”. En otras palabras, las personas son las que compran y los cambios en su comportamiento y composición pueden generar impactos positivos y negativos en las decisiones de producción y comercialización de las empresas. La selección de las variables objeto de estudio se realiza atendiendo a criterios de disponibilidad de la información y necesidades de la investigación. Sin embargo, a continuación, se presentan algunas, según lo expuesto por Casado et al. (2010):

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_6.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Estructura de edades
            h5.t2.mb-2 Crecimiento de la población y cambio en la estructura de edades
            p.mb-0 Referido al tamaño de la población, expectativas de crecimiento (o disminución), tasa de natalidad y mortalidad y estructura de la población (joven, adulta y tercera edad).
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_7.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Estructura familiar
            h5.t2.mb-3 Procesos de cambio en la estructura familiar
            p.mb-0 Referido a la manera como se estructura la familia, número de hijos, estadísticas sobre matrimonios y separaciones, rol del hombre y la mujer en el hogar, hogares no familiares y unipersonales.
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_8.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Nivel educativo
            h5.t2.mb-3 Procesos de cambio en los niveles educativo
            p.mb-0 Hace alusión al proceso de mejora del sistema educativo, implicando transformaciones en ámbitos como el circulo, la asignación de recursos financieros, organización del sistema escolar, así como el desarrollo del docente. 
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_9.png", alt="")
          .crd_hover_txt--body.w-100
            h5.t1.mb-3 Movimientos geográficos 
            h5.t2.mb-3 Movimientos geográficos de la población
            p.mb-0 Grupos étnicos y raciales, y movimientos migratorios. 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Entorno económico

    p.mb-5(data-aos="fade-right") Según Casado et al. (2010), “el entorno económico está configurado por todos los elementos que influyen en el poder adquisitivo y los patrones de gasto de los individuos”. Analizar y estimar en el presente y el futuro, los ingresos y el comportamiento de gasto del consumidor en un mercado objetivo, es una tarea continua e imprescindible para las empresas que desean mantener su posición y expandirse a nuevos mercados. Esta información ayuda a definir la mezcla de #[em marketing] y las estrategias de penetración adecuadas en los mercados objetivos y puede ser recopilada por medio de fuentes primarias (encuesta, sondeos, entrevista y observación, etc.) y secundarias (libros, investigaciones, bases de datos, internet, etc.). En cuanto a las variables y las fuerzas que se identifican en el entorno económico, se presentan seguidamente las que más se estudian en investigaciones de este tipo:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10(data-aos="zoom-in-down") 
        //- .d-none.d-sm-none.d-lg-block
        ImagenInfograficaB.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/info-3A.svg', alt='')
          div.p-3(x="15%" y="8%" numero="+" tooltip="Clic para ver información")
            .h4.mb-4 Infraestructura
            p.mb-0 Hace referencia al conjunto de servicios públicos como redes de transporte y telecomunicaciones, agua, energía, gas, vivienda, educación, justicia, salud, etc., que posee una nación para permitir el desarrollo económico y humano de su población. Los estudios sugieren que existe una relación estrecha y directa entre el desarrollo de infraestructura y el crecimiento económico de un país o una región, por lo que este tema se ha vuelto una preocupación para muchos mandatarios nacionales y locales, especialmente de países subdesarrollados.
          div.p-3(x="50%" y="8%" numero="+" tooltip="Clic para ver información")
            .h4.mb-4 Inflación
            p.mb-0 Entendida en el lenguaje popular como el aumento general de los precios, medida en Colombia por el DANE, a través de varios indicadores como el IPC, IPP, ICESP, ICCV, IPVN, entre otros que se podrán consultar en la página de la entidad. Sin embargo, el IPC es el más referenciado en las investigaciones y mide la variación de precios de una canasta de bienes y servicios representativos del consumo de los hogares del país.
          div.p-3(x="85%" y="8%" numero="+" tooltip="Clic para ver información")
            .h4.mb-4 PIB (Producto interno bruto)
            p.mb-0 Es una medida económica utilizada para calcular el valor de todos los bienes y servicios que produce un país en un año. Es una variable que refleja el desempeño económico anual del país y la entidad encargada de calcularla es el DANE, quien es tomada como referencia por las empresas para realizar o no nuevas inversiones.
          div.p-3(x="15%" y="39%" numero="+" tooltip="Clic para ver información")
            .h4.mb-4 Distribución de la renta
            p.mb-0 Es la forma como se reparte la renta (salarios, intereses, arriendos, etc.), entre la población de un país. Esta variable se calcula generalmente con base en el Coeficiente de Gini y la Curva de Lorenz, los cuales ubican a Colombia como una nación desigual. Este es un factor importante para analizar, ya que, a partir de esta desigualdad, se pueden derivar múltiples factores sociales y a la inestabilidad de los gobiernos.
          div.p-3(x="50%" y="39%" numero="+" tooltip="Clic para ver información")
            .h4.mb-4 Tasa de cambio
            p.mb-0 "Es la cantidad de pesos colombianos por un dólar de los Estados Unidos" (antes del 27 de noviembre de 1991 la tasa de cambio del mercado colombiano estaba dada por el valor de un certificado de cambio). “La TRM se calcula con base en las operaciones de compra y venta de divisas entre intermediarios financieros que transan en el mercado cambiario colombiano, con cumplimiento el mismo día cuando se realiza la negociación de las divisas” (BANREP, s.f.).
          div.p-3(x="85%" y="39%" numero="+" tooltip="Clic para ver información")
            .h4.mb-4 Balanza de pagos
            p.mb-0 “La balanza de pagos de Colombia registra los flujos reales y financieros que el país intercambia con el resto de las economías del mundo. Presenta dos grandes cuentas: cuenta corriente y cuenta financiera. La cuenta corriente contabiliza exportaciones e importaciones de bienes y servicios, los ingresos y egresos por renta de los factores y por transferencias corrientes. La cuenta financiera registra los flujos de capital relacionados con inversiones directas y de cartera, préstamos, créditos comerciales, reservas internacionales y otros movimientos financieros” (BANREP, s.f.).
          div.p-3(x="15%" y="70%" numero="+" tooltip="Clic para ver información")
            .h4.mb-4 Poder adquisitivo
            p.mb-0 Definido como el poder que tiene una moneda de comprar un determinado número de bienes y servicios en una economía. Esta capacidad dependerá de los niveles de inflación y la tasa de cambio que se presente en un momento determinado.
          div.p-3(x="50%" y="70%" numero="+" tooltip="Clic para ver información")
            .h4.mb-4 Desempleo
            p.mb-0 Es la situación crítica y permanente que enfrenta un trabajador por no poseer empleo. Esta problemática puede darse por varios factores; por ejemplo, a recesiones económicas, bajo niveles de cualificación, baja demanda del mercado laboral de una profesión u ocupación. El desempleo es uno de los problemas más graves que enfrentan los gobiernos en el mundo. En Colombia la tasa de desempleo es calculada por el DANE, a partir de encuestas aplicadas a la población económicamente activa del país.
          div.p-3(x="85%" y="70%" numero="+" tooltip="Clic para ver información")
            .h4.mb-4 Tasa de interés
            p.mb-0 Es la remuneración o el precio que el deudor le debe pagar al acreedor por el préstamo de una determinada cantidad de dinero. La tasa de interés (usura), es un determinante de la demanda de créditos por parte del público. Esta tasa en Colombia es determinada por el mercado, bajo la estricta observación de la Superintendencia Financiera y el Banco de la República. Este último, con la capacidad de influir en el mercado por medio de la tasa de intervención, la cual es la tasa de interés mínima que esta cobra a las entidades financieras por los préstamos que les hace o la tasa de interés máxima que paga por recibirles dinero sobrante.
      //- .col-12.d-block.d-lg-none
      //-   figure
      //-     img(src='@/assets/curso/temas/tema4/info-3B.svg', alt='')
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Entorno social y cultural

    p.mb-5(data-aos="fade-right") Constituido por fuerzas sociales y culturales creadas y alimentadas por la sociedad, a través de los años y que condicionan el comportamiento de las personas, por medio de generaciones con valores, costumbres y creencias. Estas fuerzas pueden determinar en gran medida el comportamiento de compra de los consumidores y por esa razón, es objeto de estudio de las empresas. Aunque existen un sinnúmero de variables a analizar en esta dimensión, se podrían recomendar algunas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris-b")
          .row(titulo="Dinámica familiar")
            .col-12.mb-4.mb-md-0
              p La familia se considera el núcleo fundamental de la sociedad, en su interior se encierran un conjunto de dinámicas que pueden determinar en gran medida el comportamiento de compra de sus integrantes. Estas dinámicas cambian de una cultura a otra en función de necesidades y preferencias; por ejemplo, en el medio oriente la vestimenta de las mujeres debe tener la aprobación de sus padres y la sociedad, por lo que toda prenda que se comercialice en esta región debe ir de acuerdo a estos preceptos.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/sl1-a.png', alt='')
          .row(titulo="Costumbres")
            .col-12.mb-4.mb-md-0
              p Según el diccionario de la Real Academia Española (2006) “hábito, modo habitual de obrar o proceder establecido por tradición o por la repetición de los mismos actos y que pueden llegar a adquirir fuerza de precepto”. En el #[em marketing], este factor cobra importancia en la medida que las costumbres afecten la operación normal de los negocios o las estrategias de #[em marketing]. Por ejemplo, en algunas regiones del mundo es costumbre cerrar los negocios a las 12 del medio día y se abren a las 2 o no abren en determinadas fechas. En muchos países de Latinoamérica es costumbre bañarse todos los días, al contrario de algunos países de Europa donde este hábito se considerará un síntoma de enfermedad.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/sl1-b.png', alt='')
          .row(titulo="Creencias y la religión")
            .col-12.mb-4.mb-md-0
              p En todas las culturas del mundo las creencias están unidas íntimamente a la religión dominante, es así como en muchas regiones no se permite la usura o se ve con malos ojos. También es prohibido trabajar en determinados días por considerarse pecado. Pero, contrario a esos principios morales, se permite la poligamia. Estas ideas, formas de pensar o percepciones de la vida pueden ser un factor de fracaso para una estrategia de #[em marketing] que fue exitosa en otra parte o puede interferir con la dinámica de las operaciones de la empresa. Esto puede constituir una barrera de entrada si la empresa no sabe adaptarse y respetar estas creencias o preceptos religiosos, ya que muchos gobiernos son liderados por partidos que pertenecen a una religión o comparten estas ideas.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/sl1-c.png', alt='')
          .row(titulo="Diferencias lingüísticas")
            .col-12.mb-4.mb-md-0
              p Para Stanton, et al. (2003), “las diferencias de lengua plantean muchos problemas en el #[em marketing] internacional, desde el ser una de las explicaciones principales del alto índice de fracasos de las fusiones, a través de las fronteras, hasta el dificultar el llenado de los formularios de aduanas”. Es así como muchas multinacionales se han visto en problemas por no tener cuidado en las traducciones de sus eslóganes y mensajes publicitarios en los países donde incursionan, debido a que estas palabras pueden generar malestar en esta población o simplemente los mensajes pueden perder efectividad lo que obliga a replantear el enfoque de una estrategia de #[em marketing].
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/sl1-d.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Entorno político y jurídico

    p.mb-5(data-aos="fade-right") El entorno político y jurídico de un país se crea a partir de las interacciones que existen entre las ramas del poder (ejecutiva, legislativa y judicial) y las fuerzas sociales ejercidas por pueblo a través de todos sus mecanismos de presión y participación. Es importante mencionar que este entorno se rige por la Carta Magna o constitución en un país democrático y que las leyes que de allí se derivan afectan las dinámicas y relaciones económicas y sociales que se dan dentro del territorio o fuera de él. Para las empresas es importante analizar aspectos concretos de este entorno, como la estabilidad del gobierno, respecto a los derechos de propiedad intelectual, barreras de entrada, tratados internacionales, política fiscal y monetaria, así como el cumplimiento de la legislación, etc. Para Stanton et al. (2003), “las fuerzas políticas y jurídicas en #[em marketing] se pueden agrupar en las siguientes cuatro categorías:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_2.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Políticas monetarias
            h5.t2.mb-2 Políticas monetarias y fiscales
            p.mb-0 El nivel de gastos del gobierno, la oferta monetaria o la legislación de impuestos.
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_3.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Regulaciones sociales
            h5.t2.mb-3 Legislación y regulaciones sociales
            p.mb-0 La legislación que afecta el ambiente (las leyes contra la contaminación, por ejemplo) y los reglamentos establecidos.
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_4.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Relaciones del gobierno 
            h5.t2.mb-3 Relaciones del gobierno con las industrias
            p.mb-0 Los subsidios a la agricultura, la construcción naviera, la transportación de pasajeros por ferrocarril y otras industrias.
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img_5.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Legislación del #[em marketing] 
            h5.t2.mb-3 Legislación relacionada específicamente con el #[em marketing]
            p.mb-0 Los ejecutivos de #[em marketing] no tienen que ser abogados, pero deben tener nociones de cómo inciden las leyes en el #[em marketing].

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Entorno tecnológico

    p.mb-5(data-aos="fade-right") En el entorno tecnológico se estudia principalmente aquellos aspectos o tendencias tecnológicas que, desde la industria y la ciencia, se están creando o fomentando y que pueden perjudicar o beneficiar las operaciones de la empresa. Según Ferraro y Lerch (1997), la tecnología “es el conjunto ordenado de todos los conocimientos usados en la producción, distribución y uso de bienes y servicios”. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-2.col-4.mb-4.mb-lg-2
        figure
          img(src="@/assets/curso/temas/tema4/img_10.svg", alt="")
      .col-12.col-lg-8.mb-4.mb-lg-2
        p La tecnología es conocimiento aplicado para transformar la realidad del ser humano, que se concreta en la creación y mejoramiento de herramientas, procesos, etc. Este conocimiento se aplica, tanto a cosas tangibles como intangibles; por esa razón, se pueden clasificar las tecnologías en duras y blandas. Al respecto Ferraro et al. (1997), afirma “las tecnologías blandas – en las que su producto no es un objeto tangible- pretenden mejorar el funcionamiento de las instituciones u organizaciones para el cumplimiento de sus objetivos… Se suele llamar duras aquellas tecnologías que se basan en conocimientos de las ciencias duras como la física o la química”.
      .col-lg-10.col-12.mb-4.mb-lg-2
        p.mb-4 Este método consiste en analizar el comportamiento y las características de un grupo pequeño de la población total u objetivo, para inferir finalmente en toda la población. Esta parte de la población debe ser representativa y aleatoria; es decir, que los números de elementos a estudiar deben contener todos los elementos en la misma proporción que existen en su totalidad y por otra parte esta muestra debe elegirse al azar, de tal manera que se pueda medir el nivel de confianza y obtener una porción representativa del total de la población a investigar (Céspedes, 2012).
        .cajon.color-secundario.p-4
          p.mb-0 En la actualidad, se puede observar que los avances tecnológicos han permitido la creación de nuevos sectores como la nanotecnología, la robótica, los biocombustibles, el comercio electrónico, etc. e impulsado el de las telecomunicaciones, las energías renovables, la informática, entre otros.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-certificate(style="top:3px")
            h4.mb-0 Entorno físico

    p.mb-5(data-aos="fade-right") El entorno físico, tiene como objeto de estudio las variables relacionadas con las características del territorio y su ubicación, clima, temperaturas, dinámicas del medio ambiente, topografía, recursos renovables y no renovables, etc. Para las empresas, especialmente las que comercializan o requieren materias primas o insumos del sector agrícola, analizar estas características del espacio físico le pueden proporcionar información acerca de ciclos de producción, disponibilidades de productos, niveles de contaminación, viabilidad de la producción y la comercialización en determinadas regiones, etc.

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema4/img_11.png', alt='')


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
