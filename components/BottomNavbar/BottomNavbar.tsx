import Link from "next/link";
import { useRouter } from "next/router";

import { HiHome } from "react-icons/hi";
import { RiNumber6 } from "react-icons/ri";
import { FaUser, FaUsers } from "react-icons/fa";

import styles from "./bottomNavbar.module.css";
import { AlfaIcon } from '../icons/AlfaIcon';

export const BottomNavbar = () => {
  const match = useRouter();


  return (
    <div className={styles.bottom__nav}>
      <Link href={"/"}>
        <a className={styles.bn__tab}>
          <div className={match.asPath === "/" ? styles["bn__tab-active"] : ""}>
            <HiHome />
          </div>
        </a>
      </Link>

      <Link href={"/alfas"}>
        <a className={styles.bn__tab}>
          <div
            className={
              match.asPath.match("/alfas") ? styles["bn__tab-active"] : ""
            }
          >
            <div className={styles.prueba}>

            <AlfaIcon tipo="" w="90px" h="90px" />
            </div>
          </div>
        </a>
      </Link>

      <Link href={"/equipo"}>
        <a className={styles.bn__tab}>
          <div
            className={
              match.asPath === "/equipo" ? styles["bn__tab-active"] : ""
            }
          >
            <FaUsers />
          </div>
        </a>
      </Link>

      <Link href={"/cuenta"}>
        <a className={styles.bn__tab}>
          <div
            className={
              match.asPath === "/cuenta" ? styles["bn__tab-active"] : ""
            }
          >
            <FaUser />
          </div>
        </a>
      </Link>
    </div>
  );
};
