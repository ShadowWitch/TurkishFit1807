import {
  TBL_PERMISOS,
  TBL_REL_PERMISOS_ROLES,
  TBL_ROLES,
  TBL_USUARIOS,
} from "@prisma/client";
import { prisma } from "../src/config/db";
import {
  IMunicipios,
  IPermisos,
  IRELPermisosRoles,
  ITipoEjercicios,
} from "../src/types/dbInterfaces.types";
import { IRoles } from "../src/types/roles.types";
import bcrypt from "bcrypt";

const addRolesSeed = async () => {
  try {
    // const listaPermisos = await prisma.tBL_PERMISOS.findMany()
    const listaRoles: IRoles[] = [
      {
        nombre: "ADMINISTRADOR",
        descripcion: "Hace de todo",
      },
      {
        nombre: "NORMAL",
        descripcion: "Hace pocas cosas",
      },
    ];

    await prisma.tBL_ROLES.createMany({
      data: listaRoles,
    });

    console.log("Roles seed!");
  } catch (error: any) {
    console.log(error);
  }
};

const addPermisosSeed = async () => {
  try {
    const listaPermisos: IPermisos[] = [
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

    await prisma.tBL_PERMISOS.createMany({
      data: listaPermisos,
    });
    console.log("Permisos seed!");
  } catch (error: any) {
    console.log(error);
  }
};

const addRolesPermisosREL = async () => {
  try {
    const listaRoles: TBL_ROLES[] = await prisma.tBL_ROLES.findMany();
    const listaPermisos: TBL_PERMISOS[] = await prisma.tBL_PERMISOS.findMany();

    const registro: IRELPermisosRoles[] = [
      {
        id_permiso: listaPermisos[0].id,
        id_role: listaRoles[0].id,
      },
      {
        id_permiso: listaPermisos[1].id,
        id_role: listaRoles[1].id,
      },
    ];

    await prisma.tBL_REL_PERMISOS_ROLES.createMany({
      data: registro,
    });

    console.log("REL Roles Permisos seed!");
  } catch (error: any) {
    console.log(error);
  }
};

const addUsuariosConRolesPermisos = async () => {
  try {
    const listaRELRoles: TBL_REL_PERMISOS_ROLES[] =
      await prisma.tBL_REL_PERMISOS_ROLES.findMany();
    const passwordEncripted = await bcrypt.hashSync("admin123", 5);

    const listaUsuarios: Omit<
      TBL_USUARIOS,
      "id" | "ultimaConexion" | "createdAt" | "updatedAt"
    >[] = [
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

    await prisma.tBL_USUARIOS.createMany({
      data: listaUsuarios,
    });

    console.log("Usuarios seed!");
  } catch (error) {
    console.log(error);
  }
};

const addMunicipios = async () => {
  try {
    const listaMunicipios: IMunicipios[] = [
      {
        codigo: "1807",
        nombre: "Yoro",
      },
      {
        codigo: "1804",
        nombre: "Olancho",
      },
    ];

    await prisma.tBL_MUNICIPIO.createMany({
      data: listaMunicipios,
    });

    console.log("Municipios seed!");
  } catch (error) {
    console.log(error);
  }
};

const addTipoEjercicios = async () => {
  try {
    const listaTipoEjercicios: ITipoEjercicios[] = [
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
        descripcion:
          "Ejercicios para mejorar la flexibilidad y amplitud de movimiento.",
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
        descripcion:
          "Ejercicios que alternan entre períodos de alta intensidad y descanso.",
      },
      {
        nombreTipo: "Funcional",
        descripcion:
          "Ejercicios diseñados para mejorar la funcionalidad del cuerpo en actividades diarias.",
      },
      {
        nombreTipo: "Potencia",
        descripcion:
          "Ejercicios para desarrollar la potencia y explosividad muscular.",
      },
      {
        nombreTipo: "Agilidad",
        descripcion:
          "Ejercicios para mejorar la agilidad y la rapidez de movimiento.",
      },
      {
        nombreTipo: "Core",
        descripcion:
          "Ejercicios para fortalecer los músculos del core y la zona abdominal.",
      },
    ];

    await prisma.tBL_TIPOSEJERCICIOS.createMany({
      data: listaTipoEjercicios,
    });

    console.log("Tipo ejercicios seed!");
  } catch (error) {
    console.log(error);
  }
};

const ejcutarSeeders = async () => {
  try {
    await addPermisosSeed();
    await addRolesSeed();
    // await addUsuariosSeed()
    await addRolesPermisosREL();
    await addUsuariosConRolesPermisos();
    await addMunicipios();
    await addTipoEjercicios();

    console.log("Seeders Completado!");
  } catch (error) {
    console.log(error);
  }
};

ejcutarSeeders();
