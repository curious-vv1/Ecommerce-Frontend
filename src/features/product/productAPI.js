// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //Not hard-code
    const response = await fetch('https://ecommercedb-3238.onrender.com/products');
    const data = await response.json();
    resolve({ data });
  }

  );
}


export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    //Not hard-code
    const response = await fetch('https://ecommercedb-3238.onrender.com/products/'+id);
    const data = await response.json();
    resolve({ data });
  }

  );
}

export function fetchProdutsByFilters(filter,sort,pagination) {

  //filter: {"category":["smartphone","laptops"]}

  //sort : {_sort:"price",_order:"desc"}

  //multiple value krna h abhi sirf last value le rha h
  let queryString='';
  for(let key in filter){
    const categoryValues=filter[key];
    if(categoryValues.length>0){
      const lastCategoryValue=categoryValues[categoryValues.length-1];
      queryString +=`${key}=${ lastCategoryValue}&`;
    }
  }

  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }

  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }


  return new Promise(async (resolve) => {
    //Not hard-code
    const response = await fetch('https://ecommercedb-3238.onrender.com/products?'+queryString);
    const data = await response.json();
    const totalItems= await response.headers.get('X-Total-Count')
    resolve({ data:{products:data,totalItems:totalItems} });
  }

  );
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    //Not hard-code
    const response = await fetch('https://ecommercedb-3238.onrender.com/brands');
    const data = await response.json();
    resolve({ data });
  }

  );
}

export function fetchCategory() {
  return new Promise(async (resolve) => {
    //Not hard-code
    const response = await fetch('https://ecommercedb-3238.onrender.com/category');
    const data = await response.json();
    resolve({ data });
  }

  );
}



export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://ecommercedb-3238.onrender.com/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}


export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://ecommercedb-3238.onrender.com/products/"+update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}