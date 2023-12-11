import {Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({t, remove, update}) => {
    return (
        <Droppable droppableId="too">
            {(drop) => (
                <div className="rounded-t-md transition-all duration-1000 dark:bg-gray-800 overflow-hidden bg-white [&>article]:p-4 mt-8" ref={drop.innerRef} {...drop.droppableProps}>
                    {t.map((todo, index) => (
                        <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                            {
                                (dragg) => (
                                    <TodoItem todo={todo} remove={remove} update={update} ref={dragg.innerRef} {...dragg.dragHandleProps} {...dragg.draggableProps} />
                                )
                            }
                        </Draggable>
                    )
                    )}
                    {drop.placeholder}
                </div>
            )
            }
      </Droppable>
    );
};

export default TodoList;