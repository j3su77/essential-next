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
  const [dosData, setDosData] =useState<any>();
  const [tresData, setTresData] = useState<any>();
  const [cuatroData, setCuatroData] = useState<any>();
  const [cincoData, setCincoData] = useState<any>();
  const [SeisData, setSeisData] = useState<any>();

  useEffect(() => {
    const numItem: number = Number(router.query.num) | 0;
    setItemSelected(numItem);

    setUnoData(
      data.filter((criterio: any) => criterio.id_estado == 13).sort(function(a: any, b: any){return a.id - b.id})
    );

    setDosData(
      data.filter((criterio: any) => criterio.id_estado == 14).sort(function(a: any, b: any){return a.id - b.id})
    );

    setTresData(
      data.filter((criterio: any) => criterio.id_estado == 15).sort(function(a: any, b: any){return a.id - b.id})
    );

    setCuatroData(data.filter((criterio: any) => criterio.id_estado == 16).sort(function(a: any, b: any){return a.id - b.id}));

    setCincoData(data.filter((criterio: any) => criterio.id_estado == 17).sort(function(a: any, b: any){return a.id - b.id}));

    setSeisData(
      data.filter((criterio: any) => criterio.id_estado == 18).sort(function(a: any, b: any){return a.id - b.id})
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
     

      <ButtonBack text="atras" link="/alfas/requisitos" />

          <Slider {...settings}>
            <CardLayout tipo="solucion" nombre="requisitos">
              <Criterios data={unoData} index={1} tipo="solucion" numEstados={6} />
            </CardLayout>

            <CardLayout tipo="solucion" nombre="requisitos">
              <Criterios
                data={dosData}
                tipo="solucion"
                 numEstados={6} 
                 index={2}
              />
            </CardLayout>

            <CardLayout tipo="solucion" nombre="requisitos">
              <Criterios
                data={tresData}
                tipo="solucion"
                 numEstados={6} 
                 index={3}
              />
            </CardLayout>

            <CardLayout tipo="solucion" nombre="requisitos">
              <Criterios data={cuatroData}  tipo="solucion" numEstados={6}  index={4} />
            </CardLayout>

            <CardLayout tipo="solucion" nombre="requisitos">
              <Criterios data={cincoData}  tipo="solucion" numEstados={6}  index={5} />
            </CardLayout>

            <CardLayout tipo="solucion" nombre="requisitos">
              <Criterios
                data={SeisData}
                tipo="solucion"
                 numEstados={6} 
                 index={6}
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
    data: { id_alfa: 3 },
  });

  return {
    props: {
      data,
    },
  };
};
