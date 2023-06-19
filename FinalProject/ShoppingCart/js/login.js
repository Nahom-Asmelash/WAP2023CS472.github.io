 
const loginUrl = "http://localhost:1500/logins";
//const tokenUrl = "http://localhost:1500/logins/token";

$("form").on("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const result = await fetchUsers(username, password);
    if (result === true) {
      toastr.success("Successfully Login", { timeOut: 1000 });
      window.location.href = "product.html";
    } else {
      toastr.error("Please provide valid credentials.");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
});


// async function generateToken(username,password)
// { 
//   const response = await fetch(tokenUrl, {
//     method: "POST",
//     body: JSON.stringify({
//       username: username,
//       password: password,
//     }),
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//     },
//   });

 
//   const data = await response.json();
//   const token= data.token;
//   return token;
// }


async function fetchUsers(username, password) {
  
  try {

    // const token=await generateToken(username,password);
    // console.log(token);
    const response = await fetch(loginUrl, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
         
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    if (!response.ok) {
      console.log(response.ok)
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);

    } else {
      sessionStorage.setItem("IdentityContext", JSON.stringify(data));
      return true;
    }
  } catch (error) {
    console.log(error);
    //toastr.error("Invalid credentials", { timeOut: 5000 });
    return false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Toastr
  toastr.options = {
    closeButton: true,
    progressBar: true,
    timeOut: 3000, // 3 seconds
  };
});
