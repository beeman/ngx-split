export const routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/examples/examples.module').then((m) => m.ExamplesModule),
  },
  {
    path: 'changelog',
    loadChildren: () =>
      import('./pages/changelog/changelog.module').then(
        (m) => m.ChangelogModule
      ),
  },
  {
    path: 'documentation',
    loadChildren: () =>
      import('./pages/documentation/documentation.module').then(
        (m) => m.DocumentationModule
      ),
  },
];
