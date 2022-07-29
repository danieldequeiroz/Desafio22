import React from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { List, Colors } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/NavigationModule';
import { RouteProp } from '@react-navigation/native'

type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;

interface userIconProps {
    navigation: ResultScreenNavigationProp,
    avatar_url: string,
    login: string,
    type: string,
    id: number
}

const UserIcon: React.FC<userIconProps> = ({
    navigation,
    avatar_url,
    login,
    type
}) => {

    return(
        <TouchableOpacity onPress={() => {
            navigation.navigate('Profile', {
                username: login
            })
        }}>
            <View style={styles.container}>
                <Image
                    style={styles.img} 
                    source={{
                        uri: avatar_url
                    }}
                />
                <View style={{flexDirection: 'column', flex: 5, marginLeft: 10}}>
                    <Text style={{fontSize: 18}}>{login}</Text>
                    <Text style={{fontSize: 14}}>{type}</Text>
                </View>
                <List.Icon icon={"chevron-right"} color={Colors.grey400} style={{flex: 1}}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 90,
        backgroundColor: '#E3E3E3',
        borderBottomWidth: 1,
        borderBottomColor: '#DDDD',
        alignItems: 'center'
    },
    img: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginLeft: 10
    }
});

export default UserIcon;