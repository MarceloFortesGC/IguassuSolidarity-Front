import { AppBar, Avatar, Button, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';

export default function RoundedButton(){
    const classes = useStyles();
    return(
        <>
        <button className={classes.button1}>Cadastre-se</button>
        </>
    );
};

const useStyles = makeStyles({
  button1: {
    width: "30%",
    padding: "15px",
    border: "none",
    borderRadius: "24px",
    backgroundColor: "#F72585",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px"
  },

});

