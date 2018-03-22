import * as fs from 'fs-extra'
import { log } from '../src/logger'

export function write(content: any, fileName: string, filepath: string) {
  const completeFilepath = `${filepath}${fileName}`
  log.info(`Writing the changelog at location: ${completeFilepath}`)
  fs.outputFile(completeFilepath, content).then(res => {
    log.info(`Done writing the file with result ${res}`)
  })
  .catch(err => {
    log.error(`Error in writing with error ${err}`)
  })
}
