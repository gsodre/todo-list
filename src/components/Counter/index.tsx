import { Text, View } from "react-native";
import { styles } from "./style";

type Props = {
  label: string;
  amount: number;
  labelColor: string;
};

export function Counter({ amount, label, labelColor }: Props) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, color: labelColor }}>{label}</Text>
      <View style={styles.amountWrapper}>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
}
