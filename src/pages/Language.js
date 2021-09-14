import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";
import {Actions} from "react-native-router-flux";
import {useTranslation} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Language = () => {
    const { t } = useTranslation();
    const [lang1, setLang1] = useState('');
    const [lang2, setLang2] = useState('');
    const [lang3, setLang3] = useState('');

    const handleChange1 = (text) => {
       setLang1(text);
    }
    const handleChange2 = (text) => {
        setLang2(text);
    }
    const handleChange3 = (text) => {
        setLang3(text);
    }

   const store = async () => {
        try {
            await AsyncStorage.setItem('@lang1_Key', lang1)
        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@lang2_Key', lang2)
        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@lang3_Key', lang3)
        } catch (e) {

        }
        Actions.last()
    }


    return (
        <View>
            <View  style={styles.TextImp} >
                <TextInput placeholder={t("Language - level")} type="text" onChangeText={(text) => handleChange1(text)} /></View>

            <View style={styles.TextImp}>
                <TextInput placeholder={t("Language - level")}  type="text" onChangeText={(text) => handleChange2(text)} /></View>

            <View  style={styles.TextImp} >
                <TextInput placeholder={t("Language - level")} type="text" onChangeText={(text) => handleChange3(text)} /></View>

            <Button title={t("Next")} type="submit" value="submit" onPress={() => store()}/>
        </View>

    );
}
export default Language;
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
