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

  const [reconocidosData, setReconocidosData] = useState<any>();
  const [representadosData, setRepresentadosData] =useState<any>();
  const [involucradosData, setInvolucradosData] = useState<any>();
  const [deAcuerdoDAta, setDeAcuerdoData] = useState<any>();
  const [satisfechosParaDespliegueData, setSatisfechosParaDespliegueData] = useState<any>();
  const [satisfechosEnUsoData, setSatisfechosEnUsoDataData] = useState<any>();

  useEffect(() => {
    const numItem: number = Number(router.query.num) | 0;
    setItemSelected(numItem);

    setReconocidosData(
      data.filter((criterio: any) => criterio.id_estado == 7).sort(function(a: any, b: any){return a.id - b.id})
    );

    setRepresentadosData(
      data.filter((criterio: any) => criterio.id_estado == 8).sort(function(a: any, b: any){return a.id - b.id})
    );

    setInvolucradosData(
      data.filter((criterio: any) => criterio.id_estado == 9).sort(function(a: any, b: any){return a.id - b.id})
    );

    setDeAcuerdoData(data.filter((criterio: any) => criterio.id_estado == 10).sort(function(a: any, b: any){return a.id - b.id}));

    setSatisfechosParaDespliegueData(data.filter((criterio: any) => criterio.id_estado == 11).sort(function(a: any, b: any){return a.id - b.id}));

    setSatisfechosEnUsoDataData(
      data.filter((criterio: any) => criterio.id_estado == 12).sort(function(a: any, b: any){return a.id - b.id})
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
     

      <ButtonBack text="atras" link="/alfas/interesados" />

          <Slider {...settings}>
            <CardLayout tipo="personalizacion" nombre="interesados">
              <Criterios data={reconocidosData} index={1} tipo="personalizacion" numEstados={6} />
            </CardLayout>

            <CardLayout tipo="personalizacion" nombre="interesados">
              <Criterios
                data={representadosData}
                tipo="personalizacion"
                 numEstados={6} 
                 index={2}
              />
            </CardLayout>

            <CardLayout tipo="personalizacion" nombre="interesados">
              <Criterios
                data={involucradosData}
                tipo="personalizacion"
                 numEstados={6} 
                 index={3}
              />
            </CardLayout>

            <CardLayout tipo="personalizacion" nombre="interesados">
              <Criterios data={deAcuerdoDAta}  tipo="personalizacion" numEstados={6}  index={4} />
            </CardLayout>

            <CardLayout tipo="personalizacion" nombre="interesados">
              <Criterios data={satisfechosParaDespliegueData}  tipo="personalizacion" numEstados={6}  index={5} />
            </CardLayout>

            <CardLayout tipo="personalizacion" nombre="interesados">
              <Criterios
                data={satisfechosEnUsoData}
                tipo="personalizacion"
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
    data: { id_alfa: 2 },
  });

  return {
    props: {
      data,
    },
  };
};
