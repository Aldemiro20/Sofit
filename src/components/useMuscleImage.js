export default (muscle)=>{
let MuscleImage=null;
switch ((muscle)) {
    case "abs":
        MuscleImage=require("../assets/muscles/abs.png");
        break;
    case "back":
        MuscleImage=require("../assets/muscles/back.png");
        break;
    case "biceps":
        MuscleImage=require("../assets/muscles/biceps.png");
        break;
    case "chest":
        MuscleImage=require("../assets/muscles/chest.png");
        break;
    case "gluteos":
        MuscleImage=require("../assets/muscles/gluteos.png");
        break;
     case "legs":
        MuscleImage=require("../assets/muscles/legs.png");
        break;
    case "shoulders":
        MuscleImage=require("../assets/muscles/shoulders.png");
        break;
    case "triceps":
        MuscleImage=require("../assets/muscles/triceps.png");
        break;  
}

return MuscleImage;

}