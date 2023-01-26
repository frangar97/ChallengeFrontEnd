import axios from "axios";
import { useEffect, useState } from "react";
import { NavBar, ShopTable } from "../components";
import { apiurl } from "../constants";
import { IShop } from "../interfaces/IShop";

const ShopPage = () => {
    const [shops, setShops] = useState<IShop[]>([]);

    useEffect(() => {
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
    }, []);

    return (
        <>
            <NavBar />

            <div className="container mt-5">
                <h1 className="mt-5 mb-5">Shop Page</h1>
                <ShopTable shops={shops} />
            </div>

        </>
    )
}

export default ShopPage;