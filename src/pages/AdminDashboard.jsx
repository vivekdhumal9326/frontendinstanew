import React, { useEffect, useState } from "react";

export default function AdminDashboard() {

  const [users, setUsers] = useState({});
  const [token, setToken] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* Admin Modal */
  const [showAdminModal, setShowAdminModal] = useState(false);

  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  /* ================= TOKEN ================= */

  useEffect(() => {
    const t = localStorage.getItem("adminToken");

    if (t) setToken(t);
    else setLoading(false);

  }, []);

  /* ================= FETCH USERS ================= */

  useEffect(() => {
    if (token) fetchUsers();
  }, [token]);

  const fetchUsers = async () => {

    try {
      setLoading(true);

      const res = await fetch("https://backendinsta-s0nf.onrender.com/api/users", {
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) throw new Error();

      const data = await res.json();

      setUsers(data || {});
      setError("");

    } catch {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  /* ================= VERIFY ================= */

  const verifyUser = async (id, status) => {

    await fetch(`https://backendinsta-s0nf.onrender.com/api/users/verify/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ isVerified: status }),
    });

    fetchUsers();
  };

  /* ================= DELETE ================= */

  const deleteUser = async (id) => {

    if (!window.confirm("Delete this user?")) return;

    await fetch(`https://backendinsta-s0nf.onrender.com/api/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });

    fetchUsers();
  };

  /* ================= LOGOUT ================= */

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };

  /* ================= REGISTER ADMIN ================= */

  const handleRegisterAdmin = async (e) => {

    e.preventDefault();

    if (!adminName || !adminEmail || !adminPassword) {
      alert("All fields required");
      return;
    }

    try {

      const res = await fetch("https://backendinsta-s0nf.onrender.com/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          name: adminName,
          email: adminEmail,
          password: adminPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.msg);

      alert("Admin registered successfully");

      setShowAdminModal(false);
      setAdminName("");
      setAdminEmail("");
      setAdminPassword("");

    } catch (err) {
      alert(err.message || "Register failed");
    }
  };

  /* ================= NO TOKEN ================= */

  if (!token && !loading) {
    return (
      <div className="login-box">
        <h2>Please Login</h2>
      </div>
    );
  }

  if (loading) return <div className="loader">Loading...</div>;

  if (error) return <div className="error-box">{error}</div>;

  /* ================= UI ================= */

  return (
    <div className="dashboard">

      {/* ===== HEADER ===== */}

      <div className="dashboard-header">

        <h1>Admin Dashboard</h1>

        <div className="header-actions">

          <button
            className="btn add-admin"
            onClick={() => setShowAdminModal(true)}
          >
            + Add Admin
          </button>

          <button
            className="btn logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>


      {/* ===== TABLE ===== */}

      <div className="table-box">

        <table>

          <thead>
            <tr>
              <th>Instagram</th>
              <th>Email</th>
              <th>WhatsApp</th>
              <th>Amount</th>
              <th>UTR</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {Object.keys(users).length === 0 && (
              <tr>
                <td colSpan="7">No Data</td>
              </tr>
            )}

            {Object.entries(users).map(([id, user]) => (

              <tr key={id}>

                <td>{user.instagram}</td>
                <td>{user.email}</td>
                <td>{user.whatsapp}</td>
                <td>₹{user.amount}</td>
                <td>{user.upi}</td>

                <td>
                  {user.isVerified ? (
                    <span className="verified">Verified</span>
                  ) : (
                    <span className="pending">Pending</span>
                  )}
                </td>

                <td>

                  {!user.isVerified ? (
                    <button
                      className="btn verify"
                      onClick={() => verifyUser(id, true)}
                    >
                      Verify
                    </button>
                  ) : (
                    <button
                      className="btn reject"
                      onClick={() => verifyUser(id, false)}
                    >
                      Unverify
                    </button>
                  )}

                  <button
                    className="btn delete"
                    onClick={() => deleteUser(id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* ===== ADMIN MODAL ===== */}

      {showAdminModal && (

        <div className="modal-overlay">

          <div className="modal-box">

            <h2>Add New Admin</h2>

            <form onSubmit={handleRegisterAdmin}>

              <input
                type="text"
                placeholder="Name"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />

              <div className="modal-actions">

                <button type="submit" className="btn verify">
                  Register
                </button>

                <button
                  type="button"
                  className="btn reject"
                  onClick={() => setShowAdminModal(false)}
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}
