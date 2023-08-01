// Assignment 4
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { deleteTuit } from "../reducers/tuit-reducer"
import { useDispatch } from "react-redux";
import { FaTimes } from 'react-icons/fa';

const TuitItem = ({tuit}) => {
	const dispatch = useDispatch();
	const deleteTuitHandler = (id) => {
		dispatch(deleteTuit(id));
	}
	return(
		<li className="list-group-item border" style={{paddingLeft: '1em'}}>
      <div className="row">
				<div className="col-2">
					<img width={70} className="float-end rounded-5 img-fluid" src={`/images/${tuit.image}`} alt=""/>
				</div>
				<div className="col-10">
					<div>
						<button className="btn float-end" onClick={() => deleteTuitHandler(tuit._id)}><FaTimes /></button>
						<span className="fw-bolder">{tuit.userName}</span> 
						<span style={{ paddingLeft: '0.3em', paddingRight: '0.5em', color: 'blue' }}><FaCheckCircle /></span>
						{tuit.handle} . {tuit.time}
					</div>
          <div>{tuit.tuitContent}</div>
					<TuitStats tuit = {tuit}/>
				</div>
      </div>
    </li>
	);
};
export default TuitItem;
