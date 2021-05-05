import { AppBar, Avatar, Button, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Container className={classes.nav}>
            <Button className={classes.logo}>
              <Image
                src="/logo.png"
                alt="Iguassu Solidario logo"
                width={200}
                height={70}
              />
            </Button>

            <div className={classes.menu}>
              <Button>
                Campanhas
              </Button>
              <Button>
                Galeria
              </Button>
              <Button>
                Sobre Nós
              </Button>
              <Button>
                Login
              </Button>

            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

const useStyles = makeStyles({
  logo: {
    textAlign: "initial"
  },
  menu: {
    marginLeft: 0
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
});


export default Navbar;
