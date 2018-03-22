import { generate } from 'generate-changelog'

class CreateChangelog {

  constructor() {
    console.log(`Creating Changelog`)
  }

  accessChangelog(options: any) {
    const repoUrl = 'https://github.com/amittkSharma/changelog-generator'
    console.log(`access log ${repoUrl}`)
    generate({ major: true, repoUrl })
    .then(changelog  => {

      console.log(changelog)
    })
  }
}

export const createChangelog = new CreateChangelog()
