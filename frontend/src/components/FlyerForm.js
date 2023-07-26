import React from "react";

function FlyerForm(props) {
  console.log(props);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <input
            onChange={props.handleChange}
            type="text"
            name="title"
            placeholder="Title"
            value={props.form.title}
          />
          <input
            onChange={props.handleChange}
            type="text"
            name="description"
            placeholder="Description"
            value={props.form.description}
          />
        </div>
        <button type="Submit">Create Flyer</button>
      </form>
    </div>
  );
}

export default FlyerForm;
