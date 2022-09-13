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
const Boldtext=styled.Text`
fontWeight:bold;
`;
const DaysArea=styled.View`
flexDirection:row;
flexWrap:wrap;
justifyContent:space-between;
`;



//Codigo para Acao
const Page =(props)=>{
    
    const ToogleDay=(d)=>{
        let newWorkoutDays=[...props.workoutDays];

        if(!props.workoutDays.includes(d)){
           
            newWorkoutDays.push(d);
          
        }else{
            newWorkoutDays=newWorkoutDays.filter(i=>i!=d)
           
        }
        props.setWorkoutDay(newWorkoutDays);
        props.navigation.setParams({workoutDays:newWorkoutDays});

    }
    let FirstName= props.name.split(' ')[0];
    return(
      <Container>
        <HeaderText>Opa, <Boldtext>{FirstName} </Boldtext> tudo bem?</HeaderText>
        <HeaderText>Quais <Boldtext>dias da semana</Boldtext> você pretende treinar?</HeaderText>
        <DaysArea>
            <DefaultButton bgcolor={props.workoutDays.includes(1)?"#A5E8BC":false} onPress={()=>ToogleDay(1)} width={100} style={{marginBottom:20}} underlayColor="#ccc">
                <Text>Segunda</Text>
            </DefaultButton >
            <DefaultButton bgcolor={props.workoutDays.includes(2)?"#A5E8BC":false} onPress={()=>ToogleDay(2)} width={100}   style={{marginBottom:20}} underlayColor="#ccc">
                <Text>Terça</Text>
            </DefaultButton>
            <DefaultButton bgcolor={props.workoutDays.includes(3)?"#A5E8BC":false} onPress={()=>ToogleDay(3)} width={100}  style={{marginBottom:20}} underlayColor="#ccc">
                <Text>Quarta</Text>
            </DefaultButton>
            <DefaultButton bgcolor={props.workoutDays.includes(4)?"#A5E8BC":false} onPress={()=>ToogleDay(4)} width={100}  style={{marginBottom:20}} underlayColor="#ccc">
                <Text>Quinta</Text>
            </DefaultButton>
            <DefaultButton bgcolor={props.workoutDays.includes(5)?"#A5E8BC":false} onPress={()=>ToogleDay(5)} width={100}  style={{marginBottom:20}} underlayColor="#ccc">
                <Text>Sexta</Text>
            </DefaultButton>
            <DefaultButton bgcolor={props.workoutDays.includes(6)?"#A5E8BC":false} onPress={()=>ToogleDay(6)} width={100}  style={{marginBottom:20}} underlayColor="#ccc">
                <Text>Sábado</Text>
            </DefaultButton>
            <DefaultButton bgcolor={props.workoutDays.includes(0)?"#A5E8BC":false} onPress={()=>ToogleDay(0)} width={100}  style={{marginBottom:20}} underlayColor="#ccc">
                <Text>Domingo</Text>
            </DefaultButton>
        </DaysArea>
      
      </Container>  
    )
}

Page.navigationOptions=({navigation})=>{
  
    const nextAction = ()=>{
       if(!navigation.state.params || !navigation.state.params.workoutDays.length){
           alert("Você precisa Treinar pelo menos 1 dia!")
           return
       }
       navigation.navigate("StarterNivel");
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
        name:state.UserReducer.name,
        workoutDays:state.UserReducer.workoutDays
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setName:(name)=>dispatch({type:"SET_NAME",payload:{name}}),
        setWorkoutDay:(workoutDays)=>dispatch({type:"SET_WORKOUTDAYS",payload:{workoutDays}})

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)