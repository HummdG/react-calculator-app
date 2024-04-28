interface SymbolGridProps {
  concatenateStrings: (btnTxt: string) => void;
  clearText: () => void;
}

function SymbolGrid(props: SymbolGridProps) {
  function buttonTemplate(btnTxt: string) {
    return (
      <button
        className="btn btn-warning"
        type="button"
        style={{ width: "10rem", fontSize: "1rem" }}
        onClick={() => {
          if (btnTxt === "AC") {
            props.clearText(); // Call clearText function if button is "AC"
          } else {
            props.concatenateStrings(btnTxt); // Otherwise, concatenate strings
          }
        }}
      >
        {btnTxt}
      </button>
    );
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="d-grid gap-2 d-md-block">
          {buttonTemplate("AC")}
          {buttonTemplate("+")}
          {buttonTemplate("-")}
          {buttonTemplate("*")}
          {buttonTemplate("/")}
          {buttonTemplate("=")}
        </div>
      </div>
    </>
  );
}

export default SymbolGrid;
