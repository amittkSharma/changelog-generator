import { createChangelog } from './src/create-changelog'
import { GeneratorOptions } from './src/types/index'

function runChangelogCreator() {
  const options: GeneratorOptions = {
    repoUrl: 'https://github.com/amittkSharma/changelog-generator',
    version: 'major',
  }
  createChangelog.accessChangelog(options)
}

runChangelogCreator()
