import React, { useEffect, useState } from "react";
import refreshPlotsData from "./countProfit";

const RATE_API = "https://api.topxch.com/api/rate/";
const ProfitCalculation = ({ PlusImg }) => {
  const SPACE_TYPE = {
    GiB: "GiB",
    TiB: "TiB",
    PiB: "PiB",
  };
  const plotSize = 101.4;
  const rangeMin = 1;
  const maxPlots = 10000;
  const [xchPriceUsd, setXchPriceUsd] = useState();
  const [spaceType, setSpaceType] = useState(SPACE_TYPE.GiB);
  const spaceIndex = Object.keys(SPACE_TYPE).indexOf(spaceType);
  const multiplier = Math.pow(1024, spaceIndex);
  const [inputState, setInputState] = useState({
    range: 10,
    plots: 10,
    space: 10 * plotSize,
  });
  const [calculcations, setCalculations] = useState(
    refreshPlotsData(inputState.range)
  );
  const hangleUpdateCalculations = () => {
    setCalculations(refreshPlotsData(inputState.plots, xchPriceUsd));
  };
  const handleTypeChange = (e) => {
    setSpaceType(e.target.value);
  };
  const formatSpace = (space) =>
    space.toFixed ? space.toFixed(spaceIndex + 1) : space;

  // TODO add easing
  const middleRange = 50;
  const rangeToPlots = (range) => {
    if (range < middleRange + 1) {
      return range;
    } else {
      const currentRange = range - middleRange;
      return (
        middleRange + ((maxPlots - middleRange) * currentRange) / middleRange
      );
    }
  };
  const plotsToSpace = (plots) => (plotSize * plots) / multiplier;
  const plotsToRange = (plots) => {
    if (plots < middleRange + 1) {
      return plots;
    } else {
      const currentRange = plots - middleRange;
      const oneUnit = (maxPlots - middleRange) / middleRange;
      return Math.floor(middleRange + currentRange / oneUnit);
    }
  };
  const spaceToPlots = (space) => {
    return Math.round((space * multiplier) / plotSize);
  };

  const handleInputUpdate = (e) => {
    const { name, value } = e.target;
    const newState = {
      ...inputState,
      [name]: value,
    };

    if (name === "range" && value) {
      // update plots
      newState.plots = rangeToPlots(value);
      // update space
      newState.space = plotsToSpace(newState.plots);
    } else if (name === "plots" && value) {
      const _value = Math.min(value, maxPlots);
      newState.plots = _value;

      // update range
      newState.range = plotsToRange(_value);
      // update space
      newState.space = plotsToSpace(_value);
    } else if (name === "space" && !!parseFloat(value)) {
      const maxSpace = (plotSize * maxPlots) / multiplier;
      const parsedValue = parseFloat(value);
      const _value = Math.min(parsedValue, maxSpace);
      if (parsedValue > maxSpace || parsedValue !== _value) {
        newState.space = _value;
      }

      // update range
      newState.plots = spaceToPlots(_value);
      // update plots
      newState.range = plotsToRange(newState.plots);
    }

    setInputState(newState);
  };

  useEffect(() => {
    hangleUpdateCalculations();
  }, [inputState.plots]);

  useEffect(() => {
    setInputState({ ...inputState, space: plotsToSpace(inputState.plots) });
  }, [spaceType]);

  useEffect(() => {
    fetch(RATE_API)
      .then((response) => response.json())
      .then(({ message: { USD } }) => {
        setXchPriceUsd(USD);
      });
  }, []);

  const Stats = ({ caption, value, duration }) => (
    <div key={caption} className="mt-4" style={{ minWidth: "115px" }}>
      <div style={{ color: "#3AAC59" }}>{caption}</div>
      <div className="pt-1 d-flex align-items-center">
        <span className="text-bold">{value}</span>
        <span className="text-small text-secondary">&nbsp;/ {duration}</span>
      </div>
    </div>
  );

  return (
    <div
      id="calculator"
      className="container-fluid calculator-screen"
      style={{
        background:
          "linear-gradient(to bottom, rgba(58, 172, 89, 0.08), rgba(58, 172, 89, 0.08) 50%, #fff 50%, #fff 100%)",
        paddingBottom: "40px",
        paddingTop: "40px",
      }}
    >
      <div className="container">
        <h1 className="h1-title mb-0">
          <span className="text-green">Profit</span> calculation
        </h1>
        <div>
          <h4 className="text-bold pt-2 mb-0">Number of plots</h4>
          <p className="text-secondary pt-1 mb-0">of size 101,4 GiB, k=32</p>
        </div>
        <input
          type="range"
          min={rangeMin}
          max="100"
          className="form-range mt-4 mb-3"
          id="profitRange"
          name="range"
          value={inputState.range}
          onChange={handleInputUpdate}
        />
        <div className="row profitInput">
          <div className="col-5 d-flex align-items-center">
            <input
              type="number"
              min={rangeMin}
              max={maxPlots}
              className="form-control text-bold"
              name="plots"
              onChange={handleInputUpdate}
              value={inputState.plots}
            />
            <span className="text-small text-secondary ms-1">Plots</span>
          </div>
          <div className="col-7 d-flex">
            <input
              type="number"
              min="0"
              className="form-control text-bold"
              style={{ maxWidth: "160px" }}
              onChange={handleInputUpdate}
              name="space"
              value={formatSpace(inputState.space)}
            />
            <select
              className="form-select  ms-1"
              value={spaceType}
              onChange={handleTypeChange}
            >
              {Object.keys(SPACE_TYPE).map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card mt-3">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-12 col-md-4 col-lg-3 d-md-flex justify-content-md-center align-items-md-center">
                    <h5 className="text-bold pt-3 mb-2">Estimated Earings</h5>
                  </div>
                  <div className="col-12 col-md-8">
                    <p className="text-secondary text-small mb-0">
                      View is based on a snapshot of today's price and a
                      constant total network space.
                    </p>
                  </div>
                </div>
                <div className="row pb-3 ">
                  <div className="col-6 col-md-12 d-md-flex justify-content-md-around">
                    <Stats
                      caption="Hourly XCH"
                      value={calculcations.xchPerHour}
                      duration="hour"
                    />
                    <Stats
                      caption="Daily XCH"
                      value={calculcations.xchPerDay}
                      duration="day"
                    />
                    <Stats
                      caption="Monthly XCH"
                      value={calculcations.xchPerMonth}
                      duration="month"
                    />
                  </div>
                  <div className="col-6 col-md-12 d-md-flex justify-content-md-around">
                    <Stats
                      caption="Hourly USD"
                      value={calculcations.usdPerHour}
                      duration="hour"
                    />
                    <Stats
                      caption="Daily USD"
                      value={calculcations.usdPerDay}
                      duration="day"
                    />
                    <Stats
                      caption="Monthly USD"
                      value={calculcations.usdPerMonth}
                      duration="month"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button
            data-bs-toggle="modal"
            data-bs-target="#connectModal"
            className="btn btn-green profitBtn"
          >
            <img
              src={PlusImg}
              style={{
                width: "24px",
                verticalAlign: "middle",
                marginRight: "12px",
              }}
            />
            <span style={{ lineHeight: "24px", verticalAlign: "middle" }}>
              Connect miner
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculation;
