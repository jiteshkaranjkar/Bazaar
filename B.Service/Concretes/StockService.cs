using B.Application.Contracts;
using B.Domain.Stocks;
using Microsoft.Azure.Cosmos;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace B.Application.Concretes
{

    public class StockService : IStockService
    {
        private CosmosClient dbClient;
        private Container container;
        private Database cosmosDatabase;
        //private readonly IUnitOfWork _unitOfWork;
        //private readonly IMapper _mapper;

        List<Portfolio> INDPortfolio = new List<Portfolio>();
        List<Portfolio> AUSPortfolio = new List<Portfolio>();
        List<Portfolio> USAPortfolio = new List<Portfolio>();

        public StockService(
          CosmosClient dbClient,
          string databaseName,
          string containerName)
        {
            this.dbClient = dbClient;
            this.container = dbClient.GetContainer(databaseName, containerName);
            cosmosDatabase = dbClient.GetDatabase(databaseName);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="stock"></param>
        /// <returns></returns>
        public async Task AddStock(Stock stock)
        {
            await this.container.CreateItemAsync<Stock>(stock, new PartitionKey(stock.Id.ToString()));
        }

        public async Task DeleteStock(string id)
        {
            await this.container.DeleteItemAsync<Stock>(id, new PartitionKey(id));
        }

        public async Task<Stock> GetStockById(string id)
        {
            try
            {
                ItemResponse<Stock> response = await this.container.ReadItemAsync<Stock>(id, new PartitionKey(id));
                return response.Resource;
            }
            catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
            {
                return null;
            }
        }

        public async Task<List<Stock>> GetStocksAsync(string queryString)
        {
            var query = this.container.GetItemQueryIterator<Stock>(new QueryDefinition(queryString));
            List<Stock> lstStocks = new List<Stock>();
            while (query.HasMoreResults)
            {
                FeedResponse<Stock> result = await query.ReadNextAsync();
                foreach (var item in result)
                {
                    lstStocks.Add(item);
                }
            }
            return lstStocks;
        }

        public async Task<List<List<Portfolio>>> GetPortfolioAsync(string queryString, string container)
        {
            List<ContainerProperties> lstContainer = new List<ContainerProperties>();
            List<List<Portfolio>> lstStockPortfolio = new List<List<Portfolio>>();

            using (FeedIterator<ContainerProperties> feedIterator = this.cosmosDatabase.GetContainerQueryIterator<ContainerProperties>())
            {
                while (feedIterator.HasMoreResults)
                {
                    FeedResponse<ContainerProperties> response = await feedIterator.ReadNextAsync();
                    foreach (ContainerProperties containr in response)
                    {
                        lstContainer.Add(containr);
                        if (containr.Id != "stock")
                        {
                            Container dbContainer = this.cosmosDatabase.GetContainer(containr.Id);
                            List<Portfolio> portfolio = GetPortfolioData(dbContainer, queryString).Result;
                            switch (containr.Id)
                            {
                                case "AustralianPortfolio":
                                    AUSPortfolio = portfolio;
                                    break;
                                case "IndianPortfolio":
                                    INDPortfolio = portfolio;
                                    break;
                                case "USPortfolio":
                                    USAPortfolio = portfolio;
                                    break;
                            }
                            //var portfolioToSerialize = new Portfolios();
                            //portfolioToSerialize.Items.Add(JsonConvert.SerializeObject(portfolio));
                            lstStockPortfolio.Add(portfolio);
                        }
                    }
                }
            }


            return lstStockPortfolio;
        }

        private async Task<List<Portfolio>> GetPortfolioData(Container dbContainer, string queryString)
        {
            List<Portfolio> lstStockPortfolio = new List<Portfolio>();
            try
            {
                var query = dbContainer.GetItemQueryIterator<Portfolio>(new QueryDefinition(queryString));

                while (query.HasMoreResults)
                {
                    FeedResponse<Portfolio> result = await query.ReadNextAsync();
                    foreach (var item in result)
                    {
                        lstStockPortfolio.Add(item);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return lstStockPortfolio;
        }

        public async Task<Portfolio> UpdateStock(Portfolio portfolio, string portfolioName)
     {
            BazaarDBContainerNames containerName = (BazaarDBContainerNames)Enum.Parse(typeof(BazaarDBContainerNames), portfolioName, true);
            Container dbContainer = this.cosmosDatabase.GetContainer(containerName.GetEnumDescription());
            ItemResponse<Portfolio> folio = await dbContainer.UpsertItemAsync<Portfolio>(portfolio, new PartitionKey(portfolio.Id.ToString()));
            return folio.Resource;
        }
    }
}
