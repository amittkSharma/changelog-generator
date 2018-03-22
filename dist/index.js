"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_changelog_1 = require("./src/create-changelog");
function runChangelogCreator() {
    const options = {
        repoUrl: 'https://github.com/amittkSharma/changelog-generator',
        version: 'major',
    };
    create_changelog_1.createChangelog.accessChangelog(options);
}
runChangelogCreator();
//# sourceMappingURL=index.js.map