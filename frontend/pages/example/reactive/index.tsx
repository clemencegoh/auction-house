import type { NextPage } from "next";
import React from "react";

const Reactive: NextPage = () => {
	const [count, setCount] = React.useState(0);

	return (
		<div>
			<p>This is a reactive component! {count}</p>
			<button onClick={() => setCount(count + 1)}>
				Click me to increase count
			</button>
		</div>
	);
};

export default Reactive;
