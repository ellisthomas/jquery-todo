var FbApi = (() => {
	let todos = [];
	
	return {
		todoGetter : () => {
			return todos;
		}
	};
})();