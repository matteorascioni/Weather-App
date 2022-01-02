import React from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
} from "recharts";

import * as styles from './Chart.module.css';

const Chart = ({ chartData }) => {
    return (
        <ResponsiveContainer className={styles.chartContainer}>
            <AreaChart
                className={styles.areaChart}
                data={chartData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorHumidity" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#387cfb" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#387cfb" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorMinTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#001442" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#001442" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorMaxTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff6600" stopOpacity={0.7}/>
                        <stop offset="100%" stopColor="#ff6600" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="days" />
                <YAxis hide={true}/>
                <Tooltip />
                <Area
                    dot={{ stroke: "#001442", strokeWidth: 6 }}
                    activeDot={{ stroke: "#387cfb", strokeWidth: 7, r: 7 }}
                    type="monotone"
                    dataKey="Humidity"
                    stroke="#387cfb"
                    fillOpacity={0.7}
                    fill="url(#colorHumidity)"
                />
                <Area
                    dot={{ stroke: "#001442", strokeWidth: 6 }}
                    activeDot={{ stroke: "#e4e8ff", strokeWidth: 7, r: 7 }}
                    type="monotone"
                    dataKey="MinTemp"
                    stroke="#e4e8ff"
                    fillOpacity={0.7}
                    fill="url(#colorMinTemp)"
                />
                <Area
                    dot={{ stroke: "#ff6600", strokeWidth: 6 }}
                    activeDot={{ stroke: "#ff4946", strokeWidth: 7, r: 7 }}
                    type="monotone"
                    dataKey="MaxTemp"
                    stroke="#ff6600"
                    fillOpacity={0.7}
                    fill="url(#colorMaxTemp)"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Chart
