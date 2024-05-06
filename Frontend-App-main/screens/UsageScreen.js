import { StyleSheet, Text, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function UsageScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ 
        paddingBottom: Math.max(insets.bottom, 16),
        paddingTop: Math.max(insets.top, 16),
        paddingHorizontal: Math.max(insets.left, 8),

    }}>
    <Text>Usage Screen</Text>
  </View>
  );
}
