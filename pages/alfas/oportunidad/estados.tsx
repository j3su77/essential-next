import { FC, useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Slider from "react-slick";

import essentialApi from "../../../api/essentialApi";
import { MainLayout } from "../../../layouts/MainLayout";
import { CardLayout, Criterios, ButtonBack } from "../../../components";

import styles from "../../../styles/EstadosPage.module.css";

interface Props {
  data: any;
  num: number;
}

const EstadosPage: FC<Props> = ({ num, data }) => {
  const router = useRouter();
  const [itemSelected, setItemSelected] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [indentificadaData, setIndentificadaData] = useState<any>();
  const [conSolucionRequeridaData, setConSolucionRequeridaData] =
    useState<any>();
  const [conValorEstablecidoData, setconValorEstablecidoData] = useState<any>();
  const [viableData, setViableData] = useState<any>();
  const [tratadaData, setTratadaData] = useState<any>();
  const [conBeneficioAcumuladoData, setConBeneficioAcumuladoData] =
    useState<any>();

  useEffect(() => {
    const numItem: number = Number(router.query.num) | 0;
    setItemSelected(numItem);

    setIndentificadaData(
      data.filter((criterio: any) => criterio.id_estado == 1).sort(function(a: any, b: any){return a.id - b.id})
    );

    setConSolucionRequeridaData(
      data.filter((criterio: any) => criterio.id_estado == 2).sort(function(a: any, b: any){return a.id - b.id})
    );

    setconValorEstablecidoData(
      data.filter((criterio: any) => criterio.id_estado == 3).sort(function(a: any, b: any){return a.id - b.id})
    );

    setViableData(data.filter((criterio: any) => criterio.id_estado == 4).sort(function(a: any, b: any){return a.id - b.id}));

    setTratadaData(data.filter((criterio: any) => criterio.id_estado == 5).sort(function(a: any, b: any){return a.id - b.id}));

    setConBeneficioAcumuladoData(
      data.filter((criterio: any) => criterio.id_estado == 6).sort(function(a: any, b: any){return a.id - b.id})
    );

    setIsLoading(false);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    initialSlide: itemSelected,
  };

  return (
    <MainLayout title="estados">
      {isLoading ? (
        ""
      ) : (
        <div style={{ margin: "auto" }}>
     

      <ButtonBack text="atras" link="/alfas/oportunidad" />

          <Slider {...settings}>
            <CardLayout tipo="personalizacion" nombre="Oportunidad">
              <Criterios data={indentificadaData} tipo="personalizacion" numEstados={6} />
            </CardLayout>

            <CardLayout tipo="personalizacion" nombre="Oportunidad">
              <Criterios
                data={conSolucionRequeridaData}
                tipo="personalizacion"
                 numEstados={6} 
              />
            </CardLayout>

            <CardLayout tipo="personalizacion" nombre="Oportunidad">
              <Criterios
                data={conValorEstablecidoData}
                tipo="personalizacion"
                 numEstados={6} 
              />
            </CardLayout>

            <CardLayout tipo="personalizacion" nombre="Oportunidad">
              <Criterios data={viableData}  tipo="personalizacion" numEstados={6}  />
            </CardLayout>

            <CardLayout tipo="personalizacion" nombre="Oportunidad">
              <Criterios data={tratadaData}  tipo="personalizacion" numEstados={6}  />
            </CardLayout>

            <CardLayout tipo="personalizacion" nombre="Oportunidad">
              <Criterios
                data={conBeneficioAcumuladoData}
                tipo="personalizacion"
                 numEstados={6} 
              />
            </CardLayout>
          </Slider>
        </div>
      )}
    </MainLayout>
  );
};

export default EstadosPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await essentialApi.get("/criterios", {
    data: { id_alfa: 1 },
  });

  return {
    props: {
      data,
    },
  };
};
