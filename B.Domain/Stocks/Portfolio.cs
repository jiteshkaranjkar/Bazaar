using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;

namespace B.Domain.Stocks
{
    public class Portfolio
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }
        [JsonProperty(PropertyName = "symbol")]
        public string Symbol { get; set; }
        [JsonProperty(PropertyName = "currentPrice")]
        public string CurrentPrice { get; set; }
        [JsonProperty(PropertyName = "date")]
        public string Date { get; set; }
        [JsonProperty(PropertyName = "time")]
        public string Time { get; set; }
        [JsonProperty(PropertyName = "change")]
        public double? Change { get; set; }
        [JsonProperty(PropertyName = "open")]
        public double? Open { get; set; }
        [JsonProperty(PropertyName = "high")]
        public double? High { get; set; }
        [JsonProperty(PropertyName = "low")]
        public double? Low { get; set; }
        [JsonProperty(PropertyName = "volume")]
        public double? Volume { get; set; }
        [JsonProperty(PropertyName = "tradeDate")]
        public string TradeDate { get; set; }
        [JsonProperty(PropertyName = "purchase")]
        public double? Purchase { get; set; }
        [JsonProperty(PropertyName = "price")]
        public double? Price { get; set; }
        [JsonProperty(PropertyName = "quantity")]
        public double? Quantity { get; set; }
        [JsonProperty(PropertyName = "commision")]
        public double? Commission { get; set; }
        [JsonProperty(PropertyName = "highLimit")]
        public double? HighLimit { get; set; }
        [JsonProperty(PropertyName = "lowlimit")]
        public double? LowLimit { get; set; }
        [JsonProperty(PropertyName = "comment")]
        public string Comment { get; set; }
    }

    public class Portfolios
    {
        public List<Portfolio> Items { get; set; }
    }

    /// <summary>
    /// Enum of Cosmos DB Containers
    /// </summary>
    public enum BazaarDBContainerNames
    {
        None = 0,
        [Description("AustralianPortfolio")]
        AUS = 1,
        [Description("IndianPortfolio")]
        IND = 2,
        [Description("USPortfolio")]
        USA = 3
    }


    public static class EnumExtension
    {
        public static string GetEnumDescription(this Enum enm)
        {
            var t = enm.GetType().GetField(enm.ToString());
            DescriptionAttribute[] attributes = (DescriptionAttribute[])t.GetCustomAttributes(typeof(DescriptionAttribute), false);

            if (attributes != null && attributes.Any())
            {
                return attributes.First().Description;
            }

            return enm.ToString();
        }

        public static string GetEnumFromDescription(string description, Type enumType)
        {
            try
            {
                foreach (var field in enumType.GetFields())
                {
                    DescriptionAttribute attribute
                        = Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute)) as DescriptionAttribute;
                    if (attribute == null)
                        continue;
                    if (attribute.Description == description)
                    {
                        return field.Name;
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return string.Empty;
        }
    }
}
