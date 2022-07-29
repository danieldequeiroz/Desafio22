import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/NavigationModule'
import { RouteProp } from '@react-navigation/native'
import api from '../../services/api'
import { ActivityIndicator } from 'react-native-paper';
import ProfileHeader from '../ProfileScreen/profileHeader/profileHeader'
import ProfileBottom from './profileBottom/profileBottom';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../GraphQL/queries';

type ProfileScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Profile'>
type ProfileScreenRouteProps = RouteProp<RootStackParamList, 'Profile'>


interface ProfileScreenProps {
    navigation: ProfileScreenNavigationProps,
    route: ProfileScreenRouteProps,
}

interface userDataProps {
    name: string,
    login: string,
    avatar_url: string,
    followers: number,
    following: number,
    company: string,
    repos_url: string,
    location: string,
    bio: string,
    public_repos: number
}



const ProfileScreen: React.FC<ProfileScreenProps> = ({
    navigation,
    route
}) => {

    const [userData, setUserData] = useState<userDataProps | any>([])
    const [isLoading, setLoading] = useState<Boolean>(false);

    const {loading, data, error} = useQuery(GET_USER, {
        variables: {
            login: "Gabriel-Alexandre"
        }
    });

    useEffect(() => {
        setLoading(true);
        api.get(`users/${route.params.username}`)
        .then((response) => setUserData(response.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [])

    if(isLoading){
        return(<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
        </View>);
    }else{
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 1, width: "100%", borderBottomColor: '#828385', borderBottomWidth: 1}}>
                    <ProfileHeader avatar_url={userData.avatar_url} bio={userData.bio} followers={userData.followers}
                        following={userData.following} name={userData.name} repos={userData.public_repos}/>
                </View>
                <View style={{flex: 1, width: '100%'}}>
                    <ProfileBottom login={userData.login}/>
                </View>
            </View>
        );
    }


}

export default ProfileScreen;