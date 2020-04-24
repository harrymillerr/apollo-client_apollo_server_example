module.exports = {
  Query: {
    getAllCountries: async (_, __, { dataSources }) =>
      await dataSources.coronavirusAPI.getAllCountries(),
    getCountry: async (_, args, { dataSources }) => {
      const response = await dataSources.coronavirusAPI.getAllCountries();
      if (response.length) {
        return response.filter(({ Slug }) => Slug === args.slug)[0];
      }
      return [];
    },
  },
  Country: {
    LiveCases: async (country, __, { dataSources }) =>
      await dataSources.coronavirusAPI.getLiveCases(country.Slug),
    TotalCases: async (country, __, { dataSources }) =>
      await dataSources.coronavirusAPI.getTotalCases(country.Slug),
  },
};
