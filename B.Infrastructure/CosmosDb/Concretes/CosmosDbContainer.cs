using B.Domain.Stocks;
using B.Infrastructure.CosmosDb.Contracts;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Fluent;

namespace B.Infrastructure.CosmosDb.Concretes
{
    public class CosmosDbContainer : ICosmosDbContainer
    {
        public Container _container { get; }

        public CosmosDbContainer(CosmosClient cosmosClient,
                                 string databaseName,
                                 string containerName)
        {
            this._container = cosmosClient.GetContainer(databaseName, containerName);
        }

        public async void ConnectCosmodDB()
        {
            var connectionString = "";
            var client = new CosmosClientBuilder(connectionString)
                .WithSerializerOptions(new CosmosSerializationOptions
                {
                    PropertyNamingPolicy = CosmosPropertyNamingPolicy.CamelCase
                })
                .Build();

            var stockContainer = client.GetContainer("bazaar", "stock");
            var stock = new Stock("AAPL", 1, 165);

            await stockContainer.CreateItemAsync(stock);
        }
    }
}
