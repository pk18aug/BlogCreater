import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((data) => data.json())
      .then((res) => setdata(res[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
