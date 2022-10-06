import { VegaLite, VisualizationSpec } from 'react-vega';

type ChartProps = {
    width: number | "container";
    height: number | "container";
    state: string
}

const VerticalBarChart = ({width, height, state}: ChartProps) => {

    const spec: VisualizationSpec = {
        width: width,
        height: height,
        data: {
            url: "data/vax/vax_boosters.csv"
        },
        transform: [{filter: {field: "state", equal: state}}],
        layer: [{
            mark: "bar"
        }, {
            mark: {
                type: "text",
                align: "center",
                baseline: "middle",
                dy: -10,
            },
            encoding: {
                text: {field: "value", type: "quantitative", format: ","}
            }
        }],
        encoding: {
            x: {field: "variable", type: "nominal", axis: {labelAngle: 0}, title: "Booster Combo", sort: "-y"},
            y: {aggregate: "sum", field: "value", type: "quantitative", title: "Number of Vaccinations"},
            tooltip: [
                {field: "variable", "type": "nominal", "title": "Booster Combo"},
                {field: "value", "type": "quantitative", "title": "Number of Vaccinations", format: ","}
            ]
        },
        config: {
            background: "transparent",
            view: {
                stroke: "transparent"
            },
            axisX:{
                domain: false,
                grid: false,
                ticks: false,
                // labels: false,
                title: null
            },
            axisY: {
                domain: false,
                grid: false,
                ticks: false,
                title: null
            }
        }
      }

    return (
        <VegaLite spec={spec} actions = {false}/>
    )
}

export default VerticalBarChart;