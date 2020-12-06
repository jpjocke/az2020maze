import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Show} from "../../model/SearchResult";
import {RootStackParamList} from "../../model/Navigation";

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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DetailsPage;