import { FC } from "react";
import { Table } from 'reactstrap';
import { IShop } from "../interfaces/IShop";

type props = {
    shops: IShop[]
}

const ShopTable: FC<props> = ({ shops }) => {
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
                </tr>
            </thead>
            <tbody>
                {shops.map((e) => (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.telephone}</td>
                        <td>{e.address}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ShopTable;