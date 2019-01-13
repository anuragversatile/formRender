const renderingValue = (type, value, props) => {
  switch (type) {
    case "email":
      return props.emailValue;
    case "telephone":
      return props.telephone;

    default:
      if (value !== null) return value;
      break;
  }
};

module.exports= renderingValue;