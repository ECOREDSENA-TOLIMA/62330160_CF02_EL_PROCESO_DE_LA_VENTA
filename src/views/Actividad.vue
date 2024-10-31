<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Segmentación y mercados de interés',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> analizar el funcionamiento de los procedimientos que abracan la segmentación de mercados, con el fin de llegar al mercado meta.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Si se realiza la visita a un colegio de una localidad y allí se hace una venta de libros, se está aplicando una característica de segmentación de mercados de tipo:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mesurable.', esCorrecta: false },
            { id: 'b', texto: 'Accesible.', esCorrecta: true },
            { id: 'c', texto: 'Lineal.', esCorrecta: false },
            { id: 'd', texto: 'Diferencial.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Este tipo de característica es la que representa a dicho enunciado.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'No representa a uno de los tres tipos de mercados presentes en el grupo objetivo de la segmentación de mercados:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Consumo.', esCorrecta: false },
            { id: 'b', texto: 'Internacional.', esCorrecta: false },
            { id: 'c', texto: 'Procesal.', esCorrecta: true },
            { id: 'd', texto: 'Industrial.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Este aspecto, aunque hace parte de una característica de la segmentación de mercados, no corresponde a un tipo de mercado.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'En el análisis de la segmentación de mercados, si se tienen en cuenta variables como fidelidad, beneficios y ocasiones; se está haciendo mención a un criterio de tipo:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Geográfico.', esCorrecta: false },
            { id: 'b', texto: 'Conductual.', esCorrecta: true },
            { id: 'c', texto: 'Psicográfico.', esCorrecta: false },
            { id: 'd', texto: 'Demográfico.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Este criterio es el que abarca este tipo de variables de análisis.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Si se desea hacer una investigación sobre la relación de precios de dos tipos de productos, uno propio y otro de la competencia, el método de medición ideal a utilizar sería:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Deductivo.', esCorrecta: false },
            { id: 'b', texto: 'De muestreo.', esCorrecta: false },
            { id: 'c', texto: 'De regresión.', esCorrecta: true },
            { id: 'd', texto: 'De simulación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Este de medición es el que se debe utilizar cuando se desea hacer una investigación sobre la relación del precio de un producto con otro.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Si en un análisis del macroentorno se está relacionando el poder adquisitivo y los patrones de gasto de los individuos, se está haciendo mención a un entorno:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Físico.', esCorrecta: false },
            { id: 'b', texto: 'Político.', esCorrecta: false },
            { id: 'c', texto: 'Económico.', esCorrecta: true },
            { id: 'd', texto: 'Social.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Este entorno es el que tiene que ver todo lo relacionado con el poder adquisitivo de los individuos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Si se está haciendo una selección de mercados de interés para llevar a cabo la matriz DOFA en una empresa y se determina que existe una inestabilidad política, se estaría tratando un componente dentro de las:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Debilidades.', esCorrecta: false },
            { id: 'b', texto: 'Oportunidades.', esCorrecta: false },
            { id: 'c', texto: 'Fortalezas.', esCorrecta: false },
            { id: 'd', texto: 'Amenazas.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Muy bien! Este aspecto tiene que ver directamente con una amenaza presente dentro de la matriz DOFA.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Si se tiene un excesivo de oferentes de acuerdo con la demanda, se está dando:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tamaño del mercado.', esCorrecta: false },
            { id: 'b', texto: 'Ventaja competitiva.', esCorrecta: false },
            { id: 'c', texto: 'Rentabilidad.', esCorrecta: false },
            { id: 'd', texto: 'Saturación del mercado.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente! Conoce lo que produce una saturación del mercado.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Si se analiza la subcultura y cultura de un grupo, se está tomando en cuenta como factor determinante en una venta:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Fuerzas psicológicas.', esCorrecta: false },
            { id: 'b', texto: 'Influencias situacionales.', esCorrecta: false },
            { id: 'c', texto: 'Fuerzas sociales.', esCorrecta: true },
            { id: 'd', texto: 'Dimensión del entorno.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Dentro de las fuerzas sociales hacen parte la cultura y subcultura.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Si dentro de un análisis de ventas, se determina que las personas se bañan todos los días en algunos países y en otros no, porque aluden esto a estar enfermos, se estaría estudiando:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El aseo.', esCorrecta: false },
            { id: 'b', texto: 'Las costumbres.', esCorrecta: true },
            { id: 'c', texto: 'Los gustos.', esCorrecta: false },
            { id: 'd', texto: 'Las variables.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Es importante tener en cuenta que las costumbres no son iguales para todas las personas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Si dentro de la segmentación de mercados se quiere hacer un análisis sustancial, el ejemplo indicado a utilizar sería:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un medicamento para la ácides para personas mayores de 60 años.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El tamaño de la población de una región.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La venta de tarjetas de crédito.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La compra de calzado.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Este aspecto tiene que ver directamente con una amenaza presente dentro de la matriz DOFA.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha superado la actividad, demostrando que posee conocimientos sólidos sobre la temática tratada en el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar el componente formativo e intentarlo nuevamente.',
    },
  }),
}
</script>
