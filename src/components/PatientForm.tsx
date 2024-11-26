import { useForm } from "react-hook-form"
import Error from "./Error"
import { DraftPatient } from "../types/indext"
import { usePatientStore } from "../store/store"
import { useEffect } from "react"
import { toast } from "react-toastify"

export default function PatientForm() {

    const { addPatient, activeId, patients, updatePatient, getPatientId } = usePatientStore()
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<DraftPatient>()

    useEffect(() => {
        if (activeId) {
            const activePatient = patients.filter(patient => patient.id === activeId)[0]
            setValue('name', activePatient.name)
            setValue('caretaker', activePatient.caretaker)
            setValue('email', activePatient.email)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)
        }
    }, [activeId])

    const registerPatient = (data: DraftPatient) => {

        if (activeId) {
            updatePatient({ ...data, id: activeId })
            toast.success('Paciente modificao correctamente')

        } else {
            addPatient(data)
            toast.success('Paciente Registrado Correctamente')            
        }

        getPatientId('')
        reset()
    }



    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register('name', {
                            required: 'El Nombre del paciente es obligatorio',
                        })}
                    />
                    {errors.name &&
                        <Error >
                            {errors.name?.message}
                        </Error>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register('caretaker', {
                            required: 'El Nombre del propietario es obligatorio',
                        })}
                    />
                </div>
                {errors.caretaker &&
                    <Error >
                        {errors.caretaker?.message}
                    </Error>
                }

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Email de Registro"
                        {...register("email", {
                            required: "El Email es Obligatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email No Válido'
                            }
                        })}
                    />
                </div>
                {errors.email &&
                    <Error >
                        {errors.email?.message}
                    </Error>
                }

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                        {...register('date', {
                            required: 'La fecha de alta es obligatoria',
                        })}
                    />
                </div>
                {errors.date &&
                    <Error >
                        {errors.date?.message}
                    </Error>
                }

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Síntomas del paciente"
                        {...register('symptoms', {
                            required: 'Los síntomas son obligatorios',
                        })}
                    />
                </div>
                {errors.symptoms &&
                    <Error >
                        {errors.symptoms?.message}
                    </Error>
                }

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={activeId ? 'Guardar cambios' : 'Guardar Paciente'}
                />
            </form>
        </div>

    )
}