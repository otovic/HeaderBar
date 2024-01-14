import React from "react"
import { DimensionValue, ImageSourcePropType, TextStyle } from "react-native"

export type HeaderProps = {
    customStyle?: {
        height?: DimensionValue,
        backgroundColor?: string,
        elevation?: number,
    } | null,
    navigation: any,
    navigateBack: boolean,
    title?: string,
    titleStyle?: headerTitleStyle,
    iconStyle?: iconStyle,
    statusBarStyle?: statusBarStyle,
    actions?: Array<Action>,
    content?: React.FC | Element | null,
    actionsStyle?: {
        space?: number,
        gapBetween?: number,
    }
}

export type Action = {
    callback: Function,
    icon: ImageSourcePropType,
}

export type iconStyle = {
    tintColor?: string
}

export type statusBarStyle = {
    backgroundColor?: string,
    barStyle?: "default" | "light-content" | "dark-content",
    hidden?: boolean,
    translucent?: boolean,
}

export type headerTitleStyle = {
    verticalAlign?: "top" | "center" | "bottom",
    horizontalAlign?: "left" | "center" | "right",
    fontSize?: number,
    color?: string,
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
    fontStyle?: "normal" | "italic",
    fontFamily?: string,
    letterSpacing?: number,
}

export const defaultHeaderType: HeaderProps = {
    customStyle: null,
    navigation: null,
    navigateBack: false,
    title: "",
    titleStyle: undefined,
}