import { View, Text,SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Feed() {
  const {navigate} = useNavigation();

  const naviagteToFeedDetail=()=>{
    navigate('FeedDetail')
  }
  return (
    <SafeAreaView>
      <Text>Feed</Text>
      <TouchableOpacity onPress={naviagteToFeedDetail}>
        <Text>Go to Feed detail</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}