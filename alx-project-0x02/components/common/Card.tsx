import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) =>{
    return(
        <div className="bg-white shadow-md overflow-hidden  hover:shadow-lg transition-shadow duration-3000">
            <h2 className="text-2xl text-gray-950">{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card;