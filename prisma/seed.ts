import { prisma } from "../src/config/db"
import { IPermisos } from '../src/types/permisos.types';
import { IRoles } from '../src/types/roles.types';
import { IRegistrarUsuario } from "../src/types/usuarios.types";
import bcrypt from 'bcrypt'

const addPermisosSeed = async () => {
    const ListaPermisos: IPermisos[] = [
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
    ]


    try {
        const resp = await prisma.tBL_PERMISOS.createMany({
            data: ListaPermisos
        })

        console.log('Permisos seed!');
    } catch (error) {
        console.log('Permisos >> ', error);
    }
}

const addRolesSeed = async () => {
    try {
        const listaPermisos = await prisma.tBL_PERMISOS.findMany()
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

        const listaRoles: IRoles[] = listaPermisos.map((e) => ({
            nombre: `Admin_${e.nombre}`,
            descripcion: 'Puede hacer de todo',
            id_permisos: e.id,
        }))

        const respDBRol = await prisma.tBL_ROLES.createMany({
            data: listaRoles
        })

        console.log('Roles seed!');
    } catch (error: any) {
        console.log(error);
    }
}

// TODO LMOYA : Tengo que revisar bien el seeder de insertar usuarios manana...
const addUsuariosSeed = async () => {
    try {
        let listaUsuariosPruebaAca: IRegistrarUsuario[] = []

        const listaRoles = await prisma.tBL_ROLES.findMany()

        await listaRoles.forEach(async (e, index) => {
            const hashContrasena = await bcrypt.hashSync('admin', 5)

            const data: IRegistrarUsuario = {
                nombre: `Juan${e.nombre}`,
                contrasena: hashContrasena,
                correoElectronico: `${e.nombre}@gmail.com`,
                repetirContrasena: 'admin',
                id_role: e.id
            }
            listaUsuariosPruebaAca.push(data)
        })


        const respDB = await prisma.tBL_USUARIOS.createMany({
            data: listaUsuariosPruebaAca
        })

        console.log('Usuarios seed!');

    } catch (error: any) {
        console.log(error);
    }
}

const ejcutarSeeders = async () => {
    try {
        await addPermisosSeed()
        await addRolesSeed()
        await addUsuariosSeed()

        console.log('Seeders Completado!');
    } catch (error) {
        console.log(error);
    }
}

ejcutarSeeders()


