export interface PointBySpaceResponse {
  id: string
  name: string
  code: string
  points: number
}

export interface PointChangeBySpaceResponse {
  id: string
  name: string
  change: number
  created: string
}

export interface PointChangeCreateRequest {
  change: number
}
