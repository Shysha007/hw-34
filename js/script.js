const createObj = function (e) {
  const dataForm = {};
  const form = document.getElementById("form");
  const select = form.querySelector(".form-select");
  const inputs = form.querySelectorAll("input");
  const textarea = form.querySelector("textarea");

  inputs.forEach((input) => {
    if (input.name === "terms") {
      dataForm[input.name] = input.checked;
    } else {
      dataForm[input.name] = input.value;
    }
  });

  dataForm[select.name] = select.value;
  dataForm[textarea.name] = textarea.value;
  
  localStorage.setItem("myForm", JSON.stringify(dataForm));

  document.getElementById("form").reset();
  e.preventDefault();
};

form.addEventListener("submit", createObj);

