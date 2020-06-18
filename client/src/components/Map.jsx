import React, {
  useState, useRef, memo,
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
import { geoConicEqualArea, geoCentroid } from 'd3-geo';
import {
  scaleLinear, scaleQuantile, scaleQuantize,
} from 'd3-scale';

import {
  Popover,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import IndicatorModal from './IndicatorModal';
import { addOrdinalToNumber } from '../constants/helpers';


const mapPath = 'russiaCompressed.json';

const Map = (props) => {
  const {
    statistic,
    handleTooltipChange,
    currentIndicator,
    regions,
    selectedYear,
    isLegendIntervaled,
    colors,
    colorsCount,
    isRegionsSigned,
    mainMapColor,
    mapFontColor,
    mapBorderColor,
    mapFontSize,
    legendFontSize,
    isRegionNames3Letters,
    legendFontColor,
  } = props;
  console.log('isRegionsSigned', isRegionsSigned);

  const [selectedRegion, setSelectedRegion] = React.useState(null);

  const [position, setPosition] = useState({ coordinates: [98.11524315889842, 68.0729404428195], zoom: 1 });

  const anchorEl = useRef();

  const onCloseRegionPopover = (event) => {
    const active = document.querySelector('svg .active');
    if (active) {
      active.classList.remove('active');
    }
    setSelectedRegion(null);
  };

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  const handleClick = (statistic, geo) => (event) => {
    const active = document.querySelector('svg .active');
    if (active) {
      active.classList.remove('active');
    }
    event.target.classList.add('active');
    setSelectedRegion(statistic);
  };

  const projection = () => {
    return geoConicEqualArea()
      .scale(650)
      .center([0, 90])
      .parallels([40, 80])
      .rotate([265])
      .translate([430, 0]);
  };

  const quantize = statistic && scaleQuantize()
    .domain([statistic.min, statistic.max])
    .range(colors);

  const colorScale = (value) => {
    if (isLegendIntervaled) {
      return statistic ? quantize(value) : mainMapColor;
    }
    return statistic ? (scaleLinear()
      .domain([statistic.min, statistic.max])
      .range(colors))(value) : mainMapColor;
  };

  const legendItemsCount = 5;

  const step = statistic && statistic.max
    ? (statistic.max - statistic.min) / (legendItemsCount - 1) : 0;
  const legendItems = statistic && statistic.max
    ? Array.from(Array(legendItemsCount).keys(), item => (statistic.min + item * step).toFixed(2))
    : [];

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <span style={
            {
              fontSize: `${legendFontSize}px`,
              lineHeight: '20px',
              fontStyle: 'normal',
              fontWeight: 400,
              color: legendFontColor,
            }
          }
          >
            {'Диапазоны значений'}
          </span>
        </div>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', margin: '8px' }}>
            <div style={{
              background: mainMapColor,
              width: '18px',
              height: '18px',
              marginRight: '8px',
              marginTop: '6px',
              borderRadius: '2px',
            }}
            />
            <span style={
              {
                fontSize: `${legendFontSize}px`,
                lineHeight: '28px',
                fontStyle: 'normal',
                fontWeight: 400,
                color: legendFontColor,
              }
            }
            >
              {'Нет данных'}
            </span>
          </li>
          {(isLegendIntervaled ? colors : legendItems).map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'flex-start', margin: '8px' }}>
              <div style={{
                background: isLegendIntervaled
                  ? item : colorScale(item),
                width: '18px',
                height: '18px',
                marginRight: '8px',
                marginTop: '6px',
                borderRadius: '2px',
              }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={
                {
                  fontSize: `${legendFontSize}px`,
                  lineHeight: '28px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  color: legendFontColor,
                }
              }
                >
                  {`${
                    (isLegendIntervaled
                      ? (
                        `${addOrdinalToNumber((quantize && quantize.invertExtent(item)[0])
                          || 0)}
                          -
                          ${addOrdinalToNumber((quantize && quantize.invertExtent(item)[1])
                          || 0)}`
                      )
                      : addOrdinalToNumber(item || 0))}`}
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
                  {`${((statistic && statistic.values && statistic.values[1] && statistic.values[1].measurement_unit) || '')}`}
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
        <ZoomableGroup
          minZoom={1}
          maxZoom={4}
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          {/* <Sphere stroke="#E4E5E6" strokeWidth={0.5} /> */}
          {/* <Graticule stroke="#E4E5E6" strokeWidth={0.5} /> */}
          <Geographies
            geography={mapPath}
            data-tip=""
            data-for="global"
          >
            {({ geographies }) => (
              <>
                {geographies.map((geo) => {
                  const color = statistic
                && Object.keys(statistic.values || {}).length > 0
                && statistic.values[geo.properties.id]
                    ? colorScale(statistic.values[geo.properties.id].value) : mainMapColor;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      onMouseEnter={() => {
                        if (statistic && statistic.values && statistic.values[geo.properties.id]) {
                          handleTooltipChange(statistic.values[geo.properties.id]
                            || { Region: regions[geo.properties.id], year: selectedYear });
                        }
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
                          stroke: mapBorderColor,
                          strokeWidth: '0.5',
                        },
                        pressed: {
                          fill: color,
                          outline: 'none',
                          stroke: mapBorderColor,
                          strokeWidth: '0.5',
                        },
                        hover: {
                          fill: color,
                          outline: 'none',
                          stroke: mapBorderColor,
                          strokeWidth: '0.5',
                        },
                      }}
                      onClick={
                      handleClick((statistic && statistic.values
                        && statistic.values[geo.properties.id]) || null, geo)
                    }
                    />
                  );
                })}
                {isRegionsSigned && geographies.map((geo) => {
                  const centroid = geoCentroid(geo);
                  const cur = regions[geo.properties.id];
                  return (
                    <Marker
                      key={`${geo.rsmKey}-name`}
                      coordinates={centroid}
                      onMouseEnter={() => {
                        if (statistic && statistic.values && statistic.values[geo.properties.id]) {
                          handleTooltipChange(statistic.values[geo.properties.id]
                            || { Region: regions[geo.properties.id], year: selectedYear });
                        }
                      }}
                      onMouseLeave={() => {
                        handleTooltipChange(null);
                      }}
                    >
                      <text x={isRegionNames3Letters ? -12 : -8} fontSize={mapFontSize} alignmentBaseline="middle" fill={mapFontColor}>
                        {isRegionNames3Letters ? cur.reg_alias_short_3letters : cur.reg_alias_short_2letters}
                      </text>
                    </Marker>
                  //                 <Annotation
                  //                   subject={centroid}
                  //                   key={geo.properties.id}
                  //                       // dx={offsets[cur.id][0]}
                  // // dy={offsets[cur.id][1]}
                  //                 >
                  //                   <text x={4} fontSize={8} alignmentBaseline="middle">
                  //                     {cur.reg_alias_short_3letters}
                  //                   </text>
                  //                 </Annotation>
                  );
                })}
              </>
            )}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div style={{
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      >
        <ButtonGroup variant="contained">
          <Button onClick={handleZoomIn}>+</Button>
          <Button onClick={handleZoomOut}>-</Button>
        </ButtonGroup>
      </div>
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
    || prevProps.isLegendIntervaled !== nextProps.isLegendIntervaled
    || prevProps.colors !== nextProps.colors
    || prevProps.isRegionsSigned !== nextProps.isRegionsSigned
    || prevProps.mainMapColor !== nextProps.mainMapColor
    || prevProps.mapFontColor !== nextProps.mapFontColor
    || prevProps.mapBorderColor !== nextProps.mapBorderColor
    || prevProps.mapFontSize !== nextProps.mapFontSize
    || prevProps.legendFontSize !== nextProps.legendFontSize
    || prevProps.isRegionNames3Letters !== nextProps.isRegionNames3Letters
    || prevProps.legendFontColor !== nextProps.legendFontColor
  ) return false;
  return true;
}
export default memo(Map, areEqual);
