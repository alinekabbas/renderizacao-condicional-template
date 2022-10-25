import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela, setTela] = useState(1)
  

  // if (tela === 1) {
  //   return (
  //     <MainContainer >
  //       <GlobalStyled />
  //       <TelaLogin />
  //     </MainContainer>
  //   );
  // } else {
  //   return (
  //     <MainContainer >
  //       <GlobalStyled />
  //       <TelaCadastro />
  //     </MainContainer>
  //   );

  // }

  switch (tela) {
    case 1:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin mudarTela={() => setTela(2)} />
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaCadastro 
          mudarTela={() => setTela(1)} 
          telaFinal={() => setTela(3)}/>
        </MainContainer>
      );
    case 3:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaUsuarioCadastrado />
        </MainContainer>
      );
    default:
      return (
        <MainContainer >
          <h1>Algo deu errado</h1>
        </MainContainer>
      );
  }

  //Expressions
  // return (
  //   <MainContainer >
  //     <GlobalStyled />

  //     {/* Utilizando o Ternário */}
  //     {/* {tela === 1 ? <TelaLogin /> : <TelaCadastro />}    */}

  //     {/* Utilizando Curto Circuito */}
  //     {/* {tela && <TelaLogin />} */}

  //   </MainContainer>
  // );
}

export default App;