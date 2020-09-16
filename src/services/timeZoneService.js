import { timeZoneListUrl } from "../apiConfig.json";
import axios from "axios";

export async function getTimeZoneList() {
  const { data: rst } = await axios.get(timeZoneListUrl);
  if (rst) {
    console.log(`Timezone list fetch completed lenght: ${rst.zones.length}`);
  } else {
    console.log("Timezone list not able to return!");
  }
  return rst.zones;
}
