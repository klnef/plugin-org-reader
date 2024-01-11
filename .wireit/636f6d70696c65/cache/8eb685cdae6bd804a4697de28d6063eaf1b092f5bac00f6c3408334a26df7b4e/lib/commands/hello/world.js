/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';
Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('@salesforce/plugin-org-reader', 'hello.world');
export default class World extends SfCommand {
    static summary = messages.getMessage('summary');
    static description = messages.getMessage('description');
    static examples = messages.getMessages('examples');
    static flags = {
        name: Flags.string({
            char: 'n',
            summary: messages.getMessage('flags.name.summary'),
            description: messages.getMessage('flags.name.description'),
            default: 'World',
        }),
    };
    async run() {
        const { flags } = await this.parse(World);
        const time = new Date().toDateString();
        this.log(messages.getMessage('info.hello', [flags.name, time]));
        return {
            name: flags.name,
            time,
        };
    }
}
//# sourceMappingURL=world.js.map