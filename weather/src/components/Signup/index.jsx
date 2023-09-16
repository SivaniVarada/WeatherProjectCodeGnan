import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const[msg,setMsg]=useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      setMsg(res.message)
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const styles = {
    signup_container: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    signup_form_container: {
      width: "900px",
      height: "500px",
      display: "flex",
      borderRadius: "10px",
      boxShadow:
        "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    },
    left: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#8e65b9",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
    },
    left_h1: {
      marginTop: "0",
      color: "white",
      fontSize: "35px",
      alignSelf: "center",
    },
    right: {
      flex: "2",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    form_container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form_h1: {
      fontSize: "40px",
      marginTop: "0",
    },
    input: {
      outline: "none",
      border: "none",
      width: "370px",
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "#edf5f3",
      margin: "5px 0",
      fontSize: "14px",
    },
    success_msg: {
      width: "370px",
      padding: "15px",
      margin: "5px 0",
      fontSize: "14px",
      backgroundColor: "#f34646",
      color: "white",
      borderRadius: "5px",
      textAlign: "center",
    },
	error_msg: {
		width: "370px",
		padding: "15px",
		margin: "5px 0",
		fontSize: "14px",
		backgroundColor: "#f34646",
		color: "white",
		borderRadius: "5px",
		textAlign: "center",
	  },

	success_msg:{
		backgroundColor:"#5cdd5c",
	},
    white_btn: {
      border: "none",
      outline: "none",
      padding: "12px 0",
      backgroundColor: "white",
      borderRadius: "20px",
      width: "180px",
      fontWeight: "bold",
      fontSize: "14px",
      cursor: "pointer",
    },
    green_btn: {
      backgroundColor: "#8e65b9",
      color: "white",
      margin: "10px",
    },
  };

  return (
    <div style={styles.signup_container}>
      <div style={styles.signup_form_container}>
        <div style={styles.left}>
          <h1 style={styles.left_h1}>Welcome Back!</h1>
          <Link to="/login">
            <button type="button" style={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div style={styles.right}>
          <form style={styles.form_container} onSubmit={handleSubmit}>
            <h1 style={styles.form_h1}>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              style={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              style={styles.input}
            />
            {error && <div style={styles.error_msg}>{error}</div>}
			{msg && <div style={styles.success_msg}>{msg}</div>}
            <button type="submit" style={{ ...styles.white_btn, backgroundColor: '#8e65b9',color:'white' }}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
