import React, { useState } from "react";
import "../about.css";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here
    alert("Registration submitted!");
  };

  return (
    <div  className="registerform"style={{  Width: "700px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>
            Full Name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            style={{ width: "650px",height:"34px", padding: 6, marginLeft: 20,  border: "1px solid #888", borderRadius: 4 }}
          />
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: 10 }}>
          <div style={{ flex: 1 }}>
            <label>
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ width: "305px", padding: 8, marginLeft: 20, border: "1px solid #888", borderRadius: 4 }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>
              Phone No<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              style={{ width: "305px", padding: 8,  marginLeft: 0, border: "1px solid #888", borderRadius: 4 }}
            />
          </div>
        </div>
        
        <div style={{ marginBottom: 10 }}>
          <label>
            Additional Information<span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            name="additionalInfo"
            value={form.additionalInfo}
            onChange={handleChange}
            required
            rows={4}
            style={{ width: "650px",marginLeft:20, padding: 8, marginTop: 2, border: "1px solid #888", borderRadius: 4 }}
          />
        </div>
        <button
          type="submit"
          style={{ width: "670px",margin:20, background: "#40635c", color: "#fff", padding: 12, border: "none", borderRadius: 2, fontFamily: "monospace", fontSize: 16 }}
        >
          Contact
        </button>
      </form>
    </div>
  );
};

export default Register;
