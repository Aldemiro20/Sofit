import styled from "styled-components/native";

export default styled.TouchableHighlight`
width:${props=>props.width || "auto"};
padding:10px 20px;
backgroundColor:${props=>props.bgcolor || "#eee"};
borderRadius:100px;
justifyContent:center;
alignItems:center;
`;