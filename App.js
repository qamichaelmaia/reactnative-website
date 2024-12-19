import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Notificações</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View>
      <Text>Notifications Screen</Text>
    </View>
  );
}

export default function App() {
  const handleIconPress = () => {
    alert('Você clicou no sino!');
    // Adicione a lógica desejada aqui, como navegar para outra tela ou executar uma ação.
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <TouchableOpacity onPress={handleIconPress}>
                <Image
                  source={require('./assets/sino.png')} // Caminho para a imagem
                  style={{ width: 30, height: 30 }} // Ajuste o tamanho da imagem
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
