import {BookingStatus} from "../../../enums/unclet/booking";

export interface BookingAllResponse {
  id: string,
  status: BookingStatus,
  name: string,
  date: string
}

export interface BookingByIdResponse {
  id: string,
  status: BookingStatus,
  name: string,
  email: string,
  date: string
  location: string
  people: number
  note: string
}
