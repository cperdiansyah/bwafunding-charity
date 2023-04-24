import { writable } from "svelte/store";

export const {
	REACT_APP_API_BASE_URL,
	REACT_APP_NODE_ENV,
	MIDTRANS_SERVER_KEY,
	MIDTRANS_CLIENT_KEY,
	ROLLUP_WATCH,
} = process.env;

export const charities = writable([]);
export const charity = writable({});

export async function getCharities() {
	const res = await fetch(`${REACT_APP_API_BASE_URL}/charities`);
	const data = await res.json();
	charities.set(data);

	if (res.ok) {
		return data;
	} else {
		throw new Error(data);
	}
}

export async function getCharity(id) {
	const res = await fetch(`${REACT_APP_API_BASE_URL}/charities/${id}`);
	const data = await res.json();
	charity.set(data);

	if (res.ok) {
		return data;
	} else {
		throw new Error(data);
	}
}

getCharities();
