let absolve;
const core = new Promise(resolve => absolve = resolve);

Module.onRuntimeInitialized = () => {
	absolve({
		renderPassword: Module.cwrap("renderPassword", "string", ["string", "string", "string"]),
	})
}
