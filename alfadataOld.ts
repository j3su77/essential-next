export interface SeedAlfa {
    nombre: string;
    tipo: string;
    numero_estados: number;
    descripcion: string;
    estados: object;
    slug: string;
  }
  
  export const alfasData: SeedAlfa[] = [
    {
      nombre: "oportunidad",
      slug: "oportunidad",
      tipo: "personalizacion",
      descripcion: "conjunto de circunstancias saf lorasdfd",
      numero_estados: 6,
      estados: {
        identificada: [
          ["identificada","" , "identificada1"],
          ["identificada2", "identificada12"],
          ["identificada3", "identificada3"],
        ],
        "con Solución Requerida": [
          ["asdfi", "asdf345asdf asfasfdasffdsdsfdsf asdfsf"],
          ["asdfu", "df asfassdffdasfdsfdsf asdfsf"],
          ["asdfy", "sdf asfasfdasfdsfdsf asdfsf"],
          ["asdft", "descripcion asfasasdffdasfdsfdasdfsf asdfsf"],
          ["asdfe", "descripcidfon asfasfdasasffdsfdsf aasdfsdfsf"],
        ],
        "con Valor Establecido": [
          ["asdfm", "asdf df asfasfddsfdsfdfsfds"],
          ["asdfn", "descripciasdfon asfasfddfasfdsfdsf aasdfsf"],
          ["asdfb", "descripcion asfasfdasfdsfdsf asdfasdfsf"],
          ["asdfv", "asdf345 asfasfdasfasdfdsfdsf asasdfdfsf"],
          ["asdfc", "descripcadsfion afsfasfdasfdsfdsf asdf"],
        ],
        Viable: [
          ["asdfz", "descripcsaion asfasfdasfdfdsfdsf asddffsf"],
          ["asdfa", "descripciouion asfasfdasfiodsfdsf ayt"],
          ["asdfs", "descripciuioon asuiofasfdasfdsfdsf asdfsf"],
          ["asdfds", "descripcion asfayuiosfdasfdsfdsf asdfsf"],
          ["asdfd", "descripciioon asfasiofdasfdsfdsf asdfsf"],
          ["asdff", "descripciiuoon asfasfdasfdsfdsf asdfsf"],
        ],
        Tratada: [
          ["asdfg", "descripciyuion asfasyuiofdasfdsfdsf asdfsf"],
          ["asdfh", "descripciyuioon asfauiosfdasfdsfdsf asdfsf"],
          ["asdfj", "descripcioion asfasfyuiodasfdsfdsf asdfsf"],
        ],
        "con beneficio acomuldado": [
          ["asdfj", "descripiuocion asfasfuiodasfdsfdsf asyuiodfsf"],
          ["asdflo", " asfasuioasfdsfdsf "],
        ],
      },
    },
  
    {
      nombre: "interesados",
      slug: "intersados",
      tipo: "personalizacion",
      descripcion: "Las personas, grupos u organizaciones que afectan o son afectados por un sistema de software",
      numero_estados: 6,
      estados: {
        reconocidos: [
          [
            "Grupos de partes interesadas identificados",
            "Se identifican todos los diferentes grupos de partes interesadas que están, o estarán, afectados por el desarrollo y operación del sistema de software. ",
          ],
          [
            "Grupos de partes interesadas clave representados",
            "Hay acuerdo sobre los grupos de interés a representar. Como mínimo, se han considerado los grupos de partes interesadas que financian, usan, apoyan y mantienen el sistema. ",
          ],
          [
            "Responsabilidades definidas",
            "Se han definido las responsabilidades de los representantes de las partes interesadas. ",
          ],
          ["reconocidos"]
        ], 
        "con Solución Requerida": [
          ["asdfi", "asdf345asdf asfasfdasffdsdsfdsf asdfsf"],
          ["asdfu", "df asfassdffdasfdsfdsf asdfsf"],
          ["asdfy", "sdf asfasfdasfdsfdsf asdfsf"],
          ["asdft", "descripcion asfasasdffdasfdsfdasdfsf asdfsf"],
          ["asdfe", "descripcidfon asfasfdasasffdsfdsf aasdfsdfsf"],
          ["con-solucion-requerida"]
        ],
        "con Valor Establecido": [
          ["asdfm", "asdf df asfasfddsfdsfdfsfds"],
          ["asdfn", "descripciasdfon asfasfddfasfdsfdsf aasdfsf"],
          ["asdfb", "descripcion asfasfdasfdsfdsf asdfasdfsf"],
          ["asdfv", "asdf345 asfasfdasfasdfdsfdsf asasdfdfsf"],
          ["asdfc", "descripcadsfion afsfasfdasfdsfdsf asdf"],
          ["con-valore-establecido"]
        ],
        Viable: [
          ["asdfz", "descripcsaion asfasfdasfdfdsfdsf asddffsf"],
          ["asdfa", "descripciouion asfasfdasfiodsfdsf ayt"],
          ["asdfs", "descripciuioon asuiofasfdasfdsfdsf asdfsf"],
          ["asdfds", "descripcion asfayuiosfdasfdsfdsf asdfsf"],
          ["asdfd", "descripciioon asfasiofdasfdsfdsf asdfsf"],
          ["asdff", "descripciiuoon asfasfdasfdsfdsf asdfsf"],
          ["Viable"]
        ],
        Tratada: [
          ["asdfg", "descripciyuion asfasyuiofdasfdsfdsf asdfsf"],
          ["asdfh", "descripciyuioon asfauiosfdasfdsfdsf asdfsf"],
          ["asdfj", "descripcioion asfasfyuiodasfdsfdsf asdfsf"],
          ["tratada"]
        ],
        "con beneficio acomuldado": [
          ["asdfj", "descripiuocion asfasfuiodasfdsfdsf asyuiodfsf"],
          ["asdflo", " asfasuioasfdsfdsf "],
          ["con-beneficio-acomulado"]
        ],
      },
    },
    {
      nombre: "requisitos",
      tipo: "solucion",
      slug: "requisitos",
      descripcion: "conjunto de circunstancias saf lorasdfd",
      numero_estados: 6,
      estados: {
        identificada: [
          ["asdasf","desdfcripcion asfasfdasfdsfdsf asdfsf"],
          ["asdfp", "descrisdafpcion asfasdfasfdasfdsfdsf asdfsf"],
          ["asdfo", "descrasfpcion  asdff"],
        ],
        "con Solución Requerida": [
          ["asdfi", "asdf345asdf asfasfdasffdsdsfdsf asdfsf"],
          ["asdfu", "df asfassdffdasfdsfdsf asdfsf"],
          ["asdfy", "sdf asfasfdasfdsfdsf asdfsf"],
          ["asdft", "descripcion asfasasdffdasfdsfdasdfsf asdfsf"],
          ["asdfe", "descripcidfon asfasfdasasffdsfdsf aasdfsdfsf"],
        ],
        "con Valor Establecido": [
          ["asdfm", "asdf df asfasfddsfdsfdfsfds"],
          ["asdfn", "descripciasdfon asfasfddfasfdsfdsf aasdfsf"],
          ["asdfb", "descripcion asfasfdasfdsfdsf asdfasdfsf"],
          ["asdfv", "asdf345 asfasfdasfasdfdsfdsf asasdfdfsf"],
          ["asdfc", "descripcadsfion afsfasfdasfdsfdsf asdf"],
        ],
        Viable: [
          ["asdfz", "descripcsaion asfasfdasfdfdsfdsf asddffsf"],
          ["asdfa", "descripciouion asfasfdasfiodsfdsf ayt"],
          ["asdfs", "descripciuioon asuiofasfdasfdsfdsf asdfsf"],
          ["asdfds", "descripcion asfayuiosfdasfdsfdsf asdfsf"],
          ["asdfd", "descripciioon asfasiofdasfdsfdsf asdfsf"],
          ["asdff", "descripciiuoon asfasfdasfdsfdsf asdfsf"],
        ],
        Tratada: [
          ["asdfg", "descripciyuion asfasyuiofdasfdsfdsf asdfsf"],
          ["asdfh", "descripciyuioon asfauiosfdasfdsfdsf asdfsf"],
          ["asdfj", "descripcioion asfasfyuiodasfdsfdsf asdfsf"],
        ],
        "con beneficio acomuldado": [
          ["asdfj", "descripiuocion asfasfuiodasfdsfdsf asyuiodfsf"],
          ["asdflo", " asfasuioasfdsfdsf "],
        ],
      },
    },
    {
      nombre: "sistema de software",
      tipo: "solucion",
      slug: "sistema-de-software",
      descripcion: "conjunto de circunstancias saf lorasdfd",
      numero_estados: 6,
      estados: {
        identificada: [
          ["asdasf", "desdfcripcion asfasfdasfdsfdsf asdfsf"],
          ["asdfp", "descrisdafpcion asfasdfasfdasfdsfdsf asdfsf"],
          ["asdfo", "descrasfpcion  asdff"],
        ],
        "con Solución Requerida": [
          ["asdfi", "asdf345asdf asfasfdasffdsdsfdsf asdfsf"],
          ["asdfu", "df asfassdffdasfdsfdsf asdfsf"],
          ["asdfy", "sdf asfasfdasfdsfdsf asdfsf"],
          ["asdft", "descripcion asfasasdffdasfdsfdasdfsf asdfsf"],
          ["asdfe", "descripcidfon asfasfdasasffdsfdsf aasdfsdfsf"],
        ],
        "con Valor Establecido": [
          ["asdfm", "asdf df asfasfddsfdsfdfsfds"],
          ["asdfn", "descripciasdfon asfasfddfasfdsfdsf aasdfsf"],
          ["asdfb", "descripcion asfasfdasfdsfdsf asdfasdfsf"],
          ["asdfv", "asdf345 asfasfdasfasdfdsfdsf asasdfdfsf"],
          ["asdfc", "descripcadsfion afsfasfdasfdsfdsf asdf"],
        ],
        Viable: [
          ["asdfz", "descripcsaion asfasfdasfdfdsfdsf asddffsf"],
          ["asdfa", "descripciouion asfasfdasfiodsfdsf ayt"],
          ["asdfs", "descripciuioon asuiofasfdasfdsfdsf asdfsf"],
          ["asdfds", "descripcion asfayuiosfdasfdsfdsf asdfsf"],
          ["asdfd", "descripciioon asfasiofdasfdsfdsf asdfsf"],
          ["asdff", "descripciiuoon asfasfdasfdsfdsf asdfsf"],
        ],
        Tratada: [
          ["asdfg", "descripciyuion asfasyuiofdasfdsfdsf asdfsf"],
          ["asdfh", "descripciyuioon asfauiosfdasfdsfdsf asdfsf"],
          ["asdfj", "descripcioion asfasfyuiodasfdsfdsf asdfsf"],
        ],
        "con beneficio acomuldado": [
          ["asdfj", "descripiuocion asfasfuiodasfdsfdsf asyuiodfsf"],
          ["asdflo", " asfasuioasfdsfdsf "],
        ],
      },
    },
    {
      nombre: "trabajo",
      tipo: "gestion",
      slug: "trabajo",
      descripcion: "conjunto de circunstancias saf lorasdfd",
      numero_estados: 6,
      estados: {
        identificada: [
          ["asdasf", "desdfcripcion asfasfdasfdsfdsf asdfsf"],
          ["asdfp", "descrisdafpcion asfasdfasfdasfdsfdsf asdfsf"],
          ["asdfo", "descrasfpcion  asdff"],
        ],
        "con Solución Requerida": [
          ["asdfi", "asdf345asdf asfasfdasffdsdsfdsf asdfsf"],
          ["asdfu", "df asfassdffdasfdsfdsf asdfsf"],
          ["asdfy", "sdf asfasfdasfdsfdsf asdfsf"],
          ["asdft", "descripcion asfasasdffdasfdsfdasdfsf asdfsf"],
          ["asdfe", "descripcidfon asfasfdasasffdsfdsf aasdfsdfsf"],
        ],
        "con Valor Establecido": [
          ["asdfm", "asdf df asfasfddsfdsfdfsfds"],
          ["asdfn", "descripciasdfon asfasfddfasfdsfdsf aasdfsf"],
          ["asdfb", "descripcion asfasfdasfdsfdsf asdfasdfsf"],
          ["asdfv", "asdf345 asfasfdasfasdfdsfdsf asasdfdfsf"],
          ["asdfc", "descripcadsfion afsfasfdasfdsfdsf asdf"],
        ],
        Viable: [
          ["asdfz", "descripcsaion asfasfdasfdfdsfdsf asddffsf"],
          ["asdfa", "descripciouion asfasfdasfiodsfdsf ayt"],
          ["asdfs", "descripciuioon asuiofasfdasfdsfdsf asdfsf"],
          ["asdfds", "descripcion asfayuiosfdasfdsfdsf asdfsf"],
          ["asdfd", "descripciioon asfasiofdasfdsfdsf asdfsf"],
          ["asdff", "descripciiuoon asfasfdasfdsfdsf asdfsf"],
        ],
        Tratada: [
          ["asdfg", "descripciyuion asfasyuiofdasfdsfdsf asdfsf"],
          ["asdfh", "descripciyuioon asfauiosfdasfdsfdsf asdfsf"],
          ["asdfj", "descripcioion asfasfyuiodasfdsfdsf asdfsf"],
        ],
        "con beneficio acomuldado": [
          ["asdfj", "descripiuocion asfasfuiodasfdsfdsf asyuiodfsf"],
          ["asdflo", " asfasuioasfdsfdsf "],
        ],
      },
    },
    {
      nombre: "equipo",
      tipo: "gestion",
      slug: "equipo",
      descripcion: "conjunto de circunstancias saf lorasdfd",
      numero_estados: 6,
      estados: {
        identificada: [
          ["asdasf", "desdfcripcion asfasfdasfdsfdsf asdfsf"],
          ["asdfp", "descrisdafpcion asfasdfasfdasfdsfdsf asdfsf"],
          ["asdfo", "descrasfpcion  asdff"],
        ],
        "con Solución Requerida": [
          ["asdfi", "asdf345asdf asfasfdasffdsdsfdsf asdfsf"],
          ["asdfu", "df asfassdffdasfdsfdsf asdfsf"],
          ["asdfy", "sdf asfasfdasfdsfdsf asdfsf"],
          ["asdft", "descripcion asfasasdffdasfdsfdasdfsf asdfsf"],
          ["asdfe", "descripcidfon asfasfdasasffdsfdsf aasdfsdfsf"],
        ],
        "con Valor Establecido": [
          ["asdfm", "asdf df asfasfddsfdsfdfsfds"],
          ["asdfn", "descripciasdfon asfasfddfasfdsfdsf aasdfsf"],
          ["asdfb", "descripcion asfasfdasfdsfdsf asdfasdfsf"],
          ["asdfv", "asdf345 asfasfdasfasdfdsfdsf asasdfdfsf"],
          ["asdfc", "descripcadsfion afsfasfdasfdsfdsf asdf"],
        ],
        Viable: [
          ["asdfz", "descripcsaion asfasfdasfdfdsfdsf asddffsf"],
          ["asdfa", "descripciouion asfasfdasfiodsfdsf ayt"],
          ["asdfs", "descripciuioon asuiofasfdasfdsfdsf asdfsf"],
          ["asdfds", "descripcion asfayuiosfdasfdsfdsf asdfsf"],
          ["asdfd", "descripciioon asfasiofdasfdsfdsf asdfsf"],
          ["asdff", "descripciiuoon asfasfdasfdsfdsf asdfsf"],
        ],
        Tratada: [
          ["asdfg", "descripciyuion asfasyuiofdasfdsfdsf asdfsf"],
          ["asdfh", "descripciyuioon asfauiosfdasfdsfdsf asdfsf"],
          ["asdfj", "descripcioion asfasfyuiodasfdsfdsf asdfsf"],
        ],
        "con beneficio acomuldado": [
          ["asdfj", "descripiuocion asfasfuiodasfdsfdsf asyuiodfsf"],
          ["asdflo", " asfasuioasfdsfdsf "],
        ],
      },
    },
    {
      nombre: "forma de trabajo",
      tipo: "gestion",
      slug: "forma-de-trabajo",
      descripcion: "conjunto de circunstancias saf lorasdfd",
      numero_estados: 6,
      estados: {
        identificada: [
          ["asdasf", "desdfcripcion asfasfdasfdsfdsf asdfsf"],
          ["asdfp", "descrisdafpcion asfasdfasfdasfdsfdsf asdfsf"],
          ["asdfo", "descrasfpcion  asdff"],
        ],
        "con Solución Requerida": [
          ["asdfi", "asdf345asdf asfasfdasffdsdsfdsf asdfsf"],
          ["asdfu", "df asfassdffdasfdsfdsf asdfsf"],
          ["asdfy", "sdf asfasfdasfdsfdsf asdfsf"],
          ["asdft", "descripcion asfasasdffdasfdsfdasdfsf asdfsf"],
          ["asdfe", "descripcidfon asfasfdasasffdsfdsf aasdfsdfsf"],
        ],
        "con Valor Establecido": [
          ["asdfm", "asdf df asfasfddsfdsfdfsfds"],
          ["asdfn", "descripciasdfon asfasfddfasfdsfdsf aasdfsf"],
          ["asdfb", "descripcion asfasfdasfdsfdsf asdfasdfsf"],
          ["asdfv", "asdf345 asfasfdasfasdfdsfdsf asasdfdfsf"],
          ["asdfc", "descripcadsfion afsfasfdasfdsfdsf asdf"],
        ],
        Viable: [
          ["asdfz", "descripcsaion asfasfdasfdfdsfdsf asddffsf"],
          ["asdfa", "descripciouion asfasfdasfiodsfdsf ayt"],
          ["asdfs", "descripciuioon asuiofasfdasfdsfdsf asdfsf"],
          ["asdfds", "descripcion asfayuiosfdasfdsfdsf asdfsf"],
          ["asdfd", "descripciioon asfasiofdasfdsfdsf asdfsf"],
          ["asdff", "descripciiuoon asfasfdasfdsfdsf asdfsf"],
        ],
        Tratada: [
          ["asdfg", "descripciyuion asfasyuiofdasfdsfdsf asdfsf"],
          ["asdfh", "descripciyuioon asfauiosfdasfdsfdsf asdfsf"],
          ["asdfj", "descripcioion asfasfyuiodasfdsfdsf asdfsf"],
        ],
        "con beneficio acomuldado": [
          ["asdfj", "descripiuocion asfasfuiodasfdsfdsf asyuiodfsf"],
          ["asdflo", " asfasuioasfdsfdsf "],
        ],
      },
    },
  ];
  