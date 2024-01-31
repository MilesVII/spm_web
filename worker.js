importScripts("spm_core.js", "load_core.js");

onmessage = async e => {
	const api = await core;
	const [id, ...params] = e.data;
	const password = api.renderPassword(...params);
	postMessage({id, password});
};
