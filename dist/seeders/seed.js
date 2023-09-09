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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const listaPermisos = [
    {
        nombre: 'Agregar',
        descripcion: 'Puede Agregar',
        acciones: ['post', 'delete', 'update']
    },
    {
        nombre: 'Ver',
        descripcion: 'Puede Ver',
        acciones: ['post', 'delete', 'update']
    },
    {
        nombre: 'Actualizar',
        descripcion: 'Puede actualizar',
        acciones: ['post', 'delete', 'update']
    },
    {
        nombre: 'Eliminar',
        descripcion: 'Puede Eliminar',
        acciones: ['post', 'delete', 'update']
    },
];
const addListaPermisos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield db_1.prisma.tBL_PERMISOS.createMany({
            data: listaPermisos
        });
        console.log('Permisos seed');
    }
    catch (error) {
        console.log('Seed Roles >>', error);
    }
});
addListaPermisos();
