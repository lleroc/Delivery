import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
} from "react-native";
import { MyColors } from "../../theme/AppTheme";
import { BotonRedondeado } from '../../components/BotonRedondeado';

export const RegisterScreen=()=>{
    return(
        <View style={styles.container}>
          <Image
            style={styles.imageBackground}
            source={require("../../../../assets/chef.jpg")}
          />
          <View style={styles.logoConteiner}>
            <Image style={styles.logoImage} source={require("../../../../assets/user_image.png")} />
            <Text style={styles.logoText}>Seleccione una imagen</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.formText}>Ingresar</Text>
    
            <View style={styles.formInput}>
              <Image
                style={styles.formIcon}
                source={require("../../../../assets/user.png")}
              />
              <TextInput
                style={styles.textFormInput}
                placeholder="Nombres"
              />
            </View>
            <View style={styles.formInput}>
              <Image
                style={styles.formIcon}
                source={require("../../../../assets/my_user.png")}
              />
              <TextInput
                style={styles.textFormInput}
                placeholder="Apellidos"
                
              />
            </View>
            <View style={styles.formInput}>
              <Image
                style={styles.formIcon}
                source={require("../../../../assets/email.png")}
              />
              <TextInput
                style={styles.textFormInput}
                placeholder="Correo Electrónico"
              />
            </View>
            <View style={styles.formInput}>
              <Image
                style={styles.formIcon}
                source={require("../../../../assets/phone.png")}
              />
              <TextInput
                style={styles.textFormInput}
                placeholder="Telefono"
              keyboardType="numeric"
              />
            </View>


            <View style={styles.formInput}>
              <Image
                style={styles.formIcon}
                source={require("../../../../assets/password.png")}
              />
              <TextInput
                style={styles.textFormInput}
                placeholder="Contrseña"
                keyboardType="default"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.formInput}>
              <Image
                style={styles.formIcon}
                source={require("../../../../assets/confirm_password.png")}
              />
              <TextInput
                style={styles.textFormInput}
                placeholder="Repita su Contrseña"
                keyboardType="default"
                secureTextEntry={true}
              />
            </View>
            <View style={{ marginTop: 30}}>
                
              <BotonRedondeado text="Ingresar" 
              onPress={()=>ToastAndroid.show('Hola Mundo', ToastAndroid.SHORT)}
              />
            </View>
    
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    formIcon: {
      width: 30,
      height: 30,
      marginTop: 5,
    },
    formInput: {
      flexDirection: "row",
      marginTop: 20,
    },
    textFormInput: {
      flex: 1,
      borderBottomWidth: 3,
      borderBottomColor: MyColors.secondary,
      marginLeft: 10,
    },
    formText: {
      fontWeight: "bold",
      fontSize: 16,
    },
    logoText: {
      color: "white",
      fontSize: 16,
      textAlign: "center",
      marginTop: 10,
      fontWeight: "bold",
    },
    logoImage: {
      width: 100,
      height: 100,
    },
    logoConteiner: {
      position: "absolute",
      alignSelf: "center",
      alignItems:'center',
      top: "5%",
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    imageBackground: {
      width: "100%",
      height: "100%",
      opacity: 0.5,
    },
    form: {
      width: "100%",
      height: "70%",
      position: "absolute",
      bottom: 0,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      backgroundColor: "white",
      padding: 30,
    },
  });