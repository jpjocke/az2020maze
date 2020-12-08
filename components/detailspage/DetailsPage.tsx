import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Show} from "../../model/SearchResult";
import {RootStackParamList} from "../../model/Navigation";
import {
    colorPrimary4,
    mediumImageSize,
    pageContainer,
    sizeS,
    sizeXS,
    textSizeM, textSizeS
} from "../../model/StylingConstants";
import GenreLanguageComponent from "../GenreLanguageComponent";
import RatingComponent from "../RatingComponent";

export interface DetailsPageProps {
    show: Show
    route?: RouteProp<RootStackParamList, 'Details'>
}

const DetailsPage = (props: DetailsPageProps) => {
    const {show} = props.route!.params;

    /**
     * Removes html tags from the summary.
     * Its not perfect but seems to work for this data.
     * @param summary Summary on the show.
     */
    const cleanSummary = (summary: string): string => {
        const someTags = new RegExp('<.{1,10}?>', 'g');
        return summary.replaceAll(someTags, '');
    };

    return (
        <View style={styles.container}>
            {show.image && show.image.medium ?
                <Image source={{uri: show.image.medium}}
                       style={styles.image}/>
                : null
            }

            <Text style={styles.title}>{show.name}</Text>
            <GenreLanguageComponent genres={show.genres} language={show.language}/>
            <Text style={styles.summary}>{cleanSummary(show.summary)}</Text>
            <RatingComponent rating={show.rating}/>
            <Text style={styles.summary}>Status: {show.status}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        ...pageContainer,
        alignItems: 'center'
    },
    title: {
        fontSize: textSizeM,
        color: colorPrimary4,
        margin: sizeS
    },
    summary: {
        fontSize: textSizeS,
        color: colorPrimary4,
        margin: sizeS

    },
    image: {
        ...mediumImageSize,
        margin: sizeXS
    }
});

export default DetailsPage;