import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Show} from "../../model/SearchResult";
import {RootStackParamList} from "../../model/Navigation";
import {colorPrimary1} from "../../model/StylingConstants";

export interface DetailsPageProps {
    show: Show
    route?: RouteProp<RootStackParamList, 'Details'>
}

const DetailsPage = (props: DetailsPageProps) => {
    return (
        <View style={styles.container}>
            <Text style={{height: 40}}>{props.route!.params.show.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPrimary1,
        alignItems: 'center'
    },
});

export default DetailsPage;