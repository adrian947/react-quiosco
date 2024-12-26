import { create } from 'zustand';

export const useStore = create((set) => ({
  categorieName: 'Cafe',
  productSelected: null,
  changeCategorieName: (data) => set({ categorieName: data }),
  setProductSelected: (data) => set({ productSelected: data }),
}));
