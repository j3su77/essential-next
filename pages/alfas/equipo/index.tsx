import { FC } from "react";
import { GetStaticProps } from "next";
import { ButtonBack, CardLayout, StateBar } from "../../../components";
import { MainLayout } from "../../../layouts/MainLayout";

import styles from "../../../styles/TransitionPage.module.css";
import essentialApi from "../../../api/essentialApi";

interface Props {
  data: any;
}

const EquipoTransitionPage: FC<Props> = ({ data }) => {
  return (
    <MainLayout title="alfas">
      <ButtonBack text="atras" link="/alfas" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardLayout tipo="gestion" nombre="equipo">
          <p className={styles.descripcion}>
            Conjunto de <strong>Personas</strong> que, concernientemente a un{" "}
            <strong>resultado</strong> (sistema de interes),{" "}
            <strong>trabajan</strong> en la <strong>peronalizacion</strong>,{" "}
            <strong>solucion</strong> y <strong>gestión</strong>
          </p>

          <div>
            {data.map((state: any, index: number) => (
              <StateBar
                key={state.id}
                state={state.nombre}
                name="equipo"
                index={index}
              />
            ))}
          </div>
        </CardLayout>
      </div>
    </MainLayout>
  );
};

export default EquipoTransitionPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await essentialApi.get("/estados", {
    data: { id_alfa: 5 },
  });

  console.log({ estados: data });

  if (!data) {
    return {
      redirect: {
        destination: "/alfas",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24,
  };
};
