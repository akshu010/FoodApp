const OfflinePage = () => {
  return (
    <div className="offline-page">
      <div className="offline-container">
        <img
          src="https://img.icons8.com/ios/100/000000/no-connection.png"
          alt="Offline Icon"
          className="offline-icon"
        />
        <h1 className="offline-title">You're Offline</h1>
        <p className="offline-message">
          Looks like you're disconnected from the internet. Please check your
          connection and try again.
        </p>
        <button
          className="retry-button"
          onClick={() => window.location.reload()}
        >
          Retry Connection
        </button>
      </div>
    </div>
  );
};

export default OfflinePage;
