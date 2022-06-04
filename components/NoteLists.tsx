import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { DeleteOutlined } from "@mui/icons-material";
import { IconButton, Typography } from '@mui/material';

const NoteLists = ({ note }) => {
  return (
    <div>
      <Card elevation={7}>
        <CardHeader
          action={
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                console.log(`Item deleted: ${note.title}`);
              }}
            >
              <DeleteOutlined></DeleteOutlined>
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        >
        </CardHeader>
        <CardContent>
            <Typography
              variant="body2"
              color="red"
            >
              {note.details}
            </Typography>
          </CardContent>
      </Card>
    </div>
  );
};

export default NoteLists;