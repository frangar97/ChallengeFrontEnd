import { format } from "date-fns";
import { FC } from "react";
import { Table } from 'reactstrap';
import { IEmployee } from "../interfaces/IEmployee";

type props = {
    employees: IEmployee[]
}

const EmployeeTable: FC<props> = ({ employees }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Telephone
                    </th>
                    <th>
                        Address
                    </th>
                    <th>
                        Employment Date
                    </th>
                </tr>
            </thead>
            <tbody>
                {employees.map((e) => (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.telephone}</td>
                        <td>{e.address}</td>
                        <td>{format(new Date(e.employmentDate), "yyyy-MM-dd")}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default EmployeeTable;