import type { NextPage } from "next";
import { useRouter } from "next/router";

const Dyno: NextPage = () => {
	const router = useRouter();
	const { id, q } = router.query;

	return (
		<p>
			Dynamic id: {id} with q: {q}
		</p>
	);
};

export default Dyno;
