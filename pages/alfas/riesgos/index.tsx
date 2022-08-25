import { FC } from "react";
import { GetStaticProps } from "next";
import { ButtonBack, CardLayout, StateBar } from "../../../components";
import { MainLayout } from "../../../layouts/MainLayout";

import styles from "../../../styles/TransitionPage.module.css";
import essentialApi from "../../../api/essentialApi";

interface Props {
  data: any;
}

const RiesgosTransitionPage: FC<Props> = ({ data }) => {
  return (
    <MainLayout title="alfas">
      <ButtonBack text="atras" link="/alfas" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardLayout tipo="gestion" nombre="riesgos">
          <p className={styles.descripcion}>
            Eventos o condiciones inciertas significativas que se pueden
            caracterizar y si se producen, tienen un efecto positivo o negativo
            en el<strong>esfuerzo</strong>
          </p>

          <div>
            {data.map((state: any, index: number) => (
              <StateBar
                key={state.id}
                state={state.nombre}
                name="riesgos"
                index={index}
              />
            ))}
          </div>
        </CardLayout>
      </div>
    </MainLayout>
  );
};

export default RiesgosTransitionPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await essentialApi.get("/estados", {
    data: { id_alfa: 8 },
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
