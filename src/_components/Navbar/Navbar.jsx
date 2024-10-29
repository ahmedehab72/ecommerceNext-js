'use client'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RedeemIcon from "@mui/icons-material/Redeem";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

// const pages = ["home", "contact", "about", "signup"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isloged, setIsloged] = React.useState(false);

  const router = useRouter()
  
  React.useEffect(() => {
    if (localStorage.getItem("fakeUser")) {
      setIsloged(true);
    } else {
      setIsloged(false);  
      router.push('/login')
    }
    
  }, [])
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    localStorage.removeItem("fakeUser");
    router.push("/login");
  };



  return (
    <>
      <div className="w-full p-2  bg-black text-white flex lg:flex-row flex-col justify-center items-center relative">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <span className="ms-3 font-bold border-b ">
          <Link href="/">Shop Now </Link>
        </span>
        <div className="absolute end-4 top-10 md:top-0">
          <Button
            className="text-white"
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Lang 🔽
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>English</MenuItem>
            <MenuItem onClick={handleClose}>عربي</MenuItem>
          </Menu>
        </div>
      </div>

      <AppBar
        position="static "
        className="bg-white border-0 shadow-none text-black border-b-2 "
      >
        <Container
          maxWidth="xl"
          className="bg-white border-0 shadow-none text-black pt-5"
        >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },

                fontWeight: 700,
                //styleName: Heading/24PX Bold;
                fontFamily: "Inter",
                fontSize: "24px",
                letterSpacing: ".2rem",
                textDecoration: "none",
              }}
            >
              <Link href={"/"}>Exclusive</Link>
            </Typography>

            {/* mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {isloged ? (
                  <>
                    {" "}
                    <MenuItem key={"home"} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        <Link href={"/"}>{"Home"}</Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem key={"contact"} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        <Link href={"/contact"}>{"Contact"}</Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem key={"about"} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        <Link href={"/about"}>{"About"}</Link>
                      </Typography>
                    </MenuItem>{" "}
                  </>
                ) : (
                  <MenuItem key={"signup"} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      <Link href={"/signup"}>{"Signup"}</Link>
                    </Typography>
                  </MenuItem>
                )}

                <Paper component="form" className="w-full ">
                  <InputBase
                    sx={{ flex: 1, paddingX: "5px" }}
                    placeholder=" What are you looking for? "
                    inputProps={{ "aria-label": "search" }}
                  />
                  <IconButton type="button" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              Exclusive
            </Typography>
            {/* desktop */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", alignItems: "center" },
                }}
              >
                {isloged ? (
                  <>
                    <Button
                      key={"home"}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      <Link href={"/"}>{"Home"}</Link>{" "}
                    </Button>
                    <Button
                      key={"contact"}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      <Link href={"/contact"}>{"Contact"}</Link>{" "}
                    </Button>
                    <Button
                      key={"about"}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      <Link href={"/about"}>{"About"}</Link>{" "}
                    </Button>
                  </>
                ) : (
                  <Button
                    key={"signup"}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    <Link href={"/signup"}>{"SignUp"}</Link>{" "}
                  </Button>
                )}
              </Box>

              <Paper
                component="form"
                className="me-10 h-10 flex items-center justify-center px-3 "
              >
                <InputBase
                  className="flex items-center"
                  placeholder=" What are you looking for?"
                />{" "}
                <IconButton type="button" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip className="me-2">
                <FavoriteBorderIcon className="font-bold text-3xl cursor-pointer" />
              </Tooltip>
              <Link href={"/cart"} className="me-4 relative">
                <ShoppingCartIcon className="font-bold text-3xl cursor-pointer" />
                <div className="absolute w-5 h-5  rounded-full bg-red-500 text-sm text-white text-center -top-3 -right-3">
                  1
                </div>
              </Link>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="user icon" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/*  ["Manage My Account", "My Order", "My Cancellations", "Logout"];*/}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <AccountCircleIcon />{" "}
                    <Link href={"/account"} className="ms-2">
                      Manage My Account
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <RedeemIcon />{" "}
                    <Link href={"/cart"} className="ms-2">
                      My Order
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <HighlightOffIcon />{" "}
                    <Link href={""} className="ms-2">
                      My Cancellations
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <StarOutlineIcon />{" "}
                    <Link href={""} className="ms-2">
                      My Reviews
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <LogoutIcon />{" "}
                    <button
                      onClick={() => logout()}
                      className="ms-2 text-black"
                    >
                      Logout
                    </button>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
