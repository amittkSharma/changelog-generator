import { generate } from 'generate-changelog'
import { log } from '../src/logger'
import { write } from '../src/writer'
import { GeneratorOptions } from './types/index'

class CreateChangelog {

  accessChangelog(options: GeneratorOptions) {
    log.info(`trying to access logs for repo: ${options.repoUrl} for version ${options.version}`)
    const version = options.version
    const repoUrl = options.repoUrl
    generate({ [version]: true, repoUrl })
    .then(changelog  => {
      write(changelog, 'CHANGELOG.md', 'F:\\Personal_Workspace\\Github\\changelog-generator\\')
    })
  }
}

export const createChangelog = new CreateChangelog()
