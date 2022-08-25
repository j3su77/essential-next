import { FC, useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Slider from "react-slick";

import essentialApi from "../../../api/essentialApi";
import { MainLayout } from "../../../layouts/MainLayout";
import { CardLayout, Criterios, ButtonBack } from "../../../components";

interface Props {
  data: any;
  num: number;
}

const EstadosPage: FC<Props> = ({ num, data }) => {
  const router = useRouter();
  const [itemSelected, setItemSelected] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [unoData, setUnoData] = useState<any>();
  const [dosData, setDosData] = useState<any>();
  const [tresData, setTresData] = useState<any>();
  const [cuatroData, setCuatroData] = useState<any>();

  useEffect(() => {
    const numItem: number = Number(router.query.num) | 0;
    setItemSelected(numItem);

    setUnoData(
      data
        .filter((criterio: any) => criterio.id_estado == 38)
        .sort(function (a: any, b: any) {
          return a.id - b.id;
        })
    );

    setDosData(
      data
        .filter((criterio: any) => criterio.id_estado == 39)
        .sort(function (a: any, b: any) {
          return a.id - b.id;
        })
    );

    setTresData(
      data
        .filter((criterio: any) => criterio.id_estado == 40)
        .sort(function (a: any, b: any) {
          return a.id - b.id;
        })
    );

    setCuatroData(
      data
        .filter((criterio: any) => criterio.id_estado == 41)
        .sort(function (a: any, b: any) {
          return a.id - b.id;
        })
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
          <ButtonBack text="atras" link="/alfas/riesgos" />

          <Slider {...settings}>
            <CardLayout tipo="gestion" nombre="riesgos">
              <Criterios
                data={unoData}
                index={1}
                tipo="gestion"
                numEstados={4}
              />
            </CardLayout>

            <CardLayout tipo="gestion" nombre="riesgos">
              <Criterios
                data={dosData}
                tipo="gestion"
                numEstados={4}
                index={2}
              />
            </CardLayout>

            <CardLayout tipo="gestion" nombre="riesgos">
              <Criterios
                data={tresData}
                tipo="gestion"
                numEstados={4}
                index={3}
              />
            </CardLayout>

            <CardLayout tipo="gestion" nombre="riesgos">
              <Criterios
                data={cuatroData}
                tipo="gestion"
                numEstados={4}
                index={4}
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
    data: { id_alfa: 8 },
  });

  return {
    props: {
      data,
    },
  };
};
