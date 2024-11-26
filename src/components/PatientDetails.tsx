import { Patient } from "../types/indext"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store/store"
import { toast } from "react-toastify"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

    const { deletePatient, getPatientId } = usePatientStore()

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente eliminado correctamente')
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" detail={patient.id} />
            <PatientDetailItem label="Nombre" detail={patient.name} />
            <PatientDetailItem label="Propietario" detail={patient.caretaker} />
            <PatientDetailItem label="Correo" detail={patient.email} />
            <PatientDetailItem label="Fecha de Alta" detail={patient.date.toString()} />
            <PatientDetailItem label="Síntomas" detail={patient.symptoms} />

            <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientId(patient.id)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleClick}
                >
                    Eliminar
                </button>
            </div>

        </div>
    )
}