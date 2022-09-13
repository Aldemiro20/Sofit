import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomeStack from "./HomeStack";
import CustomTabBar from "../components/CustomTabBar"
import WorkoutStack from "../navigators/WorkoutStack";
import MyworkoutsStack from "../navigators/MyworkoutsStack";



 export default createBottomTabNavigator({
HomeStack,
WorkoutStack:{
screen:WorkoutStack,
navigationOptions:{
    tabBarVisible:false,
}
},
MyworkoutsStack,


},{
    tabBarComponent:(props)=>(
        <CustomTabBar 
        {...props}
        items={[
            {type:"regular", text:"Inicio", icon:require("../assets/home.png"), route:"HomeStack"},
            {type:"big", route:"WorkoutStack",icon:require("../assets/dumbbell.png")},
            {type:"regular", text:"Meus Treinos",route:'MyworkoutsStack', icon:require("../assets/myworkouts.png")}

        ]}
        />
    )
})