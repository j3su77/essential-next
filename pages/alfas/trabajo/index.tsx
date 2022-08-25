import { FC } from "react";
import { GetStaticProps } from "next";
import { ButtonBack, CardLayout, StateBar } from "../../../components";
import { MainLayout } from "../../../layouts/MainLayout";

import styles from "../../../styles/TransitionPage.module.css";
import essentialApi from "../../../api/essentialApi";

interface Props {
  data: any;
}

const TrabajoTransitionPage: FC<Props> = ({ data }) => {
  return (
    <MainLayout title="alfas">
      <ButtonBack text="atras" link="/alfas" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardLayout tipo="gestion" nombre="trabajo">
          <p className={styles.descripcion}>
            <strong>Actividad</strong> que al realizarse implica <strong>riesgos</strong> y una <strong>acción</strong> mental o física, logrando un<strong>progreso</strong> en el <strong>esfuerzo</strong> (<i>qué</i>)
            
          </p>

          <div>
            {data.map((state: any, index: number) => (
              <StateBar
                key={state.id}
                state={state.nombre}
                name="trabajo"
                index={index}
              />
            ))}
          </div>
        </CardLayout>
      </div>
    </MainLayout>
  );
};

export default TrabajoTransitionPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await essentialApi.get("/estados", {
    data: { id_alfa: 7 },
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
