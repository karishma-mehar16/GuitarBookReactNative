import React, { useRef, useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import {
    actions,
    defaultActions,
    RichEditor,
    RichToolbar,
} from "react-native-pell-rich-editor";
import HTMLView from "react-native-htmlview";
import { Label } from "native-base";

const LyricsCustomise = () => {
    const strikethrough = require("../TopNavigation/am.jpg"); //icon for strikethrough
    const video = require("../TopNavigation/am.jpg"); //icon for Addvideo
    const RichText = useRef(); //reference to the RichEditor component
    const [article, setArticle] = useState("");

    // this function will be called when the editor has been initialized
    function editorInitializedCallback() {
        RichText.current?.registerToolbar(function (items) {
            // items contain all the actions that are currently active
            console.log(
                "Toolbar click, selected items (insert end callback):",
                items
            );
        });
    }

    // Callback after height change
    function handleHeightChange(height) {
        // console.log("editor height change:", height);
    }

    function onPressAddImage() {
        // you can easily add images from your gallery
        RichText.current?.insertImage(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
        );
    }

    function insertVideo() {
        // you can easily add videos from your gallery
        RichText.current?.insertVideo(
            "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Label style={styles.label}>Lyrics</Label>
            <RichEditor
                disabled={false}
                containerStyle={styles.editor}
                ref={RichText}
                style={styles.rich}
                placeholder={"Start Writing Here"}
                onChange={(text) => setArticle(text)}
                editorInitializedCallback={editorInitializedCallback}
                onHeightChange={handleHeightChange}
            />
            <RichToolbar
                style={[styles.richBar]}
                editor={RichText}
                disabled={false}
                iconTint={"#fff"}
                selectedIconTint={"#fff"}
                disabledIconTint={"#fff"}
                onPressAddImage={onPressAddImage}
                iconSize={13}
                actions={[
                    "insertVideo",
                    ...defaultActions,
                    actions.setStrikethrough,
                    actions.heading1,
                ]}
                // map icons for self made actions
                iconMap={{
                    [actions.heading1]: ({ tintColor }) => (
                        <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
                    ),
                    [actions.setStrikethrough]: strikethrough,
                    ["insertVideo"]: video,
                }}
                insertVideo={insertVideo}
            />
        </ScrollView>
    );
};

export default LyricsCustomise

const styles = StyleSheet.create({
    /********************************/

    p: {
        fontSize: 30,
    },
    /*******************************/
    label: {
        paddingHorizontal: 10,
        fontSize: 15,
        color: 'gray',
        paddingBottom: 10
    },
    editor: {
        borderColor: "gray",
        borderWidth: 1,
        marginHorizontal: 10
    },
    rich: {
        minHeight: 200,
        flex: 1,
    },
    richBar: {
        height: 50,
        backgroundColor: "#3b5998",
        marginHorizontal: 10,
        color: '#FFF'
    },

    tib: {
        textAlign: "center",
        color: "#515156",
    },
})
