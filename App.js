import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LoginScreen from './pages/LoginScreen'; 
import NotificationsPage from './pages/NotificationScreen'; 

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Inicial</Text>
    </View>
  );
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleIconPress = () => {
    setModalVisible(true); 
  };

  const handleCloseModal = () => {
    setModalVisible(false); 
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={handleIconPress} style={{ marginRight: 15 }}>
                <Image source={require('./assets/sino.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>

      {/* Passando a visibilidade do modal e função de fechar para a NotificationsPage */}
      <NotificationsPage modalVisible={modalVisible} onClose={handleCloseModal} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});
