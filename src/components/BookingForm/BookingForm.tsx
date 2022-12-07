import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import DatePicker from '../../components/Datepicker/DatePicker';
import {Picker} from 'react-native-wheel-pick';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {colors} from '../../const/colors';
import {today, tomorrow} from '../../utils/getInitialDate';
import dayjs from 'dayjs';
import {useBookingForm} from './useBookingForm';

interface Props {
  onChange?: (checkin: Date, checkOut: Date, guest: number) => void;
}

export default function BookingForm({onChange}: Props) {
  const {checkin, checkout, guest, setGuest, handleInputDate} =
    useBookingForm();

  // Bottom Modal Method
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ['25%', '50%'], []);
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleClosePress = () => bottomSheetModalRef.current?.close();

  React.useEffect(() => {
    if (onChange) {
      onChange(checkin, checkout, guest);
    }
  }, [checkin, checkout, guest]);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          paddingHorizontal: 10,
          paddingBottom: 20,
        }}>
        {/* Date Picker Container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          {/* input checkin date */}
          <DatePicker
            initalDate={checkin}
            minDate={today}
            onChange={(_, date) => handleInputDate(date as Date, checkout)}
          />

          {/*  night amount */}
          <Text style={{textAlign: 'center'}}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: '600',
              }}>
              {dayjs(checkout).diff(dayjs(checkin), 'day')}{' '}
            </Text>
            <Text style={{color: colors.primary}}>Night</Text>
          </Text>

          {/* input checkout date */}
          <DatePicker
            initalDate={checkout}
            minDate={tomorrow}
            onChange={(_, date) => handleInputDate(checkin, date as Date)}
          />
        </View>

        {/* Select Guests Picker */}
        <TouchableOpacity activeOpacity={0.8} onPress={handlePresentModalPress}>
          <View
            style={{
              paddingLeft: 10,
              marginLeft: 15,
              borderLeftWidth: 1.5,
              borderColor: colors.primary,
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 15,
                color: colors.primary,
              }}>
              {guest} Person
            </Text>
            <Text>Guest</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet Modal */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        topInset={230}
        style={{
          elevation: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 10,
            height: 40,
          },
          shadowOpacity: 0.91,
          shadowRadius: 20,
          backgroundColor: 'white',
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{marginTop: 10, fontSize: 16, fontWeight: '600'}}>
            Guest
          </Text>
          <Picker
            textColor={colors.primary}
            textSize={18}
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: 150,
              marginTop: 10,
            }}
            selectedValue={guest}
            pickerData={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            onValueChange={value => setGuest(value)}
          />
          <TouchableOpacity
            onPress={handleClosePress}
            style={{
              padding: 10,
              backgroundColor: colors.primary,
              width: '70%',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 16,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </>
  );
}
