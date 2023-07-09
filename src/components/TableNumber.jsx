import '../styles/all.css';

export default function TableNumber({number, orderNumber}){

    return (
        <>
            <div className="table-number pt-2 pb-2">
                Table: <b>{number}</b>
            </div>

            <div className="text-center text-small1 mb-3">
                <p className='mb-0'>Transaction Number</p>
                <b>{orderNumber}</b>
            </div>
        
        </>
        
    )
}