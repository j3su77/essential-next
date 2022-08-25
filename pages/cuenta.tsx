
import type { NextPage } from "next";


import { MainLayout } from "../layouts/MainLayout";

import ContructionIcon from "../components/icons/ContructionIcon";

const Cuenta: NextPage = () => {
  return (
    <MainLayout title="Cuenta - essentials">
      <div
        style={{
          width: "100%",
          height: "82vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--first-color)"
        }}
      >
        <h2 style={{ fontSize: "40px", fontWeight: "600", color:"var(--first-color)" }}>CUENTA</h2>
        <div>
          <ContructionIcon w="200px" h="200px" color="var(--first-color)"/>
          <h4 style={{textAlign: "center"}}>COMING SOON</h4>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cuenta;