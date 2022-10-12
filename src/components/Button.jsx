export const Button = ({ count, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "5px 15px",
                margin: "10px auto",
                cursor: "pointer",
                border: "none"
            }}
        >
            Times Clicked: {count}
        </button>
    );
}
