import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchAllProductsByFilter, fetchCategories ,fetchBrands, fetchProductById, createProduct ,deleteProduct, updateProduct } from './ProductListAPI';

const initialState = {
   products: [],
   brands: [],
   categories: [],
  status: 'idle',
  selectedProduct :null 
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchAllProductsAsync = createAsyncThunk(
  'products/fetchAllProducts',
  async ( ) => {
    const response = await fetchAllProducts( );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchProductByIdAsync = createAsyncThunk(
  'products/fetchProductById',
  async ( id) => {
    const response = await fetchProductById(id );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const createProductAsync = createAsyncThunk(
  'products/createProduct',
  async ( product) => {
    const response = await createProduct(product );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const deleteProductAsync = createAsyncThunk(
  'products/deleteProduct',
  async ( product) => {
    const response = await deleteProduct(product );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateProductAsync = createAsyncThunk(
  'products/updateProduct',
  async ( product) => {
    const response = await updateProduct(product );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchCategoriesAsync = createAsyncThunk(
  'category/fetchCategories',
  async ( ) => {
    const response = await fetchCategories( );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchBrandsAsync = createAsyncThunk(
  'brands/fetchBrands',
  async ( ) => {
    const response = await fetchBrands( );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchAllProductsByFilterAsync = createAsyncThunk(
  'product/fetchAllProductsByFilter',
  async (filter ) => {
    const response = await fetchAllProductsByFilter( filter );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    
    
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
         
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload;
         
      })
      .addCase(fetchAllProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
         
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products.push(action.payload);
      })
      .addCase(deleteProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =  state.products.findIndex( ind => action.payload === ind  )     
        state.products.splice(index , 1 ) ; 
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =  state.products.findIndex( ind => action.payload.id === ind.id  )     
        state.products[index] = action.payload  ; 
      });
  },
});

export const { increment } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAllProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;
export const selectProductById= (state) => state.product.selectedProduct;

export default productSlice.reducer;