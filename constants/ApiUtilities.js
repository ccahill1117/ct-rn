import { Platform } from 'react-native'

// ios local , android 10.0.2.2

// TODO : update for stage/prod

let url = () => {
  if(__DEV__) {
    return Platform.OS == 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000'
  } else {
    return ''
  }
}

export const ApiUtilities = {
  baseUrl: url(),
  headers: {
    // TODO : headers?
  }
}
