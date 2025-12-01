import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //validations
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service }); //if valid, call onAdd with customer data
    setName(""); //setService(""); //reset form fields
    setService("");
  };
  return (
    <>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to queue</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="consultation">Consultation</option>
            <option value="payment">Payment</option>
            <option value="support">Support</option>
          </select>
        </div>
        <button type="submit">
          <FaUserPlus />
          Add Customer
        </button>
      </form>
    </>
  );
}

export default QueueForm;
