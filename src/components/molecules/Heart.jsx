import { useState } from "react";
import HeartImg from "../../assets/img/me-gusta.png";

function Heart() {

    const [liked, setLiked] = useState(false);

    const handlerButtonClick = (e) => {
        setLiked(!liked)
    }

    const heartColor = liked ? 'red' : '#d9d9d9';

    return ( 
        <button onClick={handlerButtonClick} className="boton-img-svg">
            <svg
            xmlns={HeartImg}
            viewBox="0 0 24 24"
            fill={heartColor}
            width="30px"
            height="30px"
            className="svg-heart-img">
                 <path d="M12,21.35L4.78,14.13C2.34,11.69 1,9.31 1,7.5C1,4.42 3.42,2 6.5,2C8.19,2 9.78,2.82 11,4.05C12.22,2.82 13.81,2 15.5,2C18.58,2 21,4.42 21,7.5C21,9.31 19.66,11.69 17.22,14.13L12,19.36L6.78,14.13C4.34,11.69 3,9.31 3,7.5C3,4.42 5.42,2 8.5,2C10.19,2 11.78,2.82 13,4.05C14.22,2.82 15.81,2 17.5,2C20.58,2 23,4.42 23,7.5C23,9.31 21.66,11.69 19.22,14.13L12,21.35Z" />
            </svg>
        </button>
     );
}

export default Heart;