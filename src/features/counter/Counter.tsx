import React , {useState} from 'react'
import {useSelector ,useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(0)

  const count = useSelector((state:any) => state.counter.count);
  const dispatch = useDispatch()

const addValue:number = Number(incrementAmount) || 0 
const resetAll = ()=>{
  setIncrementAmount(0);
  dispatch(reset())
}
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-black text-9xl">{count}</p>
      <div className="flex gap-20 mt-20">
        <div
          className=" text-5xl font-black rounded-lg shadow-sm shadow-black hover:shadow-none hover:bg-black hover:text-orange-500 duration-300 cursor-pointer bg-orange-500 text-white w-14 h-14 flex items-center justify-center"
          onClick={() => dispatch(increment())}
        >
          +
        </div>

        <div
          className=" text-5xl font-black rounded-lg shadow-sm shadow-black hover:shadow-none hover:bg-black hover:text-orange-500 duration-300 cursor-pointer bg-orange-500 text-white w-14 h-14 flex items-center justify-center"
          onClick={() => dispatch(decrement())}
        >
          -
        </div>
      </div>

      <div className="flex gap-20 mt-20">
        <div
          className=" text-2xl font-black rounded-lg shadow-sm shadow-black hover:shadow-none hover:bg-black hover:text-orange-500 duration-300 cursor-pointer bg-orange-500 text-white flex items-center justify-center"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          add amount
        </div>
        <input
          className="w-16 font-black border-2 border-black rounded-lg shadow-sm shadow-black"
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div
          className=" text-2xl font-black rounded-lg shadow-sm shadow-black hover:shadow-none hover:bg-black hover:text-orange-500 duration-300 cursor-pointer bg-orange-500 text-white  flex items-center justify-center"
          onClick={() => resetAll()}
        >
          reset
        </div>
      </div>
    </div>
  );
}

export default Counter