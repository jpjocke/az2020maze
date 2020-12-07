import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {Show} from "../../model/SearchResult";
import NetworkHandler from "../../network/NetworkHandler";
import ShowList from "./components/ShowList";
import {SearchNavigation} from "../../model/Navigation";
import {
    colorPrimary4,
    colorPrimary1,
    sizeM,
    colorSecondary2_0,
    textSizeM,
    sizeL,
    sizeS
} from "../../model/StylingConstants";

export interface SearchPageProps {
    networkHandler: NetworkHandler;
    navigation: SearchNavigation
}

const SearchPage = (props: SearchPageProps) => {
    const [query, setQuery] = useState<string>('');
    const [shows, setShows] = useState<ReadonlyArray<Show>>([]);

    const search = () => {
        console.log(query);
        props.networkHandler.search(query).then(result => {
            setShows(result.shows.map(value => value.show));
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.text}
                    placeholder="Search for your show"
                    onChangeText={query => setQuery(query)}
                    defaultValue={query}
                />
                <Button
                    onPress={search}
                    title={"search"}
                />
            </View>
            <ShowList shows={shows} navigation={props.navigation}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPrimary1,
        alignItems: 'center',
    },
    searchBar: {
        flexDirection: 'row',
        padding: sizeM
    },
    text: {
        fontSize: textSizeM,
        height: sizeL,
        color: colorPrimary4,
        marginRight: sizeS
    },
    button: {
        backgroundColor: colorSecondary2_0,
    }
});

export default SearchPage;