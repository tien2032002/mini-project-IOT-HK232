import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icons from '../Icons';

export const ButtonGroup = ({buttons, doSthAfter, customStyle}) => {
    const [selected, setSelected] = React.useState(0);

    const handleClick = ( buttonName, id) => {
        setSelected(id);
        doSthAfter(buttonName);
    }
    return (
        <View style= {[styles.container,customStyle]}>
            {
                buttons.map((buttonName,index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style = {
                                [styles.button,
                                 index === selected? styles.selected : {}
                                ]
                            }
                            onPress={() => handleClick(buttonName,index)}
                        >
                          <Text  style = {
                                [styles.buttonText,
                                 index === selected? styles.selectedText : {}
                                ]
                            }>{buttonName}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderWidth: 0.5,
    },
    button:{
        alignSelf: 'baseline',
        padding: 8,
        flex: 1,
        alignItems: 'center',
      },
    selected: {
        backgroundColor: '#7c41f5'
    },
    buttonText:{
        color: 'black'
    },
    selectedText:{
        color: 'white'
    }
});
