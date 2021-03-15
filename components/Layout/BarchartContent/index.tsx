import { ResponsiveBar } from '@nivo/bar'
const Ytick = tick => {
    return (
        <g transform={`translate(${tick.x - 35},${tick.y + 10})`}>
            <text style={{fill: "#888", fontSize:12}}>{`${tick.value}%`}
            </text>
        </g>
    )
}

const CustomTick = tick => {
    return(
        <g transform={`translate(${tick.x},${tick.y + 22})`}>
            <text
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                    fill: '#aaa',
                    fontSize: 12,
                    fontFamily: 'cursive'
                }}
            >
                {tick.value}
            </text>
        </g>
    )
}

const BarchartContent = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={[ 'imp', 'exp']}
        indexBy="place"
        margin={{ top: 10, right: 20, bottom: 30, left: 50 }}
        padding={0.4}
        innerPadding={6}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        colors={ ['#f57e47', '#feba9a'] }
        borderRadius={5}
        axisTop={null}
        axisRight={null}
        axisLeft={{tickSize: 0, tickValues: [0, 50, 100], renderTick: Ytick}}
        axisBottom={{
            tickSize:0,
            legendOffset: 50,
            tickPadding: 10,
            renderTick: CustomTick,
            
        }}
        enableGridX={true}
        enableGridY={true}
        enableLabel={false}
        labelSkipWidth={10}
        labelSkipHeight={7}
        labelTextColor="black"
        animate={true}
        gridYValues={[0, 25, 50, 75, 100]}
        gridXValues={[0]}
        maxValue={100}
        tooltip={({value}) => (
            <strong style={{ color: '#eee'}}>
                {`${value}%`}
            </strong>
        )}
        theme={{
            tooltip: {
                container: {
                    background: '#333',
                    
                },
                
            },
        }}
        // markers={[
        //     {
        //         axis: 'x',
        //         value: 'Seattle',
        //         lineStyle: {stroke: 'rgba(0, 0, 0, .35)', strokeWidth: 1 },
        //     },
        // ]}
    />
)

export default BarchartContent;