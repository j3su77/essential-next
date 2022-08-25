import styles from "./alfaBar.module.css";
import { FC } from 'react';
import { SeedAlfa } from '../pages/alfasData';
import Link from "next/link";
import { useRouter } from 'next/router';

interface Props {
    alfa : string;
    tipo: string;
    percent: number;
  }
  


export const AlfaBar : FC<Props> = ({alfa, tipo, percent}) => {
    const {asPath} = useRouter();

  return (
    <Link href={`${asPath}/${alfa.toLowerCase().replaceAll(" ", "-")}`}>
    <a style={{width: "480px",minWidth: "380px", maxWidth: "500px"}} className={`${styles.baralpha__container} ${tipo}__light ${tipo}__text-dark`}>
      <h2 className={styles.baralpha__title}>{alfa}</h2>
      <div className={styles.baralpha__percent}>
        <h5 className={styles.baralpha__number}> {percent} % </h5>
        <span className={`${styles.baralpha__progress} ${tipo}__dark`} style={{ width: percent+"%" }}>
        </span>
      </div>
    </a>
    </Link>
  )
}
