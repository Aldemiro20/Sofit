import React,{useState,useEffect} from "react";
import styled from "styled-components/native";
import DefautButton from "../components/DefaultButton";

const BalloonTriangle=styled.View`
width:0;
height:0;
borderLeftColor:transparent;
borderLeftWidth:15px;
borderBottomWidth:15px;
borderRightWidth:15px;
borderRightColor:transparent;
`;
const BalloonArea=styled.View`
width:90%;
padding:20px;
backgroundColor:#EDEDED;
borderRadius:10px;
`;
const BallonBigText=styled.Text`
fontSize:15px;
alignSelf:center;

`;
const ButtonText=styled.Text`
color:#FFF;
fontWeight:bold;
`;
const BallonText=styled.Text`
fontSize:13px;
alignSelf:center;
marginTop:10px;
`;
const Strong=styled.Text`
fontWeight:bold;
`;
export default(props)=>{
    let today =new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate =new Date(today.getFullYear(),props.selectedMonth,props.selectedDay)

    let thisYear=thisDate.getFullYear();
    let thisMonth=thisDate.getMonth() + 1;
    let thisDay=thisDate.getDate();
    thisMonth=(thisMonth<10)?"0"+thisMonth:thisMonth;
    thisDay=(thisDay<10)?"0"+thisDay:thisDay;
    let dFormated=`${thisYear}-${thisMonth}-${thisDay}`;

    let dayOff=false;
    let isToday=false;
    let isFuture=false;
    let isDone=false;

    if(!props.workoutDays.includes(thisDate.getDay())){
        dayOff=true;
    }else if(thisDate.getTime()>today.getTime()){
        isFuture=true;
    }else{
        if(props.dailyProgress.includes(dFormated)){
            isDone=true;
        }else{
            isDone=false;
        }
    }
    if(thisDate.getTime()==today.getTime()){
        isToday=true;
    }
    const setDone=()=>{
        props.addProgress(dFormated);
    }
    const setUnDone=()=>{
        props.delProgress(dFormated);
    }
    const [timeLeft, setTimeLeft]=useState();
    useEffect(()=>{
        const timerFunction=()=>{
            let now =Date.now();
            let endToday=new Date();
            endToday.setHours(23);
            endToday.setMinutes(59);
            endToday.setSeconds(59);
            endToday=endToday.getTime();
            let diff=endToday-now;

            let h=Math.floor(diff/(1000*60*60));
            let m=Math.floor((diff/(1000*60))-(h*60))
            let s=Math.floor((diff/1000)-(m*60)-((h*60)*60));

            h=h<10?"0"+h:h;
            m=m<10?"0"+m:m;
            s=s<10?"0"+s:s;

            setTimeLeft(`${h}h ${m}m ${s}s`);
            
        }
        let timer=setInterval(timerFunction, 1000);
        timerFunction();
        return ()=>clearInterval(timer);
    },[])
    return(
        <>
        <BalloonTriangle></BalloonTriangle>
        <BalloonArea>
        {dayOff && 
        <BallonBigText>Dia de descanso!</BallonBigText>
        }
         {isFuture && 
        <BallonBigText>Data no futuro!</BallonBigText>
        }
         {!dayOff && !isFuture && isDone &&
         <>
         <BallonBigText><Strong>Parabens!</Strong> voce treinou!</BallonBigText>
         <DefautButton bgcolor="#4AC34E" style={{marginTop:20}} onPress={setUnDone} underlayColor="#4AC34E">
             <ButtonText>DESMARCAR</ButtonText>
         </DefautButton>
         </>
        
        }
         {!dayOff && !isFuture && !isDone && !isToday &&
         <>
         <BallonBigText><Strong>Fraco!</Strong> voce falhou neste dia.</BallonBigText>
         <DefautButton bgcolor="#4AC34E" style={{marginTop:20}} onPress={setDone} underlayColor="#4AC34E">
             <ButtonText>MARCAR COMO FEITO</ButtonText>
         </DefautButton>
         </>
        }
         {!dayOff && !isFuture && !isDone && isToday &&
         <>
         <BallonBigText><Strong>HOJE TEM TREINO</Strong></BallonBigText>
         <BallonText>Voce tem {timeLeft} para treinar</BallonText>
         <DefautButton bgcolor="#4AC34E" style={{marginTop:20}}onPress={props.goToworkout} underlayColor="#4AC34E">
             <ButtonText>INICIAR TREINO</ButtonText>
         </DefautButton>
         </>
        
        }

        </BalloonArea>
        </>
    );
}

