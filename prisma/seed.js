"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../src/config/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
// const addPermisosSeed = async () => {
//     const ListaPermisos: IPermisos[] = [
//         {
//             nombre: 'prueba1',
//             descripcion: 'prueba desc',
//             acciones: ['Actualizar', 'Eliminar', 'Consular', 'Insertar']
//         },
//         {
//             nombre: 'prueba2',
//             descripcion: 'prueba desc',
//             acciones: ['Actualizar', 'Eliminar', 'Consular', 'Insertar']
//         },
//         {
//             nombre: 'prueba3',
//             descripcion: 'prueba desc',
//             acciones: ['Actualizar', 'Eliminar', 'Consular', 'Insertar']
//         }
//     ]
//     try {
//         const resp = await prisma.tBL_PERMISOS.createMany({
//             data: ListaPermisos
//         })
//         console.log('Permisos seed!');
//     } catch (error) {
//         console.log('Permisos >> ', error);
//     }
// }
const addRolesSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const listaPermisos = await prisma.tBL_PERMISOS.findMany()
        const listaRoles = [{
                nombre: 'ADMINISTRADOR',
                descripcion: 'Hace de todo'
            },
            {
                nombre: 'NORMAL',
                descripcion: 'Hace pocas cosas'
            }
        ];
        yield db_1.prisma.tBL_ROLES.createMany({
            data: listaRoles
        });
        console.log('Roles seed!');
    }
    catch (error) {
        console.log(error);
    }
});
const addPermisosSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaPermisos = [{
                nombre: 'ADMINISTRADOR',
                descripcion: 'Hace de todo',
                acciones: ['1001', '1002', '1003']
            },
            {
                nombre: 'NORMAL',
                descripcion: 'Hace pocas cosas',
                acciones: ['1001']
            }
        ];
        yield db_1.prisma.tBL_PERMISOS.createMany({
            data: listaPermisos
        });
        console.log('Permisos seed!');
    }
    catch (error) {
        console.log(error);
    }
});
const addRolesPermisosREL = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaRoles = yield db_1.prisma.tBL_ROLES.findMany();
        const listaPermisos = yield db_1.prisma.tBL_PERMISOS.findMany();
        const registro = [{
                id_permiso: listaPermisos[0].id,
                id_role: listaRoles[0].id
            }, {
                id_permiso: listaPermisos[1].id,
                id_role: listaRoles[1].id
            }];
        yield db_1.prisma.tBL_REL_PERMISOS_ROLES.createMany({
            data: registro
        });
        console.log('REL Roles Permisos seed!');
    }
    catch (error) {
        console.log(error);
    }
});
const addUsuariosConRolesPermisos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaRELRoles = yield db_1.prisma.tBL_REL_PERMISOS_ROLES.findMany();
        const passwordEncripted = yield bcrypt_1.default.hashSync('admin123', 5);
        const listaUsuarios = [
            {
                nombre: 'admin',
                contrasena: passwordEncripted,
                correoElectronico: 'rosaledark@gmail.com',
                id_rel_role: listaRELRoles[0].id,
                estado: 'Activo',
                imagenPerfil: '',
            },
            {
                nombre: 'admin2',
                contrasena: passwordEncripted,
                correoElectronico: 'alexguaman513@gmail.com',
                id_rel_role: listaRELRoles[1].id,
                estado: 'Activo',
                imagenPerfil: '',
            }
        ];
        yield db_1.prisma.tBL_USUARIOS.createMany({
            data: listaUsuarios
        });
        console.log('Usuarios seed!');
    }
    catch (error) {
        console.log(error);
    }
});
const ejcutarSeeders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield addPermisosSeed();
        yield addRolesSeed();
        // await addUsuariosSeed()
        yield addRolesPermisosREL();
        yield addUsuariosConRolesPermisos();
        console.log('Seeders Completado!');
    }
    catch (error) {
        console.log(error);
    }
});
ejcutarSeeders();
