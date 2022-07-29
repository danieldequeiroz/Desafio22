import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

interface ProfileHeaderProps {
    name: string,
    avatar_url: string,
    bio: string,
    following: number,
    followers: number,
    repos: number
}

const ProfileHeader: React.FunctionComponent<ProfileHeaderProps> = ({
    name, avatar_url, bio, following, followers, repos
}) => {


    const [fontsLoaded, error] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold
    })

    if(!fontsLoaded)
        return <AppLoading />

    return(
        <View style={{flex: 1, backgroundColor: "#E3E3E3", width: "100%"}}>
            <View style={{flex: 3, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <Image style={style.img} source={{
                    uri: avatar_url
                }}/>
            </View>
            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>    
                <Text style={{fontSize: 24, fontFamily: 'Roboto_700Bold'}}>{name}</Text>
                <Text style={{fontSize: 18, fontFamily: 'Roboto_400Regular', marginHorizontal: 10, textAlign: 'center', overflow: 'hidden'}}>{bio}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 15}}>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontFamily: 'Roboto_700Bold'}}>Seguidores</Text>
                    <Text style={{fontSize: 18, fontFamily: 'Roboto_700Bold'}}>{followers}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontFamily: 'Roboto_700Bold'}}>Repos</Text>
                    <Text style={{fontSize: 18, fontFamily: 'Roboto_700Bold'}}>{repos}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontFamily: 'Roboto_700Bold'}}>Seguindo</Text>
                    <Text style={{fontSize: 18, fontFamily: 'Roboto_700Bold'}}>{following}</Text>
                 </View>    
            </View>
        </View>
    );

}

const style = StyleSheet.create({
    img: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default ProfileHeader;