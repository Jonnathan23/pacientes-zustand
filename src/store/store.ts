import { create } from "zustand";
import { DraftPatient, Patient } from "../types/indext";
//TODO: import {v4 as uuidv4} from 'uuid'
type PatientSate = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return {
        ...patient, id: 'ss' //TODO: uuidv4()
    }
}

/**
 * TODO: instalar la dependencia de v4
 * * npm i uuid
 * * npm i --save-dev @types/uuid
 */
export const usePatientStore = create<PatientSate>((set) => ({
    patients: [],
    addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    }
}))