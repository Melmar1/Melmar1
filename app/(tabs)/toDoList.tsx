import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '@/hooks/useTarefas';

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Peças que precisa fazer manutenção
            </Text>

            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite uma tarefa..."
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
                <Text style={styles.textobotao}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}> 
                            <Ionicons name={'trash-outline'} color={'black'} size={24} />  
                             </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: 'rgb(117, 217, 248)', },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    inputContainer: { flexDirection: 'row', marginBottom: 10 },
    input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginRight: 10 },
    botao: {
        backgroundColor: 'gold',
        padding: 10,
        borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       minWidth: 100,
    },
    textobotao:{
        color: '#134761',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tarefaContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: '	#00BFFF', 
        padding: 15, 
        marginBottom: 5, 
        borderRadius: 5,  
        shadowColor: '#000', 
        shadowOpacity: 0.1, 
        shadowRadius: 3, 
        elevation: 2 
    },
    tarefaTexto: { fontSize: 16 },
    remover: { fontSize: 18, color: 'red' },
});