import {Show} from "../../../model/SearchResult";
import {SearchNavigation} from "../../../model/Navigation";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import React from "react";
import {
    colorSecondary2_1,
    colorSecondary2_3,
    colorSecondary2_4,
    itemHeight,
    sizeS,
    sizeXS,
    sizeXXS,
    sizeXXXS,
    textSizeM,
    textSizeS
} from "../../../model/StylingConstants";

interface ListItemProps {
    show: Show
    navigation: SearchNavigation
}

const ListItem = (props: ListItemProps) => {
    const {show} = props;
    const onPress = () => {
        props.navigation.navigate('Details', {show: show});
    };

    const header = <Text style={styles.title}>
        {show.name}
    </Text>;

    const genreLanguage =
        <View style={styles.infoBox}>
            {show.genres && show.genres.length > 0 ?
                <Text style={styles.infoGenres}>
                    {show.genres.reduce((acc, red) => acc + ' ' + red, '')}
                </Text>
                : null}
            <Text style={styles.info}>
                [{show.language}]
            </Text>
        </View>;

    const status =
        <View style={styles.infoBox}>
            <Text style={styles.info}>
                Status: {show.status}
            </Text>
        </View>;

    return <View style={styles.item}>
        <TouchableHighlight onPress={onPress} style={styles.touch}>
            <View>
                {header}
                {genreLanguage}
                {status}
            </View>
        </TouchableHighlight>
    </View>
};

export default ListItem;

const styles = StyleSheet.create({
    touch: {
        padding: sizeXS,
    },
    item: {
        backgroundColor: colorSecondary2_1,
        borderRadius: sizeS,
        marginVertical: sizeXXS,
        borderColor: colorSecondary2_3,
        borderWidth: sizeXXXS,
        height: itemHeight
    },
    title: {
        fontSize: textSizeM,
        color: colorSecondary2_4,
        marginBottom: sizeXS
    },
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