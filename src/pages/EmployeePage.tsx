import axios from "axios";
import { useEffect, useState } from "react";
import { EmployeeTable, NavBar } from "../components";
import { IEmployee } from "../interfaces/IEmployee";
import { apiurl } from '../constants';

const EmployeePage = () => {
    const [employees, setEmployees] = useState<IEmployee[]>([]);

    useEffect(() => {
        const loadEmployees = async () => {
            try {
                const request = await axios.get<IEmployee[]>(`${apiurl}/api/employee`);
                const data = request.data;
                setEmployees(data);
            } catch (err) {
                alert("An error has ocurred and employees was not loaded");
            }
        }

        loadEmployees();
    }, [])

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1 className="mt-5 mb-5">Employee Page</h1>
                <EmployeeTable employees={employees} />
            </div>

        </>
    )
}

export default EmployeePage;