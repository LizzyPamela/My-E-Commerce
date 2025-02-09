import Layout from '../../Components/Layout';

function MyAccount() {
  // Example user data (replace with dynamic data from your backend)
  const user = {
    name: "Kennan D. Mark",
    email: "user21myecommerce.com",
    joined: "January 2023",
  };

  // Example order history (replace with dynamic data from your backend)
  const orders = [
    { id: 1, date: "2023-10-01", total: "$120.00", status: "Delivered" },
    { id: 2, date: "2023-09-25", total: "$80.00", status: "Shipped" },
    { id: 3, date: "2023-09-20", total: "$200.00", status: "Processing" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Account</h1>

        {/* User Profile Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Name:</span> {user.name}</p>
            <p><span className="font-medium">Email:</span> {user.email}</p>
            <p><span className="font-medium">Member Since:</span> {user.joined}</p>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Edit Profile
          </button>
        </div>

        {/* Order History Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Order History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Order ID</th>
                  <th className="py-2 px-4 border-b text-left">Date</th>
                  <th className="py-2 px-4 border-b text-left">Total</th>
                  <th className="py-2 px-4 border-b text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="py-2 px-4 border-b">#{order.id}</td>
                    <td className="py-2 px-4 border-b">{order.date}</td>
                    <td className="py-2 px-4 border-b">{order.total}</td>
                    <td className="py-2 px-4 border-b">
                      <span className={`px-2 py-1 text-sm rounded-full ${order.status === "Delivered" ? "bg-green-100 text-green-700" : order.status === "Shipped" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Account Settings Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Settings</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Change Password</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Update Payment Methods</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Manage Addresses</a>
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default MyAccount;