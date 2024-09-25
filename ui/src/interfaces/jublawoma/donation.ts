import {DonationProductUnit} from "../../enums/jublawoma/donation";

export interface DonationAllResponse {
  id: string
  title: string
  description: string
  contact: string
  start: string
  finish: string
  products: DonationAllProductResponse[]
}

export interface DonationAllProductResponse {
  id: string
  name: string
  quantity: number
  donated: number
  step: number
  unit: DonationProductUnit
  note: string
}

export interface DonationProductByIdResponse {
  id: string
  name: string
  quantity: number
  donated: number
  step: number
  unit: DonationProductUnit
  note: string
}

export interface DonationProductDonorCreateRequest {
  id: string
  name: string
  quantity: number
  donated: number
  step: number
  unit: DonationProductUnit
  note: string
}
