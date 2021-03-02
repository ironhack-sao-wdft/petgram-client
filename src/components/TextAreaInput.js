function TextAreaInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        maxlength="250"
        rows="3"
      >
        {props.value}
      </textarea>
    </div>
  );
}

export default TextAreaInput;
