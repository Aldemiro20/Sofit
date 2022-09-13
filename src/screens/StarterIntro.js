import React from "react";
import styled from "styled-components/native";
import DefaultButton from "../components/DefaultButton";


//Estilizacao

const Container=styled.SafeAreaView`
flex:1;
justifyContent:center;
alignItems:center;
marginLeft:30px;
marginRight:30px;
backgroundColor:#fff;
`;
const WelcomeText=styled.Text`
font-size:22px;
color:#333;
marginTop:50px;

`;
const WelcomeImage=styled.View`
flex:1;
justifyContent:center;
`;
const WelcomeLogo=styled.Image`
width:200px;
height:200px;
`;
const BeginConfigAre=styled.View`
marginBottom:50px;
width:100%;
`;
const ButtonText=styled.Text`
color:#fff;
`;


//Codigo para Acao
const Page =(props)=>{

    const start= () =>{
        props.navigation.navigate("StarterName");
    }

    return(
      <Container>
          <WelcomeText>Bem vindo(a) Ao SoFit</WelcomeText>

          <WelcomeImage>
        <WelcomeLogo  source={require("../assets/boneco.png")} />
          </WelcomeImage>

          <BeginConfigAre>
              <DefaultButton width="100%" bgcolor="#0072c0" onPress={start} underlayColor="0B7AC6">
                  <ButtonText>Iniciar Configuração</ButtonText>
              </DefaultButton>
          </BeginConfigAre>
      </Container>  
    )
}

Page.navigationOptions={
    header:null,
    
    
}

export default Page;