import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Inicial</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Notificações</Text>
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
      <Stack.Navigator>
        <Stack.Screen
          name="Página inicial"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={handleIconPress} style={{ marginRight: 15 }}>
                <Image
                  source={require('./assets/sino.png')} 
                  style={{ width: 30, height: 30 }} 
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>

      {/* Modal para mostrar informações abaixo do sino */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Editar notificações</Text>

            {/* Primeira Caixa de Notificação */}
            <View style={styles.notificationBox}>
              <Text style={styles.notificationTitle}>Oba! Você vai receber rendimentos</Text>
              <Text style={styles.notificationText}>
                Atenção! Hoje você vai receber dos ativos GGRC11, GGRC13 o total de R$...
              </Text>
            </View>

            {/* Segunda Caixa de Notificação */}
            <View style={styles.notificationBox}>
              <Text style={styles.notificationTitle}>Oba! Você vai receber rendimentos</Text>
              <Text style={styles.notificationText}>
                Atenção! Hoje você vai receber dos ativos GGRC11, GGRC13 o total de R$...
              </Text>
            </View>

            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 179, 179, 0.2)', 
  },
  modalContainer: {
    width: 420,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },


  notificationBox: {
    width: '110%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold', 
    color: '#2e7d32', 
  },
  notificationText: {
    fontSize: 16,
    color: '#333', 
  },

  closeButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
