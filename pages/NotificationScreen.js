// notifications/NotificationsPage.js
import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

export default function NotificationsPage({ modalVisible, onClose }) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Editar notificações</Text>

          <View style={styles.notificationBox}>
            <Text style={styles.notificationTitle}>Oba! Você vai receber rendimentos</Text>
            <Text style={styles.notificationText}>
              Atenção! Hoje você vai receber dos ativos GGRC11, GGRC13 o total de R$...
            </Text>
          </View>

          <View style={styles.notificationBox}>
            <Text style={styles.notificationTitle}>Oba! Você vai receber rendimentos</Text>
            <Text style={styles.notificationText}>
              Atenção! Hoje você vai receber dos ativos GGRC11, GGRC13 o total de R$...
            </Text>
          </View>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 179, 179, 0.2)' },
  modalContainer: { width: 420, padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  notificationBox: { width: '110%', padding: 15, marginBottom: 10, borderRadius: 5, backgroundColor: '#f1f1f1', borderWidth: 1, borderColor: '#ddd' },
  notificationTitle: { fontSize: 16, fontWeight: 'bold', color: '#2e7d32' },
  notificationText: { fontSize: 16, color: '#333' },
  closeButton: { backgroundColor: '#007BFF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginTop: 20 },
  closeButtonText: { color: 'white', fontSize: 16 },
});
