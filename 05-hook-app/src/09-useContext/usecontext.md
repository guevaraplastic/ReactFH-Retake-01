# useContext

El Context es un contenedor que está a un nivel superior que le va a permitir a los componentes hijo

- Creamos una carpeta llamada context para almacenar los contextos. Todos sera JSX ya que son higher order components.
  A diferencia de un componente normal este declara diferente

UserContext.jsx

```js
import { createContext } from "react";

export const UserContext = createContext();
```

UserProvider.jsx

```js
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  return (
    <>
      <UserContext.Provider value={{ hola: "Mundo" }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
```

Una vez listo vamos al componente principal y reemplazamos los fragment por `UserProvider`
