import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
	body:{
		background:'white',
	},
	login_container: {
	  width: "100%",
	  minHeight: "100vh",
	  backgroundColor: 'transparent',
	  display: "flex",
	  alignItems: "center",
	  justifyContent: "center",
	},
	login_form_container: {
	  width: "900px",
	  height: "500px",
	  display: "flex",
	  borderRadius: "10px",
	  boxShadow:
		"0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
	},
	left: {
	  flex: 2,
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center",
	  justifyContent: "center",
	  backgroundColor: "white",
	  borderTopLeftRadius: "10px",
	  borderBottomLeftRadius: "10px",
	},
	form_container: {
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center",
	},
	form_container_h1: {
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
	right: {
	  flex: 1,
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center",
	  justifyContent: "center",
	  backgroundColor: "#8e65b9",
	  borderTopRightRadius: "10px",
	  borderBottomRightRadius: "10px",
	},
	right_h1: {
	  marginTop: "0",
	  color: "white",
	  fontSize: "40px",
	  alignSelf: "center",
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
	  backgroundColor: "#3bb19b",
	  color: "white",
	  margin: "10px",
	},
  };
  

  return (
    <div style={styles.login_container}>
      <div style={styles.login_form_container}>
        <div style={styles.left}>
          <form style={styles.form_container} onSubmit={handleSubmit}>
            <h1 style={styles.form_container_h1}>Login to Your Account</h1>
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
            <button type="submit" style={{ ...styles.white_btn, backgroundColor: '#8e65b9',color:'white' }}>
              Sign In
            </button>
          </form>
        </div>
        <div style={styles.right}>
          <h1 style={styles.right_h1}>New Here ?</h1>
          <Link to="/signup">
            <button type="button" style={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

