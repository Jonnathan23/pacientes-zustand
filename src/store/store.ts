import { create } from "zustand";
import { DraftPatient, Patient } from "../types/indext";
import { devtools } from "zustand/middleware";
//TODO: import {v4 as uuidv4} from 'uuid'
type PatientSate = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientId: (id: Patient['id']) => void
    updatePatient: (data:Patient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return {
        //TODO: ...patient, id: uuidv4()
        ...patient, id: newId()
    }
}

/**
 * TODO: instalar la dependencia de v4
 * * npm i uuid
 * * npm i --save-dev @types/uuid
 */
export const usePatientStore = create<PatientSate>()(devtools((set) => ({
    patients: [],
    activeId: '',

    addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    },

    deletePatient: (id) => {
        set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id)
        }))
    },

    getPatientId: (id) => {
        set(() => ({
            activeId: id
        }))
    },

    updatePatient: (data) =>{
        set((state) => ({
            patients: state.patients.map((patient) => patient.id === data.id ? data : patient)
           
        }))
    }
})))

//TODO: Borrar esta funcion
let inicialId = 'dsa'
const newId = () => {
    inicialId += 'aa'
    return inicialId
}
