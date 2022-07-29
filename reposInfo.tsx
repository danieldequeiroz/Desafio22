import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import {List, Colors} from 'react-native-paper'

type licenseObject = {
    name: string
}

interface ReposInfo {
    name: string,
    fork: boolean,
    language: string,
    stargazers_count: number,
    updated_at: string,
    description: string
    license: licenseObject
}

const ReposInfo: React.FC<ReposInfo> = ({
    name, fork, language, stargazers_count, updated_at, description, license
}) => {

    const [fonts, error] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold
    })

    if(!fonts)
        return <AppLoading />

    return(
        <View style={style.container}> 
            <Text style={{fontFamily: 'Roboto_700Bold', fontSize: 18, marginHorizontal: 10, marginTop: 10}}>{name}</Text>
            <View style={{flexDirection: 'row'}}>
                {
                    fork ? (
                        <View style={{width: '100%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <List.Icon icon={"source-fork"} color={"#828385"} style={{height: 20, width: 20}}/>
                            <Text style={{fontSize: 16, fontFamily: 'Roboto_700Bold', color:'#828385'}}>{stargazers_count}</Text>
                            <List.Icon icon={"star-outline"} color={"#828385"} style={{height: 20, width: 20}}/>
                        </View>
                    ) : (
                        <View style={{width: '100%', flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                            <Text style={{fontSize: 16, fontFamily: 'Roboto_700Bold', color:'#828385'}}>{language}</Text>
                            <Text style={{fontSize: 16, fontFamily: 'Roboto_700Bold', color:'#828385', marginLeft: 10}}>{stargazers_count}</Text>
                            <List.Icon icon={"star-outline"} color={"#828385"} style={{height: 20, width: 20}}/>
                            {license==null ? (<View></View>) : 
                            (
                            <Text style={{marginLeft: 10, fontSize: 16, color: "#828385"}}>{license.name}</Text>)}
                        </View>
                    )
                }
            </View>
            <View style={{flex: 1, marginHorizontal: 10, marginBottom: 10}}>
                <Text style={{fontSize: 16, fontFamily: 'Roboto_700Bold', color: "#828385"}}>Ultima atualização: {updated_at}</Text>
                <Text style={{fontSize: 16, fontFamily: 'Roboto_400Regular', color: "#828385"}}>{description}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E3E3E3',
        borderBottomColor: '#A9A9A9',
        borderBottomWidth: 1,
    }
})

export default ReposInfo;