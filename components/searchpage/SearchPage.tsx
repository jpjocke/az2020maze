import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {Show} from "../../model/SearchResult";
import NetworkHandler from "../../network/NetworkHandler";
import ShowList from "./components/ShowList";
import {SearchNavigation} from "../../model/Navigation";

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
            <TextInput
                style={{height: 40}}
                placeholder="Search for your show"
                onChangeText={query => setQuery(query)}
                defaultValue={query}
            />
            <Button
                onPress={() => {
                    search();
                }}
                title={"search"}
            />
            <ShowList shows={shows} navigation={props.navigation}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchPage;