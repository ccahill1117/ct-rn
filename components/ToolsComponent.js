import React from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';

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
