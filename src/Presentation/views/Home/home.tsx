import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ToastAndroid,
} from "react-native";
import { MyColors } from "../../theme/AppTheme";
import { BotonRedondeado } from "../../components/BotonRedondeado";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import usuViewModel from "./ViewModel";
import { TextInputPersonalizado } from "../../components/TextInputPersonalizado";

export const HomeScreen = () => {
  const { email, password, onChange } = usuViewModel();
  const navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/chef.jpg")}
      />
      <View style={styles.logoConteiner}>
        <Image
          style={styles.logoImage}
          source={require("../../../../assets/logo.png")}
        />
        <Text style={styles.logoText}>Delivery APP</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Ingresar</Text>

        <TextInputPersonalizado
          image={require("../../../../assets/email.png")}
          placeholder="Correo Electrónico"
          keybordType="default"
          property="email"
          onChangeText={onChange}
          value={email}
        />
        <TextInputPersonalizado
          image={require("../../../../assets/password.png")}
          placeholder="Contrseña"
          keybordType="default"
          property="password"
          onChangeText={onChange}
          secureTextEntry={true}
          value={password}
        />

        <View style={{ marginTop: 30 }}>
          <BotonRedondeado
            text="Ingresar"
            onPress={() => {
              console.log(email);
              console.log(password);
            }}
          />
        </View>

        <View style={styles.formRegister}>
          <Text>No tines cuenta...??</Text>
          <TouchableOpacity
            onPress={() => navegacion.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formRegisterText: {
    fontStyle: "italic",
    color: "orange",
    borderEndWidth: 1,
    borderBottomColor: "orange",
    fontWeight: "bold",
    marginLeft: 5,
  },
  formRegister: {
    flexDirection: "row",
    fontStyle: "italic",
    marginTop: 5,
    alignSelf: "center",
  },
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
    top: "15%",
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
    height: "40%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
    padding: 30,
  },
});
