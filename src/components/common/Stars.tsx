import { propsStart } from "@/app/types/props.interface";
import { Star } from "lucide-react";
import React from "react";

const Stars = (props: propsStart) => {
    return (
        <div className="flex">
            {Array.from({ length: 5 }).map((_, index: number) => (
                <Star
                    key={index}
                    className={` ${props.className}`}
                    fill={index < props.startNumber ? "#fbbf24" : "none"}
                    stroke={index < props.startNumber ? "#fbbf24" : "#d1d5db"}
                />
            ))}
        </div>
    );
};

export default Stars;
