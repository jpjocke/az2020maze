import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NetworkHandler from "./network/NetworkHandler";
import SearchPage from "./components/searchpage/SearchPage";
import DetailsPage from "./components/detailspage/DetailsPage";
import {RootStackParamList} from "./model/Navigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Search">
                    {props => (<SearchPage {...props} networkHandler={new NetworkHandler()}/>)}
                </Stack.Screen>
                <Stack.Screen name="Details" component={DetailsPage}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}
