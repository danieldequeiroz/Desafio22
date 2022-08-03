//Código de Daniel de Queiroz Cavalcanti
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { IconButton, Colors, ActivityIndicator } from 'react-native-paper';

interface SearchBarProps {
    userName: string,
    setUserName: Function,
    searchUser: Function,
    setData: Function,
    isLoading: Boolean
 }

const SearchBar: React.FC<SearchBarProps> = ({
    userName, setUserName, searchUser, setData, isLoading
}) => {

    return(
        <View style={styles.container}>
            {
                isLoading ? 
                (<ActivityIndicator style={{flex: 1}} />) : 
                (<IconButton icon={"magnify"} style={{flex: 1}}
                onPress={() => searchUser(userName)}/>)
            }
            

            <TextInput style={{flex: 5, fontSize: 18}} 
            value={userName}
            onChangeText={
                (userName) => setUserName(userName)
            }
            placeholder={"Search User..."}
            />

            <IconButton icon={"close"} style={{flex: 1}}
                onPress={() => {
                    setUserName("");
                    setData();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        height: 70,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SearchBar;
