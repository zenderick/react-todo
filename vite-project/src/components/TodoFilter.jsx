const TodoFilter = ({change, filter}) => {
    return (
        <section className="container mx-auto mt-8">
            <div className=" bg-white flex gap-4 justify-center p-4 rounded-md transition-all duration-1000  dark:bg-gray-800">
                <button className={`${filter === "all" ? "text-blue-600 hover:text-gray-400" :"text-gray-400 hover:text-blue-600"}`} onClick={()=> change('all')}>All</button>
                <button className={`${filter === "active" ? "text-blue-600 hover:text-gray-400" :"text-gray-400 hover:text-blue-600"}`}  onClick={()=> change('active')}>Active</button>
                <button className={`${filter === "completed" ? "text-blue-600 hover:text-gray-400" :"text-gray-400 hover:text-blue-600"}`}  onClick={()=> change('completed')}>Completed</button>
             </div>
        </section>
    );
};

export default TodoFilter;