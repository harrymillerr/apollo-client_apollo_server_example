const { RESTDataSource } = require('apollo-datasource-rest');

class CoronaVirusAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.covid19api.com/';
  }

  async getAllCountries() {
    return await this.get('countries');
  }

  async getLiveCases(slug) {
    return await this.get(`/live/country/${slug}/status/confirmed
    `);
  }

  async getTotalCases(slug) {
    return await this.get(`/total/country/${slug}`);
  }
}

module.exports = CoronaVirusAPI;
