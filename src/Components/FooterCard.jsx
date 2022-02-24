function FooterCard(props) {
  const [pending, completed] = props.getLength();

  return (
    <div className="FooterCard">
      <div className="innerFooter">
        <span className="lefty">
          {" "}
          {pending} {pending === 1 ? "item" : "items"} left{" "}
        </span>

        <button className="btn btn-lg" onClick={() => props.filterTask("all")}>
          All
        </button>
        <button
          className="btn btn-lg"
          onClick={() => props.filterTask("active")}
        >
          Active
        </button>
        <button
          className="btn btn-lg"
          onClick={() => props.filterTask("complete")}
        >
          Completed
        </button>

        {!completed ? (
          <span className="righty" style={{ color: "white" }}>
            {" "}
            Clear completed{" "}
          </span>
        ) : (
          <button
            className="btn btn-lg righty"
            onClick={() => props.clearCompleted()}
          >
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
}

export default FooterCard;
