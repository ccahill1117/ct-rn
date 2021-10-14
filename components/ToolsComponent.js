import React from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';


const getToolsInfo = (toolsInfo) => {
  const { summary, temperature } = toolsInfo;
  const info = temperature
    ? `${Math.floor(temperature)} deg, ${summary}`
    : 'No Weather Info Available. Make sure you provided a valid API key in the `config.js` file.';

  return (
    <Text>
      {info}
    </Text>
  );
};

const ToolsComponent = (props) => {
  const {
    isLoading,
    error,
    fetchTools,
    weatherInfo,
  } = props;


  return (
    <View>
      {isLoading ? <ActivityIndicator /> : null}
      {error ? getErrorMessage() : null}
      <Button
        onPress={fetchTools}
        title='Load Data'
      />
    </View>
  );
};

export default ToolsComponent;
