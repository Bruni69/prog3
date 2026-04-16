import type { IUser } from "../../../types/IUser";
import { navigate } from "../../../utils/navigate";

console.log("%c>>> ARCHIVO LOGIN.TS CARGADO <<<", "color: blue; font-size: 20px;");

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
// REVISÁ SI TU HTML DICE "pass" o "password"
const inputPassword = (document.getElementById("password") || document.getElementById("pass")) as HTMLInputElement;

form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();

    // El .trim() borra espacios accidentales al principio o final
    const valueEmail = inputEmail.value.trim();
    const valuePassword = inputPassword.value.trim(); 

    const usuariosGuardados: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");

    // PRUEBA DE ORO: Mirá esto en la consola cuando falles
    console.log("Buscando email:", `'${valueEmail}'`);
    console.log("Buscando pass:", `'${valuePassword}'`);
    console.log("Usuarios en DB:", usuariosGuardados);

    const usuarioEncontrado = usuariosGuardados.find(u => 
        u.email.trim() === valueEmail && 
        u.password.trim() === valuePassword
    );

    if (usuarioEncontrado) {
        usuarioEncontrado.loggedIn = true;
        localStorage.setItem("userData", JSON.stringify(usuarioEncontrado));

        alert("¡Bienvenido!");

        if (usuarioEncontrado.role === "admin") {
            navigate("/src/pages/admin/home/home.html");
        } else {
            navigate("/src/pages/client/home/home.html");
        }
    } else {
        alert("Email o contraseña incorrectos");
        console.error("No se encontró coincidencia. Revisá espacios o mayúsculas.");
    }
});