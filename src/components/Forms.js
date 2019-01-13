import React from "react";

import renderingValue from "../utils";

const Forms = props => {
 

  let optionItems = props.formValue[2].value.map(value => (
    <option key={value}>{value}</option>
  ));


  let optionInput = props.formValue.map((values, index) => {

    switch (values.type) {
      case "select":
        return (
          <label key={index}>
            {values.label}
            <select
              style={{
                width: `${8 * props.dropdownSelect.length + 100}px`
              }}
              value={props.dropdownSelect}
              onChange={event => {
                props.handleDropdownChange(event);
              }}
            >
              {optionItems}
            </select>
            <br />
          </label>
        );
      case "radio":
        return (
          <label key={index}>
            {values.label}
            {values.value.map(element => {
              return (
                <label key={element}>
                  <input
                    type={values.type}
                    name={element}
                    value={element}
                    checked={props.selectedOption === element}
                    onChange={event => {
                      props.handleOptionChange(event);
                    }}
                    required={!props.formValue[1].isOptional}
                  />
                  {element}
                </label>
              );
            })}

            <br />
          </label>
        );
      default:
        return (
          <label key={index}>
            {values.label} 
            <input
              type={values.type}
              value={renderingValue(values.type, values.value, props)}
              onChange={event => {
                switch (values.type) {
                  case "email":
                    return props.handleChange(event);
                  case "telephone":
                    return props.handleTeleChange(event);

                  default:
                    break;
                }
              }}
              required={!values.isOptional}
            />
            <br />
          </label>
        );
    }
  });
  return (
    <div>
      <form
        onSubmit={event => {
          props.handleSubmit(event);
        }}
      >
        {optionInput}
        <input type="submit" value="Submit" /> 
      </form>
    </div>
  );
};

export default Forms;
