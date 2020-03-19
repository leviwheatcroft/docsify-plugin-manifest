export const defaults: Config = {
  root: './',
  pretty: false,
  fileFilters: [
    '**/*.md',
  ],
  dirFilters: [
    '**',
    '!git',
    '!node_modules'
  ],
  fields: { all: [] },
}