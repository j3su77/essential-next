import React, { FC } from "react";

import { CardHeader, CardFooter } from './';
import { SeedAlfa } from '../../pages/alfasData';

import styles from "./cardLayout.module.css"

interface Props {
  tipo: string;
  nombre: string;
  children: React.ReactNode;
}

export const CardLayout: FC<Props> = ({tipo,nombre, children}) => {
  return (
    <div className={`${styles.card__container} ${tipo}__text-dark`} >
     <CardHeader title={nombre} type={tipo}/>
     <div className={styles.card__body}>

      {children}
     </div>

    <CardFooter  />

    </div>
  )
}
