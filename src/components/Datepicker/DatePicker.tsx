import React from 'react';

import dayjs from 'dayjs';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../const/colors';

interface Props {
  initalDate: Date;
  minDate?: Date;
  onChange: (event: DateTimePickerEvent, date?: Date | undefined) => void;
}

const DatePicker = ({initalDate, minDate, onChange}: Props) => {
  const showMode = () => {
    DateTimePickerAndroid.open({
      value: initalDate,
      onChange,
      mode: 'date',
      minimumDate: minDate,
    });
  };

  return (
    <TouchableOpacity
      onPress={showMode}
      activeOpacity={0.5}>
      <Text style={{textAlign: 'center', fontWeight: '700', fontSize: 15, color: colors.primary}}>
        {dayjs(initalDate).format('DD MMM, YYYY')}
      </Text>
      <Text style={{textAlign: 'center'}}>{dayjs(initalDate).format('dddd')}</Text>
    </TouchableOpacity>
  );
};

export default DatePicker;
