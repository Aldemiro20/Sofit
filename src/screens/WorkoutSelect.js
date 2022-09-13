import React,{useState} from "react";
import styled from "styled-components/native";
import {connect} from "react-redux";
import Workout from "../components/Workout";
import  {HeaderBackButton} from "react-navigation-stack";
import {StackActions, NavigationActions} from "react-navigation"


//Estilizacao

const Container=styled.SafeAreaView`
flex:1;
margin:20px;
`;
const WorkoutList=styled.FlatList`
flex:1;

`;
const ButtonArea=styled.TouchableHighlight`
width:30px;
height:30px;
justifyContent:center;
alignItems:center;
`;
const ButtonImage=styled.Image`
width:25px;
height:25px;
`;
const Title=styled.Text`
marginBottom:10px;
`;


//Codigo para Acao
const Page =(props)=>{
let lastWorkout=false;
if(props.workout){
    lastWorkout=props.myWorkouts.find(i=>i.id==props.lastWorkout)
}
 const goWorkout=(workout)=>{
     props.navigation.navigate("WorkoutCheckList",{workout});
 }
   
    return(
      <Container>
          {lastWorkout &&
          <>
          <Title>Seu ultimo treino foi</Title>
          <Workout data={lastWorkout} />
          </>
          }
          <Title>Escolha seu treino de hoje</Title>

     <WorkoutList 
     data={props.myWorkouts}
     renderItem={({item})=><Workout 
     data={item}
     goAction={()=>goWorkout(item)}

     />}
     />
     </Container>
    )
}

Page.navigationOptions=({navigation})=>{
    const handleBackAction=()=>{
        navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:"AppTab"})
            ]
        }))
    }

    return {
        title:"Escolha seu treino",
        headerLeft: <HeaderBackButton onPress={handleBackAction} />
        }
        }
      
       
  

const mapStateToProps=(state)=>{

    return{
    
     myWorkouts:state.UserReducer.myWorkouts,
     lastWorkout:state.UserReducer.lastWorkout
    
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
     setName:(name)=>dispatch({type:"SET_NAME", payload:{name}}),
     delWorkout:(workout)=>dispatch({type:"DEL_WORKOUT", payload:{workout}})
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)