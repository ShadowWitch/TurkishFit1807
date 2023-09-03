
export interface IRegistrarUsuario {
    nombre: string;
    correoElectronico: string;
    contrasena: string;
    repetirContrasena: string;
    imagenPerfil?: string;
    id_role: string;
}


export interface ILoginUsuario {
    nombre: string;
    contrasena: string;
}
