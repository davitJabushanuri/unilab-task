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
	openFilter: () => set({ isFilterOpen: true }),
	closeFilter: () => set({ isFilterOpen: false }),

	searchData: (query) => {
		const newData = data.filter((student) => {
			const fullName = `${student["სახელი"]} ${student["გვარი"]}`;

			return fullName && fullName.toLowerCase().includes(query.toLowerCase());
		});

		set({ data: newData });
	},
}));
