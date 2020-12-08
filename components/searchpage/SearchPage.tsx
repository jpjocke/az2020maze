import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {Show} from "../../model/SearchResult";
import NetworkHandler from "../../network/NetworkHandler";
import ShowList from "./components/ShowList";
import {SearchNavigation} from "../../model/Navigation";
import {
    colorPrimary4,
    sizeM,
    textSizeM,
    sizeL,
    sizeS,
    pageContainer
} from "../../model/StylingConstants";
import ErrorBar from "./components/ErrorBar";

export interface SearchPageProps {
    networkHandler: NetworkHandler,
    navigation: SearchNavigation
}

const SearchPage = (props: SearchPageProps) => {
    const [query, setQuery] = useState<string>('');
    const [shows, setShows] = useState<ReadonlyArray<Show>>([]);
    const [errorMsg, setErrorMsg] = useState<string>('');

    const search = () => {
        props.networkHandler.search(query)
            .then(result => {
                setShows(result.shows.map(value => value.show));
                if (result.shows.length === 0) {
                    setErrorMsg('No shows found');
                }
            })
            .catch((error) => {
                setErrorMsg('Unable to get the result');
            });
    };

    return (
        <View style={styles.container}>
            <ErrorBar message={errorMsg} onDismiss={() => {
                setErrorMsg('');
            }}/>
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
        ...pageContainer,
        alignItems: 'center'
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
    }
});

export default SearchPage;