export interface SeedAlfa {
  nombre: string;
  tipo: string;
  numero_estados: number;
  descripcion: string;
  estados: object;
  slug: string;
}


export const alfasData: SeedAlfa = 
  {
    nombre: "oportunidad",
    slug: "oportunidad",
    tipo: "personalizacion",
    descripcion: "conjunto de circunstancias saf lorasdfd",
    numero_estados: 6,
    estados: {
      "identificada": [
        "identificada1",
        "identificada2",
        "identificada3",
      ],
      "con Solución Requerida": [
        "con Solución Requerida1",
        "con Solución Requerida2",
        "con Solución Requerida3",
        "con Solución Requerida4",
        "con Solución Requerida5",
      ],
      "con Valor Establecido": [
        "con Valor Establecido1",
        "con Valor Establecid2",
        "con Valor Establecido3",
        "con Valor Establecido4",
        "con Valor Establecido5",
      ],
      "viable": [
        "viable1",
        "viable2",
        "viable3",
        "viable4",
        "viable5",
        "viable6",
      ],
      "tratada": [
        "tratada1",
        "tratada2",
        "tratada3",
      ],
      "con beneficio acomuldado1": [
        "con beneficio acomuldado2",
        "con beneficio acomuldado3",
      ],
    }
  };
