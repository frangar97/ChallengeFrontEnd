import axios from "axios";
import { useEffect, useState, FormEvent } from "react";
import { EmployeeTable, NavBar } from "../components";
import { IEmployee } from "../interfaces/IEmployee";
import { apiurl } from '../constants';
import { IEmployeeType } from "../interfaces/IEmployeeType";
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const EmployeePage = () => {
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [employeeTypes, setEmployeeTypes] = useState<IEmployeeType[]>([]);
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [address, setAddress] = useState("");
    const [employeeTypeId, setEmployeeTypeId] = useState(0);

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

        const loadEmployeeTypes = async () => {
            try {
                const request = await axios.get<IEmployeeType[]>(`${apiurl}/api/employeetype`);
                const data = request.data;
                setEmployeeTypes(data);
            } catch (err) {
                alert("An error has ocurred and employees was not loaded");
            }
        }

        loadEmployees();
        loadEmployeeTypes();
    }, []);

    const createEmployee = async () => {
        try {
            const employmentDate = new Date();
            const request = await axios.post<IEmployee>(`${apiurl}/api/employee`, { name, address, telephone, employeeTypeId, employmentDate });
            const data = request.data;
            setEmployees((prev) => [...prev, data]);
        } catch (err) {
            alert("An error has ocurred and employees was not created");
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name === "" || address === "" || telephone === "" || employeeTypeId === 0) {
            alert("Please enter all fields");
            return;
        }

        createEmployee();
    }

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1 className="mt-5 mb-5">Employee Page</h1>

                <div className="mb-5">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        Name
                                    </Label>
                                    <Input onChange={e => setName(e.target.value)} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        Telephone
                                    </Label>
                                    <Input onChange={e => setTelephone(e.target.value)} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        Address
                                    </Label>
                                    <Input onChange={e => setAddress(e.target.value)} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        Employee Type
                                    </Label>
                                    <select className="form-control" value={employeeTypeId} onChange={e => setEmployeeTypeId(parseInt(e.target.value))}>
                                        <option value={0}>None</option>
                                        {employeeTypes.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                                    </select>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button>
                            Create Employee
                        </Button>
                    </Form>
                </div>

                <EmployeeTable employees={employees} />
            </div>

        </>
    )
}

export default EmployeePage;