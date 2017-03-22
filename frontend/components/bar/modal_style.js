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
    zIndex: 10
  },
  content : {
    position        : 'fixed',
    top             : '200px',
    bottom          : '0px',
    left : '0px',
    right : '0px',
    border          : '1px solid #ccc',
    borderRadius: "0px",
    // padding         : '37px',
    padding : "0px",
    zIndex          : 11,
    display         : 'flex',
    margin : '0 auto',
    overflow: "scroll",
    background: "#f7f7f9"
  }
};

export default ModalStyle;
