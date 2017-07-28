# Starter Kit for AngularJS + ES6

Using Babel, Webpack and Gulp

# Generating Components

You may, of course, create these files manually, every time a new module is needed, but that gets quickly tedious. To generate a component, run npm run component -- --name componentName.

The parameter following the --name flag is the name of the component to be created. Ensure that it is unique or it will overwrite the preexisting identically-named component.

The component will be created, by default, inside client/app/components. To change this, apply the --parent flag, followed by a path relative to client/app/components/.

For example, running npm run component -- --name signup --parent auth will create a signup component at client/app/components/auth/signup.

Running npm run component -- --name footer --parent ../common creates a footer component at client/app/common/footer.

Because the argument to --name applies to the folder name and the actual component name, make sure to camelcase the component names.