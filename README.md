Bienvenido a tu nuevo proyecto Festividad y a la comunidad de desarrollo informático en Internet. De forma predeterminada, al crear un nuevo proyecto se agrega este archivo README y algunos archivos de plantilla al directorio de su proyecto. Puede editar estos archivos de plantilla para personalizar su proyecto e incluir su propio código para acelerar el ciclo de desarrollo.

El proyecto está hecho a base de una idea que el equipo ha desarrollado, mismo que consiste en eventos festivos la cual conlleva el uso de la web 3.0, es decir, la plataforma en la que hemos pensado y misma de la que se ha plasmado las ideas principales en este proyecto consiste en el uso de una wallet digital para el acceso de los usuarios en cualquier plataforma como es en la que hemos pensado. 

Se sabe que la ola de la web 2.0 todavía se está desarrollando, aún así vemos los primeros brotes de crecimiento que han emergido del próximo cambio de paradigma en las aplicaciones de internet, mismas que son denominadas 3.0, es decir la idea principal es que esto es una red en la que las máquinas procesarían el contenido de forma similar a la humana, también cabe recalcar que este modo básicamente consiste en que todos los datos estarían conectados. 

El siguiente sistema consiste en una plataforma online enfocada a la web 3.0 para ofrecer servicios y productos referente a eventos festivos donde las personas que se dediquen a organizar este tipo de eventos puedan encontrar todo lo que lleguen a requerir para los mismos, de igual manera personas que se dediquen a brindar cualquier tipo de producto o servicio podrán tener la oportunidad de anunciarse y de ser contactados por algún cliente que requiera de alguno de ellos.

Si desea probar su proyecto localmente, puede utilizar los siguientes comandos:
# Inicia la réplica, ejecutándose en segundo plano.
```bash
dfx start --background
```

# Instala las librerias necesarias.
```bash
npm install
```

# Implementa sus contenedores en la réplica y genera su interfaz candid.
```bash 
dfx deploy
```

Para obtener más información antes de comenzar a trabajar con conectando, consulte la siguiente documentación disponible en línea:

- [Inicio rápido](https://internetcomputer.org/docs/current/developer-docs/quickstart/hello10mins)
- [Herramientas de desarrollo SDK] (https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove)
- [Guía del lenguaje de programación Motoko](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/)
- [Referencia rápida del lenguaje Motoko](https://internetcomputer.org/docs/current/references/motoko-ref/)
- [Referencia de la API de JavaScript](https://erxue-5aaaa-aaaab-qaagq-cai.raw.icp0.io)

Si desea comenzar a trabajar en su proyecto de inmediato, puede probar los siguientes comandos:

```bash
cd Festividad_3.0/
dfx help
dfx canister --help
```

## Ejecutando el proyecto localmente

Si desea probar su proyecto localmente, puede utilizar los siguientes comandos:

```bash
# Inicia la réplica, ejecutándose en segundo plano.
dfx start --background

# Implementa tus contenedores en la réplica y genera tu interfaz sincera
dfx deploy
```

Una vez que se complete el trabajo, su aplicación estará disponible en `http://localhost:4943?canisterId={asset_canister_id}`.

Si ha realizado cambios en su contenedor backend, puede generar una nueva interfaz sincera con

```bash
npm run generate
```

en cualquier momento. Esto se recomienda antes de iniciar el servidor de desarrollo frontend y se ejecutará automáticamente cada vez que ejecute `dfx implementar`.

Si está realizando cambios en la interfaz, puede iniciar un servidor de desarrollo con

```bash
npm start
```

Lo que iniciará un servidor en `http://localhost:8080`, enviando solicitudes de API a la réplica en el puerto 4943.

### Nota sobre las variables de entorno del frontend

Si aloja código de interfaz en algún lugar sin utilizar DFX, es posible que deba realizar uno de los siguientes ajustes para garantizar que su proyecto no obtenga la clave raíz en producción:

- establezca `DFX_NETWORK` en `ic` si está utilizando Webpack
- utilice su propio método preferido para reemplazar `process.env.DFX_NETWORK` en las declaraciones generadas automáticamente
   - Configurar `contenedores -> {asset_canister_id} -> declaraciones -> env_override en una cadena` en `dfx.json` reemplazará `process.env.DFX_NETWORK` con la cadena en las declaraciones generadas automáticamente
- Escribe tu propio constructor `createActor`


> [!IMPORTANT]
> Para el correcto funcionamiento de la plataforma en desarrollo es necesario Instalar estas librerias:
> - npm install react-router-dom
> - npm install react react-dom
> - npm install reactstrap
> - npm install react-modal
> - npm install react-icons
> - npm install bootstrap
> - npm install style-loader css-loader --save-dev
> - npm install styled-components
