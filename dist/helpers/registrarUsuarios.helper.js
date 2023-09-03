"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestBodyRegistrarUsuariosType = void 0;
const zod_1 = require("zod");
// TODO: Usar luego para las validaciones
exports.requestBodyRegistrarUsuariosType = zod_1.z.object({
    nombre: zod_1.z.string().trim().min(3).max(20),
    correoElectronico: zod_1.z.string().email({
        message: 'Email no valido'
    }),
    cotrasena: zod_1.z.string().trim().min(5).max(30),
    repetirContrasena: zod_1.z.string().trim().min(5).max(30),
    imagenPerfil: zod_1.z.string().optional().nullable(),
    id_role: zod_1.z.string().uuid()
});
//* export type IRequestBodyRegistrarUsuariosType = z.infer<typeof requestBodyRegistrarUsuariosType>
