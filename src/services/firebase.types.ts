import {GenderOption} from '../utils/types';

export declare module FirebaseParams {
  export interface AuthParams {
    email: string;
    password: string;
  }

  export interface UserScheme {
    uid: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: GenderOption;
  }

  export interface InputWatchList {
    uid: string;
    hotel: any;
    hotelId: string;
  }

  export interface DeleteWatchList {
    uid: string;
    hotelId: string;
  }

  export interface HotelReservation {
    uid: string;
    hotel: any;
    checkInDate: Date;
    checkOutDate: Date;
    guest: number;
    price: number;
    totalPrice: number;
    nightAmount: number;
  }
}
