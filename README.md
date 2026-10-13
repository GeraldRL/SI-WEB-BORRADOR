# Inventario Práctica

Sistema de información web para gestionar un inventario de productos. Es un **proyecto de práctica**: un borrador desechable cuyo propósito es aprender y afianzar el stack que se usará en un proyecto de tesis.

> ⚠️ Este proyecto no es un producto final. Se desarrolla sin prisas, priorizando el aprendizaje y las buenas prácticas sobre las funcionalidades.

## Objetivo

Construir de punta a punta un sistema de información con las piezas que comparten casi todas las aplicaciones web de este tipo:

- Interfaz web con React y estilos con Tailwind CSS.
- API REST con Node.js y Express.
- Persistencia de datos en una base de datos relacional.
- Autenticación con JWT y control de acceso por roles.
- Operaciones CRUD, formularios, tablas, filtros y panel de resumen.

### Objetivos de aprendizaje

- Practicar React, Tailwind, Vite y Node.js en un proyecto completo.
- Definir una estructura de carpetas reutilizable en proyectos futuros.
- Mantener un historial de Git limpio, con commits pequeños y descriptivos (Conventional Commits).
- Documentar los problemas encontrados y sus soluciones en `NOTAS.md`.

## Stack tecnológico

| Capa | Tecnología | Uso |
|------|------------|-----|
| Frontend | React | Construcción de la interfaz con componentes |
| Herramienta de build | Vite | Servidor de desarrollo y empaquetado |
| Estilos | Tailwind CSS | Diseño con clases utilitarias y responsivo |
| Enrutamiento | React Router | Navegación y rutas protegidas |
| Backend | Node.js + Express | API REST |
| Base de datos | SQLite (migrable a PostgreSQL) | Almacenamiento de datos |
| Autenticación | JWT + bycript |  Sesiones y hash de contraseñas |
| Control de versiones | Git + Github | Historial y ramas por fase |
| Pruebas de API | Postman / Thunder Client | Verificación de endpoints |

## Estructura del proyecto

```
inventario-practica/
|--- client/        # Aplicación React (Vite +  Tailwind)
|--- server/        # API REST (Node + Express)
|--- practica-js/   # Ejercicios de JavaScript moderno
|--- NOTAS.md       # Aprendizajes y problemas resueltos
|--- README.md      # Descripción del mini proyecto
```

## Fases de desarrollo

- [X] Fase 0: Repositorio y estructura
- [ ] Fase 1: Práctica de JavaScript moderno
- [X] Fase 2: Frontend con datos simulados
- [ ] Fase 3: Backend y API REST
- [ ] Fase 4: Integración frontend y backend
- [ ] Fase 5: Autenticación y roles
- [ ] Fase 6: Extras (búsqueda, paginación, gráficos, exportación, despliegue, etc.)

## Convención de commits

Se usa el formato `tipo(alcance): descripción en imperativo`.

Tipos: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `test`.

Ejemplo: `feat(auth): agregar formulario de login`.

## Instalación y ejecución

_Se completará a medida que avance el desarrollo._