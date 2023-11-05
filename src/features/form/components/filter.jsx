import { useState } from "react";
import styles from "./styles/filter.module.css";
import { useFilter } from "../hooks/useFilter";
import { ChevronRightIcon } from "../assets/chevron-right-icon";

export const Filter = () => {
	const {
		isFilterOpen,
		toggleMaleFilter,
		isMaleFilterChecked,
		isFemaleFilterChecked,
		toggleFemaleFilter,
		isActiveFilterChecked,
		isInactiveFilterChecked,
		toggleActiveFilter,
		toggleInactiveFilter,
	} = useFilter();

	if (!isFilterOpen) return null;

	const statusFilters = [
		{
			name: "ACTIVE",
			checked: isActiveFilterChecked,
			onChange: toggleActiveFilter,
			id: 1,
		},
		{
			name: "INACTIVE",
			checked: isInactiveFilterChecked,
			onChange: toggleInactiveFilter,
			id: 2,
		},
	];

	const genderFilters = [
		{
			name: "MALE",
			checked: isMaleFilterChecked,
			onChange: toggleMaleFilter,
			id: 1,
		},
		{
			name: "FEMALE",
			checked: isFemaleFilterChecked,
			onChange: toggleFemaleFilter,
			id: 2,
		},
	];

	return (
		<div className={styles.container}>
			<FilterGroup filterName="სტუდენტის სტატუსი" filters={statusFilters} />
			<FilterGroup filterName="სქესი" filters={genderFilters} />
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
					{filters.map((filter) => {
						return (
							<FilterOption
								key={filter.id}
								name={filter.name}
								onChange={filter.onChange}
								checked={filter.checked}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

const FilterOption = ({ name, onChange, checked }) => {
	return (
		<div className={styles.filterOption}>
			<label>
				{name}
				<input
					type="checkbox"
					name={name}
					onChange={onChange}
					checked={checked}
				/>
				<span className={styles.checkmark}></span>
			</label>
		</div>
	);
};
