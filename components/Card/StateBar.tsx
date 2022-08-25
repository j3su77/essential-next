

import Link from "next/link";
import { FC } from "react";
import styles from "./stateBar.module.css"
import { useRouter } from 'next/router';

interface Props {
  state: string;
  name: string
  index?: number
}

export const StateBar: FC<Props> = ({ state, name, index }) => {


  return (
    <Link href={`${name}/estados?num=${index}`}>

      <div className={styles.statebar__container} >

        <h3 className={styles.text}>{state.toLowerCase()}</h3>

      </div>
    </Link>


  )
}
