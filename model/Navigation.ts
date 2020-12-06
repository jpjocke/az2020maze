import {DetailsPageProps} from "../components/detailspage/DetailsPage";
import {StackNavigationProp} from "@react-navigation/stack";

export type RootStackParamList = {
    Search: undefined;
    Details: DetailsPageProps;
};

export type SearchNavigation = StackNavigationProp<RootStackParamList, 'Search'>;