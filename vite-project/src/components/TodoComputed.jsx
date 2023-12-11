const TodoComputed = ({count, clear}) =>{
    return (
        <section className="px-4 py-4 flex justify-between  bg-white rounded-b-md transition-all duration-1000  dark:bg-gray-800">
        <span className="text-gray-400">{count} items</span>
        <button className="text-gray-400" onClick={clear}>Clear completed</button>
    </section>
    );
};

export default TodoComputed;