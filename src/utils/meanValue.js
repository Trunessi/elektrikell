function addPrices(total, price) {
  return total + price;
}

export const meanValue = (data) => {
  return (
    data.map((d) => parseFloat(d.price)).reduce(addPrices, 0) / data.length
  );
};
