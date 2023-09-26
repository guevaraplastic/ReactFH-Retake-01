# Reducer

- Un reducer es una función comun y corriente, no puede ser asincrona.
- Debe ser una función pura, debe de poder resolver todo lo que se pide sin necesidad de llamar a otras funciones. No debe llamar localStorage o sessionStorage
- Debe de retornar un nuevo estado.

Recibe 2 argumentos:

- Valor inicial y la acción a ejecutar
- Cuando queramos hacer una modificacion, mandamos una accion y esa accion indica como va a modificarse.

Ciclo de vida 0. State

1. Muestra en pantalla
2. Usuario hace modificacion, se crea un Action
3. Se envia al reducer

**useReducer** puede ser una alternativa al useState
