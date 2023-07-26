// Assignment 4
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { deleteTuit } from "../reducers/tuit-reducer"
import {useDispatch} from "react-redux";
import { FaTimes } from 'react-icons/fa';

const TuitItem = (
	{
		tuit = {
			"_id": 123, 
			"topic": "Weekend-reducer", 
			"userName": "Elmo",
			"title": "Feeling absolutely elated! Just had the most fantastic weekend getaway. 😄🌟",
			"time": "2h",   
			"image": "Elmo.jpg",
			"liked": true,
			"replys": 123,
			"retuits": 432,
			"likes": 12345,
			"handle": "@SesameStreet",
			"tuitContent": "It's time to relax, unwind, and enjoy some well-deserved fun! 😄 Whether you're spending time with loved ones, exploring the great outdoors, or simply taking a moment to yourself, make the most of this weekend! 🌈💕 Sending lots of positive vibes and happiness your way! 🤗💖"
		}
	}   
) => {
	const dispatch = useDispatch();
	const deleteTuitHandler = (id) => {
		dispatch(deleteTuit(id));
	}
	return(
		<li className="list-group-item border" style={{paddingLeft: '1em'}}>
      <div className="row">
				<div className="col-2">
					<img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
				</div>
				<div className="col-10">
					<div>
						<button className="btn float-end" onClick={() => deleteTuitHandler(tuit._id)}><FaTimes /></button>
						<span className="fw-bolder">{tuit.userName}</span> 
						<span style={{ paddingLeft: '0.3em', paddingRight: '0.5em', color: 'blue' }}><FaCheckCircle /></span>
						{tuit.handle} . {tuit.time}</div>
          <div>{tuit.tuitContent}</div>
					<div className="row"  style={{marginTop: '1em'}}>
						<span className="col-3">
							<FaRegComment /> {tuit.replys} 
						</span>
						<span className="col-3">
							<FaRetweet /> {tuit.retuits} 
						</span>
						<span className="col-3">
							{tuit.liked ? (
								<FaHeart style={{ color: 'red' }}/>
								) : (
								<FaRegHeart />
								)}
							{tuit.likes}
						</span>
						<span className="col-3">
							<FaShare /> 
						</span>
					</div>
				</div>
      </div>
    </li>
	);
};
export default TuitItem;
