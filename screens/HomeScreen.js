import React from 'react'
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native'

const HomeScreen = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        HOME SCREENn
        <Button
          title="Details"
          onPress={() => props.navigation.navigate('Details')}
        />
      </ScrollView>
    </SafeAreaView>
  )
}



export default HomeScreen
