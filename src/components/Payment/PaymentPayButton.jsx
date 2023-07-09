import '../../styles/all.css';
import ButtonPay from '../../baseComponents/ButtonPay';

export function PaymentPayButton({isFilling}){

    function onClickPayMidtrans(){

        	// if(snapToken){
        	// 	window.snap.pay(snapToken, {
        	// 		onSuccess: function(result){
                        
        	// 			 redirect("/paid-order")
        	// 		},
        	// 		onPending: function(result){
        	// 			redirect('/payment')
        	// 		},
        	// 		onError: function(result){
    
        	// 		},
        	// 		onClose: function(result){
    
        	// 		}
        	// 	})
    
        	// }
            
        }


    return(
        
            <div className="container mt-2 ">
                <small>Total payment</small>
                <div className="container-between mb-2">
                    <div className="flex-left  w-40">
                        <p><b>Rp205.618 </b></p>
                    </div>
                    {
                        isFilling ? 
                            <div  className=" w-50">
                                <div onClick={onClickPayMidtrans}>
                                    <ButtonPay title="Pay" />
                                </div>
                            </div>
                        : 
                            <div  className=" w-50">
                                <div onClick={onClickPayMidtrans}>
                                    <ButtonPay title="Pay" disabled={true} />
                                </div>
                            </div>
                    }
                    
                </div>
                
            </div>
        
    )
}