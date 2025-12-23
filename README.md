# Backend Denuncias

Este proyecto es un backend desarrollado con NestJS y Prisma para la gestión de denuncias ciudadanas.

## Características principales

- Registro y autenticación de usuarios
- Creación y gestión de denuncias
- Subida de imágenes asociadas a denuncias
- Filtros por estado y categoría
- Estadísticas de denuncias

## Estructura del proyecto

- `src/` Código fuente principal
  - `auth/` Módulo de autenticación
  - `denuncias/` Módulo de denuncias
  - `prisma/` Servicio de acceso a base de datos
  - `users/` Módulo de usuarios
- `prisma/` Archivos de migración y esquema de base de datos
- `uploads/` Carpeta para imágenes subidas

## Servicio de Denuncias (`DenunciasService`)

El servicio [`DenunciasService`](src/denuncias/denuncias.service.ts) gestiona la lógica de negocio relacionada con las denuncias. Utiliza Prisma para interactuar con la base de datos.

### Métodos principales

- **create(createDenunciaDto, userId, imageUrl?)**  
  Crea una nueva denuncia asociada a un usuario.  
  - `createDenunciaDto`: Datos de la denuncia (título, descripción, categoría, lat, lng).
  - `userId`: ID del usuario que realiza la denuncia.
  - `imageUrl` (opcional): Ruta de la imagen asociada.

- **findByUser(userId)**  
  Devuelve todas las denuncias realizadas por un usuario específico.

- **findAll(filters?)**  
  Devuelve todas las denuncias, permitiendo filtrar por estado (`status`) y categoría (`category`).  
  Incluye información básica del usuario.

- **findOne(id)**  
  Devuelve una denuncia específica por su ID, incluyendo información del usuario.

- **updateStatus(id, status)**  
  Actualiza el estado de una denuncia (por ejemplo: "Pending", "In Progress", "Resolved").

- **getStats()**  
  Devuelve estadísticas generales:
  - Total de denuncias.
  - Conteo por estado.
  - Conteo por categoría.

### Ejemplo de uso

```ts
import { DenunciasService } from './src/denuncias/denuncias.service';

// Crear una denuncia
denunciasService.create({
  title: 'Bache en la calle',
  description: 'Hay un bache grande',
  category: 'Infraestructura',
  lat: 10.0,
  lng: 20.0,
}, userId, '/uploads/imagen.jpg');

// Obtener denuncias por usuario
denunciasService.findByUser(userId);

// Obtener todas las denuncias filtradas
denunciasService.findAll({ status: 'Pending', category: 'Infraestructura' });

// Actualizar estado de una denuncia
denunciasService.updateStatus(1, 'In Progress');

// Obtener estadísticas
denunciasService.getStats();
```

Para más detalles, consulta el archivo [`src/denuncias/denuncias.service.ts`](src/denuncias/denuncias.service.ts).

## Instalación

1. Clona el repositorio
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura la base de datos en `prisma/schema.prisma` y ejecuta las migraciones:
   ```bash
   npx prisma migrate dev
   ```
4. Inicia el servidor:
   ```bash
   npm run start:dev
   ```

## Pruebas

Ejecuta las pruebas con:
```bash
npm run test
```

## Licencia

MIT
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
