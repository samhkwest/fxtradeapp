let comments = [
	{
		id: 1,
		title: "This is title",
		desc: "This is description"
	},
	{
		id: 2,
		title: "This is title 2",
		desc: "This is description 2"
	},
	{
		id: 3,
		title: "This is title 3",
		desc: "This is description 3"
	}
];

class FxTradeApi {
	static getAllTrades() {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				resolve(comments);
			}, 0)
		});
	}
}

export default FxTradeApi;