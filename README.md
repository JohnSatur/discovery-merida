# DiscoveryMerida

Bienvenidos a la aplicación web de [**Discovery Mérida**](https://www.instagram.com/discovery.merida/), una plataforma para la renta de casas de AirBnb en la ciudad de Mérida, Yuc. La aplicación está construida con Angular para el frontend y utiliza Strapi como backend para la gestión de contenido y datos de las propiedades.

## Tecnologías utilizadas

- **Angular (v18)**: Framework para construir aplicaciones web de una sola página (SPA).
- **Strapi**: CMS headless para la administración del contenido.
- **TypeScript**: Superset de JavaScript utilizado en Angular.
- **TailwindCSS**: Framework de CSS para el diseño responsivo.
- **GSAP**: Biblioteca de animación para la experiencia de usuario.

## Características

- Página principal con lista de casas en renta.
- Páginas individuales para cada propiedad con detalles como descripción, galería de imágenes y servicios.
- Sistema de idiomas (español e inglés).
- Sección de contacto, sobre nosotros y políticas de privacidad.
- Integración con Strapi para gestionar contenido dinámico.
- Interfaz limpia y responsiva.

## Requisitos previos

Antes de comenzar, asegurarse de tener instalados los siguientes programas:

- **Node.js** (v20.11.1 o superior)
- npm (10.5.0 o superior)
- Angular CLI (18.0.7 o superior)
- Git (v2.44.0.windows.1 o superior)
- Cuenta en Strapi Cloud (o tener configurado un servidor de Strapi local)

## Instalación

1. Clonar el repositorio:

``` bash
git clone https://github.com/usuario/discovery-merida.git
```

2. Navegar al directorio del proyecto

``` bash
cd discovery-merida
```

3. Instalar las dependencias del proyecto

``` bash
npm install
```

## Configuración

### Variables de entorno

[...]

### Strapi

Descargar e instalar repositorio de [backend de Strapi](https://github.com/JohnSatur/backend-discovery-merida) en local o en Strapi Cloud.

## Ejecución en entorno local

1. Ejecutar la aplicación en modo desarrollo:

``` bash
ng serve
```

2. Abrir el navegador en la dirección http://localhost:4200 (puerto por defecto) para visualizar la aplicación.

## Despliegue

1. Configurar la aplicación para producción:

``` bash
npm run build
```

2. Subir el contenido de la carpeta `dist/discovery-merida/browser` a tu servidor de producción o a un servicio de hosting estático como [**Netlify**](https://www.netlify.com/) o [**Vercel**](https://vercel.com/).

3. Asegurarse de que la API de Strapi en producción esté correctamente configurada con el dominio público de Strapi Cloud o el servidor que se esté usando.

## Gestión de datos

La aplicación consume los datos desde el backend de Strapi. Se pueden agregar o editar casas en el CMS de Strapi, y estos cambios se reflejarán automáticamente en la aplicación.

- **Local**: Para trabajar con Strapi local, asegurarse de tener el servidor corriendo en http://localhost:1337 (puerto por defecto).
- **Producción**: Configurar la URL del servidor de Strapi en las variables de entorno o dentro de los archivos de configuración de Angular.
