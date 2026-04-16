// registro.ts completo
console.log("%c>>> CONECTADO AL REGISTRO <<<", "color: green; font-weight: bold;");

const form = document.getElementById("form-registro") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passInput = document.getElementById("pass") as HTMLInputElement;

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const mail = emailInput.value.trim();
        const password = passInput.value.trim();

        // Creamos el objeto a mano para no depender del import ahora
        const nuevo = {
            email: mail,
            password: password,
            role: 'client',
            loggedIn: false
        };

        // Leemos, pusheamos y guardamos
        const actuales = JSON.parse(localStorage.getItem("users") || "[]");
        actuales.push(nuevo);
        localStorage.setItem("users", JSON.stringify(actuales));

        console.log("GUARDADO EXITOSO:", nuevo);
        alert("Usuario guardado. Ahora vamos al login.");
        
        window.location.href = "../login/login.html";
    });
} else {
    console.error("ERROR: No encontré el ID 'form-registro' en el HTML");
}