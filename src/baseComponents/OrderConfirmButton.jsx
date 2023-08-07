import ButtonConfirm from "./ButtonConfirm";
import ButtonCancel from "./ButtonCancel";
import { Link } from "react-router-dom";

export default function OrderConfirmButton({imgButton, loading, title, description, button1, button2, onClickButton1, onClickButton2, onClickButtonOk, confirmUrl}){


    

    return(

        <div className='fixed-b box-top-radius  w-100 bg-white text-center text-small2'>
            <div className="container mt-3">
                {
                    loading ?
                    "Loading..."
                    :
                    <img src={imgButton} className=" w-40" />
                }
                
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>

            <div className="container-between mb-3">

                {
                    button2 ? 
                    <>
                        <div className="container w-50">
                            <ButtonCancel title={button2} onClick={onClickButton2} disabled={loading ? true : false} />
                        </div>  
                        <div className="container w-50">
                            <ButtonConfirm title={button1} onClick={onClickButton1}  disabled={loading ? true : false}  />
                        </div>
                    </>
                    : 
                    <div className="container w-100">
                        <Link to={confirmUrl}>
                            <ButtonConfirm title={button1} onClick={onClickButtonOk} />
                        </Link>
                            
                        </div>
                }
                
                    
                
                    
                
            </div>
            
            
		</div>
       
    );
}