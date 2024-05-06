import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icons from '../Icons';

export const ButtonGroup = ({buttons, doSthAfter}) => {
    const [selected, setSelected] = React.useState(0);

    const handleClick = ( item, id) => {
        setSelected(id);
        doSthAfter(item);
    }
    return (
        <View style= {{flexDirection: 'row', gap: 8}}>
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
                            onPress={(item) => handleClick(item,index)}
                        >
                          {Icons[buttonName]()}
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#0005',
        alignSelf: 'baseline',
        borderRadius: 1000,
        padding: 8,
      },
    selected: {
        backgroundColor: 'skyblue'
    }
});
