import { FC } from "react";
import { GetStaticProps } from "next";

import { AlfaBar } from "../../components/AlfaBar";
import { MainLayout } from "../../layouts/MainLayout";
import essentialApi from "../../api/essentialApi";

interface Props {
  data: any;
}

const AlfasPage: FC<Props> = ({ data }) => {
  return (
    <MainLayout title="alfas">
      <div style={{ display: "flex", flexDirection: "column",alignItems: "center", gap: "0" }}>
      {data.map((alfa: any) => (
        <AlfaBar
          key={alfa.id}
          alfa={alfa.nombre}
          tipo={
            alfa.nombre == "Oportunidad" || alfa.nombre == "Interesados"
              ? "personalizacion"
              : alfa.nombre == "Requisitos" || alfa.nombre == "Sistema Software"
              ? "solucion"
              : "gestion"
          }
          percent={75}
        />
      ))}
      </div>
    </MainLayout>
  );
};

export default AlfasPage;
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await essentialApi.get("/name-alfas");

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
