export type OptionLocationsType = {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  address: {
    industrial: string;
    municipality: string;
    region: string;
    state_district: string;
    country: string;
    country_code: string;
  };
  boundingbox: string[];
}[];
