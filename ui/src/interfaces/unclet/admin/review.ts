import {ReviewStatus} from "../../../enums/unclet/review";

export interface ReviewAllResponse {
  id: string,
  status: ReviewStatus,
  stars: number,
  name: string,
  date: string
}

export interface ReviewByIdResponse {
  id: string,
  status: ReviewStatus,
  stars: number,
  name: string,
  description: string,
  date: string
}
