let data = [],
  tbody = document.querySelector("tbody"),
  thead = document.querySelector("thead"),
  loadElement = document.querySelector("h1"),
  btn = document.querySelector("button"),
  input = document.querySelector("input");

const getDataF = () => {
  loadElement.classList.remove("d-none");
  fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: "get",
  })
    .then((res) => res.json())
    .then((malumotlar) => {
      // console.log(malumotlar, "malumotlar");
      data = malumotlar;
      tbodyInner(data);
    })
    .finally(() => {
      loadElement.classList.add("d-block");
    });
};
getDataF();

// console.log(Array.isArray(data)); // arrayligini tekshirish uchun (true va false qaytadi)
const tbodyInner = (param) => {
  if (Array.isArray(param)) {
    thead.innerHTML = "";
    if (param.length > 0) {
      param.map((k, i) => {
        // tbody.innerHTML = tbody.innerHTML + `// `
        tbody.innerHTML += `
        <tr>
          <th class='p-3' > ${i + 1} </th>
          <th class='p-3' > ${k.id} </th>
          <th class='p-3' > ${k.completed} </th>
          <th class='p-3' > ${k.userId} </th>
          <th class='p-3' > ${k.title} </th>
        </tr>
      `;
      });
    } else {
      thead.innerHTML = `
      <tr>
        <th class='p-3 text-center ' colspan='15' > massiv malumotlari mavjud emas </th>
      </tr>
    `;
    }
  } else {
    tbody.innerHTML = `
        <tr>
          <th class='p-3' > 1 </th>
          <th class='p-3' > ${param.id} </th>
          <th class='p-3' > ${param.completed} </th>
          <th class='p-3' > ${param.userId} </th>
          <th class='p-3' > ${param.title} </th>
        </tr>
      `;
  }
};
tbodyInner(data);

btn.addEventListener("click", () => {
  loadElement.classList.remove("d-none");
  fetch(`https://jsonplaceholder.typicode.com/todos/${input.value}`, {
    method: "get",
  })
    .then((res) => res.json())
    .then((malumotlar) => {
      console.log(malumotlar);
      tbodyInner(malumotlar);
    })
    .finally(() => {
      loadElement.classList.add("d-block");
    });
});
