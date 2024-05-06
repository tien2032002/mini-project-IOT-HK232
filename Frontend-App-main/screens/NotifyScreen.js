import { StyleSheet, Text, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DataTable } from 'react-native-paper';
import MyDataTable from "../components/NotifyComponents/DataTable";

export default function NotifyScreen() {
  const insets = useSafeAreaInsets();

  const data = [
    {
      key: 1,
      alert: 'Cupcake',
      time: '12:00',
      date: '4th Nov,23',
    },
    {
      key: 2,
      alert: 'Eclair',
      time: '12:00',
      date: '4th Nov,23',
    },
    {
      key: 3,
      alert: 'Frozen yogurt',
      time: '12:00',
      date:'4th Nov,23',
    },
    {
      key: 4,
      alert: 'Gingerbread',
      time: '12:00',
      date: '4th Nov,23',
    },
   ]

  return (
    <View style={{ 
        backgroundColor: '#fafafa',
        height: '100%',
        paddingVertical: Math.max(insets.bottom, 16),
        paddingHorizontal: Math.max(insets.left,16),
    }}>
        <Text>Alert history</Text>
        <MyDataTable items={data} />
    </View>
  );
}
