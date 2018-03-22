"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_changelog_1 = require("generate-changelog");
const logger_1 = require("../src/logger");
const writer_1 = require("../src/writer");
class CreateChangelog {
    accessChangelog(options) {
        logger_1.log.info(`trying to access logs for repo: ${options.repoUrl} for version ${options.version}`);
        const version = options.version;
        const repoUrl = options.repoUrl;
        generate_changelog_1.generate({ [version]: true, repoUrl })
            .then(changelog => {
            writer_1.write(changelog, 'CHANGELOG.md', 'F:\\Personal_Workspace\\Github\\changelog-generator\\');
        });
    }
}
exports.createChangelog = new CreateChangelog();
//# sourceMappingURL=create-changelog.js.map