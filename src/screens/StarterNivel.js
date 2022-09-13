import React from "react";
import styled from "styled-components/native";
import DefaultButton from "../components/DefaultButton";
import {connect} from "react-redux";
import {Text} from "react-native";


//Estilizacao

const Container=styled.SafeAreaView`
flex:1;
alignItems:center;
marginLeft:30px;
marginRight:30px;
backgroundColor:#fff;
marginTop:50px;
`;
const HeaderText=styled.Text`
fontSize:15px;
color:#333;

marginBottom:30;
textAlign:center;
`;

const NextButton=styled.Button``;

const LevelArea=styled.View`
width:100%;
`;
const BoldText=styled.Text`
fontWeight:bold;
`;



//Codigo para Acao
const Page =(props)=>{
  
    let funnyPhrase="";
    switch ((props.workoutDays.length)) {
        case 1:
            funnyPhrase=" Só um dia não vai adiantar muito, mas...";
            break;
        case 2:
            funnyPhrase="2 dias eu acho pouco, mas quem sou eu pra te julgar?";
            break;
        case 3:
            funnyPhrase="Legal, 3 dias da pro gasto...";
            break;
        case 4:
            funnyPhrase="Legal 4 dias vai ser Top";
            break;
        case 5:
            funnyPhrase="É isso ai, 5 dias é o mínimo, lets GO!.";
            break;
        case 6:
            funnyPhrase="É, 6 dias não é pra todo mundo...";
            break; 
        case 7:
            funnyPhrase="Wooow! Todo dia?! WTF!";
            break;  
    
        default:
            break;
    }
    const setMyLevel=(l)=>{
        props.setLevel(l);
        props.navigation.setParams({level:l});
    }
    
    
    return(
      <Container>
        <HeaderText>{funnyPhrase}</HeaderText>
        <HeaderText><BoldText>Qual seu nivel hoje?</BoldText></HeaderText>
        <LevelArea>
            <DefaultButton bgcolor={props.level=="beginner"?"#A5E8BC":false} onPress={()=>setMyLevel("beginner")}  style={{marginBottom:20}} underlayColor="#ccc">
                <Text>Iniciante/ Um frango</Text>
            </DefaultButton >
            <DefaultButton bgcolor={props.level=="intermediate"?"#A5E8BC":false} onPress={()=>setMyLevel("intermediate")} style={{marginBottom:20}} underlayColor="#ccc">
                <Text>intermediário/ Me viro bem</Text>
            </DefaultButton>
            <DefaultButton bgcolor={props.level=="advanced"?"#A5E8BC":false} onPress={()=>setMyLevel("advanced")}  style={{marginBottom:20}} underlayColor="#ccc">
                <Text>Avançado/ Primo do the Rock</Text>
            </DefaultButton>
          
        </LevelArea>
      
      </Container>  
    )
}

Page.navigationOptions=({navigation})=>{
  
    const nextAction = ()=>{
       if(!navigation.state.params || !navigation.state.params.level){
           alert("Você precisa escolher uma opção!")
           return
       }
       navigation.navigate("StarterRecommendations");
    }
    return {
        title:"",
        headerRight:<NextButton title="Proximo" onPress={nextAction}/>,
        headerRightContainerStyle:{
            marginRight:10
        }
    }
    
}

const mapStateToProps=(state)=>{

    return{
        level:state.UserReducer.level,
        workoutDays:state.UserReducer.workoutDays
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
      
        setLevel:(level)=>dispatch({type:"SET_LEVEL",payload:{level}})

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)