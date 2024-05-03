import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  img: string;
  title: string;
  category: string;
  price: number;
  count?: number;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const result = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (!result) {
        state.products.push({ ...action.payload, count: 1 });
      }
    },
    increaseCount: (state, action: PayloadAction<number>) => {
      state.products.map((product) => {
        if(product.count){
          if (product.id === action.payload) {
            product.count  += 1 ;
         }
        }
      });
    },
    decreaseCount: (state, action: PayloadAction<number>) => {
      state.products.map((product) => {
        if(product.count){
          if (product.id === action.payload && product.count > 1) {
             product.count -= 1 ;
          }
        }
      });
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      console.log(state.products.length);
    },
  },
});

export const { addToCart, increaseCount, decreaseCount, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
