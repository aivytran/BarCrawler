const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.60)',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    zIndex: 3
  },
  content : {
    position        : 'fixed',
    top             : '50px',
    bottom          : '0px',
    left : '80px',
    right : '80px',
    border          : '1px solid #ccc',
    borderRadius: "0px",
    // padding         : '37px',
    padding : "0px",
    zIndex          : 3,
    display         : 'flex',
    margin : '0 auto',
    overflow: "scroll",
    background: "#f7f7f9"
  }
};

export default ModalStyle;
