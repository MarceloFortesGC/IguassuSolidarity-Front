import { NextPage } from 'next';
import { AppBar, Avatar, Button, Container, makeStyles, Toolbar, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Button1 from '../components/RoundedButton';

import Image from 'next/image';

const theme = createMuiTheme({
  typography: {
    h1:{
      color: "#F72585",
      fontWeight: "bold",
      fontSize: "60px",
      margin: "0 50% 0 0"
    },
    h2:{
      padding: "10% 0",
      fontSize: "30px"
    }
  },
});

const LandingPage: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.leftBox}>
          <ThemeProvider theme={theme}>
            <Typography variant="h1">
              Comece com um simples gesto.
            </Typography>
            <Typography variant="h2">
            Isso pode salvar a vida de alguém
            </Typography>
          </ThemeProvider>
          <Button1 />
        </div>
        <div className={classes.rightBox}>
        <Image
                src="/maos.png"
                alt="Iguassu Solidario logo"
                width={1000}
                height={900}
              />
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  container: {
    background: "#3A0CA3",
    color: "white",
    display: "flex",
    height: "100%"
  },
  leftBox: {
    textAlign: "left",
    alignItems: "center",
    width: "55%",
    margin: "100px"
  },
  rightBox: {
    width: "45%"
  }
});

export default LandingPage;