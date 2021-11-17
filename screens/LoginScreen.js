import React, {useState} from 'react'
// import { auth } from '../firebase'
import { Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';


const LoginScreen = () => {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    return (
        <ScrollView 
        centerContent
        style={styles.viewBody}>
       
        
        
            <Image 
            source={ require("../assets/google-maps.png")}
            resizeMode="contain"
            style={styles.image}
            />

            <Text style={styles.title} >
                Maps Application
            </Text>

            <Text style={styles.description}>
                Bienvenidos a "Maps Application", projecto de clase. Es una aplicacion movil creada integrando Firebase y React Native con Expo. 
            </Text>
            
            <View style={styles.inputContainer}> 
                <TextInput
                    placeholder="Email Address"
                    value={ email}
                    onChangeText={ text =>  setEmail(text)} 
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    value={ password}
                    onChangeText={ text =>  setPassword(text)} 
                    style={styles.input}
                    secureTextEntry
                />
                
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
                >
                    <Text style={styles.buttonText}> Iniciar Sesión</Text>
                </TouchableOpacity>


            </View>
            <CreateAccount/>
            

        </ScrollView>


            
       
    )
}

export default LoginScreen


function CreateAccount(props){
    

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);

        })
        .catch(error => alert(error.message))
            
    }
    return (

        
        <Text style={styles.register}
        onPress={handleSignUp}>
            ¿Aún no tienes una cuenta?{" "}
            <Text style={styles.btnRegister}>
                Regístrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30,  
    },

    image: {
        height: 200,
        width: "100%",
        marginBottom: 20,
    },

    container: {
        marginHorizontal: 40,
        
    },

    register: {
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },

    title: {
        fontWeight: "bold",
        fontSize : 20,
        marginVertical: 10,
        textAlign: "center"
    },

    description: {
        textAlign: 'justify',
        marginBottom: 20,
        color: "#bcbbc9"

    },

    btnRegister: {
        color: "#C3004e",
        fontWeight: "bold"
    },
    
    inputContainer: {
        width: "100%",
    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },

    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,

    },

    button: {
        backgroundColor: '#C3004e',
        width: "50%",
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: "500",
        fontSize: 15,

    }


})
