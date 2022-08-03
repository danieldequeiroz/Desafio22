//Código de Daniel de Queiroz Cavalcanti
import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ReposInfo from '../../../components/reposInfo/reposInfo'
import api from '../../../services/api'

interface ProfileBottomProps {
    login: string
}

type licenseObject = {
    name: string
}

type RepoInfoProps = {
    id: number,
    name: string,
    description: string,
    fork: boolean,
    updated_at: string,
    stargazers_count: number,
    language: string,
    license: licenseObject
}

const ProfileBottom: React.FC<ProfileBottomProps> = ({
    login
}) => {

    const[isLoading, setLoading] = useState<boolean>(true);
    const[repos, setRepos] = useState<Array<RepoInfoProps>>([])

    useEffect(() => {
        setLoading(true);
        api.get(`users/${login}/repos`)
        .then((response) => {setRepos(response.data)})
        .finally(() => setLoading(false));
    }, [])
    
    if(isLoading)
        return <ActivityIndicator animating={true} color={"#3F3D3B"} size={'large'}/>

    return(
        <View style={{flex: 1, backgroundColor: "#E3E3E3"}}>
            <FlatList 
                data={repos}
                keyExtractor = {({id}) => id.toString()}
                renderItem={({item}) => 
                <ReposInfo name={item.name} language={item.language} stargazers_count={item.stargazers_count} 
                    updated_at={item.updated_at} description={item.description} license={item.license} fork={item.fork}
                />
            }
            />
        </View>
    );
}

export default ProfileBottom;
