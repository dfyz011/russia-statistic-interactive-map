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
  Sphere,
  Graticule,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import { geoConicEqualArea, geoCentroid } from 'd3-geo';
import { scaleLinear, scaleQuantile, scaleQuantize } from 'd3-scale';
import {
  Popover,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import IndicatorsModal from './IndicatorsModal';

const mapPath = 'russia.json';

const Map = (props) => {
  const {
    statistic,
    handleTooltipChange,
    selectedIndicators,
    regions,
    selectedYear,
    indicatorsColors,
  } = props;

  const [selectedRegion, setSelectedRegion] = useState(null);

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


  const handleClick = (geo) => (event) => {
    const active = document.querySelector('svg .active');
    if (active) {
      active.classList.remove('active');
    }
    event.target.classList.add('active');
    setSelectedRegion(regions[geo.properties.id]);
  };

  const projection = () => {
    return geoConicEqualArea()
      .scale(650)
      .parallels([40, 80])
      .center([0, 90])
      .rotate([265])
      .translate([430, 0]);
  };

  // const colorScale = (value) => {
  //   return statistic ? (scaleLinear()
  //     .domain([statistic.min, statistic.max])
  //     .range(['#ffedea', '#ff5233']))(value) : '#F5F4F6';
  // };

  const barScale = (value, { min, max }) => {
    return statistic ? (scaleLinear()
      .domain([min, max])
      .range([0, 40]))(value) : 0;
  };

  // const legendItemsCount = 5;

  // const step = statistic && statistic.max ? (statistic.max - statistic.min) / (legendItemsCount - 1) : 0;
  // const legendItems = statistic && statistic.max
  //   ? Array.from(Array(legendItemsCount).keys(), item => (statistic.min + item * step).toFixed(2)) : [];
  const statisticIndicators = Object.keys(statistic);
  const indicatorsCount = statisticIndicators.length;
  const barWidth = 4;
  const barOffset = 2;

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
          {'Метрики'}
        </span>
        <ul style={{ listStyle: 'none' }}>
          {statisticIndicators.map((item, index) => {
            return (
              <li key={index} style={{ display: 'flex', alignItems: 'flex-start', margin: '8px' }}>
                <div style={{
                  background: indicatorsColors[item], width: '18px', height: '18px', marginRight: '8px', marginTop: '6px', borderRadius: '2px',
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
                  {`${{ ...selectedIndicators.find((el) => parseInt(el.id) === parseInt(item)) || {} }.title || ''}`}
                </span>
              </li>
            );
          })}
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
          <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
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
                  const color = '#F5F4F6';
                  return (
                    <Geography
                      key={geo.rsmKey}
                      onMouseEnter={() => {
                        handleTooltipChange({
                          selectedRegion: selectedRegion || regions[geo.properties.id],
                          indicatorsStatistic: statistic,
                          selectedIndicators,
                          selectedYear,
                        });
                      }}
                      onMouseLeave={() => {
                        handleTooltipChange(null);
                      }}
                      className="region"
                      geography={geo}
                      // stroke: '#FFF',
                      // strokeWidth: '0.3',
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
                      onClick={
                        handleClick(geo)
                      }
                    />
                  );
                })}
                { selectedIndicators && selectedIndicators.length > 0 && geographies.map(geo => {
                  const centroid = geoCentroid(geo);
                  const cur = regions[geo.properties.id];
                  return (
                    <g key={`${geo.rsmKey}-name`}>
                      {cur
                      && centroid[0] > 30
                      && centroid[0] < 200
                      && statisticIndicators
                      && (statisticIndicators.map((indicator, i) => {
                        const height = indicatorsCount > 0
                          && statistic[indicator].values[geo.properties.id]
                          ? barScale(statistic[indicator].values[geo.properties.id].value, statistic[indicator]) : 0;
                        const xPosition = -(indicatorsCount * (barWidth + barOffset)) + (i + 1) * (barWidth + barOffset);
                        return (
                          <Marker
                            key={`${geo.rsmKey}-bar-${indicator}`}
                            coordinates={centroid}
                          >
                            <rect
                              x={xPosition}
                              y={-height}
                              width={barWidth}
                              height={height}
                              fill={indicatorsColors[indicator]}
                            />
                          </Marker>
                        );
                        // <Annotation
                        //   subject={centroid}
                        //   // dx={offsets[cur.id][0]}
                        //   // dy={offsets[cur.id][1]}
                        // >
                        //   <text x={4} fontSize={8} alignmentBaseline="middle">
                        //     {cur.reg_alias_short_3letters}
                        //   </text>
                        // </Annotation>
                      }))}
                    </g>
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
          <IndicatorsModal
            selectedRegion={selectedRegion}
            indicatorsStatistic={statistic}
            selectedIndicators={selectedIndicators}
            selectedYear={selectedYear}
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
