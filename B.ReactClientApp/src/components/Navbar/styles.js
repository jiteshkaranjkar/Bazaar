export const navbarStyles = {
  drawer: {
    width: 200,
    display: { xs: "none", sm: "block" },
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 200,
      backgroundColor: "#101F33",
      color: "rgba(255, 255, 255, 0.7)",
      boxSizing: "border-box",
    },
    "& .Mui-selected": {
      color: "red",
    },
  },
  toolbar: {
    fontWeight: "600",
    fontSize: "24px",
    // theme.mixins.toolbar
  },
  accountBalanceIcon: {
    marginRight: "10px",
  },
  icons: {
    color: "rgba(255, 255, 255, 0.7)!important",
    marginLeft: "10px",
    marginRight: "-10px",
  },
  divider: {
    backgroundColor: "#FFFFFF",
  },
  text: {
    "& span": {
      marginLeft: "-10px",
      fontWeight: "600",
      fontSize: "16px",
      marginRight: "10px",
    },
  },
  appBar: {
    marginLeft: 200,
    // [theme.breakpoints.up("sm")]: {
    //   width: `calc(100% - ${drawerWidth}px)`
    // }
  },
  menuButton: {
    marginRight: 2,
    // [theme.breakpoints.up("sm")]: {
    //   display: "none"
    // }
  },
  drawerPaper: {
    width: 200
  },
  content: {
    flexGrow: 1,
    padding: 3
  }
};
