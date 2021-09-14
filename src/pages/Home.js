import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";
import {Actions} from "react-native-router-flux";
import { useTranslation } from 'react-i18next';
import AsyncStorage from "@react-native-async-storage/async-storage";
   const Home = () => {
   const { t } = useTranslation();
   const [name, setName] = useState('');
   const [address, setAddress] = useState('');
   const [email, setEmail] = useState('');
   const [tel, setTel] = useState('');

   const handleChange1 = (text) => {
      setName(text);
   }
   const handleChange2 = (text) => {
      setAddress(text);
   }
   const handleChange3 = (text) => {
      setEmail(text);
   }
   const handleChange4 = (text) => {
      setTel(text);
   }
   const store = async () => {
      try {
         await AsyncStorage.setItem('@name_Key', name)
      } catch (e) {

      }
      try {
         await AsyncStorage.setItem('@address_Key', address)
      } catch (e) {

      }
      try {
         await AsyncStorage.setItem('@email_Key', email)
      } catch (e) {

      }
      try {
         await AsyncStorage.setItem('@tel_Key', tel)
      } catch (e) {

      }
      goToSchool()
   }



   const goToSchool = () =>  {
      Actions.school()
   }
   return (
       <View>
          <TextInput style={styles.TextImp} placeholder={t("Your name")} type="text" onChangeText={(text) => handleChange1(text)} />
          <TextInput style={styles.TextImp} placeholder={t("Address")}  type="text" onChangeText={(text) => handleChange2(text)} />
          <TextInput style={styles.TextImp} placeholder="Email" type="text" onChangeText={(text) => handleChange3(text)} />
          <TextInput style={styles.TextImp} placeholder={t("Phone number")} type="text" onChangeText={(text) => handleChange4(text)} />

          <Button title={t("Next")} type="submit" value="submit" onPress={() => store()}/>
       </View>

   );
}
export default Home;
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
