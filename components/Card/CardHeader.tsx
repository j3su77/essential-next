import { FC } from "react";
import {AlfaIcon, DimensionIcon } from "../icons";


import styles from "./cardHeader.module.css"

interface Props {
    title: string;
    type: string;
}

export const CardHeader: FC<Props> = ({title,type}) => {
  return (
    <div className={`${styles.title__container} ${type}__light`}>
        <div className={styles.icon__alfa}>
        <AlfaIcon tipo={type} w="80px" h="80px"/>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.icon__dimension}>
          <DimensionIcon tipo={type} />
        </div>

    </div>
  )
}
