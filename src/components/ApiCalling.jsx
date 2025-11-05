import axios from "axios";

export default async function ApiCalling() {
  const API =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const response = await axios.get(API);
    const restaurants =
      response.data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log("✅ Swiggy API Data:", restaurants);
    return restaurants;
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    return [];
  }
}
