import React,{useState} from "react";
import styled from "styled-components/native";
import useMuscleImage from "../components/useMuscleImage";

const Workout=styled.View`
backgroundColor:#f1f1f1;
flexDirection:row;
borderRadius:10px;
marginBottom:20px;
border:2px solid #ddd
`;
const WorkoutInfo=styled.View`
flex:1;
`;
const WorkoutTitle=styled.Text`
fontSize:17px;
margin:10px;
`;
const MuscleScroll=styled.ScrollView`
margin:10px;
`;
const MuscleGroup = styled.View`
width:50px;
height:50px;
backgroundColor:#ffcc98;
borderRadius:5px;
justifyContent:center;
alignItems:center;
`;
const MuscleImage = styled.Image`
width:30px;
height:30px;
`;
const WorkoutActions=styled.View`
justifyContent:center;
`;
const WorkoutButton=styled.TouchableHighlight`
width:25px;
height:25px;
margin:20px;
justifyContent:center;
alignItems:center;
`;
const WorkoutButtonImage=styled.Image`
width:25px;
height:25px;
`;
export default (props)=>{
    const [included,setIncluded]= useState(false);

    let muscleGroups=[];
     for(let i in props.data.exercises){
        if(!muscleGroups.includes(props.data.exercises[i].muscle)){
            muscleGroups.push(props.data.exercises[i].muscle);
        }
    }
    
    const addWorkout = ()=>{
       
        setIncluded(!included);
        props.addAction();
    }
    const editWorkout=()=>{
        props.editAction();
    }
    const delWorkout=()=>{
        props.delAction();
    }
    const goWorkout=()=>{
        props.goAction();
    }
    return(
        <Workout>
            <WorkoutInfo>
        <WorkoutTitle>{props.data.name}</WorkoutTitle>
        <MuscleScroll horizontal={true}>
            {muscleGroups.map((m, index)=>(
                <MuscleGroup key={index}>
                    <MuscleImage source={useMuscleImage(m)} />
                </MuscleGroup>
            ))}
        </MuscleScroll>
            </WorkoutInfo>
            
            <WorkoutActions>
                {props.addAction &&
        <WorkoutButton onPress={()=>addWorkout()} underlayColor="transparent">
            <WorkoutButtonImage source={included?require("../assets/check-black.png"):require("../assets/add.png")} />
        </WorkoutButton>
                }
                {props.editAction &&
                    <WorkoutButton onPress={()=>editWorkout()} underlayColor="transparent">
                    <WorkoutButtonImage source={require("../assets/edit-black.png")} />
                </WorkoutButton>
                }
                {props.delAction &&
                    <WorkoutButton onPress={()=>delWorkout()} underlayColor="transparent">
                    <WorkoutButtonImage source={require("../assets/trash-black.png")} />
                </WorkoutButton>
                }
                {props.goAction && 
                    <WorkoutButton onPress={()=>goWorkout()} underlayColor="transparent">
                    <WorkoutButtonImage source={require("../assets/play-black.png")} />
                    </WorkoutButton>
                }
                
            </WorkoutActions>
        </Workout>
    );

    
}