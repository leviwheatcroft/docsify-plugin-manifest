import commander from 'commander'

export function getArgs (): ConfigRaw {
  const args = new commander.Command()

  args.version(process.env.npm_package_version || '1.0.0 ?')
  
  args
    .option(
      '-r, --root <path>',
      'root path of directory to index',
      './'
    )
    .option(
      '-f, --fileFilters <glob,...>',
      'include / exlude files'
    )
    .option(
      '-d, --dirFilters <glob,...>',
      'include / exlude directories'
    )
    .option(
      '--pretty',
      'pretty print manifest'
    )
    .option(
      '-f, --fields <field,...>',
      'fields to include - see README for details',
      (field, accumulator) => {
        return [accumulator, field].join(',')
      }

    )
  
  args.parse(process.argv)

  return args.opts()
}