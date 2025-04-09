import { useState, useEffect } from "react";
import AddressForm from "./components/AddressForm";
import AddressList from "./components/AddressList";
import { fetchAddresses } from "./services/addressService";

function App() {
    const [address, setAddress] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [error, setError] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const [direction, setDirection] = useState("asc");

    const refreshAddresses = async (order = orderBy, dir = direction) => {
        try {
            setError("");
            const data = await fetchAddresses(order, dir);
            setAddresses(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSort = (field) => {
        const newDirection = orderBy === field && direction === "asc" ? "desc" : "asc";
        setOrderBy(field);
        setDirection(newDirection);
        refreshAddresses(field, newDirection);
    };

    useEffect(() => {
        refreshAddresses();
    }, []);

    const handleAddressFetched = (addr) => {
        setAddress(addr);
    };

    const handleError = (msg) => {
        setError(msg);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-center text-blue-600">Consulta de Endereços</h1>
            </header>
            <div className="max-w-4xl mx-auto">
                <AddressForm onAddressFetched={handleAddressFetched} onError={handleError} onRefreshList={refreshAddresses} />
                {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
                {address && (
                    <div className="bg-white shadow-md rounded p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Endereço Encontrado</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><strong>CEP:</strong> {address.cep}</div>
                            <div><strong>Logradouro:</strong> {address.logradouro}</div>
                            <div><strong>Complemento:</strong> {address.complemento}</div>
                            <div><strong>Bairro:</strong> {address.bairro}</div>
                            <div><strong>Cidade:</strong> {address.localidade}</div>
                            <div><strong>Estado:</strong> {address.uf}</div>
                        </div>
                    </div>
                )}
                <section>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Endereços Armazenados</h2>
                    <AddressList addresses={addresses} onSort={handleSort} />
                </section>
            </div>
            <footer className="mt-8 text-center text-gray-600">
                &copy; {new Date().getFullYear()} - Consulta de Endereços
            </footer>
        </div>
    );
}

export default App;
