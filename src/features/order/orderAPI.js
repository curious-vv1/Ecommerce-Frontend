export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://ecommercedb-3238.onrender.com/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}

export function fetchAllOrders(sort, pagination) {
  let queryString = "";

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    //Not hard-code
    const response = await fetch("https://ecommercedb-3238.onrender.com/orders?" + queryString);
    const data = await response.json();
    const totalOrders = await response.headers.get("X-Total-Count");
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}

export function updateOrder(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://ecommercedb-3238.onrender.com/orders/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}
