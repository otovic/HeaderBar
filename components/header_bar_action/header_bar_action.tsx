import { useEffect } from "react";
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native"

const HeaderBarAction = (props: {onPress: Function, image: ImageSourcePropType, headerColor?: string, tintColor?: string}) => {
    useEffect(() => {
        console.log(props.image);
    }, []);
    
    function getTintColor() {
        if(props.tintColor) return props.tintColor;
        if(props.headerColor == "black") return "white";
        return "black";
    }

    return (
        <TouchableOpacity onPress={() => {props.onPress()}} style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
            <Image style={{width: "40%", height: "40%", tintColor: getTintColor()}} source={props.image}/>
        </TouchableOpacity>
    )
}

export default HeaderBarAction;