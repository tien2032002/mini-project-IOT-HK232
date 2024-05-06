import { StyleSheet, Text, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DeviceScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ 
        paddingVertical: Math.max(insets.bottom, 16),
        paddingHorizontal: Math.max(insets.left,8),
    }}>
        <View>
            <Text>fan</Text>
        </View>
        <View>
            <Text>Light</Text>
        </View>
    </View>
  );
}
