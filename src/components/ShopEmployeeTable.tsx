import { format } from "date-fns";
import { FC } from "react";
import { Table } from 'reactstrap';
import { IShopEmployee } from "../interfaces/IShopEmployee";

type props = {
    shopEmployees: IShopEmployee[]
}

const ShopEmployeeTable: FC<props> = ({ shopEmployees }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Shop Name
                    </th>
                    <th>
                        Employee Name
                    </th>
                    <th>
                        Work Date
                    </th>
                </tr>
            </thead>
            <tbody>
                {shopEmployees.map((e) => (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.shopName}</td>
                        <td>{e.employeeName}</td>
                        <td>{format(new Date(e.workDate), "yyyy-MM-dd")}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ShopEmployeeTable;