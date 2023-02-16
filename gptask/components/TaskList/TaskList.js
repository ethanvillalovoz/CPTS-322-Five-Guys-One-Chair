import TextField from '@mui/material/TextField';

export default function TaskList({ tasks }) {
    return (
        <>
            {tasks.map((task) => (
                <div key={task}>
                    {console.log(task)}
                    <TextField>{task}</TextField>
                </div>
            ))}            
        </>
    );
}