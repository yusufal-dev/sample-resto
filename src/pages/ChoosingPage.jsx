import '../styles/all.css';
import choosingHeader from '../static/choosingHeader.png'
import ButtonConfirm from '../baseComponents/ButtonConfirm';
import Counter from '../baseComponents/Counter';
import CloseIcon from '../static/icons/close_button.png'

//buat header
//buat component radio
//buat component checklist
//buat mapping card untuk radio & checklist
//tambah komponen button di paling bawah

import { Header , SingleChoosing, MultipleChoosing, Notes} from "../components/ChoosingItem";
import { useState } from 'react';
import { rupiah } from '../Helpers';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/features/counter/counterSlice';
import { Link, useNavigate } from 'react-router-dom';
import { addItem } from '../redux/features/cart/cartSlice';




export default function ChoosingPage(){

    const gSelectedItem = useSelector((state) => state.selectedItem)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const itemOptCat = gSelectedItem.item_opt_cat;
    console.log("selectedItem")
    console.log(gSelectedItem)
    const [totalItem, setTotalItem] = useState(1)
    const [selectedOpt, setSelectedOpt] = useState([])


    function onClickAddCounter(e){
        setTotalItem(totalItem+1)
    }

    function onClickMinusCounter(e){
        totalItem > 0 ? setTotalItem(totalItem-1) : setTotalItem(0)
    }

    function addSelectedOpt(opt){
        setSelectedOpt([
            ...selectedOpt,
            opt
        ])
    }

    function subSelectedOpt(opt){
        setSelectedOpt(
            selectedOpt.filter(x => x.opt_id != opt.opt_id)
        )
    }



    function onClickAddCart(){
        const item = {
            total: totalItem,
            item_id: gSelectedItem.item_id,
            name: gSelectedItem.name,
            description: gSelectedItem.description,
            notes: gSelectedItem.note,
            original_price: gSelectedItem.price,
            discount: gSelectedItem.discount,
            total_price: (gSelectedItem.price + gSelectedItem.total_add) * totalItem,
            item_opts: selectedOpt,
            total_add: gSelectedItem.total_add
        }
        dispatch(addItem(item))
        navigate('/menu')
    }


    // const topping = [
    //     {
    //         key: 1,
    //         title: "Coffee Size",
    //         type: "radio",
    //         sub: [
    //             {
    //                 key: 1,
    //                 name: "Small",
    //                 price: 0
    //             },
    //             {
    //                 key:2,
    //                 name: "Medium",
    //                 price: 5000
    //             },
    //             {
    //                 key:3,
    //                 name: "Large",
    //                 price: 10000
    //             }
    //         ]
    //     },
    //     {
    //         key:2,
    //         title:"Milk",
    //         type:"checklist",
    //         sub: [
    //             {
    //                 key:1,
    //                 name: "Non-fat Milk",
    //                 price: 0
    //             },
    //             {
    //                 key:2,
    //                 name: "Soy Milk",
    //                 price: 5000
    //             },
    //             {
    //                 key:3,
    //                 name: "Oat Milk",
    //                 price: 10000
    //             }
    //         ]
    //     }
    // ];


    return(
        <div className="bg-none">
           
            <Header />

            <div>
           
            {/* {
                topping.map(item => {
                    return(
                        <>
                            {
                                item.type === "radio" ?
                                <div className='mt-1'>
                                    <SingleChoosing title={item.title} dataItem={item.sub} radioName={"radio"+item.key} />
                                </div>
                                    
                                :
                                <div className='mt-1'>
                                    <MultipleChoosing key={item.key} title={item.title} dataItem={item.sub} radioName={"radio"+item.key} />
                                </div>
                            }
                        </>
                    )
                })
            } */}

            {
               itemOptCat?.map(item => 


                    <div key={item.opt_cat_id} className='mt-1'>
                        {
                            item.item_opts.length > 0 ?
                            <div >
                                
                                <MultipleChoosing 
                                    
                                    title={item.description} 
                                    dataItem={item.item_opts} 
                                    radioName={item.opt_cat_id} 
                                    addSelectedItem={addSelectedOpt}
                                    subSelectedItem={subSelectedOpt}
                                    />
                               
                            </div>
                            
                            :
                            <div key={item.opt_cat_id}></div>
                        }
                        
                    </div>
                )
            }
           

           <div className='mt-1'>
                <Notes itemNote={gSelectedItem.note}/>
            </div>
            

            </div>
            <div className='space-20 mt-2' />

            <div className="container-float bg-white card-t-shadow btm-0 pb-1 pt-1  vw-100">
                

                <div className="container">
                    <div className='container-between pb-4 pt-1'>
                        <div>
                            <p className='mt-0 mb-0'>Total Order</p>
                        </div>
                        <div className='w-25'>
                            <Counter 
                                value={totalItem} 
                                onClickAdd={onClickAddCounter  } 
                                onClickMinus={onClickMinusCounter} />
                        </div>
                    </div>

                    <ButtonConfirm  title={"Add Order - " + rupiah((gSelectedItem.price + gSelectedItem.total_add) * totalItem)} onClick={onClickAddCart}  />
                </div>
            </div>
            
        </div>
    );
}