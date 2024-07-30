// A mock function to mimic making an async request for data
export function fetchAllProducts( ) {
  return new Promise(async (resolve) =>{
     const response = await fetch('http://localhost:8000/products')
      const data = await response.json();
      resolve({data}) ; 
  }
  );
}


 export function fetchAllProductsByFilter( filter  ) {

  let queryString = '' ; 
  // filer  = { "category" : "smartphone" } 
  for ( let key in filter ) {
    queryString += `${key}=${filter[key]}&`
  }
  // console.log(  queryString) ; 
  // queryString ->  category=smartphone   ; 
  return new Promise(async (resolve) =>{
     const response = await fetch('http://localhost:8000/products?' + queryString ) ;
      const data = await response.json();
      resolve({data}) ; 
  }
  );
}
