import { create } from 'zustand';

export const useStore = create((set, get) => ({
  categories: [],
  categorieName: 'Cafe',
  products: [],
  productSelected: null,
  productsToOrder: [],
  setCategories: (data) => set({ categories: data }),
  setProducts: (data) => set({ products: data }),
  changeCategorieName: (data) => set({ categorieName: data }),
  setProductSelected: (data) => set({ productSelected: data }),
  clearProductsToOrder: () => set({ productsToOrder: [] }),
  addProductsToOrder: (data) =>
    set((state) => ({
      productsToOrder: [...state.productsToOrder, data],
    })),

  deleteProductsToOrder: (data) =>
    set((state) => ({
      productsToOrder: state.productsToOrder.filter(
        (products) => products.id !== data.id,
      ),
    })),
  getTotal: () =>
    get().productsToOrder.reduce((acc, val) => acc + val.precio, 0),
}));
