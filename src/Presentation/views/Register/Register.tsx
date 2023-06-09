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
import { BotonRedondeado } from "../../components/BotonRedondeado";
import { TextInputPersonalizado } from "../../components/TextInputPersonalizado";
import usuViewModel from "./ViewModel";
export const RegisterScreen = () => {
  const {
    Nombres,
    Apellidos,
    Telefono,
    email,
    password,
    repeatPassword,
    onChange, register
  } = usuViewModel();
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/chef.jpg")}
      />
      <View style={styles.logoConteiner}>
        <Image
          style={styles.logoImage}
          source={require("../../../../assets/user_image.png")}
        />
        <Text style={styles.logoText}>Seleccione una imagen</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Ingresar</Text>

        <TextInputPersonalizado
          image={require("../../../../assets/user.png")}
          placeholder="Nombres"
          keybordType="default"
          property="Nombres"
          onChangeText={onChange}
          value={Nombres}
        />
        <TextInputPersonalizado
          image={require("../../../../assets/my_user.png")}
          placeholder="Apellidos"
          keybordType="default"
          property="Apellidos"
          onChangeText={onChange}
          value={Apellidos}
        />
        <TextInputPersonalizado
          image={require("../../../../assets/email.png")}
          placeholder="Correo Electrónico"
          keybordType="default"
          property="email"
          onChangeText={onChange}
          value={email}
        />
        <TextInputPersonalizado
          image={require("../../../../assets/phone.png")}
          placeholder="Telefono"
          keybordType="default"
          property="Telefono"
          onChangeText={onChange}
          value={Telefono}
        />
        <TextInputPersonalizado
          image={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          keybordType="default"
          property="password"
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <TextInputPersonalizado
          image={require("../../../../assets/confirm_password.png")}
          placeholder="Repita la Contraseña"
          keybordType="default"
          property="repeatPassword"
          onChangeText={onChange}
          value={repeatPassword}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30 }}>
          <BotonRedondeado
            text="Ingresar"
            onPress={() => register()}
          />
        </View>
      </View>
    </View>
  );
};

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
    alignItems: "center",
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
