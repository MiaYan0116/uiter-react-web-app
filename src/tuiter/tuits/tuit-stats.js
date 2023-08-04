import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaRegThumbsDown } from 'react-icons/fa';
import { useState } from "react";



const TuitStats = ({ tuit }) => {
	const dispatch = useDispatch();
	const[liked, setLiked] = useState(false);
	const[disliked, setDisliked] = useState(0);
	const handleLikeClick = () => {
		setLiked(!liked);
		dispatch(updateTuitThunk({...tuit, likes: liked? tuit.likes - 1: tuit.likes + 1}));
	};
	const handleDislikeClick = () => {
		setDisliked(!disliked);
		dispatch(updateTuitThunk({...tuit, dislikes: disliked? tuit.dislikes - 1: tuit.dislikes + 1}));
	};
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
					style={{color: liked ? "red" : ""}}
					onClick={handleLikeClick}
				/>
				<span className="ms-2">{liked ? tuit.likes + 1: tuit.likes}</span>
			</span>
			{/* dislike icon */}
			<span className="col-2">
				<FaRegThumbsDown
					style={{color: disliked ? "red" : ""}}
					onClick={handleDislikeClick}
				/>
				<span className="ms-2">{disliked ? tuit.dislikes + 1: tuit.dislikes}</span>
			</span>
			<span className="col-3">
				<FaShare />
			</span>
  	</div>
	)
}
export default TuitStats;