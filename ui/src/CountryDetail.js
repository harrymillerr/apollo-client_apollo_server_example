import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_COUNTRY = gql`
  query($slug: String!) {
    getCountry(slug: $slug) {
      TotalCases {
        Recovered
        Deaths
        Date
        Confirmed
      }
    }
  }
`;

const CountryDetail = ({ country }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { slug: country },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  if (data.getCountry === null) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Date</td>
          <td>Recovered</td>
          <td>Deaths</td>
          <td>Confirmed</td>
        </tr>
      </thead>
      <tbody>
        {data.getCountry.TotalCases.slice()
          .reverse()
          .map(({ Date, Deaths, Recovered, Confirmed }) => (
            <tr>
              <td>{Date}</td>
              <td>{Deaths}</td>
              <td>{Recovered}</td>
              <td>{Confirmed}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CountryDetail;
