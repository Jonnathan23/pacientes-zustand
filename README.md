# React + TypeScript + Vite
### React Hook Form

```bash
npm i react-hook-form
```

### Zustand

```bash
npm i zustand
```

### React-Toastify
```bash
npm i react-toastify
```

```ts
import "react-toastify/dist/ReactToastify.css"

import { ToastContainer } from "react-toastify"

<ToastContainer />


// Utilizar su disparador
import { toast } from "react-toastify"

toast.success('Paciente Registrado Correctamente')

toast.info('Nueva notificacion')

toast.error('Error al guardar al paciente')

```