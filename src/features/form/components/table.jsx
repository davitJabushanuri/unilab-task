import { Pagination, usePagination } from "@/features/pagination";
import { useFilter } from "../hooks/useFilter";
import styles from "./styles/table.module.css";
import { useEffect, useState } from "react";

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
		data: students,
		isMaleFilterChecked,
		isFemaleFilterChecked,
		isActiveFilterChecked,
		isInactiveFilterChecked,
	} = useFilter();

	const [paginatedData, setPaginatedData] = useState([
		...students.slice((currentPage - 1) * 10, currentPage * 10),
	]);

	useEffect(() => {
		const filteredStudents = students
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

		setTotalPages(Math.ceil(filteredStudents.length / limit));

		setPaginatedData(
			filteredStudents.slice((currentPage - 1) * 10, currentPage * 10),
		);
	}, [
		currentPage,
		students,
		isMaleFilterChecked,
		isFemaleFilterChecked,
		isActiveFilterChecked,
		isInactiveFilterChecked,
		setTotalPages,
		limit,
		setCurrentPage,
	]);

	return (
		<div className={styles.container}>
			<table>
				<thead>
					<tr>
						<th>სტუდენტის სახელი და გვარი</th>
						<th>სტატუსი</th>
						<th>სქესი</th>
						<th>ქულები</th>
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
			<div
				style={{
					display: "grid",
					placeItems: "center",
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
