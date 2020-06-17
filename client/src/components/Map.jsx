// import React from 'react'
// import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
// import russia from '../russia.js'

// const geoUrl =
//     "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const getData = async file => {
//     const response = await fetch("/client/public/russia.geojson");
//     const myJson = await response.json();
//     return myJson;
// };
// class Map extends React.Component {
//     render() {
//         return (
//             <LeafletMap
//                 center={[50, 10]}
//                 zoom={6}
//                 maxZoom={10}
//                 attributionControl={true}
//                 zoomControl={true}
//                 doubleClickZoom={true}
//                 scrollWheelZoom={true}
//                 dragging={true}
//                 animate={true}
//                 easeLinearity={0.35}
//             >
//                 <GeoJSON
//                     data={russia}
//                     style={() => ({
//                         color: '#4a83ec',
//                         weight: 0.5,
//                         fillColor: "#1a1d62",
//                         fillOpacity: 1,
//                     })}
//                 />
//                 <Marker position={[50, 10]}>
//                     <Popup>
//                         Popup for any custom information.
//           </Popup>
//                 </Marker>
//             </LeafletMap>
//         );
//     }
// }

// export default Map

import React, {
  useEffect, useRef, memo,
} from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  // Sphere,
  // Graticule,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import { geoConicEqualArea, geoCentroid } from 'd3-geo';
import { scaleLinear, scaleQuantile, scaleQuantize } from 'd3-scale';
import {
  Popover,
} from '@material-ui/core';
import IndicatorModal from './IndicatorModal';
import { randomColor } from '../constants/helpers';

const mapPath = 'russiaCompressed.json';

const Map = (props) => {
  const {
    statistic,
    handleTooltipChange,
    currentIndicator,
    regions,
    selectedYear,
  } = props;

  // const [geographyRef, setGeographyRef] = React.useState(null);
  const [selectedRegion, setSelectedRegion] = React.useState(null);

  const anchorEl = useRef();

  const onCloseRegionPopover = (event) => {
    const active = document.querySelector('svg .active');
    if (active) {
      active.classList.remove('active');
    }
    setSelectedRegion(null);
  };

  // useEffect(() => {
  //   const regionsSvgs = document.querySelectorAll('.rsm-geography.region');
  //   // console.log('useEffect', regionsSvgs);
  // });

  const handleClick = (statistic, geo) => (event) => {
    // if (!isTooltipOpen) {
    //   ReactTooltip.show(geographyRef);
    // } else {
    //   ReactTooltip.hide(geographyRef);
    // }
    const active = document.querySelector('svg .active');
    if (active) {
      active.classList.remove('active');
    }
    event.target.classList.add('active');
    setSelectedRegion(statistic);
    // setAnchorEl(event.currentTarget);
  };

  const projection = () => {
    return geoConicEqualArea()
      .scale(650)
      .center([0, 90])
      .parallels([40, 80])
      .rotate([265])
      .translate([430, 0]);
  };

  const colorScale = (value) => {
    return statistic ? (scaleLinear()
      .domain([statistic.min, statistic.max])
      .range(['#ffedea', '#ff5233']))(value) : '#F5F4F6';
  };

  const legendItemsCount = 5;

  const step = statistic && statistic.max ? (statistic.max - statistic.min) / (legendItemsCount - 1) : 0;
  const legendItems = statistic && statistic.max
    ? Array.from(Array(legendItemsCount).keys(), item => (statistic.min + item * step).toFixed(2)) : [];

  return (
    <div
      style={{ paddingTop: '15px', paddingBottom: '15px', position: 'relative' }}
      ref={anchorEl}
    >
      <div
        style={{
          background: 'white',
          position: 'absolute',
          right: 0,
        }}
      >
        <span style={
          {
            fontSize: '13px',
            lineHeight: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
          }
        }
        >
          {'Диапазоны значений'}
        </span>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', margin: '8px' }}>
            <div style={{
              background: '#F5F4F6', width: '18px', height: '18px', marginRight: '8px', marginTop: '6px', borderRadius: '2px',
            }}
            />
            <span style={
                {
                  fontSize: '17px',
                  lineHeight: '28px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                }
              }
            >
              {'Нет данных'}
            </span>
          </li>
          {legendItems.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'flex-start', margin: '8px' }}>
              <div style={{
                background: colorScale(item), width: '18px', height: '18px', marginRight: '8px', marginTop: '6px', borderRadius: '2px',
              }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={
                {
                  fontSize: '17px',
                  lineHeight: '28px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                }
              }
                >
                  {`${item || ''}`}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    lineHeight: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    color: '#909ebb',
                  }}
                >
                  {`${((statistic.values[1] && statistic.values[1].measurement_unit) || '')}`}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ComposableMap
        projection={projection()}
        width={900}
        height={450}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        {/* <ZoomableGroup
          minZoom={1}
          maxZoom={2}
        > */}
        {/* <Sphere stroke="#E4E5E6" strokeWidth={0.5} /> */}
        {/* <Graticule stroke="#E4E5E6" strokeWidth={0.5} /> */}
        <Geographies
          geography={mapPath}
          data-tip=""
          // data-event="click focus"
          // ref={ref => setGeographyRef(ref)}
          // data-event-off="mouseleave"
          data-for="global"
        >
          {({ geographies }) => (
            <>
              {geographies.map((geo, i) => {
                const color = statistic
                && Object.keys(statistic.values).length > 0
                && statistic.values[geo.properties.id]
                  ? colorScale(statistic.values[geo.properties.id].value) : '#F5F4F6';
                return (
                  <Geography
                    key={geo.rsmKey}
                    onMouseEnter={() => {
                      handleTooltipChange(statistic.values[geo.properties.id] || { Region: regions[geo.properties.id], year: selectedYear });
                    }}
                    onMouseLeave={() => {
                      handleTooltipChange(null);
                    }}
                    className="region"
                    geography={geo}
                    // stroke: '#FFFFF',
                    // strokeWidth: 0.5,
                    style={{
                      default: {
                        fill: color,
                        outline: 'none',
                        stroke: '#FFF',
                        strokeWidth: '0.5',
                      },
                      pressed: {
                        fill: color,
                        outline: 'none',
                        stroke: '#FFF',
                        strokeWidth: '0.5',
                      },
                      hover: {
                        fill: color,
                        outline: 'none',
                        stroke: '#FFF',
                        strokeWidth: '0.5',
                      },
                    }}
                // outline: 'none',
                    onClick={
                      handleClick((statistic && statistic.values && statistic.values[geo.properties.id]) || null, geo)
                    }
                  />
                );
              })}
            </>
          )}
        </Geographies>


        {/* </ZoomableGroup> */}
      </ComposableMap>
      <Popover
        anchorEl={anchorEl.current}
        open={Boolean(selectedRegion)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={onCloseRegionPopover}
      >
        <div style={{ padding: '18px 24px' }}>
          <IndicatorModal
            selectedRegion={selectedRegion}
            currentIndicator={currentIndicator}
            onClose={onCloseRegionPopover}
          />
        </div>
      </Popover>
    </div>
  );
};
function areEqual(prevProps, nextProps) {
  if (
    prevProps.isTooltipOpen !== nextProps.isTooltipOpen
    || prevProps.statistic !== nextProps.statistic
  ) return false;
  return true;
}
export default memo(Map, areEqual);
