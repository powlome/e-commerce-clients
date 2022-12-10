import { InputBase } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import fashionDress from '../assets/fashion-drees.jpg';
export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "stretch",
  // width: "100%",
  justifyContent: "space-between",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  border: "2px solid #555",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "auto",
    color: "#444",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#444",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    color: "#444",
    width: "100% !important",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
    // [theme.breakpoints.down("md")]: {
    //   width: "20ch",
    // },
  },
}));
export const useStyles = makeStyles({
  outlineButton: {
    border: "2px solid #f5841a !important",
    backgroundColor: "#f5841a !important",
    padding: "10px 20px",
    color: "#fff",
    transition: "all 0.3s ease-in-out",
    fontWeight: "500",
    zIndex: "1",
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "50%",
      background: "#333",
      transition: "all 0.3s ease-in-out",
      zIndex: "-1",
      borderRadius: "50%",
    },
    "&:hover": {
      "&::after": {
        top: "0%",
        left: "0%",
        right: "0%",
        bottom: "0%",
        borderRadius: "0%",
      },
    },
  },
  headerAppBar: {
    background: "#fff",
    padding: "10px 0s",
  },
  appBarLogo: {
    width: "130px",
  },
  badgeMenuIcon: {
    color: "#555",
  },
  homeSlideStyle: {
    "& $figure": {
      maxWidth: "100%",
    },
  },
  sliderContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    height: "500px",
    width: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    "& $h1": {
      color: "#fff",
      fontSize: "60px",
      "@media (max-width: 1024px)": {
        fontSize: "40px",
      },
    },
  },
  rightSlideMainBox: {
    height: "500px",
    overflowY: "scroll",
    background: "#f5841a",
    padding: "0 10px",
    width: "220px",
  },
  rightSlideParentBox: {
    display: "flex",
    "& @media (max-width: 1024px)": {
      display: "none !important",
      background: "#f584",
    },
  },
  categorySection: {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    padding: "20px 10px",
    marginTop: "40px",
    marginBottom: "40px",
    "& $img": {
      width: "100%",
    },
  },
  categoryCard: {
    position: "relative",
    borderRadius: "10px !important",
    overflow: "hidden",
  },
  categoryCartOverlay: {
    background: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    "& $h5  ": {
      color: "#fff",
      marginBottom: "10px",
    },
  },
  featureProducts: {
    marginTop: "40px",
    "& $h4": {
      color: "#f5841a",
      fontSize: "60px",
      marginBottom: "10px",
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "bold",
      "@media (max-width: 1024px)": {
        fontSize: "40px",
      },
    },
  },
  featuresButtons: {
    textAlign: "right",
    "& @media (max-width: 1024px)": {
      textAlign: "center !important",
    },
  },
  cardCardsInfo:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    
  },
  singleProductCard:{
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    padding: '1rem',
    "& $img":{
      transform : 'scale(1)',
      transition: 'all 0.4s linear',
      "&:hover":{
        transform : 'scale(1.1)',
      }
    },
    "& $h5":{
      color: '#f5841a !important',
      fontSize: '1.4rem',
      fontWeight: 600,
    },
    "& $h6":{
      color: '#f5841a !important',
    },
    "& $p":{
      color: '#f5841a !important',
      fontWeight: 300
    },
  },
  userCollectionsFormPage:{
       background : `url(${fashionDress})`,
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat',
  },
  userCollectionsForm:{
    padding: '1rem'
  },
  modalFad:{
    background: '#fff',
    border: '4px solid #f5841a !important',
    position: 'relative',
  },
  modalParenMain:{
    boxShadow: '0px 0px 10px #f5841a !important',
    background: `rgba(245, 132, 26, 0.625) !important`,
  },
  modalCloseButton:{
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#f5841a',
    color: '#fff',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    borderRadius: '50%',
    cursor: 'pointer',
    "&:hover":{
      background: '#333',
    }
  }
});
