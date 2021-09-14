import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";
import {Actions} from "react-native-router-flux";
import { useTranslation } from 'react-i18next';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Job = () => {
    const [Job_1_Year, setJob_1_Year] = useState('');
    const [Company_1, setCompany_1] = useState('');
    const [Position_1, setPosition_1] = useState('');
    const [Job_2_Year, setJob_2_Year] = useState('');
    const [Company_2, setCompany_2] = useState('');
    const [Position_2, setPosition_2] = useState('');
    const { t } = useTranslation();


    const handleChange1 = (text) => {
        setJob_1_Year(text);
    }
    const handleChange2 = (text) => {
        setCompany_1(text);
    }
    const handleChange3 = (text) => {
       setPosition_1(text);
    }
    const handleChange4 = (text) => {
        setJob_2_Year(text);
    }
    const handleChange5 = (text) => {
        setCompany_2(text);
    }
    const handleChange6 = (text) => {
        setPosition_2(text);
    }
    const store = async () => {
        try {
            await AsyncStorage.setItem('@Job_1_Year_Key', Job_1_Year)

        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@Company_1_Key', Company_1)
        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@Position_1_Key', Position_1)
        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@Job_2_Year_Key', Job_2_Year)
        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@Company_2_Key', Company_2)
        } catch (e) {

        }
        try {
            await AsyncStorage.setItem('@Position_2_Key', Position_2)
        } catch (e) {

        }
        goToSkill()
    }

    const goToSkill = () =>  {
        Actions.skills()
    }

    return (
        <View>
            <TextInput style={styles.TextImp} placeholder={t("Years")} type="text" onChangeText={(text) => handleChange1(text)} />
            <TextInput style={styles.TextImp} placeholder={t("Company")}  type="text" onChangeText={(text) => handleChange2(text)} />
            <TextInput style={styles.TextImp} placeholder={t("Position")} type="text" onChangeText={(text) => handleChange3(text)} />
            <TextInput style={styles.TextImp} placeholder={t("Years")} type="text" onChangeText={(text) => handleChange4(text)} />
            <TextInput style={styles.TextImp} placeholder={t("Company")} type="text" onChangeText={(text) => handleChange5(text)} />
            <TextInput style={styles.TextImp} placeholder={t("Position")} type="text" onChangeText={(text) => handleChange6(text)} />

            <Button title={t("Next")} type="submit" value="submit" onPress={() => store()}/>
        </View>

    );
}
export default Job;
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
