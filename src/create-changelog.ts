class CreateChangelog {

  constructor() {
    console.log(`Creating Changelog`)
  }

  accessChangelog(options: any): string {
    console.log(`access log`)

    return 'Git changelog under construction'
  }
}

export const createChangelog = new CreateChangelog()
