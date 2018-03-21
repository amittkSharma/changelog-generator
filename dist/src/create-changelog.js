"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Changelog = require("generate-changelog");
class CreateChangelog {
    constructor() {
        console.log(`Creating Changelog`);
    }
    accessChangelog(options) {
        console.log(`access log`);
        return Changelog.generate({ patch: true, repoUrl: 'https://github.com/amittkSharma/changelog-generator' })
            .then(changelog => {
            console.log(changelog);
        });
    }
}
exports.createChangelog = new CreateChangelog();
//# sourceMappingURL=create-changelog.js.map