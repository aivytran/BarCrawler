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
    top             : 'none',
    width           : '640px',
    bottom          : 'none',
    left : 'none',
    right : 'none',
    border          : '1px solid #ccc',
    padding         : '37px',
    zIndex          : 11,
    borderRadius    : '15px',
    display         : 'flex',
    margin : '0 auto'
  }
};

export default ModalStyle;
