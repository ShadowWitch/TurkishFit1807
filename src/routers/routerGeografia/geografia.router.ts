import { Router } from 'express';
import { addPaises, deletePaises, getAllPaises, updatePaises } from '../../controllers/controlGeografia/pais.controller';
import { addDepartamentos, deleteDepartamentos, getAllDepartamentos, updateDepartamentos } from '../../controllers/controlGeografia/departamentos.controller';
import { addMunicipios, deleteMunicipios, getAllMunicipios, updateMunicipios } from '../../controllers/controlGeografia/municipios.controller';

export const routerGeografia = Router()

// * Paises
routerGeografia.get('/show-all', getAllPaises)
routerGeografia.post('/add-one', addPaises)
routerGeografia.put('/update-one', updatePaises)
routerGeografia.delete('/delete-one', deletePaises)


// * Deptos
routerGeografia.get('/show-all', getAllDepartamentos)
routerGeografia.post('/add-one', addDepartamentos)
routerGeografia.put('/update-one', updateDepartamentos)
routerGeografia.delete('/delete-one', deleteDepartamentos)

// * Municipios
routerGeografia.get('/show-all', getAllMunicipios)
routerGeografia.post('/add-one', addMunicipios)
routerGeografia.put('/update-one', updateMunicipios)
routerGeografia.delete('/delete-one', deleteMunicipios)
