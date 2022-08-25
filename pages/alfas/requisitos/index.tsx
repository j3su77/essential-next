import { FC } from "react";
import {  GetStaticProps } from "next";
import { ButtonBack, CardLayout, StateBar } from "../../../components";
import { MainLayout } from "../../../layouts/MainLayout";



import styles from "../../../styles/TransitionPage.module.css";
import essentialApi from '../../../api/essentialApi';

interface Props {
  data: any;
}

const RequisitosTransitionPage: FC<Props> = ({ data }) => {


  return (
    <MainLayout title="alfas">
      <ButtonBack text="atras" link="/alfas" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardLayout tipo="solucion" nombre="requisitos">
          <p className={styles.descripcion}>
           Lo que el <strong>resultado/Sdl</strong> debe ofrecer para tratar la <strong>oportunidad</strong> y satisfacer a los <strong>interesados</strong>
          </p>

          <div>
            {data.map((state:any, index: number) => (
              <StateBar key={state.id} state={state.nombre} name="requisitos" index={index } />
            ))}
          </div>
        </CardLayout>
      </div>
    </MainLayout>
  );
};

export default RequisitosTransitionPage;


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await essentialApi.get("/estados", {
    data: { id_alfa: 3 },
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
