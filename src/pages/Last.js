import React, {useState} from 'react';
import {Actions} from "react-native-router-flux";
import {Button, StyleSheet, TextInput, View} from "react-native";
import {useTranslation} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Last = () => {
    const [card, setCard] = useState('');
    const [hobby, setHobby] = useState('');
    const { t } = useTranslation();

    const handleChange1 = (text) => {
       setCard(text);
    }
    const handleChange2 = (text) => {
       setHobby(text);
    }

    const store = async () => {
        try {
            await AsyncStorage.setItem('@card_Key', card)
        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@hobby_Key',  hobby)
        } catch (e) {

        }

        Actions.pdf()
    }

    return (
        <View>
            <TextInput style={styles.TextImp} placeholder={t("Driving licence")} type="text" onChangeText={(text) => handleChange1(text)} />
            <TextInput style={styles.TextImp} placeholder={t("Hobby")}  type="text" onChangeText={(text) => handleChange2(text)} />
            <Button title={t("Next")} type="submit" value="submit" onPress={() => store()}/>
        </View>

    );
}
export default Last;
const styles = StyleSheet.create({
    TextImp: {
        alignContent: "center",
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 10,
        borderRightColor:'white',
        borderLeftColor:'white',
        borderTopColor:'white',
        margin: 10
    }
});
