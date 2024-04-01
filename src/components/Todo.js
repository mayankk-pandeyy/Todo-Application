import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { addTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";
import { removeAllTodo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";


function Todo(){

    const [item, setItem] = useState("");

    const dispatch = useDispatch();

    const list = useSelector((state)=> state.todoReducers.list);

    function addItemHandler(){
        dispatch(addTodo(item));
        setItem("");
    }

    function changeHandler(event){
        setItem(event.target.value);
    }

    function refreshHandler(){
        dispatch(removeAllTodo());
    }


    return (
        <div className="flex flex-col items-center w-6/12 mx-auto">
            <div className="text-3xl underline font-extrabold uppercase mt-10 mb-4 text-amber-400">
                Organize Your Tasks
            </div>
            <div className="flex border px-6 py-3 w-8/12 rounded-2xl mt-4 items-center bg-[#261447]">
                <input
                    type="text"
                    placeholder="✍🏻 Add Items..."
                    onChange={changeHandler}
                    value={item}
                    className=" border-none w-full bg-transparent outline-none text-white font-bold"
                />
                <div>
                    <MdAdd onClick={addItemHandler}
                        className="text-2xl font-extrabold bg-[#1D1128] rounded-full cursor-pointer text-orange-400"
                    />
                </div>
            </div>
                {/* Show Items on UI */}
            <div className="w-8/12 mt-6">
                        {
                            list.map((item) => {
                                return (
                                    <div className="flex items-center w-full justify-between px-6 border mt-4 rounded-xl py-2 text-white bg-slate-950 font-bold">
                                        {item.data}
                                        <MdDelete onClick={() => dispatch(deleteTodo(item.id))}
                                            className=" cursor-pointer text-xl text-[#CC2936]"
                                        />
                                    </div>
                                ); 
                            })
                        }
            </div>

            {/* Button */}
            <div onClick={refreshHandler}
                className="border my-6 px-6 py-2 cursor-pointer rounded-lg text-xl font-bold bg-[#0D324D] text-[#DFB2F4]"
            >
                Refresh
            </div>
        </div>
    );


}
export default Todo;