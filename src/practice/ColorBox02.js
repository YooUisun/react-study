function ColorBox02({ bgColor, onDelete }) {
    return (
        <div className="box" style={{ backgroundColor: bgColor }}>
            <button onClick={onDelete} className="delete-button">X</button>
        </div>
    );
}

export default ColorBox02;