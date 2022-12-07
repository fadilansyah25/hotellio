import React from 'react';
import {today, tomorrow} from '../../utils/getInitialDate';
import dayjs from 'dayjs';

export const useBookingForm = () => {
  const [checkin, setCheckin] = React.useState<Date>(today);
  const [checkout, setCheckout] = React.useState<Date>(tomorrow);
  const [guest, setGuest] = React.useState<number>(1);

  const handleInputDate = (checkIn: Date, checkout: Date) => {
    if (
      Date.parse(checkIn.toDateString()) > Date.parse(checkout.toDateString())
    ) {
      setCheckout(checkIn);
      setCheckin(checkout);
    } else if (
      Date.parse(checkIn.toDateString()) < Date.parse(checkout.toDateString())
    ) {
      setCheckin(checkIn);
      setCheckout(checkout);
    } else if (
      Date.parse(checkIn.toDateString()) === Date.parse(checkout.toDateString())
    ) {
      setCheckin(checkIn);
      setCheckout(dayjs(checkout).add(1, 'day').toDate());
    }
  };

  return {
    checkin,
    setCheckin,
    checkout,
    setCheckout,
    guest,
    setGuest,
    handleInputDate,
  } as const;
};
