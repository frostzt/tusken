// https://github.com/lukeed/escalade/blob/2477005062cdbd8407afc90d3f48f4930354252b/src/sync.js
import { readdirSync, statSync } from 'fs'
import { dirname, resolve } from 'path'

export type Callback = (
  directory: string,
  files: string[]
) => string | false | void

export default function (
  start: string,
  callback: Callback
): string | undefined {
  let dir = resolve('.', start)
  let tmp,
    stats = statSync(dir)

  if (!stats.isDirectory()) {
    dir = dirname(dir)
  }

  while (true) {
    tmp = callback(dir, readdirSync(dir))
    if (tmp) return resolve(dir, tmp)
    dir = dirname((tmp = dir))
    if (tmp === dir) break
  }
}
