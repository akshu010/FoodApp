const OfflinePage = () => {
  return (
    <div className="offline-page">
      <div className="offline-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXK2tnS4Rvb5Q8EfkGBrY14q25BCmrx8snIA&s"
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
