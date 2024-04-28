interface NumberGridProps {
  concatenateStrings: (btnTxt: string) => void;
}
function NumberGrid(props: NumberGridProps) {
  function buttonTemplate(btnTxt: string) {
    return (
      <button
        className="btn btn-success"
        type="button"
        style={{ width: "10rem", fontSize: "1rem" }}
        onClick={() => props.concatenateStrings(btnTxt)}
      >
        {btnTxt}
      </button>
    );
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="d-grid gap-2 d-md-block">
          {buttonTemplate("1")}
          {buttonTemplate("2")}
          {buttonTemplate("3")}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="d-grid gap-2 d-md-block">
          {buttonTemplate("4")}
          {buttonTemplate("5")}
          {buttonTemplate("6")}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="d-grid gap-2 d-md-block">
          {buttonTemplate("7")}
          {buttonTemplate("8")}
          {buttonTemplate("9")}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="d-grid gap-2 d-md-block">{buttonTemplate("0")}</div>
      </div>
    </>
  );
}

export default NumberGrid;
