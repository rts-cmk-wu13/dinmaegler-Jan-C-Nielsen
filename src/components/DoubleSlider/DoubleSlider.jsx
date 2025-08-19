import React, { useState } from 'react';
import { Range } from 'react-range';
import { useSearchParams } from "react-router";

const STEP = 100000; // step size for the slider
const MIN = 0;
const MAX = 12000000;

function DoubleSlider() {
  const [values, setValues] = useState([MIN, MAX]); // initial min and max
  let [searchParams, setSearchParams] = useSearchParams();
  const handleValuesChange = (newValues) => {
    const current = Object.fromEntries(searchParams.entries());
    delete current.price_lte;
    delete current.price_gte;
    console.log(current);

    setValues(newValues);
    // Update the search params with the new values
    setSearchParams({ ...current, price_gte : newValues[0], price_lte : newValues[1] });
  };

  return (
    <div>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={handleValuesChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              height: '6px',
              background: '#ccc',
              width: '80%'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              height: '20px',
              width: '20px',
              backgroundColor: '#999',
              borderRadius: '50%',
            }}
          />
        )}
      />
      {/* Display the current values */}
      <div style={{ margin: '10px', maxwidth: '80%', textAlign: 'center' }}>
        Min: {values[0]} &nbsp; | &nbsp; Max: {values[1]}
      </div>
    </div>
  );
}

export default DoubleSlider;
