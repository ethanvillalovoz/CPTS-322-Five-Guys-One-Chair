import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function TaskCreator() {
    return (
        <div className='fixedContainerTaskCreator'>
            <TextField defaultValue={"hello, world"}></TextField>
            <IconButton><AddBoxIcon fontSize="large" /></IconButton>
        </div>
    );
}