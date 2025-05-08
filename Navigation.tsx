import { NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Feed from './screens/Feed';

export const navigationRef = createNavigationContainerRef();

const Tab = createBottomTabNavigator();


export default function Navigation() {

    return (
        <NavigationContainer ref={navigationRef}>
            <Feed />
        </NavigationContainer>
    )
}