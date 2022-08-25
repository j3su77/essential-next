import { FC } from "react";
import {  GetStaticProps } from "next";
import { ButtonBack, CardLayout, StateBar } from "../../../components";
import { MainLayout } from "../../../layouts/MainLayout";



import styles from "../../../styles/TransitionPage.module.css";
import essentialApi from '../../../api/essentialApi';

interface Props {
  data: any;
}

const InteresadosTransitionPage: FC<Props> = ({ data }) => {


  return (
    <MainLayout title="alfas">
      <ButtonBack text="atras" link="/alfas" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardLayout tipo="personalizacion" nombre="interesados">
          <p className={styles.descripcion}>
          <strong >Organizaciones</strong>, grupos o<strong>persona</strong> que afectan o se ven afectados por un <strong>resultado/Sdl</strong> o<strong> esfuerzo</strong>(<strong>equipo</strong> además se considera aparte)
          </p>

          <div>
            {data.map((state:any, index: number) => (
              <StateBar key={state.id} state={state.nombre} name="interesados" index={index} />
            ))}
          </div>
        </CardLayout>
      </div>
    </MainLayout>
  );
};

export default InteresadosTransitionPage;


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await essentialApi.get("/estados", {
    data: { id_alfa: 2 },
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
