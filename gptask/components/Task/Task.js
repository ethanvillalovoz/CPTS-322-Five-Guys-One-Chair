import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

// Good lord styling inline is so horrendous don't do this.
// should prob just use a List from MUI
export default function Task({ task }) {
    return (
        <div className="horizontalParent">
            <Checkbox style={{marginTop: 30}} />
            <div style={{width: '90%'}}>
                <TextField defaultValue={task} fullWidth />
            </div>
        </div>
    );
}