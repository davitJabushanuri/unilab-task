import { create } from "zustand";

export const useData = create((set) => ({
	data: {},
	isFilterOpen: false,
	toggleFilter: () => set((state) => ({ isFilterOpen: !state.isFilterOpen })),
	setData: (data) => set({ data }),
	filterData: (data) => set({ data }),
	searchData: (data) => set({ data }),
}));
