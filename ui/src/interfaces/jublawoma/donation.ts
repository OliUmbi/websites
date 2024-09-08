import {DonationProductUnit} from "../../enums/jublawoma/donation";

export interface DonationResponse {
  id: string
  title: string
  description: string
  contact: string
  start: string
  finish: string
  products: DonationProductResponse[]
}

export interface DonationProductResponse {
  id: string
  name: string
  quantity: number
  donated: number
  step: number
  unit: DonationProductUnit
  note: string
}
