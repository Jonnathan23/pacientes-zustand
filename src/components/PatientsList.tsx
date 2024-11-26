import { usePatientStore } from "../store/store"

export default function PatientsList() {
    const { patients } = usePatientStore()
    console.log(patients)
    return (
        <div className="md: w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
Administra tus {' '}
<span className="text-indigo-600">Pacientes y Citas</span>
                    </p>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {' '}
                        <span className="text-indigo-600">y aparecerán en ese lugar</span>
                    </p>
                </>
            )
            }
        </div>
    )
}