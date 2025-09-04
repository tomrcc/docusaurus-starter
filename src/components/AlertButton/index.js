export default function AlertButton({ children, alert_text, color }) {
  return (
    <button
      style={{
        backgroundColor: "#fff",
        borderRadius: "2px",
        color: color,
        padding: "0.2rem",
      }}
      onClick={() => alert({ alert_text })}>
      {children}
    </button>
  );
}
