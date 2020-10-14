# Frontend Developer Test

## Objetivo

El proyecto es un portfolio que está bastante avanzado, pero hay elementos pendientes de terminar y otros que no funcionan correctamente, que tendrás que solucionar.

El objetivo es valorar tu capacidad de comprensión, toma de decisiones, mejora y finalización del proyecto.

**La duración de la prueba debe ser inferior a las 6 horas.** ⏱

## ¿Cómo empezar?

1. Aquí tienes el [link al diseño en Figma](https://www.figma.com/file/bZ5WjEAxAZnCOmNXMnKbXJ/Frontend-Developer-Test)
2. Hacer un repositorio nuevo utilizando este como base **(sin hacer un fork)**.
3. Hacer al menos un primer commit con el código original, para ver la hora de inicio.
4. Hacer commits individuales por cada bloque que vayas haciendo. El último commit marca el final.
5. Envíanos el link a tu repositorio

## ¿Qué valoraremos?

* Utilización y re-utilización de componentes modulares
* Mobile first & RWD
* Uso de Git
* Web Performance Optimization
* Simplicidad de la solución
* Fidelidad del diseño propuesto
* Optimización y mejora de recursos
* Compatibilidad de navegadores
* Organización y calidad de código

## Tareas a realizar

Eres libre de modificar cualquier parte del código y/o estructura del proyecto, según convengas. Pero requeriremos que las siguientes tareas estén completadas:

- [ ] Añadir estilos al _Header_ y _Footer_
- [ ] Añadir funcionalidad para mostrar la navegación _mobile_ utilizando las funciones proporcionadas
- [ ] Optimizar el componente de cabecera de las páginas _Home_ y _Portfolio_
- [ ] Añadir los estilos de la grid. Solo son dos columnas, pero deberás tener en cuenta el diseño proporcionado. Las clases y estructura del HTML ya están montadas, solo es necesario añadir los estilos.
- [ ] Añadir estilos del botón, tiene dos tipologías: normal (relleno) y hollow (solo borde). Debería poder funcionar con cualquier elemento HTML.
- [ ] Hacer que funcione la validación del formulario de contacto
- [ ] Solucionar el funcionamiento de la ventana modal del formulario de contacto
- [ ] Añadir estilos a la navegación entre proyectos en la página de detalle de proyecto (`sanderson.jsx`)
- [ ] Afinar la maquetación al diseño proporcionado
- [ ] Optimización de las imágenes para dispositivos
- [ ] Mejorar la carga de recursos (tipografías, imágenes, etc) para mejorar la performance
- [ ] Compatibilidad en las 2 últimas versiones de navegadores

## ⭐️ Bonus points

Si **has cumplido todos las tareas a realizar**, con los requisitos que valoramos, y aún te sobra tiempo, puedes mejorar tu prueba
ampliando con estos nuevos requisitos (recomendamos seguir el orden definido):

- [ ] Mejora de accesibilidad web
- [ ] Mantener el menú activo en la página correspondiente
- [ ] Animación del menú mobile y ventana modal
- [ ] Test con Jest

## Estructura del proyecto

```
.
├── components
│   ├── ContactMe — módulo de contacto transversal
│   ├── ContactModal — ventana modal con formulario de contacto
│   ├── Footer — pie de página
│   └── Header — cabecera de página
├── contexts
│   └── AppContext.js — React Context API
├── pages
│   ├── portfolio
│   │   ├── index.jsx — página Portfolio listado
│   │   └── sanderson.jsx — página detalle de portfolio
│   ├── _app.jsx — página base de Next.js
│   └── index.jsx — Home page
├── public
│   └── (...) — imágenes y SVG's del proyecto
└── styles
    ├── _variables.scss — colores, tipografías
    ├── buttons.scss — archivo para los estilos de los botones
    ├── container.scss — contenedor del contenido de la web
    ├── globals.scss — estilos globales
    ├── grid.scss — archivo para los estilos de la grid
    └── xxx.module.scss — estilos específicos de las páginas
```

## ¿Cómo ejecutar el proyecto?

El proyecto está desarrollado con **Next.js**, puedes encontrar más información en la [documentación de Next.js](https://nextjs.org/docs).

Para ejecutar el servidor de desarrollo, una vez instaladas los _packages_ de Node:

```bash
yarn dev
# o
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
