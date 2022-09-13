import React,{useEffect} from "react";
import styled from "styled-components/native";
import {connect} from "react-redux";
import {StackActions, NavigationActions} from "react-navigation"
import workoutJson from "../presetWorkouts.json";
import Workout from "../components/Workout";


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
const WorkoutList =styled.FlatList`
width:100%;
`;




//Codigo para Acao
const Page =(props)=>{
    
    useEffect(()=>{
        props.navigation.setParams({myWorkouts:props.myWorkouts});
   
     }, [props.myWorkouts]);

    const addWorkout=(item)=>{
        
        if(props.myWorkouts.findIndex(i=>i.id==item.id) < 0){
            props.addWorkout(item);
        }else{
            props.delWorkout(item);
        }
    }

  
   
   
    
    return(
      <Container>
        <HeaderText>Opções de Treinos pré-criados com base no seu nivel</HeaderText>
        <HeaderText>Voce selecionou {props.myWorkouts.length} treinos</HeaderText>
       

        <WorkoutList 
        data={workoutJson}
        renderItem={({item})=><Workout data={item} addAction={()=>addWorkout(item)}/>}
        keyExtractor={item=>item.id}
        />
      
     </Container>
    )
}

Page.navigationOptions=({navigation})=>{

   
    
   let btnNext="Ignorar";
   if(navigation.state.params && navigation.state.params.myWorkouts.length > 0){
       btnNext="Concluir"
   }

   const nextAction = ()=>{
    navigation.dispatch(StackActions.reset({
        index:0,
        actions:[
            NavigationActions.navigate({routeName:"AppTab"})
        ]
    }))
    }
    
    return {
        title:"",
        headerRight:<NextButton title={btnNext} onPress={nextAction}/>,
        headerRightContainerStyle:{
            marginRight:10
        }
    }
    
}

const mapStateToProps=(state)=>{

    return{
       myWorkouts:state.UserReducer.myWorkouts,
       
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
      
       addWorkout:(workout)=>dispatch({type:"ADD_WORKOUT", payload:{workout}}),
       delWorkout:(workout)=>dispatch({type:"DEL_WORKOUT", payload:{workout}})

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)