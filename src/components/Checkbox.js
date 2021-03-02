function Checkbox(props) {
  return (
    <div className="form-group form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={props.id}
        name={props.name}
        checked={props.value}
        onChange={props.onChange}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default Checkbox;
