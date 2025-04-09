const API_BASE = "http://localhost:8080/api";

export async function fetchAddressByCep(cep) {
    const response = await fetch(`${API_BASE}/address/${cep}`);
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
    }
    return await response.json();
}

export async function fetchAddresses(orderBy = "", direction = "asc") {
    let url = `${API_BASE}/addresses`;
    if (orderBy) {
        url += `?orderBy=${orderBy}&direction=${direction}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
    }
    return await response.json();
}