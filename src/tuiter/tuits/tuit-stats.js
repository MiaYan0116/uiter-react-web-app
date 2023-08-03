import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaRegThumbsDown } from 'react-icons/fa';


const TuitStats = ({ tuit }) => {
	const dispatch = useDispatch();
	return (
		<div className="row" style={{ marginTop: '1em' }}>
			<span className="col-3">
				<FaRegComment /> {tuit.replys}
			</span>
			<span className="col-2">
				<FaRetweet /> {tuit.retuits}
			</span>
			<span className="col-2">
				<FaHeart
					className="text-danger"
					onClick={() =>
						dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
					}
				/>
				<span className="ms-2">{tuit.likes}</span>
			</span>
			{/* dislike icon */}
			<span className="col-2">
				<FaRegThumbsDown
					onClick={() =>
						dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
					}
				/>
				<span className="ms-2">{tuit.dislikes}</span>
			</span>
			<span className="col-3">
				<FaShare />
			</span>
  	</div>
	)
}
export default TuitStats;