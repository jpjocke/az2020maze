import {Show} from "../../../model/SearchResult";
import {SearchNavigation} from "../../../model/Navigation";
import {StyleSheet, Text, View} from "react-native";
import React from "react";

interface ListItemProps {
    show: Show
    navigation: SearchNavigation
}

const ListItem = (props: ListItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}
              onPress={() => props.navigation.navigate('Details', {show: props.show})}>{props.show.name}</Text>
    </View>
);

export default ListItem;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});