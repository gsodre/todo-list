import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./style";
import { Counter } from "../../components/Counter";
import { ListItem } from "../../components/ListItem";
import { useState } from "react";
import uuid from "react-native-uuid";
import Icon from "react-native-vector-icons/MaterialIcons";

type ITuDoList = {
  id: string;
  toDo: string;
  finished: boolean;
};

export function Home() {
  const [toDoList, SetToDoList] = useState<ITuDoList[]>([]);
  const [toDo, SetToDo] = useState("");

  function handleAddToDoListItem() {
    if (!toDo) {
      return Alert.alert("Atenção", "Digite a tarefa a ser cadastrada!");
    }

    const id = uuid.v4().toString();

    SetToDoList((prevState) => [...prevState, { id, toDo, finished: false }]);
    SetToDo("");
  }

  function handleFinishToDoListItem(id: string) {
    SetToDoList((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, finished: !item.finished } : item
      )
    );
  }

  function handleRemoveToDoListItem(id: string) {
    Alert.alert("Atenção!", `Deseja mesmo remover esta tarefa?`, [
      {
        text: "Sim",
        onPress: () =>
          SetToDoList((prevState) =>
            prevState.filter((item) => item.id !== id)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>

      <View style={styles.body}>
        <View style={styles.form}>
          <TextInput
            value={toDo}
            style={styles.input}
            placeholderTextColor="#808080"
            placeholder="Adicione uma nova tarefa"
            onChangeText={(target) => SetToDo(target)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddToDoListItem}
          >
            <Icon name="add-circle-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.counters}>
          <Counter
            label="Criadas"
            labelColor="#4EA8DE"
            amount={toDoList.length}
          />
          <Counter
            label="Concluidas"
            labelColor="#8284FA"
            amount={toDoList.filter((item) => item.finished).length}
          />
        </View>

        <FlatList
          style={styles.flatList}
          data={toDoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              content={item.toDo}
              finished={item.finished}
              onRemove={() => handleRemoveToDoListItem(item.id)}
              onFinish={() => handleFinishToDoListItem(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyComponent}>
              <Image source={require("../../../assets/listEmpty.png")} />
              <Text style={styles.listEmpty}>
                <Text style={{ fontWeight: "bold" }}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                {"\n"}
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
}
