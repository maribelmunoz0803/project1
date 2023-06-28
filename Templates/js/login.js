function login() {
  var usuario = document.getElementById("usuario").value;
  var contraseña = document.getElementById("contraseña").value;

  if (usuario === "1725300519" && contraseña === "holamundo12345") {
    window.location.href = "registro.html";
  } else {
    var errorMessage = document.getElementById("mensaje-error");
    errorMessage.style.display = "block";
  }
}