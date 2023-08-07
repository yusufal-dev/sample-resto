import '../../App.css';
import '../../styles/basicStyle.css';
import '../../styles/layoutStyle.css';
import '../../styles/utilStyle.css';

import Book from '../../static/icons/Book.png';
import Paper from '../../static/icons/Paper.png';

import { Link } from 'react-router-dom';

export default function PageBottom({extraComponent, extraClass}){


    return(
        <div className={"container-float btm-0 vw-100 bg-white"+extraClass}>
            {
                extraComponent ? 
                <div className="container ">
                    {extraComponent}
                </div>

                :

                <></>
            }
            <div className=" bg-white card-t-shadow w-100">
                <div className="container mt-1">
                    <div className="container-between ">
                        <div className="flex-left  w-40 text-center">
                            <Link to="/menu">
                                <img src={Book} />
                                
                            </Link>
                            <div>Menu</div>
                        </div>
                        <div  className="flex-right w-50 text-center ">
                            <Link to="/order">
                                <img src={Paper} />
                                
                            </Link>
                            <div className="text-primary">Order List</div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        
        </div>
    )
}