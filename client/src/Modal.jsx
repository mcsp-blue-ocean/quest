const Modal = ({ open }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="text-center">Login</h2>
        <br />
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
