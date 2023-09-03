import { Router } from 'express';
import { addPaises, deletePaises, getAllPaises, updatePaises } from '../../controllers/controlGeografia/pais.controller';
import { addDepartamentos, deleteDepartamentos, getAllDepartamentos, updateDepartamentos } from '../../controllers/controlGeografia/departamentos.controller';
import { addMunicipios, deleteMunicipios, getAllMunicipios, updateMunicipios } from '../../controllers/controlGeografia/municipios.controller';

export const routerGeografia = Router()

// * Paises
routerGeografia.get('/pais-show-all', getAllPaises)
routerGeografia.post('/pais-add-one', addPaises)
routerGeografia.put('/pais-update-one', updatePaises)
routerGeografia.delete('/pais-delete-one', deletePaises)


// * Deptos
routerGeografia.get('/depto-show-all', getAllDepartamentos)
routerGeografia.post('/depto-add-one', addDepartamentos)
routerGeografia.put('/depto-update-one', updateDepartamentos)
routerGeografia.delete('/depto-delete-one', deleteDepartamentos)

// * Municipios
routerGeografia.get('/municipio-show-all', getAllMunicipios)
routerGeografia.post('/municipio-add-one', addMunicipios)
routerGeografia.put('/municipio-update-one', updateMunicipios)
routerGeografia.delete('/municipio-delete-one', deleteMunicipios)
