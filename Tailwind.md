# Tailwindcss setup in nx

## Add Tailwind CSS to an existing Angular application in nx
npx nx g @nrwl/angular:setup-tailwind app-name

## Configure Tailwind CSS for multiple applications with different themes
To configure Tailwind CSS for multiple applications that use different themes, recommendation is to use a Tailwind CSS preset (https://tailwindcss.com/docs/presets) and place it in a shared library.
And you would use CSS variables to allow each application to provide different values.

- Create a new folder libs/shared/tailwind-preset with a ***tailwind.config.js*** file in it with your shared configuration.
- Adjust the application's ***tailwind.config.js*** file to use the preset and remove the configuration that's already included in the preset.
-   Use CSS variables to allow each application's ***style.css*** file.

# reference
https://nx.dev/recipes/other/using-tailwind-css-with-angular-projects

