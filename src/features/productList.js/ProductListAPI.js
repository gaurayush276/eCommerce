
// A mock function to mimic making an async request for data


// not using this api beacause fetchAllProductsByFilter is handling the job 
export function fetchAllProducts( ) {     
  return new Promise(async (resolve) =>{
     const response = await fetch('http://localhost:8000/products')
      const data = await response.json();
      resolve({data}) ; 
  }
  );
}

 
export function fetchProductById( id ) {
  return new Promise(async (resolve) =>{
     const response = await fetch('http://localhost:8000/products/' + id )
      const data = await response.json();
      resolve({data}) ; 
      console.log(data) ; 
  }
  );
}
export function fetchCategories( ) {
  return new Promise(async (resolve) =>{
     const response = await fetch('http://localhost:8000/category')
      const data = await response.json();
      resolve({data}) ; 
  }
  );
}

export function fetchBrands( ) {
  return new Promise(async (resolve) =>{
     const response = await fetch('http://localhost:8000/brands')
      const data = await response.json();
      resolve({data}) ; 
  }
  );
}

export function createProduct (user) {

  return new Promise ( async (resolve) =>{
      const response = await fetch ( 'http://localhost:8000/products/' ,{
        method: 'POST' ,
          body: JSON.stringify(user) ,
          headers :{ 'content-type' : 'application/json'}
      } )
      const data = response.json() ;
      resolve({data}) ; 
  })
}


export function deleteProduct ( product ) {
   return new Promise ( async (resolve) =>{
    const response = await fetch ( 'http://localhost:8000/products/' + product.id ,{
      method: 'DELETE' ,
        body: JSON.stringify(product) ,
        headers :{ 'content-type' : 'application/json'}
    } )
    const data = await response.json() ;
    resolve({data}) ; 
})
}
 
export function updateProduct ( product ) {
   return new Promise ( async (resolve) =>{
    const response = await fetch ( 'http://localhost:8000/products/' + product.id ,{
      method: 'PATCH' ,
        body: JSON.stringify(product) ,
        headers :{ 'content-type' : 'application/json'}
    } )
    const data = await response.json() ;
    resolve({data}) ; 
})
}
 

 export function fetchAllProductsByFilter( filter  ) {

  let queryString = '' ; 
  // filer  = { "category" : "smartphone" } 
  for ( let key in filter ) {
    queryString += `${key}=${filter[key]}&`
  }
  console.log(  queryString ) ; 
  // queryString ->  category=smartphone   ; 
  return new Promise(async (resolve) =>{
     const response = await fetch('http://localhost:8000/products?' + queryString ) ;
      const data = await response.json();
      resolve({data}) ; 
       
  }
  );
}
