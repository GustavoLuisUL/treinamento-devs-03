function AddressItem({ address }) {
    return (
        <tr className="hover:bg-gray-100 transition-colors duration-200">
            <td className="border px-4 py-2">{address.cep}</td>
            <td className="border px-4 py-2">{address.logradouro}</td>
            <td className="border px-4 py-2">{address.complemento}</td>
            <td className="border px-4 py-2">{address.bairro}</td>
            <td className="border px-4 py-2">{address.localidade}</td>
            <td className="border px-4 py-2">{address.uf}</td>
        </tr>
    );
}

export default AddressItem;
