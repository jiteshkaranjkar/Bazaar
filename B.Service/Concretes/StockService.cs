using B.Application.Contracts;
using B.Application.Dtos;
using B.Domain.Stocks;
using Microsoft.Azure.Cosmos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace B.Application.Concretes
{

    public class StockService : IStockService
    {
        private Container container;
        //private readonly IUnitOfWork _unitOfWork;
        //private readonly IMapper _mapper;

        public StockService(
          CosmosClient dbClient,
          string databaseName,
          string containerName)
        {
            this.container = dbClient.GetContainer(databaseName, containerName);
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
            List<Stock> results = new List<Stock>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();
                //results.AddRange(response.ToList());
            }
            return results;
        }

        public async Task UpdateStock(Stock stock)
        {
            await this.container.UpsertItemAsync<Stock>(stock, new PartitionKey(stock.Id.ToString()));
        }
    }
}
