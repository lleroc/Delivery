import { StatusBar } from "expo-status-bar";
import { BotonRedondeado } from './src/components/BotonRedondeado';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ToastAndroid,
} from "react-native";
import { MyColors } from "./src/theme/AppTheme";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("./assets/chef.jpg")}
      />
      <View style={styles.logoConteiner}>
        <Image style={styles.logoImage} source={require("./assets/logo.png")} />
        <Text style={styles.logoText}>Delivery APP</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Ingresar</Text>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("./assets/email.png")}
          />
          <TextInput
            style={styles.textFormInput}
            placeholder="Correo Electrónico"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("./assets/password.png")}
          />
          <TextInput
            style={styles.textFormInput}
            placeholder="Contrseña"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 30}}>
          <BotonRedondeado text="Ingresar" 
          onPress={()=>ToastAndroid.show('Hola Mundo', ToastAndroid.SHORT)}
          />
        </View>

        <View style={ styles.formRegister}>
            <Text>No tines cuenta...??</Text>
            <Text style={styles.formRegisterText}>Registrate</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formRegisterText:{
    fontStyle:'italic',
    color:'orange',
    borderEndWidth:1,
    borderBottomColor:'orange',
    fontWeight:'bold',
    marginLeft:5
  },
  formRegister:{
    flexDirection:'row',
    fontStyle:'italic',
    marginTop:5,
    alignSelf:'center'
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
