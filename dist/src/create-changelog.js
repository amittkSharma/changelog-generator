"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_changelog_1 = require("generate-changelog");
class CreateChangelog {
    constructor() {
        console.log(`Creating Changelog`);
    }
    accessChangelog(options) {
        const repoUrl = 'https://github.com/amittkSharma/changelog-generator';
        console.log(`access log ${repoUrl}`);
        generate_changelog_1.generate({ major: true, repoUrl })
            .then(changelog => {
            console.log(changelog);
        });
    }
}
exports.createChangelog = new CreateChangelog();
//# sourceMappingURL=create-changelog.js.map