import React from "react";
import styled from "styled-components/native";
import {Text} from "react-native";
const TabBarArea=styled.SafeAreaView`
flexDirection:row;
backgroundColor:#EEE;
`;
const TabBarItem=styled.View`
flex:1;
height:65px;
alignItems:center;
`;
const TabRegular=styled.TouchableHighlight`
alignItems:center;
`;
const TabImage=styled.Image`
width:25px;
height:25px;
marginTop:10px;
marginBottom:5px;
`;
const TabBall=styled.TouchableHighlight`
width:100px;
height:100px;
backgroundColor:#3BA237;
borderRadius:50px;
justifyContent:center;
alignItems:center;
border: 5px solid #fff;
marginTop:-50px;
`;
const TabBallImage=styled.Image`
width:40px;
height:40px;
`;

export default(props)=>{

    return(
        <TabBarArea>
            {props.items.map(item=>(
                <TabBarItem key={item.route}>
                    {item.type=="regular" &&
                        <TabRegular underlayColor="transparent" onPress={()=>props.navigation.navigate(item.route)}>
                            <>
                            <TabImage source={item.icon}/>
                            <Text>{item.text}</Text>
                            </>
                        </TabRegular>
                    }
                    {item.type=="big" && 
                    <TabBall underlayColor="#00ff00" onPress={()=>props.navigation.navigate(item.route)}>
                        <TabBallImage source={item.icon} />
                    </TabBall>
                    }


                </TabBarItem>
            ))}
        </TabBarArea>
    );
}