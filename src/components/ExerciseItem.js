import React from "react";
import styled from "styled-components/native";
import useMuscleImage from "./useMuscleImage";


const ExercisesItemAre=styled.View`
height:50px;
flexDirection:row;

marginBottom:10px;
`;
const ExercisesMuscleArea=styled.View`
width:50px;
height:50px;
backgroundColor:#FFCC98;
borderRadius:10px;
justifyContent:center;
alignItems:center;
`;
const ExercisesMuscleImage=styled.Image`
width:35px;
height:35px;
`;
const ExerciseInfo=styled.View`
flex:1;
flexDirection:column;
justifyContent:center;
marginLeft:5px;
`;
const ExerciseName=styled.Text`
fontSize:15px;
color:#FFF;
`;
const ExerciseDetails=styled.Text`
fontSize:12px;
color:#999;
`;
const ExerciseCheck=styled.TouchableHighlight`
width:60px;
justifyContent:center;
alignItems:center;
`;
const ExerciseDone=styled.Image`
width:40px;
height:40px;
`;
const ExerciseUnDone=styled.View`
width:40px;
height:40px;
border:5px solid #FFF;
borderRadius:20px;
`;
const ExerciseCount=styled.View`
width:25px;
justifyContent:center;
`;
const ExerciseCountText=styled.Text`
fontSize:17px;
color:#FFF;
`;


export default (props)=>{
    return (
        <ExercisesItemAre>
            <>
            <ExerciseCount>
                <ExerciseCountText>{props.index+1}.</ExerciseCountText>
            </ExerciseCount>
            <ExercisesMuscleArea>
                <ExercisesMuscleImage source={useMuscleImage(props.data.muscle)}/>
            </ExercisesMuscleArea>
            <ExerciseInfo>
              <ExerciseName>{props.data.name}</ExerciseName>  
              <ExerciseDetails>
                  {`${props.data.sets} series-${props.data.reps}rep ${props.data.load?`- ${props.data.load}kg`:""}`}
              </ExerciseDetails>
            </ExerciseInfo>
            <ExerciseCheck onPress={props.checkAction} underlayColor="transparent">
                {props.data.done ? <ExerciseDone source={require("../assets/check-white.png")} />:<ExerciseUnDone></ExerciseUnDone> }
            </ExerciseCheck>
            </>
        </ExercisesItemAre>
       
    );
}