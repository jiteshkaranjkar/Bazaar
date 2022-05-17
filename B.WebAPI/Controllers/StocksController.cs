using B.Application.Contracts;
using B.Domain.Stocks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace B.WebAPI.Controllers
{
    [EnableCors("CorsApi")]
    [Route("api/[controller]")]
    [ApiController]
    public class StocksController : ControllerBase
    {
        private readonly ILogger<StocksController> logger;
        private readonly IStockService stockService;

        public StocksController(ILogger<StocksController> logger, IStockService stockService)
        {
            this.logger = logger;
            this.stockService = stockService;
        }

        // GET: api/<StocksController>
        [HttpGet]
        public async Task<List<Stock>> Get()
        {

            List<Stock> stocks = await stockService.GetStocksAsync("SELECT * FROM c");
            return stocks;
        }

        // GET: api/<StocksController>
        [HttpGet]
        [Route("portfolio")]
        public async Task<List<List<Portfolio>>> GetPortfolio([FromQuery] string container)
        {
            List<List<Portfolio>> portfolios = await stockService.GetPortfolioAsync("SELECT * FROM c", container);
            return portfolios;
        }
        // GET api/<StocksController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<StocksController>
        [HttpPost()]
        public async void AddStock([FromBody] dynamic stockInput)
        {
            try
            {
                if (!string.IsNullOrEmpty(stockInput.ToString()))
                {
                    Stock stock = JsonConvert.DeserializeObject<Stock>(stockInput.ToString());
                    await stockService.AddStock(stock);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // PUT api/<StocksController>/5
        [HttpPut]
        [Route("portfolio")]
        public async Task<Portfolio> Put([FromBody] dynamic editedRow, [FromQuery] string name)
        {
            try
            {
                Portfolio portfolio = new Portfolio();
                if (!string.IsNullOrEmpty(editedRow.ToString()))
                {
                    portfolio = JsonConvert.DeserializeObject<Portfolio>(editedRow.ToString());
                    portfolio.Id = new Guid(portfolio.Id.ToString());
                    portfolio = await stockService.UpdateStock(portfolio, name);
                }
                return portfolio;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // DELETE api/<StocksController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
