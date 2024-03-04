import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { styles } from "./style";

type Props = {
  content: string;
  finished: boolean;
  onRemove: () => void;
  onFinish: () => void;
};

export function ListItem({ content, finished, onRemove, onFinish }: Props) {
  return (
    <View
      style={{
        ...styles.container,
        borderWidth: finished ? undefined : 1,
        borderColor: finished ? undefined : "#333333",
      }}
    >
      <TouchableOpacity onPress={onFinish}>
        {finished ? (
          <Icon name="check-circle" size={20} color="#5E60CE" />
        ) : (
          <Icon name="radio-button-unchecked" size={20} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      <ScrollView>
        <Text
          style={{
            ...styles.text,
            color: finished ? "#808080" : "#F2F2F2",
            textDecorationLine: finished ? "line-through" : "none",
          }}
        >
          {content}
        </Text>
      </ScrollView>

      <TouchableOpacity onPress={onRemove}>
        <Icon name="delete-outline" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
