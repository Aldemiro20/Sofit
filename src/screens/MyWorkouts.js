import React,{useState} from "react";
import styled from "styled-components/native";
import {connect} from "react-redux";
import Workout from "../components/Workout";


//Estilizacao

const Container=styled.SafeAreaView`
flex:1;
margin:0 30px;
`;
const WorkoutList=styled.FlatList`
flex:1;
padding:20px;
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


//Codigo para Acao
const Page =(props)=>{

 const editWorkout=(workout)=>{
    props.navigation.navigate("EditWorkout",{workout});
 }
   
    return(
      <Container>
     <WorkoutList 
     data={props.myWorkouts}
     renderItem={({item})=><Workout 
     data={item}
     editAction={()=>editWorkout(item)}
     delAction={()=>props.delWorkout(item)}
     />}
     />
     </Container>
    )
}

Page.navigationOptions=({navigation})=>{

   
 const AddWorkoutButton = ({onPress}) => {
       
    return ( 
        <ButtonArea onPress={onPress} underlayColor="tranparent">
            <ButtonImage source={require("../assets/add.png")} />
        </ButtonArea> 
        
     );

   }
   const btnAction=()=>{
       navigation.navigate("EditWorkout")
   }
    return {
        title:"Meus treinos",
        headerRight:<AddWorkoutButton onPress={btnAction} underlayColor="transparent" />,
        headerRightContainerStyle:{
            marginRight:10
        }
        }
      
    }   
  

const mapStateToProps=(state)=>{

    return{
     name:state.UserReducer.name,
     myWorkouts:state.UserReducer.myWorkouts
    
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
     setName:(name)=>dispatch({type:"SET_NAME", payload:{name}}),
     delWorkout:(workout)=>dispatch({type:"DEL_WORKOUT", payload:{workout}})
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)