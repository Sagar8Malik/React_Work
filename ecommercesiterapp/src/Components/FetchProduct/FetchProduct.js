import { useContext, useEffect, useState } from "react";
import { Store } from "../../Store";

const FetchProduct = (id) => {
  const [data, setData] = useState(null);
  const { state } = useContext(Store);
  const { products } = state;

  useEffect(() => {
    const product = products.find((p) => Number(p.id) === Number(id));
    setData(product);
  }, [id, products]);

  return data;
};

export default FetchProduct;
