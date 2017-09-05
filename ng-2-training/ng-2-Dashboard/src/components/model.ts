
import React, { Component } from 'react';

var Model = function(props){
	var {profile_picture,last_name,first_name,current_company,current_location,current_role,total_experience} = props.data;

	return (
		<div id="myModal" className={props.show ? 'modal_show' : 'modal_hide'}>
		<div className="modal-content">
		<span onClick={props.closeModel} className="close">&times;</span>
		<div className="profile">
			 <div className="profile-pic">
					<img src={profile_picture} className="img-responsive" />
			 </div>
			 <div className="details">
						<h3 className="details-name">{first_name} {last_name}</h3>
						<h3 className="details-txt">total experience {total_experience}</h3>
						<h4 className="details-txt">Company : {current_company}</h4>
						<h4 className="details-txt">Location : {current_location}</h4>
						<h4 className="details-txt">Role :{current_role}</h4>
			 </div>
		</div>
		</div>
		</div>
	  )
	};



	export default Model;
