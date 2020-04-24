import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_COUNTRY_LIST = gql`
  query {
    getAllCountries {
      Slug
      Country
    }
  }
`;

const sortByCountry = (data) =>
  data.getAllCountries.slice().sort((a, b) => {
    if (a.Country < b.Country) {
      return -1;
    }
    if (a.Country > b.Country) {
      return 1;
    }
    return 0;
  });

const CountrySelect = ({ onChange, value }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  const options = sortByCountry(data);

  return (
    <select onChange={onChange} value={value}>
      <option value="">Select Country</option>
      {options.map((option) => (
        <option value={option.Slug}>{option.Country}</option>
      ))}
    </select>
  );
};

export default CountrySelect;
