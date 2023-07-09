
import '../../styles/all.css';
import PhonePayment from '../../static/icons/phone_payment.png';
import Money from '../../static/icons/money.png';

import ButtonWithIcon from '../../baseComponents/ButtonWithIcon';
import { Link } from 'react-router-dom';

export function PaymentMethod(){


    return(
        <>
            <h4>Payment Method</h4>
            <div className="container-between">
                <div className=" w-45">
                    <Link to="/payment">
                        <ButtonWithIcon title="Online Payment"  icon={PhonePayment} />
                    </Link>
                </div>
                <div  className="w-45">
                    <Link to="/payment">
                        <ButtonWithIcon title="Pay at Cashier"  icon={Money} btnDisabled={true} />
                    </Link>
                </div>
            </div>
        </>
    );
}