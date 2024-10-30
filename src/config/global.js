export default {
  global: {
    componenteFormativo: 'Segmentación y mercados de interés',
    descripcionCurso:
      'La segmentación de mercados, pretende identificar el mercado meta al cual está dispuesto a llegar la organización y a partir de este, centrar el desarrollo de sus estrategias. A su vez, la apertura de nuevos mercados ha sido aprovechada en gran medida por las multinacionales, que han incursionado en mercados de países subdesarrollados y de desarrollo intermedio en busca de nuevos clientes, mano de obra y recursos naturales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Segmentación de mercados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Premisas para segmentar',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Métodos de medición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estudio del macroentorno',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis sectorial del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estructura del mercado',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Análisis de clientes',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Análisis de competencias',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Análisis de distribuidores',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Selección de mercados posibles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Criterios para la selección de mercados',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Matriz DOFA',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Segmentación de mercados',
      referencia:
        'Ciribeli, J. & Miquelito, S. (2015). <em>La segmentación del mercado por el criterio psicográfico: un ensayo teórico sobre los principales enfoques psicográficos y su relación con los criterios de comportamiento.</em>',
      tipo: 'Revista web',
      link: 'http://www.redalyc.org/pdf/3579/357938586002.pdf',
    },
    {
      tema: '6.1 Criterios para la selección de mercados',
      referencia:
        'Cardero, Y. & Utria, J. (s.f.). <em>Los criterios de segmentación y los métodos cuantitativos: una exigencia para la elección de segmentos de mercado.</em>',
      tipo: 'Artículo web',
      link: 'http://www.eumed.net/ce/2012/crur.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Coeficiente de GINI',
      significado:
        'medida económica utilizada por las instituciones gubernamentales u organismos internacionales para determinar la distribución de los ingresos en un país o una región. Este coeficiente fluctúa entre cero y uno, donde cero indica una distribución equitativa de la renta y uno la máxima desigualdad.',
    },
    {
      termino: 'Curva de Lorenz',
      significado:
        'es una representación gráfica utilizada frecuentemente para plasmar la distribución relativa de una variable, en un dominio determinado.',
    },
    {
      termino: 'Diagrama de dispersión',
      significado:
        'representación gráfica de la relación de variables dependientes e independientes X y Y, las cuales dentro del plano cartesiano se visualizan en una serie de puntos que sirven para mostrar la tendencia general de los datos.',
    },
    {
      termino: 'Factor de mercado',
      significado:
        'para Stanton, et al. (2003), “un factor de mercado es algo que se encuentra en un mercado, es mensurable y se relaciona con la demanda de un producto. Por ejemplo, el precio del producto, el comportamiento de los bienes sustitutos o complementarios, etc.”.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'suposición generada a partir de información adquirida previamente de hechos ocurridos, por los cuales se llega a dicha conclusión que puede o no ser verdadera.',
    },
    {
      termino: 'Mecanismo de participación',
      significado:
        'son herramientas otorgadas por la Constitución de 1991 al pueblo colombiano para asegurar la participación de la ciudadanía en decisión trascendentales para el Estado, un ejemplo de ellas puede ser el referendo, plebiscito, cabildo, consulta popular, el voto, la iniciativa popular, entre otras.',
    },
    {
      termino: 'Mecanismos de presión',
      significado:
        'son herramientas o medios (no incluidas como mecanismos de participación) utilizados por grupos de interés dentro de un país para persuadir al Estado, de tomar o abstenerse de ejecutar unas determinadas acciones, un ejemplo pueden ser los paros, las peticiones enviadas por los gremios, la protesta, etc.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'es el segmento de mercado o grupo de consumidores seleccionados por la empresa, a partir de unos criterios, para diseñar la mezcla de <em>marketing</em> y enfocar los esfuerzos de venta de un producto o servicio.',
    },
    {
      termino: 'Movilidad de factores',
      significado:
        'en las teorías económicas hace referencia a la facilidad y rapidez con la que los factores productivos como trabajo, maquinaria, inversiones, etc., pueden cambiar de un mercado a otro. En términos prácticos, sería la rapidez y la facilidad con la que un ganadero por razones económicas puede dejar su actividad y dedicarse a la siembra de café.',
    },
    {
      termino: 'Muestra',
      significado:
        'es un subgrupo de la población o universo de estudio, a la cual se le realiza el análisis y se infieren sus resultados.',
    },
    {
      termino: 'Países en vías de desarrollo',
      significado:
        'son países que pertenecieron al grupo de los subdesarrollados, pero que, por su capacidad de adaptarse a los nuevos cambios económicos y a sus políticas sociales, han alcanzado Índices de desarrollo humano más elevados.',
    },
    {
      termino: 'Países subdesarrollados',
      significado:
        'son países que tienen un Índice de desarrollo humano muy bajo, debido a su precaria situación económica y corrupción en el Estado. Estos países no le pueden proporcionar a su población servicios sociales de calidad (salud, educación, justicia, etc.), por lo que presentan altos niveles de mortalidad, analfabetismo y pobreza extrema.',
    },
    {
      termino: 'Población',
      significado: 'comprende el total del universo a estudiar y analizar.',
    },
    {
      termino: 'Redituables',
      significado: 'rentabilidad constante o beneficio que sea periódicamente.',
    },
    {
      termino: 'SIM',
      significado:
        'el Sistema de Información de Mercados o de <em>marketing</em>. Es un conjunto entrelazado de recursos como capital humano, equipos, instalaciones, aplicaciones y programas, entre otros, que tienen la tarea de recopilar, procesar, evaluar y proporcionar información de los mercados, rápida y oportunamente a las diferentes dependencias de la empresa para la toma de decisiones, con el propósito de reducir la incertidumbre y los riesgos asociados a las mismas.',
    },
    {
      termino: '<em>Software</em> SPSS',
      significado:
        '<em>software</em> libre que permite analizar datos y elaborar estadísticas, mediante la tabulación, gráficas, cruces de información, análisis comparativos, entre otros.',
    },
    {
      termino: 'Variable dependiente',
      significado:
        'es aquella que su valor depende de los cambios adaptados por otras variables. Generalmente está representada por Y.',
    },
    {
      termino: 'Variables exógenas',
      significado:
        'constituyen aquellos elementos externos no controlables, que son objeto de análisis para diagnosticar determinada situación.',
    },
    {
      termino: 'Variable independiente',
      significado:
        'es aquella variable cuyo valor no depende de otra. Generalmente está representada por X.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arizabaleta, E. (2004). <em>Diagnóstico Organizacional: Evaluación del sistema del desempeño empresarial en la era digital.</em> Bogotá D.C.: ECOE Ediciones. ',
    },
    {
      referencia:
        'Banco de la República (BANREP). (s.f.). <em>Estadísticas económicas.</em> ',
      link: 'https://www.banrep.gov.co/es/estadisticas',
    },
    {
      referencia:
        'Berbel, J., Ramón, M. & Vázquez, R. (2012). <em>La selección de mercados preferentes como clave en la internacionalización empresarial.</em> ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3907958',
    },
    {
      referencia:
        'Casado, A. & Rubio, S. (2010). <em>Introducción al Marketing.</em> España: ECU. Editorial Club Universitario. ',
    },
    {
      referencia:
        'Castro, J. (2009). <em>Manual de Estrategias de Marketing.</em> Bogotá: Universidad de la Salle. ',
    },
    {
      referencia:
        'Céspedes, A. (2012). <em>Investigación de Mercados.</em> Bogotá: Ediciones de la U. ',
    },
    {
      referencia:
        'Correa, J. & Trujillo, M. (2007). <em>Planeación estratégica de tecnologías informáticas y sistemas de información.</em> Manizales: Editorial Universidad de Caldas. ',
    },
    {
      referencia:
        'Ferraro, R. & Lerch, C. (1997). <em>¿Qué es qué en tecnología? Manual de uso.</em> Buenos Aires: Ediciones Granica, S.A. ',
    },
    {
      referencia:
        'Kotler, P. & Armstrong, K. (2008). <em>Fundamentos de Marketing.</em> México: Pearson. ',
    },
    {
      referencia:
        'Kotler, P. & Keller, K. (2005). <em>Pronósticos y medición de la demanda.</em> Pearson Prentice Hall. ',
    },
    {
      referencia:
        'Kotler, P. & Keller, K. (2006). <em>Dirección de Marketing.</em> México: Pearson Educación. ',
    },
    {
      referencia:
        'Martínez, M. (2011). <em>Técnicas de comunicación en restauración.</em> Ediciones Paraninfo S.A.',
    },
    {
      referencia:
        'Martínez, C. & Levin, R. (2012). <em>Estadísticas Aplicada.</em> Colombia: Pearson. ',
    },
    {
      referencia: 'Palomo, M. (2011). <em>Tipos de clientes.</em> Autor.',
    },
    {
      referencia: 'Real Academia Española. (2006). <em>Costumbre.</em> ',
      link: 'https://www.rae.es/desen/costumbre',
    },
    {
      referencia:
        'Render, B., Stair, R. & Hanna, M. (2004). <em>Métodos cuantitativos para los negocios.</em> México D.F.: Pearson Prentice Hall. ',
    },
    {
      referencia:
        'Stanton, W., Etzel, M. & Walker, B. (2004). <em>Fundamentos de Marketing.</em> México D.F.: Editorial Mc Graw Hill. ',
    },
    {
      referencia:
        'Villa, E. (2011). <em>Técnicas de simulación para el análisis estadístico de datos de medición.</em> Centro de Investigación de Matemáticas A,C. México.',
    },
    {
      referencia:
        'Yauri, Y. (2009). <em>Métodos cuantitativos para los negocios. Huancayo</em>, Perú: Soluciones gráfica S.A.C.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Nombre_rol',
          centro: 'Nombre_centro_formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
