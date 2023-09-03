import { z } from 'zod'

// TODO: Usar luego para las validaciones

export const requestBodyRegistrarUsuariosType = z.object({
    nombre: z.string().trim().min(3).max(20),
    correoElectronico: z.string().email({
        message: 'Email no valido'
    }),
    cotrasena: z.string().trim().min(5).max(30),
    repetirContrasena: z.string().trim().min(5).max(30),
    imagenPerfil: z.string().optional().nullable(),

    id_role: z.string().uuid()
})

//* export type IRequestBodyRegistrarUsuariosType = z.infer<typeof requestBodyRegistrarUsuariosType>

