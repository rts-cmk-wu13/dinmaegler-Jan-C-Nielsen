import React, { useState } from 'react';
import { Link } from "react-router";
import envelope from "/envelope.png"
import inl from "/in.png";

export default function AgentCard({ id, name, title, phone, email, image
}) {

    const handleSectionClick = (event) => {
        event.preventPropagation();
    };

    const handleImageClick = async (event, id) => {
        event.preventPropagation();

        // const user = sessionStorage.getItem("userid");
        // const token = sessionStorage.getItem("token");

        // const response = await fetch("https://dinmaegler.onrender.com/users/" + user, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": 'Bearer ' + token,
        //     },
        //     body: JSON.stringify(data)
        // })

        // const responseData = await response.json()
        // console.log("response data:" + responseData);
    };

    return (
        <>
            <article className="agentcard">

                <Link to={`/realestateagent/` + id} onClick={(event, id) => handleSectionClick(event, id)}>
                    <section>
                        <img className='agentcard_img' src={image.url} alt={title} />

                        <div className="agentcard__textbox">
                            <p className="agentcard__name">{name}</p>
                            <p className="agentcard__title">{title}</p>
                        </div>

                    </section>
                </Link>
                <div> <Link to={`mailto:test@gmail.com`} ><img className='agentcard_icon' src={envelope}></img></Link>
                    <Link to={`https://linkedin.com`} ><img  className='agentcard_icon'  src={inl}></img></Link></div>
            </article >
        </>
    )
}