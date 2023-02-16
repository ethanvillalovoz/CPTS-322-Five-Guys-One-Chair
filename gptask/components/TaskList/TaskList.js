import Task from '../Task/Task';

export default function TaskList({ tasks }) {
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task} task={task}/>
            ))}            
        </div>
    );
}