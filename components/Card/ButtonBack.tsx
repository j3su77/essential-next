import Link from "next/link";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./buttonBack.module.css";

interface Props {
  text: string;
  link: string;
}

export const ButtonBack: FC<Props> = ({ text, link }) => {
  return (
    <Link href={link}>
      <a className={styles.button}><FaArrowLeft style={{marginRight: ".6rem"}}/>{text}</a>
    </Link>
  );
};
