import AddressItem from "./AddressItem";

function AddressList({ addresses, onSort }) {
    return (
        <div className="overflow-x-auto">
            <div className="flex justify-end mb-4">
                <button onClick={() => onSort("cidade")} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded mr-2">
                    Ordenar por Cidade
                </button>
                <button onClick={() => onSort("bairro")} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded mr-2">
                    Ordenar por Bairro
                </button>
                <button onClick={() => onSort("estado")} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
                    Ordenar por Estado
                </button>
            </div>
            <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
                <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">CEP</th>
                    <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">Logradouro</th>
                    <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">Complemento</th>
                    <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">Bairro</th>
                    <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">Cidade</th>
                    <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">Estado</th>
                </tr>
                </thead>
                <tbody className="text-gray-700">
                {addresses.map((addr, index) => (
                    <AddressItem key={index} address={addr} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AddressList;
