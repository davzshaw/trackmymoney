
# Track My Money
Bienvenido a **TrackMyMoney** una aplicación enfocada en el control y gestion financiero de tu vida diaria, con un énfasis mas en el menudeo y esas diminutas monedas que consigues día a día que llegan a tu bolsillo y no tienen un reporte financiero notable

> **Nota:**  Gracias al funcionamiento de NextJs podemos trabajar con el backend y frontend en el mismo proyecto creando otra forma de usar un monorepo. 

Puedes ver el proyecto en el repositorio:
https://github.com/CrisHzz/trackmymoney

## Tecnologías y Versiones

La aplicación utiliza las siguientes tecnologías:

- **Docker**: `3.8`
- **Next.js**: `14.2.28`
- **npm**: `^11.3.0`
- **React**: `^18`
- **React-DOM**: `^18`
- **Swagger UI React**: `^5.20.8`
- **Tailwind CSS**: `^3.4.1`
- **TypeScript**: `^5` (asegúrate de tener la versión compatible instalada)

> **Nota:** Es  obligatorio tener instalado [Node.js](https://nodejs.org) en tu equipo para poder correr el proyecto y instalar dependencias , recuerda que dependiendo de tu sistema operativo el proceso puede cambiar teniendo que descargar cosas especificas o no (Revisa la documentacion de algunas depedencias segun tu sistema operativo.

---

## Requisitos Previos

- [Git](https://git-scm.com) instalado en tu PC.
- [Node.js](https://nodejs.org) instalado.
- (Opcional) [Docker](https://www.docker.com) instalado si se desea utilizar la imagen de Docker Hub.

---

## Flujo para Descargar y Ejecutar el Proyecto

### 1. Clonar el Repositorio

Primero, clona el repositorio desde GitHub usando el siguiente comando:

```bash
git clone https://github.com/CrisHzz/trackmymoney.git
cd trackmymoney

```

### 2. Instalar las Dependencias

Instala las dependencias necesarias para el proyecto mediante npm o sus derivados :

```bash
npm install

```

### 3. Ejecutar el Proyecto

Una vez instaladas las dependencias,  se ejecuta el proyecto con:

```bash
npm run dev

```

El proyecto se ejecutará en modo desarrollo. Por defecto,  se puede acceder a él desde [http://localhost:3000](http://localhost:3000/) (o el puerto configurado en el proyecto).

----------

## Uso de Docker

Tambien existe la posibildiad de usar docker , gracias a la imagen que se creo, aqui los pasos:

### 1. Descargar la Imagen de Docker Hub

Descarga la imagen de Docker disponible en [Docker Hub](https://hub.docker.com/r/davshaw/trackmymoney):

```bash
docker pull davshaw/trackmymoney

```

### 2. Ejecutar la Imagen en un Contenedor

Ejecuta la imagen en un contenedor, mapeando el puerto `3000` para acceder a la aplicación:

```bash
docker run -p 3000:3000 davshaw/trackmymoney

```


### 📘 Documentación de la API (Swagger)

La documentación interactiva de la API está disponible a través de Swagger UI.

### 🔗 Acceso

Puedes acceder a la documentación en la siguiente ruta:


[http://localhost:3000/docs](http://localhost:3000/docs)

```

> Es importante de tener el archivo `swagger.json` en la carpeta `public/`.
Verificar si esta instalado swagger , aveces puede fallar
npm install swagger-ui-react


```

Con esto, la aplicación estará disponible en [http://localhost:3000](http://localhost:3000/) 
----------

## Recursos Adicionales

- <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js Logo" width="100"/>

- <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="100"/>
    
- <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Logo" width="100"/>  
    
- <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" width="100"/>
    
