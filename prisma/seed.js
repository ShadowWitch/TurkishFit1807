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
const addPermisosSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    const ListaPermisos = [
        {
            nombre: 'prueba1',
            descripcion: 'prueba desc',
            acciones: ['Actualizar', 'Eliminar', 'Consular', 'Insertar']
        },
        {
            nombre: 'prueba2',
            descripcion: 'prueba desc',
            acciones: ['Actualizar', 'Eliminar', 'Consular', 'Insertar']
        },
        {
            nombre: 'prueba3',
            descripcion: 'prueba desc',
            acciones: ['Actualizar', 'Eliminar', 'Consular', 'Insertar']
        }
    ];
    try {
        const resp = yield db_1.prisma.tBL_PERMISOS.createMany({
            data: ListaPermisos
        });
        console.log('Permisos seed!');
    }
    catch (error) {
        console.log('Permisos >> ', error);
    }
});
const addRolesSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaPermisos = yield db_1.prisma.tBL_PERMISOS.findMany();
        // if (!listaPermisos.length > 0) this new Error('error')
        // const listaRoles: IRoles[] = [
        //     {
        //         nombre: 'Admin',
        //         descripcion: 'Puede hacer de todo',
        //         id_permisos: listaPermisos[0].id,
        //     },
        //     {
        //         nombre: 'User',
        //         descripcion: 'No hace nada',
        //         id_permisos: listaPermisos[1].id,
        //     },
        //     {
        //         nombre: 'Super User',
        //         descripcion: 'Puede hacer todo de todo',
        //         id_permisos: listaPermisos[2].id,
        //     },
        // ]
        const listaRoles = listaPermisos.map((e) => ({
            nombre: `Admin_${e.nombre}`,
            descripcion: 'Puede hacer de todo',
            id_permisos: e.id,
        }));
        const respDBRol = yield db_1.prisma.tBL_ROLES.createMany({
            data: listaRoles
        });
        console.log('Roles seed!');
    }
    catch (error) {
        console.log(error);
    }
});
// TODO LMOYA : Tengo que revisar bien el seeder de insertar usuarios manana...
const addUsuariosSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let listaUsuariosPruebaAca = [];
        const listaRoles = yield db_1.prisma.tBL_ROLES.findMany();
        yield listaRoles.forEach((e, index) => __awaiter(void 0, void 0, void 0, function* () {
            const hashContrasena = yield bcrypt_1.default.hashSync('admin', 5);
            const data = {
                nombre: `Juan${e.nombre}`,
                contrasena: hashContrasena,
                correoElectronico: `${e.nombre}@gmail.com`,
                repetirContrasena: 'admin',
                id_role: e.id
            };
            listaUsuariosPruebaAca.push(data);
        }));
        const respDB = yield db_1.prisma.tBL_USUARIOS.createMany({
            data: listaUsuariosPruebaAca
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
        yield addUsuariosSeed();
        console.log('Seeders Completado!');
    }
    catch (error) {
        console.log(error);
    }
});
ejcutarSeeders();
