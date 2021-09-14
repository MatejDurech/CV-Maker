import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as Location from 'expo-location';
import {Actions} from "react-native-router-flux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useTranslation} from "react-i18next";


const Loc = () => {
    const { t } = useTranslation();
    const [location, setLocation] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
               setErrorMsg('Permission to access location was denied');
           }
            let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
            const { latitude , longitude } = location.coords;
            setLatitude(latitude);
            setLongitude(longitude);
            Location.setGoogleApiKey("AIzaSyCW1w3xYCUjsqoHfAmr-9biYk5H3WSa1_g");
            setLocation(await Location.reverseGeocodeAsync({latitude, longitude}))


        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = location[0].city
    }
    const waiting = () => {
        if(text === 'Waiting..'){
            return true
        }else{
            return false

        }
    }

    const goTo = async () =>{
        try {
            const keys = await AsyncStorage.getAllKeys();
            await AsyncStorage.multiRemove(keys);
        } catch (error) {
            console.error('Error clearing app data.');
        }
        try {
            await AsyncStorage.setItem('@city_Key', text)
        } catch (e) {
        }
            Actions.home()
    }


    return (
        <View style={styles.container}>
            <Text>{t('Welcome in the CV-Maker')}</Text>
            {waiting() ? (
            <Text>{t('Please waiting ..')}</Text>
            ) : (
                <Button title={t("Start")} type="submit" value="submit" onPress={() => goTo()}/>
            )
                }

        </View>
    );
}
export default Loc;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
