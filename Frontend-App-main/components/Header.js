
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

export function Header({  }) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 24,fontWeight: 'bold'}}>Hi, Tien!</Text>
          <Text style={{fontSize: 14, color: '#666'}}>Welcome to your smart home</Text>
        </View>
        <Image style={{width: 50, height: 50,resizeMode:'cover', borderRadius: 8}} 
        source={{uri:'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&auto=format&w=2270&ar=2:1&fit=crop'}}/>
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',justifyContent: 'space-between', alignItems:'center',
        backgroundColor:'#fafafa', padding: 16,
    }
});