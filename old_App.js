import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá mundo! André Assunção</Text>
      <Text style={styles.titulo}>C O R I N T H I A N S</Text>
      
      <StatusBar style="auto" />
    </View>

    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight:  'bold',
    color: 'blue',
  }
});
