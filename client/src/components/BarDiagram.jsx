
import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { randomColor } from '../constants/helpers';


const BarDiagram = ({ diagramStatistic }) => {
  const [opacity, setOpacity] = useState({});
  const [colors, setColors] = useState({});

  useEffect(() => {
    // const yKeys = Object.keys(diagramStatistic[0]).filter((key) => key !== 'year').map((stat, index) => ({ [stat]: 1 }));
    const yKeys = Object.keys(diagramStatistic[0]).filter((key) => key !== 'year').reduce((a, value) => {
      return { ...a, [value]: 1 };
    }, {});
    setOpacity(yKeys);
    const newColors = Object.keys(diagramStatistic[0]).filter((key) => key !== 'year').reduce((a, value) => {
      return { ...a, [value]: randomColor() };
    }, {});
    setColors(newColors);
  }, [diagramStatistic]);

  const handleMouseEnter = (o) => {
    const { dataKey } = o;
    setOpacity({ ...opacity, [dataKey]: 0.5 });
  };

  const handleMouseLeave = (o) => {
    const { dataKey } = o;
    setOpacity({ ...opacity, [dataKey]: 1 });
  };

  // const yKeys = Object.keys(diagramStatistic[0]).filter((key) => key !== 'year').reduce((a, value) => {
  //   return {...a,[stat]: 1}
  // },{});

  return (
    <>
      <ResponsiveContainer>
        <BarChart
          data={diagramStatistic}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="year" type="category" />
          <YAxis unit="%" />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          {Object.keys(diagramStatistic[0]).filter((key) => key !== 'year').map((stat, index) => {
            return (
              <Bar key={index} dataKey={stat} fill={colors[stat]} opacity={opacity[stat]} />
            );
          },
          )}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarDiagram;
