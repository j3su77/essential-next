import { FC } from "react";
import {  GetStaticProps } from "next";
import { ButtonBack, CardLayout, StateBar } from "../../../components";
import { MainLayout } from "../../../layouts/MainLayout";



import styles from "../../../styles/TransitionPage.module.css";
import essentialApi from '../../../api/essentialApi';

interface Props {
  data: any;
}

const SistemaSoftwareTransitionPage: FC<Props> = ({ data }) => {


  return (
    <MainLayout title="alfas">
      <ButtonBack text="atras" link="/alfas" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardLayout tipo="solucion" nombre="sistema software">
          <p className={styles.descripcion}>
          <strong>Sistema</strong> formado por software, hardware y datos que, proporciona su <strong>valor</strong> principal con la ejecucion del software
          </p>

          <div>
            {data.map((state:any, index: number) => (
              <StateBar key={state.id} state={state.nombre} name="sistema-software" index={index } />
            ))}
          </div>
        </CardLayout>
      </div>
    </MainLayout>
  );
};

export default SistemaSoftwareTransitionPage;


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await essentialApi.get("/estados", {
    data: { id_alfa: 4},
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
