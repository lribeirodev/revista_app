export interface CategorieItem {
  name:string
  tags:string[]
  address:string
  neighborhood:string
  number:string
  cep:string
  description:string
  phone:PhoneNumber[]
  workDays:BusinessDay[]
}

export interface PhoneNumber {
  ddd: number,
  phone: string,
}

export interface BusinessDay {
  dayOfTheWeek: string,
  workTime: WorkTime[],
}

export interface WorkTime {
  start: string,
  end: string,
  closed: boolean,
}
