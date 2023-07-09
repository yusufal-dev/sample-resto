import '../../styles/all.css';
import OvoIcon from '../../static/icons/ovo.svg';
import GopayIcon from '../../static/icons/gopay.svg';
import DanaIcon from '../../static/icons/dana.svg';
import ShopeepayIcon from '../../static/icons/shopeepay.svg';

import RadioWithIcon from '../../baseComponents/RadioWithIcon';


export function PaymentChannel(){

    return(
        <>
            <div className="container">
                <h4 className="mb-2 mt-2">Payment Channel <small className="text-primary">*</small></h4>
                <div className="mt-2">
                    <RadioWithIcon title="OVO" icon={OvoIcon} name="payment_method" />
                </div>
                <div className="mt-2">
                    <RadioWithIcon title="Gopay" icon={GopayIcon} name="payment_method" />
                </div>
                <div className="mt-2">
                    <RadioWithIcon title="Dana" icon={DanaIcon} name="payment_method" />
                </div>
                <div className="mt-2">
                    <RadioWithIcon title="Shopeepay" icon={ShopeepayIcon} name="payment_method" />
                </div>

                
            </div>
        
        </>
    );
}