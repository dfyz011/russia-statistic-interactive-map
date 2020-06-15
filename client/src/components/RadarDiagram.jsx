
import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  Tooltip,
  PolarGrid,
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';

import { randomColor } from '../constants/helpers';


const RadarDiagram = ({ diagramStatistic }) => {
  const [colors, setColors] = useState({});

  useEffect(() => {
    // const yKeys = Object.keys(diagramStatistic[0]).filter((key) => key !== 'year').map((stat, index) => ({ [stat]: 1 }));
    const newColors = Object.keys(diagramStatistic[0]).filter((key) => key !== 'region').reduce((a, value) => {
      return { ...a, [value]: randomColor() };
    }, {});
    setColors(newColors);
  }, [diagramStatistic]);

  //   year: "2015"
  // Амурская область: 19.2
  // Архангельская область: 8.65
  // Астраханская область: 12.38
  // Белгородская область: 4.81
  // {
  //   subject: 'History', A: 65, B: 85, fullMark: 150,
  // },
  // {
  //   region: 'History', 2014: 65, 2015: 85, fullMark: 150,
  // },

  console.log('diagramStatistic', diagramStatistic);
  // const formattedDiagramStatistic = diagramStatistic.reduce((a, yearStatistic) => {
  //   const newObj = Object.keys(yearStatistic.filter((key) => key !== 'year')).reduce((b, value) => {
  //     b[value] = b[value] || {};
  //     b[value] = { ...b[value], [yearStatistic.year]: yearStatistic[value] };
  //     return b;
  //   }, {});

  //   a=newObj.map(()=>{

  //   });
  //   a.push({ year: yearStatistic.year, values: newObj });

  //   return a;
  // }, {});
  // const formattedDiagramStatistic = diagramStatistic.reduce((a, yearStatistic) => {
  //   const newObj = Object.keys(yearStatistic.filter((key) => key !== 'year')).reduce((b, value) => {
  //     b.push({ region: value, value: yearStatistic[value] });
  //     return b;
  //   }, []);
  //   a.push({ year: yearStatistic.year, values: newObj });
  //   return a;
  // }, []);

  // const yKeys = Object.keys(diagramStatistic[0]).filter((key) => key !== 'year').reduce((a, value) => {
  //   return {...a,[stat]: 1}
  // },{});

  return (
    <>
      <ResponsiveContainer>
        <RadarChart
          outerRadius={150}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
          data={diagramStatistic}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="region" />
          <PolarRadiusAxis />
          {Object.keys(diagramStatistic[0]).filter((key) => key !== 'region').map((stat, index) => {
            return (
              <Radar key={index} dataKey={stat} stroke={colors[stat]} fill={colors[stat]} fillOpacity={0.6} />
            );
          },
          )}
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};

export default RadarDiagram;
