# Routes

- Importar paquete Router
- En el main se envuelve la app principal en etiquetas router

```js
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
);
```

- En el archivo principal encerramos las rutas dentro de la etiqueta `Router`

```js
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="login" element={<LoginPage />} />
  <Route path="about" element={<AboutPage />} />

  {/* <Route path="/*" element={<LoginPage />} /> */}
  <Route path="*" element={<Navigate to="/login" />} />
</Routes>
```

- Para movernos en un menu se usa la etiqueta `Link`

```js
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/login">Login</Link>
```

- `NavLink` se encarga de la navegacion, es como Link pero le puedo indicar una clase especial
