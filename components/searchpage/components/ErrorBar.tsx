import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import React from "react";
import {
    colorSecondary2_3,
    sizeXS,
    textSizeM,
    textSizeS,
    colorPrimary4,
    colorSecondary2_0,
    sizeXXS
} from "../../../model/StylingConstants";

interface ErrorBarProps {
    message: string
    onDismiss: () => any;
}

const ErrorBar = (props: ErrorBarProps) => {
    const {message, onDismiss} = props;

    return message.length > 0 ?
        <View style={styles.error}>
            <TouchableHighlight onPress={onDismiss}>
                <View>
                    <Text style={styles.message}>
                        {message}
                    </Text>
                    <Text style={styles.info}>
                        Press anywhere to remove message
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
        : null;
};

export default ErrorBar;

const styles = StyleSheet.create({
    error: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: sizeXS,
        backgroundColor: colorSecondary2_0
    },
    message: {
        fontSize: textSizeM,
        color: colorPrimary4,
        marginBottom: sizeXXS
    },
    info: {
        fontSize: textSizeS,
        color: colorSecondary2_3,
        marginBottom: sizeXXS
    }
});