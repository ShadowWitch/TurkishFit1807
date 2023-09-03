import type { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { z } from 'zod'

import { prisma } from "../../config/db";
import { IRegistrarUsuario } from "../../types/registrarUsuarios.types";

export const authLogin = (req: Request, res: Response) => {
    return res.json({
        ok: true,
        msg: "Logeando",
    });
};

export const authRegistrar = async (req: Request, res: Response) => {
    try {
        const {
            nombre,
            contrasena,
            correoElectronico,
            id_role,
            imagenPerfil = "",
        }: IRegistrarUsuario = req.body;

        // * Verificar Usuario
        const verificacionUsuario = await prisma.tBL_USUARIOS.findFirst({
            where: {
                OR: [
                    {
                        nombre: nombre.toString().toLowerCase(),
                    },
                    {
                        correoElectronico: correoElectronico.toString().toLowerCase()
                    }
                ]
            }
        })

        if (verificacionUsuario) return res.status(400).json({
            ok: true,
            message: 'Ese usuario o correo ya se encuentra en uso',
            data: null
        })

        // * Registrar Usuario
        const contrasenaEncriptada = await bcrypt.hashSync(contrasena.toString().toLowerCase(), 10)
        const respDB = await prisma.tBL_USUARIOS.create({
            data: {
                nombre: nombre.toString().toLocaleLowerCase(),
                contrasena: contrasenaEncriptada,
                correoElectronico: correoElectronico.toString(),
                id_role: id_role.toString(),
            }
        })

        return res.json({
            ok: true,
            message: 'Usuario creado',
            data: respDB
        });
    } catch (error: any) {
        console.log(error);
        return res.json({
            ok: false,
            msg: "error",
        });
    }
};

export const authRecuperacionPassword = (req: Request, res: Response) => {
    return res.json({
        ok: true,
        msg: "Recuperar Contrasena",
        data: null
    });
};
