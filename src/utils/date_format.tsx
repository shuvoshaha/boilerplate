import { string } from "yargs";

// default months
export const month: any[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const full_month: any[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const full_month_value: any[] = [
  {
    name:"January",
    short_code: "jan",
    value : "01"
  },
  {
    name:"February",
    short_code: "feb",
    value : "02"
  },
  {
    name:"March",
    short_code: "mar",
    value : "03"
  },
  {
    name:"April",
    short_code: "apr",
    value : "04"
  },
  {
    name:"May",
    short_code: "may",
    value : "05"
  },
  {
    name:"June",
    short_code: "jun",
    value : "06"
  },
  {
    name:"July",
    short_code: "jul",
    value : "07"
  },
  {
    name:"August",
    short_code: "aug",
    value : "08"
  },
  {
    name:"September",
    short_code: "sep",
    value : "09"
  },
  {
    name:"October",
    short_code: "oct",
    value : "10"
  },
  {
    name:"November",
    short_code: "nov",
    value : "11"
  },
  {
    name:"December",
    short_code: "dec",
    value : "12"
  }
];

// get date format
export const getDate: any = (d: Date) => {
  return `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
};
