import {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  useRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import essentialApi from "../../api/essentialApi";
import styles from "./criterios.module.css";

interface Props {
  data: any;
  numEstados: number;
  tipo: string;
}

export const Criterios: FC<Props> = ({ data, numEstados, tipo }) => {
  const [num] = useState(data[0].id_estado);
  const [nombre] = useState(data[0].nombre);

  return (
    <>
      <div className={styles.nameState}>
        <h2
          className={styles.nameState__text}
          style={{ color: "var(--personalizacion__text-dark)" }}
        >
          {nombre}
        </h2>
      </div>
      {data.map((criterio: any) => (
        <div key={criterio.id} className={`${styles.criterio}`}>
          <div style={{ width: "20px", height: "20px" }}>
            <input
              type="checkbox"
              className={`${styles.check} gestion__dark`}
              style={{
                accentColor: `var(--${tipo}-dark-color)`,
              }}
            />
          </div>
          <h3 className={`${styles.text__criterio} `} style={{}}>
            {criterio.criterio}
          </h3>
        </div>
      ))}
      <div className={`${styles.indicador} ${tipo}__light`}>
        <h2 className={styles.indicador__text}>{`${num}/${numEstados}`}</h2>
      </div>
    </>
  );
};
