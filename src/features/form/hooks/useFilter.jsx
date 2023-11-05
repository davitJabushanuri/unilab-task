import { create } from "zustand";
import data from "../../../../data.json";

export const useFilter = create((set) => ({
	data: [...data],

	isMaleFilterChecked: true,
	isFemaleFilterChecked: true,
	isActiveFilterChecked: true,
	isInactiveFilterChecked: true,

	toggleMaleFilter: () =>
		set((state) => ({ isMaleFilterChecked: !state.isMaleFilterChecked })),
	toggleFemaleFilter: () =>
		set((state) => ({ isFemaleFilterChecked: !state.isFemaleFilterChecked })),
	toggleActiveFilter: () =>
		set((state) => ({ isActiveFilterChecked: !state.isActiveFilterChecked })),
	toggleInactiveFilter: () =>
		set((state) => ({
			isInactiveFilterChecked: !state.isInactiveFilterChecked,
		})),

	isFilterOpen: false,
	toggleFilter: () => set((state) => ({ isFilterOpen: !state.isFilterOpen })),

	searchData: (query) => {
		const newData = data.filter((item) => {
			const values = Object.values(item);

			return values.some((value) => {
				if (typeof value === "string") {
					return value.toLowerCase().includes(query.toLowerCase());
				} else if (typeof value === "number") {
					return value.toString().includes(query);
				}

				return false;
			});
		});

		set({ data: newData });
	},
}));
