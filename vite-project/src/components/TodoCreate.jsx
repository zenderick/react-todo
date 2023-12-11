import { useState } from "react";

const TodoCreate = ({create}) =>{

    const [title, setTitle] = useState('')

    const handleSumbitAdd = (ad) => {
        ad.preventDefault();

        if (title.trim().length > 0){
            create(title);
            setTitle("")
        }
        else{
            setTitle("");
        }
    }

    return (
        <form onSubmit={handleSumbitAdd} className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 transition-all duration-1000 dark:bg-gray-800">
              <span className="inline-block h-5 w-5 rounded-full border-2"></span>
              <input type="text" placeholder="Create a new todo..." className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800" value={title} onChange={(ad) => setTitle(ad.target.value)}/>
            </form>
    );
};

export default TodoCreate;