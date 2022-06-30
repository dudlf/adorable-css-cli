import { cac } from 'cac'
import { build } from './build'

export const VERSION_CLI = '0.2.0' as const

const cli = cac('adorable-css')

cli
  .command('[root]', 'build for production')
  .alias('build')
  .option('-o, --out <filepath>', '[string] path of output css file', {
    default: 'adorable.css',
  })
  .option('-w, --watch', 'rebuilds when modules have changed on disk', {
    default: false,
  })
  .option('-m, --minify', 'minify output css', {
    default: false,
  })
  .option('-v, --verbose', 'verbose build output', {
    default: false,
  })
  .option('--noReset', 'exclude reset css from output', {
    default: false,
  })
  .action(build)

cli.help()
cli.version(VERSION_CLI)

if (require.main === module) {
  cli.parse(process.argv, { run: true })
}

export default cli
