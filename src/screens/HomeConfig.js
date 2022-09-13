import React,{useState} from "react";
import styled from "styled-components/native";
import {connect} from "react-redux";
import {StackActions, NavigationActions} from "react-navigation";

//Estilizacao

const Container=styled.SafeAreaView`
flex:1;
margin:0 30px;
`;
const Label=styled.Text`
fontSize:15px;
fontWeight:bold;
marginTop:20px;
marginBottom:10px;
`;
const Input=styled.TextInput`
border:1px solid #CCC;
width:100%;
height:50px;
borderRadius:10px;
fontSize:16px;
padding:10px;
`;
const ListArea=styled.View`
flexDirection:row;
justifyContent:space-between;
`;
const DayItem=styled.TouchableHighlight`
width:30px;
height:30px;
borderRadius:5px;
backgroundColor:#EEE;
justifyContent:center;
alignItems:center;
`;
const DayItemText=styled.Text``;
const LevelItem=styled.TouchableHighlight`
backgroundColor:#EEE;
height:30px;
borderRadius:5px;
justifyContent:center;
alignItems:center;
padding: 0 10px;
`;
const LevelItemText=styled.Text``;
const ResetButton=styled.Button``;

//Codigo para Acao
const Page =(props)=>{
 const toogleWorkoutDay=(d)=>{
    let newWorkoutdays=[... props.workoutDays];
    if(newWorkoutdays.includes(d)){
        if(newWorkoutdays.length==1){
            alert("Calma ae! Voce tem que treinar pelo menos 1 dia");
            return;
        }
        newWorkoutdays=newWorkoutdays.filter(i=>i!=d);
    }else{
        newWorkoutdays.push(d);
    }
    props.setWorkoutDays(newWorkoutdays);
 }   
 const resetAction=()=>{
     props.reset();
     const resetAction=StackActions.reset({
         index:0,
         actions:[
             NavigationActions.navigate({routeName:"StarterStack"})
         ]
     })
     props.navigation.dispatch(resetAction);
 }
    return(
      <Container>
     <Label>Seu nome completo:</Label>
     <Input value={props.name} onChangeText={e=>props.setName(e)} />

     <Label>Dias em que voce treina</Label>
     <ListArea>
         <DayItem onPress={()=>toogleWorkoutDay(1)} style={props.workoutDays.includes(1)?{backgroundColor:"#A5E8BC"}:{}}underlayColor="transparent">
             <DayItemText>S</DayItemText>
         </DayItem>
         <DayItem onPress={()=>toogleWorkoutDay(2)} style={props.workoutDays.includes(2)?{backgroundColor:"#A5E8BC"}:{}}underlayColor="transparent">
             <DayItemText >T</DayItemText>
         </DayItem>
         <DayItem onPress={()=>toogleWorkoutDay(3)} style={props.workoutDays.includes(3)?{backgroundColor:"#A5E8BC"}:{}}underlayColor="transparent">
             <DayItemText>Q</DayItemText>
         </DayItem>
         <DayItem onPress={()=>toogleWorkoutDay(4)} style={props.workoutDays.includes(4)?{backgroundColor:"#A5E8BC"}:{}}underlayColor="transparent">
             <DayItemText>Q</DayItemText>
         </DayItem>
         <DayItem onPress={()=>toogleWorkoutDay(5)} style={props.workoutDays.includes(5)?{backgroundColor:"#A5E8BC"}:{}}underlayColor="transparent">
             <DayItemText>S</DayItemText>
         </DayItem>
         <DayItem onPress={()=>toogleWorkoutDay(6)} style={props.workoutDays.includes(6)?{backgroundColor:"#A5E8BC"}:{}}underlayColor="transparent">
             <DayItemText>S</DayItemText>
         </DayItem >
         <DayItem onPress={()=>toogleWorkoutDay(0)} style={props.workoutDays.includes(0)?{backgroundColor:"#A5E8BC"}:{}}underlayColor="transparent">
             <DayItemText>D</DayItemText>
         </DayItem>
     </ListArea>
     <Label>Seu nivel:</Label>
     <ListArea>
         <LevelItem onPress={()=>props.setLevel("beginner")} style={props.level=="beginner"?{backgroundColor:"#A5E8BC"}:{}}underlayColor="transparent">
             <LevelItemText>Iniciante</LevelItemText>
         </LevelItem>
         <LevelItem onPress={()=>props.setLevel("intermediate")} style={props.level=="intermediate"?{backgroundColor:"#A5E8BC"}:{}} underlayColor="transparent">
             <LevelItemText>Intermediario</LevelItemText>
         </LevelItem>
         <LevelItem onPress={()=>props.setLevel("advanced")} style={props.level=="advanced"?{backgroundColor:"#A5E8BC"}:{}} underlayColor="transparent">
             <LevelItemText>Avancado</LevelItemText>
         </LevelItem>
     </ListArea>
     <Label>Voce quer restaurar tudo?</Label>
    
     <ResetButton title="Restaurar" onPress={resetAction} />
     <Label>By@: Aldemiro Valentim</Label>
     </Container>
     
    )
}

Page.navigationOptions=({navigation})=>{
   
    return {
        title:"Configuracoes",
       
        }
      
        }  
  

const mapStateToProps=(state)=>{

    return{
     name:state.UserReducer.name,
     workoutDays:state.UserReducer.workoutDays,
     level:state.UserReducer.level
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
     setName:(name)=>dispatch({type:"SET_NAME", payload:{name}}),
     setWorkoutDays:(workoutDays)=>dispatch({type:"SET_WORKOUTDAYS", payload:{workoutDays}}),
     setLevel:(level)=>dispatch({type:"SET_LEVEL", payload:{level}}),
     reset:()=>dispatch({type:"RESET"})
     
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)