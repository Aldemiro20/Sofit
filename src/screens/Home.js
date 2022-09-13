import React,{useState} from "react";
import styled from "styled-components/native";
import {connect} from "react-redux";
import HomeMonthScroll from "../components/HomeMonthScroll";
import HomeDaysScroll from "../components/HomeDaysScroll";
import HomeDayStatus from "../components/HomeDayStatus";

//Estilizacao

const Container=styled.SafeAreaView`

alignItems:center;
`;
const Legend=styled.View`
width:90%;
alignItems:flex-start;
marginTop:30px;
`;
const LegendText=styled.Text`
color:#555;
`;
const LegendItem=styled.View`
flexDirection:row;
alignItems:center;
marginTop:5px;
`;
const LegendBox=styled.View`
width:15px;
height:15px;
backgroundColor:#ccc;
marginRight:5px;
`;





//Codigo para Acao
const Page =(props)=>{
   let today = new Date();
   const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
   const [selectedDay,setSelectedDay] = useState(today.getDate());
    return(
      <Container>
     <HomeMonthScroll
     selectedMonth={selectedMonth}
     setSelectedMonth={setSelectedMonth}

     />
     <HomeDaysScroll 
     selectedMonth={selectedMonth}
     selectedDay={selectedDay}
     setSelectedDay={setSelectedDay}

     dailyProgress={props.dailyProgress}
     workoutDays={props.workoutDays}
     />
     <HomeDayStatus 
     selectedMonth={selectedMonth}
     selectedDay={selectedDay}
     setSelectedDay={setSelectedDay}
     dailyProgress={props.dailyProgress}
     workoutDays={props.workoutDays}

     addProgress={props.addProgress}
     delProgress={props.delProgress}
     goToworkout={()=>props.navigation.navigate("WorkoutStack")}


     />
    
     <Legend>
         <LegendText>Legenda:</LegendText>
         <LegendItem>
             <LegendBox style={{backgroundColor:"#B5EEFF"}}></LegendBox>
             <LegendText>Hoje</LegendText>
         </LegendItem>
         <LegendItem>
             <LegendBox  style={{backgroundColor:"#B5FFB8"}}></LegendBox>
             <LegendText>Treino feito</LegendText>
         </LegendItem>
         <LegendItem>
             <LegendBox  style={{backgroundColor:"#FFB5B5"}}></LegendBox>
             <LegendText>Treino perdido</LegendText>
         </LegendItem>
         <LegendItem>
             <LegendBox  style={{backgroundColor:"#F4F4F4", opacity:0.2}}></LegendBox>
             <LegendText>Dia de descanso</LegendText>
         </LegendItem>
         <LegendItem>
             <LegendBox  style={{backgroundColor:"#F4F4F4"}}></LegendBox>
             <LegendText>Dia futuro</LegendText>
         </LegendItem>
     </Legend>
     </Container>
    )
}

Page.navigationOptions=({navigation})=>{
    const ConfigAreaButton=styled.TouchableHighlight`
    width:30px;
    height:30px;
    justifyContent:center;
    alignItems:center;
    `;
    const ConfigButtonImage=styled.Image`
    width:25px;
    height:25px;
    `;
    
    const ConfigButton= ()=>{
        const btnAction = ()=>{
            navigation.navigate("HomeConfig")
        }
        return(
            <ConfigAreaButton onPress={btnAction} underlayColor="transparent">
                <ConfigButtonImage  source={require("../assets/config.png")}/>
            </ConfigAreaButton>
        )
    }
   
    return {
        title:"Seu progresso diario",
        headerRight:<ConfigButton />,
        headerRightContainerStyle:{
            marginRight:10
        }
      
        }  
  
    
}

const mapStateToProps=(state)=>{

    return{
      dailyProgress:state.UserReducer.dailyProgress,
      workoutDays:state.UserReducer.workoutDays 
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
     addProgress:(date)=>dispatch({type:"ADD_PROGRESS", payload:{date}}),
     delProgress:(date)=>dispatch({type:"DEL_PROGRESS", payload:{date}})
     
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)