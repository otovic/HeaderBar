import { FlexAlignType, StatusBar, StyleProp, StyleSheet, Text, View } from "react-native";
import { HeaderProps, defaultHeaderType } from "./header_bar_types";
import React, { useEffect, useRef, useState } from "react";
import HeaderBarAction from "../header_bar_action/header_bar_action";

const HeaderBar = (props: HeaderProps) => {
    const headerStyle = StyleSheet.create({
        complete: {
            height: props.customStyle?.height ? props.customStyle.height : 70,
            backgroundColor: props.customStyle?.backgroundColor ? props.customStyle.backgroundColor : "rgba(0, 0, 0, 0)",
            width: "100%",
            position: "absolute",
            top: 0,
            padding: 5,
            alignItems: "center",
            flexDirection: "row",
            elevation: props.customStyle?.elevation ? props.customStyle.elevation : 2,
        },
        navigateBackContainer: {
            width: 30,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },
        titleContainer: {
            flex: 6,
            height: "100%",
            justifyContent: getTitleVerticalPosition(),
            alignItems: getTitleHorizontalPosition(),
            paddingLeft: 10,
            paddingRight: 10,
        },
        contentContainer: {
            flex: 6,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },
        actionContainer: {
            width: 30,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginRight: props.actionsStyle?.gapBetween ? props.actionsStyle.gapBetween : 0,
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

    function getTitleVerticalPosition(): "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined {
        switch (props.titleStyle?.verticalAlign) {
            case "top":
                return "flex-start";
            case "center":
                return "center";
            case "bottom":
                return "flex-end";
            default:
                return "center";
        }
    }

    function getTitleHorizontalPosition(): FlexAlignType | undefined {
        switch (props.titleStyle?.horizontalAlign) {
            case "left":
                return "flex-start";
            case "center":
                return "center";
            case "right":
                return "flex-end";
            default:
                return "center";
        }
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
            {props.navigateBack ?
                <View style={headerStyle.navigateBackContainer}>
                    <HeaderBarAction onPress={() => { props.navigation.pop() }} image={require('../../../assets/back_arrow.png')} headerColor={props.customStyle?.backgroundColor} tintColor={props.iconStyle?.tintColor}></HeaderBarAction>
                </View>
                : null}
            {props.title ?
                <View style={headerStyle.titleContainer}>
                    <Text style={{ ...getTitleStyle().titleStyle }}>{props.title}</Text>
                </View>
                : null}
            {React.isValidElement(props.content) ?
                <View style={headerStyle.contentContainer}>{props.content}</View> : null}
            {props.actions != null ?
                props.actions?.map((action, index) => {
                    return (
                        <View key={index} style={headerStyle.actionContainer}>
                            <HeaderBarAction onPress={() => { action.callback() }} image={action.icon} headerColor={props.customStyle?.backgroundColor} tintColor={props.iconStyle?.tintColor}></HeaderBarAction>
                        </View>
                    )
                })
                : null}
        </View>
    )
}

export default HeaderBar;