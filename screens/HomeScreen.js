import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTools } from '../store/actions/fetch-tools';
import ToolsComponent from '../components/ToolsComponent'

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

  // const test = useCallback(async () => {
  //   console.log('hi')
  // })

  const fetchTools = (dispatch) => ({
    fetchTools: () => dispatch(fetchTools()),
  })

  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          title="Details"
          onPress={() => props.navigation.navigate('Details')}
        />

      </ScrollView>
    </SafeAreaView>
  )
}



export default HomeScreen
