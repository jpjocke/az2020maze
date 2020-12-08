import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {
    colorSecondary2_3,
    sizeS,
    sizeXXS,
    textSizeS
} from "../model/StylingConstants";

interface GenreLanguageProps {
    genres: string[];
    language: string;
}

const GenreLanguageComponent = (props: GenreLanguageProps) => {
    return <View style={styles.infoBox}>
        {props.genres && props.genres.length > 0 ?
            <Text style={styles.infoGenres}>
                {props.genres.reduce((acc, red) => acc + ' ' + red, '')}
            </Text>
            : null}
        <Text style={styles.info}>
            [{props.language}]
        </Text>
    </View>;
};

export default GenreLanguageComponent;

const styles = StyleSheet.create({
    infoGenres: {
        fontSize: textSizeS,
        color: colorSecondary2_3,
        marginRight: sizeS
    },
    info: {
        fontSize: textSizeS,
        color: colorSecondary2_3
    },
    infoBox: {
        flexDirection: 'row',
        marginBottom: sizeXXS
    },
});