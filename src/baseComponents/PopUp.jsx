import { useEffect } from "react";

export default function PopUp({component}){

    useEffect(()=>{
        const body = document.body;
        body.style.overflow = "hidden"

        return function close(){
            body.style.overflow = "auto"
        }

    }, [])

    return(
        <div className="modal-container">
            {component}
        </div>
    );
}