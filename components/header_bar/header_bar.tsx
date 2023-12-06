import { StatusBar, StyleProp, StyleSheet, Text, View } from "react-native";
import { HeaderProps, defaultHeaderType } from "./header_bar_types";
import { styles } from "./header_bar_styles";
import { useEffect, useRef, useState } from "react";
import HeaderBarAction from "../header_bar_action/header_bar_action";

const HeaderBar = (props: HeaderProps) => {
    const headerStyle = StyleSheet.create({
        complete: {
            height: props.customStyle?.height ? props.customStyle.height : 70,
            backgroundColor: props.customStyle?.backgroundColor ? props.customStyle.backgroundColor : "rgba(0, 0, 0, 0)",
            width: "100%",
            position: "absolute",
            top: 0,
            padding: 10,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            elevation: props.customStyle?.elevation ? props.customStyle.elevation : 2,
        },
        leftMenu: {
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
        },
        rightMenu: {
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: props.actionsStyle?.gapBetween ? props.actionsStyle.gapBetween : 0,
            marginRight: props.actionsStyle?.marginRight ? props.actionsStyle.marginRight : 0,
        },
        actionContainer: {
            aspectRatio: 0.7,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },
        titleContainer: {
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
        },
        titleText: {
            fontSize: 20,
            fontWeight: "bold",
        }
    });

    function getTitleStyle() {
        return StyleSheet.create({
            titleStyle: {
                fontSize: props.titleStyle?.fontSize ? props.titleStyle.fontSize : 20,
                color: getTitleColor(),
                fontWeight: props.titleStyle?.fontWeight ? props.titleStyle.fontWeight : "bold",
                fontStyle: props.titleStyle?.fontStyle ? props.titleStyle.fontStyle : "normal",
                fontFamily: props.titleStyle?.fontFamily ? props.titleStyle.fontFamily : "sans-serif",
                letterSpacing: props.titleStyle?.letterSpacing ? props.titleStyle.letterSpacing : 0,
            }
        });
    }

    function getTitleColor() {
        if (props.titleStyle?.color) return props.titleStyle.color;
        if (props.customStyle?.backgroundColor == "white") return "black";
        if (props.customStyle?.backgroundColor == "black") return "white";
        return "black";
    }

    useEffect(() => {
        if (props.navigateBack == true && props.navigation == null) throw new Error("Error while loading header");
        if (props.statusBarStyle) {
            if (props.statusBarStyle.backgroundColor == "transparent") StatusBar.setTranslucent(true);
            if (props.statusBarStyle.backgroundColor) StatusBar.setBackgroundColor(props.statusBarStyle.backgroundColor);
            if (props.statusBarStyle.barStyle) StatusBar.setBarStyle(props.statusBarStyle.barStyle);
        }
        if (props.statusBarStyle == null && props.customStyle?.backgroundColor != null) {
            StatusBar.setBackgroundColor(props.customStyle.backgroundColor);
        }
    }, []);

    return (
        <View style={headerStyle.complete}>
            <View style={headerStyle.leftMenu}>
                {props.navigateBack ?
                    <View style={headerStyle.actionContainer}>
                        <HeaderBarAction onPress={() => { props.navigation.pop() }} image={require('../../../assets/back_arrow.png')} headerColor={props.customStyle?.backgroundColor} tintColor={props.iconStyle?.tintColor}></HeaderBarAction>
                    </View>
                    : null}
                {props.title ?
                    <View style={headerStyle.titleContainer}>
                        <Text style={{...getTitleStyle().titleStyle}}>{props.title}</Text>
                    </View>
                    : null}
            </View>
            <View style={headerStyle.rightMenu}>
                {  props.actions?.map((action, index) => {
                    return (
                        <View key={index} style={headerStyle.actionContainer}>
                            <HeaderBarAction onPress={() => { action.callback() }} image={action.icon} headerColor={props.customStyle?.backgroundColor} tintColor={props.iconStyle?.tintColor}></HeaderBarAction>
                        </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default HeaderBar;