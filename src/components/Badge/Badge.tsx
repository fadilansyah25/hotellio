import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  elevation?: number;
  fontSize?: number;
};

export default function Badge({
  fontSize = 12,
  text,
  backgroundColor = "#fff'",
  textColor = '#312ECB',
  elevation = 0,
  borderColor = '#312ECB',
}: Props) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        borderRadius: 30,
        marginVertical: 5,
        marginHorizontal: 4,
        elevation: elevation,
      }}>
      <Text
        style={{
          fontSize: fontSize,
          paddingHorizontal: 10,
          paddingVertical: 4,
          fontWeight: '600',
          color: textColor,
        }}>
        {text}
      </Text>
    </View>
  );
}
