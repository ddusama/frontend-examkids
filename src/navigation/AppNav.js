import AuthStack from "./AuthStack";
import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View} from "react-native";
import AppStack from "./AppStack";


export default function AppNav() {
    const {isLoading, userToken} = useContext(AuthContext)

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={"large"}/>
            </View>)
    }
    return (
        <NavigationContainer>
            {userToken != null ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    );
}
