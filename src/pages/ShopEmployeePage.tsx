import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Row, Col, FormGroup, Label, Button, Input } from 'reactstrap';
import { NavBar } from "../components";
import { apiurl } from '../constants';
import { IEmployee } from '../interfaces/IEmployee';
import { IShop } from '../interfaces/IShop';

const ShopEmployeePage = () => {
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [shops, setShops] = useState<IShop[]>([]);
    const [employeeId, setEmployeeId] = useState(0);
    const [shopId, setShopId] = useState(0);
    const [date, setDate] = useState("");

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
        const loadShops = async () => {
            try {
                const request = await axios.get<IShop[]>(`${apiurl}/api/shop`);
                const data = request.data;
                setShops(data);
            } catch (err) {
                alert("An error has ocurred and shops was not loaded");
            }
        }

        loadShops();
        loadEmployees();
    }, []);

    return (
        <>
            <NavBar />

            <div className="container mt-5">
                <h1 className="mt-5 mb-5">ShopEmployee Page</h1>

                <div className="mb-5">
                    <Form >
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        Employee
                                    </Label>
                                    <select className="form-control" value={employeeId} onChange={e => setEmployeeId(parseInt(e.target.value))}>
                                        <option value={0}>None</option>
                                        {employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                                    </select>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        Shop
                                    </Label>
                                    <select className="form-control" value={shopId} onChange={e => setShopId(parseInt(e.target.value))}>
                                        <option value={0}>None</option>
                                        {shops.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                                    </select>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        Work Date
                                    </Label>
                                    <Input type='date' onChange={e => setDate(e.target.value)} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button>
                            Create Employee
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ShopEmployeePage;