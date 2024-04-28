function SymbolGrid() {
  function buttonTemplate(btnTxt: string) {
    return (
      <button
        className="btn btn-warning"
        type="button"
        style={{ width: "10rem", fontSize: "1rem" }}
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
