import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

export default function TaskList({ tasks }) {
    return (
        <div >
            {tasks.map((task) => (
                <div className="horizontalParent" key={task}>
                    <Checkbox />
                    <TextField defaultValue={task} />
                </div>
            ))}            
        </div>
    );
}