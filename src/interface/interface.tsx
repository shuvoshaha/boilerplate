import { Dispatch } from "react"
import { string } from "yargs"

export interface policy_list {
  policy_number: Number,
  owner_name: string,
  policy_status_code: Number,
  policy_due: Number,
  next_payment_date: Date,
}[]


export interface filter {
  btn_name: string,
  category: string,
  status_code: Number,
}[]


export interface image_interface {
  src: string,
  className: string,
  alt: string,
  loading: string

}[]

export interface userdata {
  name: string,
  password: string
}

export interface policy_list_payload {
  searchCriteria: string,
  policyStatusCode?: string | number,
  premiumDue: any,
  agentCode: string,
  pageNo: number,
  perPage: number
}

export interface policy_api_response {
  nextPremiumDueDate: string,
  ownerName: string,
  policyNumber: string
  policyStatusName: string
  random: number
}


export interface policy_state_payload {

  payload: policy_list_payload,
  setPayload: Dispatch<policy_list_payload>,
  setActiveId: Dispatch<string | number>
  searchStr: string,
  setSearchStr: Dispatch<string>
}

