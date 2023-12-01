async function fetchRequest() {
  let password = document.getElementById("password").value;
  let url = "https://ansandr.pp.ua/quest23/login.php?password=" + password;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return await response.json();
}

function checkPassword() {
  fetchRequest().then((data) => {
    if (data.success === 1) {
      window.location.href = data.url;
      document.querySelector(".form").remove();
    }
  });
}
