"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const logger_1 = require("../src/logger");
function write(content, fileName, filepath) {
    const completeFilepath = `${filepath}${fileName}`;
    logger_1.log.info(`Writing the changelog at location: ${completeFilepath}`);
    fs.outputFile(completeFilepath, content).then(res => {
        logger_1.log.info(`Done writing the file with result ${res}`);
    })
        .catch(err => {
        logger_1.log.error(`Error in writing with error ${err}`);
    });
}
exports.write = write;
//# sourceMappingURL=writer.js.map