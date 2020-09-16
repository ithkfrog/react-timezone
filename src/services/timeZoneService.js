import { timeZoneListUrl } from "../apiConfig.json";
import axios from "axios";

export async function getTimeZoneList() {
  const { data: rst } = await axios.get(timeZoneListUrl);
  console.log(`Timezone list fetch completed lenght: ${rst.length()}`);
  return rst.zones;
}
