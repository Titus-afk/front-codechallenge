import "./styles/emptystate.css";

const EmptyState = () => {
  return (
    <div className="empty-state">
      <span className="material-symbols-outlined">error</span>
      <h4>No data found</h4>
    </div>
  );
};

export default EmptyState;
