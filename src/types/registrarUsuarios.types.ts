
export interface IRegistrarUsuario {
    nombre: String;
    correoElectronico: String;
    contrasena: String;
    repetirContrasena: String;
    imagenPerfil?: String;
    id_role: String;
}