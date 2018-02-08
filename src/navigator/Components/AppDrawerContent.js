import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableNativeFeedback
} from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";
// import { Thumbnail } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import {Thumbnail} from "native-base";

const DrawerContent = props => {
    const pic =
        "http://www.catster.com/wp-content/uploads/2017/11/Angry-cat-growling-or-hissing-ears-back.jpg";

    return (
        <ScrollView>
            <SafeAreaView
                style={{ flex: 1 }}
                forceInset={{ top: "always", horizontal: "never" }}
            >
                <View style={styles.header}>
                    <View style={styles.profileSection}>
                        <Thumbnail
                            large
                            source={{ uri: pic }}
                            style={{ width: 60, height: 60 }}
                            resizeMode="cover"
                        />
                        <View style={{ paddingLeft: 15, flex: 5 }}>
                            <Text style={styles.name}>Hell</Text>
                            <Text style={styles.email}>Hell</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.content}>
                    <DrawerItems {...props} />
                    <Text>a</Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: "#DADADA",
                        marginTop: 15,
                        marginBottom: 15
                    }}
                />
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#FFF"
    },
    header: {
        flex: 2
    },
    background: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    ImageBackground: {
        flex: 1,
        resizeMode: "cover"
    },
    profileSection: {
        flex: 1,
        margin: 15,
        marginTop: 20,
        flexDirection: "row"
    },
    name: {
        fontSize: 15,
        marginTop: 10,
        fontWeight: "bold"
    },
    email: {
        fontSize: 12,
        color: "#666"
    },
    content: {
        flex: 5
    }
});

export default DrawerContent;