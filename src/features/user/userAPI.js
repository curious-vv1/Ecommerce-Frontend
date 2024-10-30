// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrder(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://ecommercedb-3238.onrender.com/orders/?user.id='+userId);
    const data = await response.json();
    resolve({ data });
  }

  );
}


export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://ecommercedb-3238.onrender.com/users/'+userId);
    const data = await response.json();
    resolve({ data });
  }

  );
}


export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://ecommercedb-3238.onrender.com/users/"+update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

