import React from 'react';
import { ResponsivePie } from '@nivo/pie'

// const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
//     let total = 0
//     dataWithArc.forEach(datum => {
//         total += datum.value
//     })

//     return (
//         <text
//             x={centerX}
//             y={centerY}
//             textAnchor="middle"
//             dominantBaseline="central"
//             style={{
//                 fontSize: '40px',
//                 fontWeight: 500,
//                 // fontFamily: 'monospace',
//             }}
//         >{total}</text>
//     )
// }

const PiechartContent = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        innerRadius={0.87}
        endAngle={234}
        cornerRadius={50}
        colors={ ['#f57e47'] }
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableRadialLabels={false}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkHorizontalLength={23}
        radialLabelsLinkColor={{ from: 'color' }}
        enableSliceLabels={false}
        sliceLabelsRadiusOffset={0.3}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        isInteractive={false}
        radialLabel={d => `${d.id} (${d.formattedValue})`}
        // layers={['slices', 'sliceLabels', 'radialLabels', 'legends', CenteredMetric]}
    />
)

export default PiechartContent;