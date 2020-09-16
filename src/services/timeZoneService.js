import { timeZoneListUrl, timeZoneDetailUrl } from "../apiConfig.json";
import axios from "axios";
//import { getTimeZoneList as mockList } from "./mockTimezone";
//import { getTimeZoneDetail as mockDetail } from "./mockTimezone";

export async function getTimeZoneList() {
  const { data: rst } = await axios.get(timeZoneListUrl);
  return rst.zones;
}

export async function getTimeZoneDetail(zoneName) {
  // replacing placeholder
  const url = timeZoneDetailUrl.replace(":zoneName", zoneName);
  const { data: rst } = await axios.get(url);
  return rst;
}
