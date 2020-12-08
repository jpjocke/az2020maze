import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {
    colorSecondary2_3,
    sizeXXS,
    textSizeS
} from "../model/StylingConstants";
import {Rating} from "../model/SearchResult";

interface RatingProps {
    rating: Rating;
}

const RatingComponent = (props: RatingProps) => {
    return props.rating.average ? <View style={styles.infoBox}>
            <Text style={styles.info}>
                Rating: {props.rating.average}
            </Text>
        </View>
        : null;
};

export default RatingComponent;

const styles = StyleSheet.create({
    info: {
        fontSize: textSizeS,
        color: colorSecondary2_3
    },
    infoBox: {
        flexDirection: 'row',
        marginBottom: sizeXXS
    },
});