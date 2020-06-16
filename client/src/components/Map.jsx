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
  // ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  // Sphere,
  // Graticule,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import { geoConicEqualArea } from 'd3-geo';
import { scaleLinear } from 'd3-scale';
import {
  Popover,
} from '@material-ui/core';
import IndicatorModal from './IndicatorModal';

const mapPath = 'russia.json';

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

  const handleClick = (statistic) => (event) => {
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
      .scale(280)
      .center([0, 90])
      .parallels([40, 80])
      .rotate([265])
      .translate([240, 0]);
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
        <ul style={{ listStyle: 'none' }}>
          {legendItems.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', margin: '8px' }}>
              <div style={{
                background: colorScale(item), width: '16px', height: '16px', marginRight: '8px', borderRadius: '2px',
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
                {`${item} ${(statistic.values[0] && statistic.values[0].measurement_unit) || ''}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <ComposableMap
        projection={projection()}
        width={500}
        height={200}
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
          {({ geographies }) => (geographies.map((geo, i) => {
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
                style={{
                  default: {
                    fill: color,
                    outline: 'none',
                  },
                  pressed: {
                    fill: color,
                    outline: 'none',
                  },
                  hover: {
                    fill: color,
                    outline: 'none',
                  },
                }}
                // outline: 'none',
                onClick={handleClick((statistic && statistic.values && statistic.values[geo.properties.id]) || null)}
              />
            );
          }))}
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
          <IndicatorModal selectedRegion={selectedRegion} currentIndicator={currentIndicator} onClose={onCloseRegionPopover} />
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
