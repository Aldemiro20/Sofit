import {connect}  from "react-redux";


import {StackActions,NavigationActions} from "react-navigation";
//mandar para Preload
const Preload = (props)=>{
    props.navigation.dispatch(StackActions.reset({
        index:0,
        actions:[
            NavigationActions.navigate({routeName:"StarterStack"})
        ]
    })); 

if(!props.name){
props.navigation.dispatch(StackActions.reset({
    index:0,
    actions:[
        NavigationActions.navigate({routeName:"StarterStack"})
    ]
}));
}else{
    //Mandar para StarterStack
    props.navigation.dispatch(StackActions.reset({
        index:0,
        actions:[
            NavigationActions.navigate({routeName:"AppTab"})
        ]
    }))
}
    return null;
}

const mapStateToProps=(state)=>{

    return {
        name:state.UserReducer.name
    }
}

export default connect(mapStateToProps)(Preload)