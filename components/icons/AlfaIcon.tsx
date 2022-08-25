import { FC, useEffect, useState } from "react";

interface Props {
  tipo: string;
  w: string;
  h: string;
}

export const AlfaIcon: FC<Props> = ({ tipo , w, h}) => {

    const [color, setColor] = useState("")

   useEffect(() => {
    tipo === "personalizacion" && setColor("var(--personalizacion-dark-color)")
    tipo === "solucion" && setColor("var(--solucion-dark-color)")
    tipo === "gestion" && setColor("var(--gestion-dark-color)")
   }, [])
   


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 752 752"
      fill={color}
      color={color}
    >
      <path d="M562.12 496.77c6.629-8.05 18.469-8.996 26.52-2.367 8.05 7.105 8.996 18.94 1.895 26.992-85.72 99.926-129.29 10.89-155.81-72.457-120.29 194.64-285.57 92.82-277.52-82.402 7.578-163.86 197.96-297.88 287.46-15.63 22.257-47.831 41.675-97.085 62.038-145.86 4.262-9.472 15.156-14.206 24.625-10.417 9.946 4.261 14.207 15.156 10.418 25.102-25.574 61.566-50.199 124.55-81.457 183.75 17.523 58.25 35.047 170.96 101.82 93.297zm-142.07-96.609c-78.613-262.36-218.32-185.64-225.43-32.203-7.106 159.6 125.02 216.9 225.43 32.203z"></path>
    </svg>
  );
};

