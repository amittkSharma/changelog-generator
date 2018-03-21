import * as Changelog from 'generate-changelog'

class CreateChangelog {

  constructor() {
    console.log(`Creating Changelog`)
  }

  accessChangelog(options: any): string {
    console.log(`access log`)

    return Changelog.generate({ patch: true, repoUrl: 'https://github.com/amittkSharma/changelog-generator' })
    .then(changelog  => {
      console.log(changelog)
    })
  }
}

export const createChangelog = new CreateChangelog()
