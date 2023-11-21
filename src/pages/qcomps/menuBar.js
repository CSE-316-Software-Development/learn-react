export default function MenuBar() {
  return (
    <div>
      <AButton id={1} color={"blue"} size={5}>
        Button 1
      </AButton>
      <AButton id={2} color={"red"} size={10}>
        Button 2
      </AButton>
    </div>
  );
}

function AButton({ id, color, size, children }) {
  return (
    <button id={`${id}`} onClick={() => {
      document.getElementById(`${id}`).style.backgroundColor = color;
      document.getElementById(`${id}`).style.fontSize = size;
    }}>
      {children}
    </button>
  );
}
