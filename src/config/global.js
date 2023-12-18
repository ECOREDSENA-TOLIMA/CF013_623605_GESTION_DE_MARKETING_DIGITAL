export default {
  global: {
    componenteFormativo: 'Gestión integral de comunidades virtuales',
    descripcionCurso:
      'La comunidad virtual se enmarca como una fuente significativa para la difusión de mensajes a través de técnicas sistemáticas y estrategias de <em>marketing</em> para generar audiencia y comunidad, con el objetivo de aumentar el número de personas alcanzadas con las campañas publicitarias y la obtención de clientes potenciales para la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Comunidad virtual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estrategias para la creación de comunidades virtuales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Posicionamiento y crecimiento de la comunidad virtual',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Contenido, optimización y moderación de la comunidad virtual',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de redes sociales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Importancia de la red social',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Audiencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de audiencia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diferencia entre audiencia y comunidad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Conceptualización y contextualización de valoración, la reacción y la interacción de la audiencia',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguidores',
        desarrolloContenidos: true,
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
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
      tema: 'Comunidad virtual',
      referencia:
        'Mínguez, M. y Hernán, C. (2010). Las comunidades virtuales como nuevas formas de relación social. Elementos para el análisis. Espéculo. Revista de Estudios Literarios. Universidad Complutense de Madrid. https://biblioteca.org.ar/libros/151845.pdf',
      tipo: 'Documentos en línea',
      link: 'https://biblioteca.org.ar/libros/151845.pdf',
    },
    {
      tema: 'Audiencia',
      referencia:
        'Masip, P. y Suau, J. (2014). Audiencias activas y modelos de participación en los medios de comunicación españoles. Hipertext.net [online], 12. https://raco.cat/index.php/Hipertext/article/view/274308/364578',
      tipo: 'Documentos en línea',
      link: 'https://raco.cat/index.php/Hipertext/article/view/274308/364578',
    },
    {
      tema: 'Audiencia',
      referencia:
        'Bernal, M. (2016). Hacia la comprensión del engagement de las audiencias de televisión, modelo conceptual multidimensional desde la comunicación. Palabra Clave, 19(3). https://www.redalyc.org/journal/649/64946476005/html/',
      tipo: 'Documentos en línea',
      link: 'https://www.redalyc.org/journal/649/64946476005/html/',
    },
  ],
  glosario: [
    {
      termino: '<em>Blog</em>',
      significado:
        'Sitio <em>web</em> personal que permite la interacción mediante comentarios entre la comunidad.',
    },
    {
      termino: '<em>Buyer persona</em>',
      significado: 'Representación ilusoria del cliente potencial.',
    },
    {
      termino: '<em>Community manager</em>',
      significado:
        'Persona encargada de la construcción, seguimiento y moderación de la comunidad virtual.',
    },
    {
      termino: '<em>Email groups</em>',
      significado: 'Grupos de correo electrónico.',
    },
    {
      termino: '<em>Engagement</em>',
      significado: 'Compromiso que obtienen los clientes con la marca.',
    },
    {
      termino: '<em>Follower</em>',
      significado: 'Seguidores.',
    },
    {
      termino: '<em>Insigths</em>',
      significado:
        'Son una herramienta de investigación comercial o de mercado.',
    },
    {
      termino: '<em>New groups</em>',
      significado: 'Grupo de noticias.',
    },
    {
      termino: '<em>ROI</em>',
      significado: 'Métrica financiera para calcular el retorno de inversión.',
    },
    {
      termino: '<em>Social selling</em>',
      significado: 'Utilización de medios sociales para concretar una venta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcalá, M. (2009). La comunicación y la interacción en contextos virtuales de aprendizaje. Apertura, 1(1).',
      link: '',
    },
    {
      referencia:
        'Bernal, M. (2016). Hacia la comprensión del <em>engagement</em> de las audiencias de televisión, modelo conceptual multidimensional desde la comunicación. Palabra Clave, 19(3).',
      link: 'https://www.redalyc.org/journal/649/64946476005/html/',
    },
    {
      referencia:
        'Cardona, L. (s.f.). Segmentación y <em>remarketing</em> en redes sociales: ¿cómo hacerlo con éxito? Cyberclick.',
      link:
        'https://www.cyberclick.es/numerical-blog/segmentacion-y-remarketing-en-redes-sociales-como-hacerlo-con-exito#:~:text=Tenemos%20cuatro%20opciones%20principales%20para,y%20audiencia%20de%20anuncio%20especial',
    },
    {
      referencia:
        'De Roa, S. (2020). Estrategias de comunicación y comunidades virtuales. Evaluación y análisis de sitios web de educación medioambiental en Colombia, Costa Rica y Brasil. Doctoral dissertation, Universitat Ramon Llull. Emagister, B. (2021). Comunidad virtual: secretos para aumentar la participación. Blog Emagister.',
      link:
        'https://www.emagister.com/blog/comunidad-virtual-secretos-para-aumentar-la-participacion/',
    },
    {
      referencia:
        'Emagister, B. (2021). Comunidad virtual: secretos para aumentar la participación. Blog Emagister.',
      link:
        'https://www.emagister.com/blog/comunidad-virtual-secretos-para-aumentar-la-participacion/',
    },
    {
      referencia:
        'Fernández, R. (2022). Panorama mundial de las redes sociales - Datos estadísticos. Statista.',
      link:
        'https://es.statista.com/temas/3168/panorama-mundial-de-las-redes-sociales/',
    },
    {
      referencia:
        'Lahidalga, J. (2021). Las últimas tendencias en <em>marketing</em> digital B2B para generar demanda. Ibermática digital.',
      link: 'https://ibermaticadigital.com/tendencias-marketing-digital-b2b/',
    },
    {
      referencia:
        'Mardones, C. (2021). Tipos de audiencias en la publicidad. Portalesdenegocios.com.',
      link:
        'https://www.portalesdenegocios.com/blog/tipos-de-audiencias-en-la-publicidad/',
    },
    {
      referencia:
        'Wearecontent. (2021). Claves para diferenciar entre audiencia y comunidad. Wearecontent.',
      link:
        'https://www.wearecontent.com/blog/social-media/audiencia-y-comunidad',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leibniz Huxlay Flórez Guzmán',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro de la Industria y la Construcción',
        },
        {
          nombre: 'Zvi Daniel Grosman Landáez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jamie Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
