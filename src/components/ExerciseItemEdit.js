import React from "react";
import styled from "styled-components/native";
import useMuscleImage from "./useMuscleImage";
import {SwipeRow} from "react-native-swipe-list-view";

const ExercisesItemAre=styled.TouchableHighlight`
height:50px;
flexDirection:row;
backgroundColor:#FFF;
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
flexDirection:column;
justifyContent:center;
marginLeft:5px;
`;
const ExerciseName=styled.Text`
fontSize:15px;
color:#000;
`;
const ExerciseDetails=styled.Text`
fontSize:12px;
color:#999;
`;
const ExerciseSwipe=styled.TouchableHighlight`
height:50px;
backgroundColor:#FF0000;
justifyContent:center;
`;
const ExerciseSwipeIcon=styled.Image`
width:20px;
height:20px;
marginLeft:15px;
`;

export default (props)=>{
    return (
       <SwipeRow leftOpenValue={50} disableLeftSwipe={true}>

           <ExerciseSwipe onPress={props.delAction} underlayColor="#FF0000">
               <ExerciseSwipeIcon source={require("../assets/trash-white.png")} />
           </ExerciseSwipe>
           <ExercisesItemAre onPress={props.editAction} underlayColor="#FFF">
            <>
            <ExercisesMuscleArea>
                <ExercisesMuscleImage source={useMuscleImage(props.data.muscle)}/>
            </ExercisesMuscleArea>
            <ExerciseInfo>
              <ExerciseName>{props.data.name}</ExerciseName>  
              <ExerciseDetails>
                  {`${props.data.sets} series-${props.data.reps}rep ${props.data.load?`- ${props.data.load}kg`:""}`}
              </ExerciseDetails>
            </ExerciseInfo>
            </>
        </ExercisesItemAre>
       </SwipeRow> 




       
    );
}