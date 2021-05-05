import {AppBar,Toolbar,IconButton,List,ListItem,ListItemText,Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    backgroundColor: "black",
    margin: "0",
  },
  linkText: {
    textDecoration: `none`,
    color: `white`,
    padding: "0 30px",
    textAlign: "right"
  }
});

const navLinks = [
  { title: "Campanha", path: `#` },
  { title: "Galeria", path: `#` },
  { title: "Sobre Nós", path: `#` },
  { title: "Login", path: `#` }
];

const NavBar = () => {
  const classes = useStyles();
  return (
      <List className={classes.navDisplayFlex}>
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
  );
};
export default NavBar;