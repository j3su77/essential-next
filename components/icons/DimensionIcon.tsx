
import { FC, useEffect, useState } from "react";

interface Props {
  tipo: string;
}

export const DimensionIcon: FC<Props> = ({ tipo }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    tipo === "personalizacion" && setColor("var(--personalizacion-dark-color)");
    tipo === "solucion" && setColor("var(--solucion-dark-color)");
    tipo === "gestion" && setColor("var(--gestion-dark-color)");
  }, []);

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100px"
        height="100px"
        viewBox="0 0 752 752"
        fill={color}
      >
        <path
          fillRule="evenodd"
          d="M474.66 462.82H313.07l-43.125 40.219 17.969 19.266-70.211 11.512 16.379-69.234 17.02 18.25 45.969-42.863V277.34h-25.652l25.652-38.48v-.984h.656l13.156-19.734 13.156 19.734h.657v.984l25.652 38.48h-25.652V435.2h149.97v-25.652l59.195 39.465-59.195 39.465z"
        ></path>
      </svg>
    );
  }
  
