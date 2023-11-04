import { useData } from "../hooks/useData";
import styles from "./styles/table.module.css";

export const Table = () => {
	const { data: students } = useData();

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
					{students.map((student, index) => {
						return (
							<tr key={index}>
								<td>{student["სახელი"]}</td>
								<td>{student["სტატუსი"]}</td>
								<td>{student["სქესი"]}</td>
								<td>{student["ქულები"]}</td>
								<td>{student["პირადი ნომერი"]}</td>
								<td>{student["მაილი"]}</td>
								<td>{student["მობილურის ნომერი"]}</td>
								<td>{student["მისამართი"]}</td>
								<td>{student["დაბადების თარიღი"]}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
