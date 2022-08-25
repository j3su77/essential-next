import { FC } from "react";
import {  GetStaticProps } from "next";
import { ButtonBack, CardLayout, StateBar } from "../../../components";
import { MainLayout } from "../../../layouts/MainLayout";



import styles from "../../../styles/TransitionPage.module.css";
import essentialApi from '../../../api/essentialApi';

interface Props {
  data: any;
}

const OportunidadTransitionPage: FC<Props> = ({ data }) => {


  return (
    <MainLayout title="alfas">
      <ButtonBack text="atras" link="/alfas" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardLayout tipo="personalizacion" nombre="opurtunidad">
          <p className={styles.descripcion}>
           Conjunto de circunstancias que, en <strong >entorno</strong> a un <strong>resultado/Sdl</strong>, justifican el <strong>esfuerzo</strong>, afectan a los <strong>interesados</strong> y permiten enfocar los <strong>requisitos</strong>
          </p>

          <div>
            {data.map((state:any) => (
              <StateBar key={state.id} state={state.nombre} name="oportunidad" index={state.id - 1} />
            ))}
          </div>
        </CardLayout>
      </div>
    </MainLayout>
  );
};

export default OportunidadTransitionPage;


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await essentialApi.get("/estados", {
    data: { id_alfa: 1 },
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
