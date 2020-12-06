import React from 'react';
import {View, FlatList} from 'react-native';
import {Show} from "../../../model/SearchResult";
import {SearchNavigation} from "../../../model/Navigation";
import ListItem from "./ListItem";

export interface ShowListProps {
    shows: ReadonlyArray<Show>;
    navigation: SearchNavigation
}

export default class ShowList extends React.PureComponent<ShowListProps> {

    render() {
        return (
            <View>
                <FlatList<Show>
                    data={this.props.shows}
                    renderItem={({item}) => <ListItem show={item} navigation={this.props.navigation}/>}
                    keyExtractor={(show) => show.id + ''}
                    onEndReached={() => console.log("end reached")} // funkar inte?
                />
            </View>
        )
    }
}

