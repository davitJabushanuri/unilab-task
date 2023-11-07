import { Pagination, usePagination } from "@/features/pagination";
import { useFilter } from "../hooks/useFilter";
import styles from "./styles/table.module.css";
import { useCallback, useEffect, useState } from "react";
import { SortIcon } from "../assets/sort-icon";

export const Table = () => {
	let limit = 10;
	let total = 100;
	const {
		currentPage,
		totalPages,
		handlePageChange,
		setTotalPages,
		setCurrentPage,
	} = usePagination(total, limit);

	const {
		data,
		isMaleFilterChecked,
		isFemaleFilterChecked,
		isActiveFilterChecked,
		isInactiveFilterChecked,
	} = useFilter();

	const [students, setStudents] = useState(data);

	const [paginatedData, setPaginatedData] = useState([
		...students.slice((currentPage - 1) * 10, currentPage * 10),
	]);

	const handleFilter = useCallback(() => {
		const filteredStudents = data
			.filter((student) => isMaleFilterChecked || student["სქესი"] !== "MALE")
			.filter(
				(student) => isFemaleFilterChecked || student["სქესი"] !== "FEMALE",
			)
			.filter(
				(student) => isActiveFilterChecked || student["სტატუსი"] !== "ACTIVE",
			)
			.filter(
				(student) =>
					isInactiveFilterChecked || student["სტატუსი"] !== "INACTIVE",
			);

		const filteredLength = filteredStudents.length;

		setStudents(filteredStudents);
		setTotalPages(Math.ceil(filteredLength / limit));
		setCurrentPage(1);
	}, [
		isMaleFilterChecked,
		isFemaleFilterChecked,
		isActiveFilterChecked,
		isInactiveFilterChecked,
		data,
		setCurrentPage,
		setTotalPages,
		limit,
	]);

	useEffect(() => {
		handleFilter();
	}, [handleFilter]);

	const [sortOrder, setSortOrder] = useState("desc");

	const handleSort = () => {
		setStudents(
			students.sort((a, b) => {
				if (sortOrder === "desc") {
					return b["ქულები"] - a["ქულები"];
				} else {
					return a["ქულები"] - b["ქულები"];
				}
			}),
		);

		setPaginatedData(students.slice((currentPage - 1) * 10, currentPage * 10));
		setSortOrder(sortOrder === "desc" ? "asc" : "desc");
		setCurrentPage(1);
	};

	useEffect(() => {
		setPaginatedData(students.slice((currentPage - 1) * 10, currentPage * 10));
	}, [currentPage, students]);

	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<table tabIndex={0}>
					<thead>
						<tr>
							<th>სტუდენტის სახელი და გვარი</th>
							<th>სტატუსი</th>
							<th>სქესი</th>
							<th>
								<button
									className={styles.points}
									scope="col"
									tabIndex={0}
									aria-label={`Sort by points, ${
										sortOrder === "desc" ? "descending" : "ascending"
									}`}
									onClick={handleSort}
								>
									ქულები
									<SortIcon />
								</button>
							</th>
							<th>პირადი ნომერი</th>
							<th>მეილი</th>
							<th>მობილურის ნომერი</th>
							<th>მისამართი</th>
							<th>დაბადების თარიღი</th>
						</tr>
					</thead>

					<tbody>
						{paginatedData.map((student, index) => {
							return (
								<tr key={index}>
									<td>
										{student["სახელი"]} {student["გვარი"]}
									</td>
									<td>{student["სტატუსი"]}</td>
									<td>{student["სქესი"]}</td>
									<td>{student["ქულები"]}</td>
									<td>{student["პირადი ნომერი"]}</td>
									<td>{student["მეილი"]}</td>
									<td>{student["მობილურის ნომერი"]}</td>
									<td>{student["მისამართი"]}</td>
									<td>{student["დაბადების თარიღი"]}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div
				style={{
					display: "grid",
					placeItems: "center",
					marginTop: "2rem",
				}}
			>
				<Pagination
					currentPage={currentPage}
					onPageChange={handlePageChange}
					totalPages={totalPages}
				/>
			</div>
		</div>
	);
};
