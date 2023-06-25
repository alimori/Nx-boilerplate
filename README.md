# Nx monorepo
An nx monorepo consist of apps and libs.
## Apps and Libs
- **Apps** configure dependency injection and wire up libraries. They should not contain any components, services, or business logic.
- **Libs** contain services, components, utilities, etc. They have well-defined public API.

## Libs categories in two levels
1. **Scope** (Where a library lives, who owns it)
It's a good convention to put applications-specific libraries into the directory matching the application name. This provides enough organization for small to mid-size applications.
   - ***Shared*** shared between sereval apps.
   - ***App-specific*** libs that lives in one app.
2. **Types** of libs
   - ***Feature*** libraries:
Developers should consider feature libraries as libraries that implement smart UI (with access to data sources) for specific business use cases or pages in an application.
   - ***UI*** libraries:
A UI (Component) library contains only presentational components (also called "dumb" components).
   - ***Data-access*** libraries:
A data-access library contains code for interacting with a back-end system. It also includes all the code related to state management.
   - ***Utility*** libraries:
A utility library contains low-level utilities used by many libraries and applications.



# Sample Nx repo
## Sample nx consists of several angular apps

1. **User management**
   - System of user management, authentication and permissions

2. **App A**
   - A sample app named App A

3. **App B**
   - A sample app named App B

4. **App C**
   - A sample app named App C

# Nx commands

## 1. install nx & pnpm
npm install -g nx
npm i -g pnpm
  use pnpm for install packages (pnpm install)

## 2. Workspace Setup
npx create-nx-workspace@latest

or with details

npx create-nx-workspace@latest workspace-name --preset=angular

## 3. Add new app
nx generate @nrwl/angular:app app-name --routing

## 4. Run app
npx nx serve app-name

## 5. Generate lib
npx nx g @nrwl/angular:lib lib-name --directory= path

ex) npx nx g @nrwl/angular:lib ui-header --directory= shared

## 6. Add component to lib
npx nx g component component-name --project= path-to-module --export

ex) npx nx g component header --project=shared-ui-header --export

## 7. Add service:
npx nx g @nrwl/angular:service service-name --project= path-to-module

## 8. Add tailwind:
npx nx g setup-tailwind myapp

## 9. Add ngrx:
### Initial Setup(add ngrx to root of projects)
1) nx g @nrwl/angular:ngrx <featurename> --module=<path-to-module> --no-interactive [options]

   ex) nx g @nrwl/angular:ngrx app --module=apps/<appname>/src/app/app.module.ts --root
### Feature Workflow (create data-access lib)
2) npx nx g @nrwl/angular:lib data-access --directory=user-management/login
### Feature Workflow(add login ngrx state)
3) npx nx g @nrwl/angular:ngrx login --module=libs/user-management/login/data-access/src/lib/user-management-login-data-access.module.ts --directory +state --no-interactive 

## 10. e2e test:
npx nx e2e todos-e2e --watch

## 11. Unit test:
- npx nx test lib-names
- npx nx affected:test
- npx nx affected --target=test
- nx run-many --target=test --projects=app1,app1,lib1,lib2
- nx run-many --target=test --all

## 12. Build mutliple projects:
npx nx run-many --target=build --projects=todos,api

## 13. Lint project:
npx nx lint app-name --with-deps

## 14. Move libraries:
nx g move --project booking-some-library shared/some-library

## 15. Show dependency graph
nx dep-graph
