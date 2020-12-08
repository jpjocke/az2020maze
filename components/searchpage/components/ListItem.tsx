import {Show} from "../../../model/SearchResult";
import {SearchNavigation} from "../../../model/Navigation";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import React from "react";
import {
    colorPrimary1,
    colorSecondary2_3,
    itemHeight,
    sizeS,
    sizeXS,
    sizeXXS,
    sizeXXXS,
    textSizeM,
    textSizeS, colorPrimary4
} from "../../../model/StylingConstants";
import GenreLanguageComponent from "../../GenreLanguageComponent";
import RatingComponent from "../../RatingComponent";

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

    return <View style={styles.item}>
        <TouchableHighlight onPress={onPress} style={styles.touch}>
            <View>
                {header}
                <GenreLanguageComponent genres={show.genres} language={show.language}/>
                <RatingComponent rating={show.rating} />
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
        backgroundColor: colorPrimary1,
        borderRadius: sizeS,
        marginVertical: sizeXXS,
        borderColor: colorPrimary4,
        borderWidth: sizeXXXS,
        height: itemHeight
    },
    title: {
        fontSize: textSizeM,
        color: colorPrimary4,
        marginBottom: sizeXS
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