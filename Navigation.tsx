import { NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createDrawerNavigator}  from "@react-navigation/drawer"
import Feed from './screens/Feed';
import Settings from './screens/Settings';
import Notifications from './screens/Notifications';
import FeedDetail from './screens/FeedDetail';
import NotificationDetail from './screens/NotificationDetail';
import SettingsDetail from './screens/SettingsDetail';
import Payment from './screens/Payment';

export const navigationRef = createNavigationContainerRef();

//Stack Navigation 

const HomeStack = createNativeStackNavigator();


function HomeStackgroup(){
    return(
        <HomeStack.Navigator screenOptions={{headerShown:false}}>
            <HomeStack.Screen name="TabGroup" component={TabGroup}/>
            <HomeStack.Screen name="FeedDetail" component={FeedDetail} options={{presentation:'modal'}}/>
        </HomeStack.Navigator>
    )
}

const NotificationStack= createNativeStackNavigator();

function NotificationStackGroup(){
    return(
        <NotificationStack.Navigator>
            <NotificationStack.Screen name="Notification" component={Notifications}/>
            <NotificationStack.Screen name="NotificationDetail" component={NotificationDetail}/>
        </NotificationStack.Navigator>
    )
}

const SettingStack= createNativeStackNavigator();

function SettingGroup(){
    return(
        <SettingStack.Navigator>
            <SettingStack.Screen name="Settings" component={Settings}/>
            <SettingStack.Screen name="SettingsDetail" component={SettingsDetail}/>
        </SettingStack.Navigator>
    )
}


//Bottom Tab 

const Tab = createBottomTabNavigator();

function TabGroup(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Tab.Screen  name="Feed" component={Feed}/>
            <Tab.Screen  name="Settings" component={SettingGroup}/>
            <Tab.Screen  name="Notifications" component={NotificationStackGroup}/>
        </Tab.Navigator>
    )
}

//Drawer 

const Drawer = createDrawerNavigator()

function DrawerNavigator(){

    return(
        <Drawer.Navigator >
            <Drawer.Screen name="HomeStack" component={HomeStackgroup}/>
            <Drawer.Screen name="Payment" component={Payment}/>
        </Drawer.Navigator>
    )

}


export default function Navigation() {

    return (
        <NavigationContainer ref={navigationRef}>
            <DrawerNavigator/>
        </NavigationContainer>
    )
}