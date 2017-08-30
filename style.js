import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "width": "90%",
        "textAlign": "center",
        "marginTop": "25%"
    },
    "h1": {
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": 24,
        "fontStyle": "normal",
        "fontVariant": "normal",
        "fontWeight": "500",
        "lineHeight": 26.4
    }
});