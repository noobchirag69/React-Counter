export const Button = ({ count, onClick }) => {
    return (
        <button onClick={onClick}>
            Times Clicked: {count}
        </button>
    );
}
