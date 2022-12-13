const Notification = ({ message }) => {
  if (message.text === "") return null;

  return (
    <div className={`${message.status === "success" ? "success" : "error"}`}>
      {message.text}
    </div>
  );
};

export default Notification;
