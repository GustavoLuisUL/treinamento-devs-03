import { useState } from "react";
import { fetchAddressByCep } from "../services/addressService";

function AddressForm({ onAddressFetched, onError, onRefreshList }) {
    const [cep, setCep] = useState("");

    const handleSearch = async () => {
        try {
            const address = await fetchAddressByCep(cep);
            onAddressFetched(address);
            onRefreshList();
            setCep("");
        } catch (error) {
            onError(error.message);
        }
    };

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex flex-col md:flex-row items-center">
                <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="Digite o CEP"
                    className="w-full md:w-auto flex-grow border rounded py-2 px-3 mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200"
                >
                    Buscar
                </button>
            </div>
        </div>
    );
}

export default AddressForm;
