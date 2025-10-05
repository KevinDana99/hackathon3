import SolarRadiationChart from "../../components/Charts/SolarRadiationChart";
import useFetch from "../../hooks/useFetch";
import type { DataArray } from "../../types";

const datos: DataArray = {
  type: "T2M",
  data: [
    {
      value: 5.3,
      month: "abril",
      year: 2022,
    },
    {
      value: 4.3,
      month: "abril",
      year: 2023,
    },
    {
      value: 8.3,
      month: "abril",
      year: 2024,
    },
  ],
};

function PruebasPage() {
  const params = {
    start: 2020,
    end: 2025,
    parameters: "T2M",
    latitude: -41.2321,
    longitude: -39.232,
    community: "ag",
    format: "json",
  };

  const { data, loading, error } = useFetch(
    "https://power.larc.nasa.gov/api/temporal/monthly/point",
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  console.log(data);
  return <h1>test</h1>;
  if (loading) return <h1>Cargando..</h1>;
  if (error) return <h1>Error</h1>;

  //return (
  //    <SolarRadiationChart data={data} />
  //);
}

export default PruebasPage;
