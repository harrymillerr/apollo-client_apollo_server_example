import React, { useState } from 'react';
import CountrySelect from './CountrySelect';
import CountryDetail from './CountryDetail';

const App = () => {
  const [country, setCountry] = useState('');

  return (
    <>
      <h1>Apollo Client Demo</h1>
      <CountrySelect onChange={(event) => setCountry(event.target.value)} />
      <CountryDetail country={country} />
    </>
  );
};

export default App;
