import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const TuitStats = ({ tuit }) => {
	return (
		<div className="row" style={{ marginTop: '1em' }}>
			<span className="col-3">
				<FaRegComment /> {tuit.replys}
			</span>
			<span className="col-3">
				<FaRetweet /> {tuit.retuits}
			</span>
			<span className="col-3">
				{tuit.liked ? (
					<FaHeart style={{ color: 'red' }} />
				) : (
					<FaRegHeart />
				)}
				{tuit.likes}
			</span>
			<span className="col-3">
				<FaShare />
			</span>
  	</div>
	)
}
export default TuitStats;