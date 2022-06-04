import { Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import styles from "@/components/Layout.module.scss";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router';

const menuItems = [
  {
    text: "Witcher Home",
    icon: <HomeIcon color="primary"></HomeIcon>,
    path: "/"
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlined color="primary"></AddCircleOutlined>,
    path: "/create"
  },
  {
    text: "Note List",
    icon: <SubjectOutlined color="primary"></SubjectOutlined>,
    path: "/lists"
  }
];

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div id={styles.root}>
      <Drawer
         variant="permanent"
         anchor="left"
         id={styles.list}
      >

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => {
                router.push(item.path);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div>
        {children}
      </div>
    </div>
  );
}

export default Layout;