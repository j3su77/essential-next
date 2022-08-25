import { FC } from "react";

import { CoreIcon } from '../icons/CoreIcon';

import styles from "./cardFooter.module.css"



export const CardFooter: FC = ({}) => {
  return (
    <div className={styles.footer__container}>
        <div>
            <CoreIcon />
        </div>
        <h4 className={styles.footer__version}>0.1.0</h4>
    </div>
  )
}
