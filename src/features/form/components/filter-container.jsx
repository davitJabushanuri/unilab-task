import { useFilter } from "../hooks/useFilter";
import { Filter } from "./filter";

export const FilterContainer = () => {
	const { isFilterOpen } = useFilter();

	return isFilterOpen && <Filter />;
};
