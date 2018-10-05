import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-contrl" {...field.input} type="text" />
        <div color="red">{field.meta.error}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostNew);

function validate(values) {
  const errors = {};
  //validate the inputs from 'value'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.category = "Enter a category!";
  }
  if (!values.content) {
    errors.content = "Enter a content!";
  }

  // empty errors object depicts successful validation
  return errors;
}
