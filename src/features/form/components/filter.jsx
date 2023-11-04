import { useState } from "react";
import styles from "./styles/filter.module.css";
import { useData } from "../hooks/useData";
import { ChevronRightIcon } from "../assets/chevron-right-icon";

export const Filter = () => {
	const { isFilterOpen } = useData();

	if (!isFilterOpen) return null;

	return (
		<div className={styles.container}>
			<FilterGroup
				filterName="სტუდენტის სტატუსი"
				filters={[{ სტატუსი: "ACTIVE" }, "ACTIVE", "INACTIVE"]}
			/>
			<FilterGroup filterName="სქესი" filters={["MALE", "FEMALE"]} />
			<div className={styles.border} />
		</div>
	);
};

const FilterGroup = ({ filterName, filters }) => {
	const [areFiltersOpen, setAreFiltersOpen] = useState(false);

	return (
		<div className={styles.filterGroup}>
			<button
				className={styles.filterName}
				onClick={() => setAreFiltersOpen(!areFiltersOpen)}
			>
				<span
					style={{
						transform: areFiltersOpen
							? "rotate(90deg) translateY(10%)"
							: "rotate(0)",
						transition: "transform 0.2s",
					}}
				>
					<ChevronRightIcon />
				</span>
				{filterName}
			</button>

			{areFiltersOpen && (
				<div className={styles.filters}>
					{filters.map((filter) => (
						<FilterOption key={filter} filter={filter} />
					))}
				</div>
			)}
		</div>
	);
};

const FilterOption = ({ filter }) => {
	const { filterData } = useData();

	return (
		<div className={styles.filterOption}>
			<label>
				{filter}
				<input
					type="checkbox"
					name={filter}
					defaultChecked={true}
					onChange={(e) =>
						filterData({ checked: e.target.checked, name: filter })
					}
				/>
				<span className={styles.checkmark}></span>
			</label>
		</div>
	);
};
