import { FC } from "react";
import { GetStaticProps } from "next";
import { ButtonBack, CardLayout, StateBar } from "../../../components";
import { MainLayout } from "../../../layouts/MainLayout";

import styles from "../../../styles/TransitionPage.module.css";
import essentialApi from "../../../api/essentialApi";

interface Props {
  data: any;
}

const FormaDeTrabajoTransitionPage: FC<Props> = ({ data }) => {
  return (
    <MainLayout title="alfas">
      <ButtonBack text="atras" link="/alfas" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardLayout tipo="gestion" nombre="forma de trabajo">
          <p className={styles.descripcion}>
            Conjunto adaptado de <strong>prácticas</strong> (o <strong>actividades</strong>) y <strong>recursos</strong> que un <strong>equipo</strong> utiliza para guiar y soportar su <strong>trabajo</strong> (<i>cómo</i>)
            
          </p>

          <div>
            {data.map((state: any, index: number) => (
              <StateBar
                key={state.id}
                state={state.nombre}
                name="forma-de-trabajo"
                index={index}
              />
            ))}
          </div>
        </CardLayout>
      </div>
    </MainLayout>
  );
};

export default FormaDeTrabajoTransitionPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await essentialApi.get("/estados", {
    data: { id_alfa: 6 },
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
