const styles = () => ({
  modalContainers: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: "white",
    boxShadow: 10,
  },
  modalHead: {
    margin: 0,
    padding: 10,
    backgroundColor: "#1976d2",
  },
  title: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: "2rem",
    fontFamily: "tahoma",
    color: "white",
  },
  modalContent: {
    padding: 20,
  },
  input: {
    width: "100%",
  },
});

export default styles;
