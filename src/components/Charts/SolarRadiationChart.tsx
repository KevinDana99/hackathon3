import { LineChart } from "@mui/x-charts";
import type { DataArray } from "../../types";


function SolarRadiationChart({ data }: { data: DataArray }) {
    return (
        <LineChart
            dataset={data.data}
            xAxis={
                [
                    { dataKey: 'year', label: "Año", valueFormatter: (value: number) => value.toString(), scaleType: 'band' },
                ]}
            series={[
                {
                    dataKey: 'value', color: "#AAAA00", label: "Radiación Solar Total (W/m²)"
                },
            ]}
            height={300}
        />
    );
}

export default SolarRadiationChart;