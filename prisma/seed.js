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
const addRolesSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const listaPermisos = await prisma.tBL_PERMISOS.findMany()
        const listaRoles = [
            {
                nombre: "ADMINISTRADOR",
                descripcion: "Hace de todo",
            },
            {
                nombre: "NORMAL",
                descripcion: "Hace pocas cosas",
            },
        ];
        yield db_1.prisma.tBL_ROLES.createMany({
            data: listaRoles,
        });
        console.log("Roles seed!");
    }
    catch (error) {
        console.log(error);
    }
});
const addPermisosSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaPermisos = [
            {
                nombre: "ADMINISTRADOR",
                descripcion: "Hace de todo",
                acciones: ["1001", "1002", "1003"],
            },
            {
                nombre: "NORMAL",
                descripcion: "Hace pocas cosas",
                acciones: ["1001"],
            },
        ];
        yield db_1.prisma.tBL_PERMISOS.createMany({
            data: listaPermisos,
        });
        console.log("Permisos seed!");
    }
    catch (error) {
        console.log(error);
    }
});
const addRolesPermisosREL = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaRoles = yield db_1.prisma.tBL_ROLES.findMany();
        const listaPermisos = yield db_1.prisma.tBL_PERMISOS.findMany();
        const registro = [
            {
                id_permiso: listaPermisos[0].id,
                id_role: listaRoles[0].id,
            },
            {
                id_permiso: listaPermisos[1].id,
                id_role: listaRoles[1].id,
            },
        ];
        yield db_1.prisma.tBL_REL_PERMISOS_ROLES.createMany({
            data: registro,
        });
        console.log("REL Roles Permisos seed!");
    }
    catch (error) {
        console.log(error);
    }
});
const addUsuariosConRolesPermisos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaRELRoles = yield db_1.prisma.tBL_REL_PERMISOS_ROLES.findMany();
        const passwordEncripted = yield bcrypt_1.default.hashSync("admin123", 5);
        const listaUsuarios = [
            {
                nombre: "admin",
                contrasena: passwordEncripted,
                correoElectronico: "rosaledark@gmail.com",
                id_rel_role: listaRELRoles[0].id,
                estado: "Activo",
                imagenPerfil: "",
            },
            {
                nombre: "admin2",
                contrasena: passwordEncripted,
                correoElectronico: "alexguaman513@gmail.com",
                id_rel_role: listaRELRoles[1].id,
                estado: "Activo",
                imagenPerfil: "",
            },
        ];
        yield db_1.prisma.tBL_USUARIOS.createMany({
            data: listaUsuarios,
        });
        console.log("Usuarios seed!");
    }
    catch (error) {
        console.log(error);
    }
});
const addMunicipios = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaMunicipios = [
            {
                codigo: "1807",
                nombre: "Yoro",
            },
            {
                codigo: "1804",
                nombre: "Olancho",
            },
        ];
        yield db_1.prisma.tBL_MUNICIPIO.createMany({
            data: listaMunicipios,
        });
        console.log("Municipios seed!");
    }
    catch (error) {
        console.log(error);
    }
});
const addTipoEjercicios = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaTipoEjercicios = [
            {
                nombreTipo: "Cardiovascular",
                descripcion: "Ejercicios para mejorar la salud cardiovascular.",
            },
            {
                nombreTipo: "Fuerza",
                descripcion: "Ejercicios para aumentar la fuerza muscular.",
            },
            {
                nombreTipo: "Flexibilidad",
                descripcion: "Ejercicios para mejorar la flexibilidad y amplitud de movimiento.",
            },
            {
                nombreTipo: "Equilibrio",
                descripcion: "Ejercicios para mejorar el equilibrio y la coordinación.",
            },
            {
                nombreTipo: "Resistencia",
                descripcion: "Ejercicios para aumentar la resistencia física.",
            },
            {
                nombreTipo: "Intervalos",
                descripcion: "Ejercicios que alternan entre períodos de alta intensidad y descanso.",
            },
            {
                nombreTipo: "Funcional",
                descripcion: "Ejercicios diseñados para mejorar la funcionalidad del cuerpo en actividades diarias.",
            },
            {
                nombreTipo: "Potencia",
                descripcion: "Ejercicios para desarrollar la potencia y explosividad muscular.",
            },
            {
                nombreTipo: "Agilidad",
                descripcion: "Ejercicios para mejorar la agilidad y la rapidez de movimiento.",
            },
            {
                nombreTipo: "Core",
                descripcion: "Ejercicios para fortalecer los músculos del core y la zona abdominal.",
            },
        ];
        yield db_1.prisma.tBL_TIPOSEJERCICIOS.createMany({
            data: listaTipoEjercicios,
        });
        console.log("Tipo ejercicios seed!");
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
        yield addMunicipios();
        yield addTipoEjercicios();
        console.log("Seeders Completado!");
    }
    catch (error) {
        console.log(error);
    }
});
ejcutarSeeders();
