//Código de Daniel de Queiroz Cavalcanti
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../../components/searchBar/searchBar'
import UserIcon from '../../components/userIcon/userIcon'
import api from '../../services/api'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/NavigationModule';
import { useLazyQuery, useQuery } from '@apollo/client';
import { SEARCH_USERS } from '../../GraphQL/queries';

type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;

interface SearchScreenProps {
    navigation: ResultScreenNavigationProp;
 }

const SearchScreen: React.FC<SearchScreenProps> = ({
    navigation,
}) => {

    interface dataTypes {
        id: number,
        login: string,
        avatar_url: string,
        type: string
    }

    //UseState 

    const [userName, setUserName] = useState<string>("");
    const [userData, setData] = useState<dataTypes | any>([]);
    const [isLoading, setLoading] = useState<Boolean>(false);

    /*const {loading, data, error} = useQuery(GET_USERS, {
        variables: {
            query: "ufpb",
            type: "USER",
            numOfResults: 10
        }
    });

    if(!loading){
        console.log(data);
        console.log(error);
    }*/

    const [getUsers, {loading, data, error}] = useLazyQuery(SEARCH_USERS);
        
    getUsers({
        variables: {
            query: "rodriguesms",
            type: "USER",
            numOfResults: 10
        }
    });

    if(!loading){
        console.log(data);
        console.log(error);
    }


    const searchUser = (user: string) => {
        setLoading(true);
        api.get(`search/users?q=${user}`)
        .then((response) => setData(response.data.items))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    return(
        <View style={styles.container}>
            <SearchBar userName={userName} setUserName={setUserName} 
            searchUser={searchUser} 
            setData={setData} isLoading={isLoading}/>
            <FlatList
                data = {userData}
                keyExtractor = {({ id }, index) => id.toString()}
                renderItem={({item}) => (
                    <UserIcon id={item.id} login={item.login} avatar_url={item.avatar_url} type={item.type} navigation={navigation}/>
                )}
                />
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#E3E3E3"
    },
});

export default SearchScreen;
