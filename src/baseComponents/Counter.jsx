import addIcon from '../static/icons/Add_ring.png';
import minusIcon from '../static/icons//minus_ring.png'

export default function Counter({value, onClickAdd, onClickMinus}){

    return(
        <div className="container-between">
            <div>
                <img src={minusIcon} className='pointer'  onClick={onClickMinus}/>
            </div>
            <div className='text-big1'>
                <b>{value}</b>
            </div>
            <div>
                <img src={addIcon} className='pointer' onClick={onClickAdd} />
            </div>
        </div>
    )
}