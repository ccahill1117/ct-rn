import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Button,
  Text
} from 'react-native'

import * as db from '../helpers/db'

const HomeScreen = (props) => {
  const [error, setError] = useState()
  // const dispatch = useDispatch()

  const fetchTools = useCallback(async () => {
    console.log('hi')
  })

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>uh hiiii</Text>
        <Button
          title="Details"
          onPress={() => props.navigation.navigate('Details')}
        />
        <Button
          title="Fetch Tools"
          onPress={() => this.fetchTools()}
        />
      </ScrollView>
    </SafeAreaView>
  )
}



export default HomeScreen
