import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Region} from '../../services/hotels';
import {colors} from '../../const/colors';
import {styles} from './RegionAutoCompItem.style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RegionAutoCompItem({
  regionData,
  onPress,
}: {
  regionData: Region;
  onPress: () => void;
}) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.renderItem}
        onPress={() => onPress()}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: '700'}}>
            {regionData.regionNames.primaryDisplayName}
          </Text>
          <Text>{regionData.regionNames.fullName}</Text>
        </View>
        <Icon
          style={{marginLeft: 5}}
          name="arrow-forward-ios"
          size={20}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
}
