require('dotenv').config();

import {placeholderMenu} from "./src/views";

const {App} = require('@slack/bolt');
const app = new App({
    token: process.env.SLACK_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message('hello', async ({message, say}) => {
    await say({
        blocks: [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `Hey there <@${message.user}>!`
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Click Me"
                    },
                    "action_id": "button_click"
                }
            }
        ],
        text: `Hey there <@${message.user}>!`
    });
});

app.action('button_click', async ({body, ack, say}) => {
    // Acknowledge the action
    await ack();
    await say(`<@${body.user.id}> clicked the button`);
});

app.command('/reaction', async ({command, ack, say}) => {
    await ack();

    await say({
        blocks: placeholderMenu
    });
});

(async () => {
    // Start your app
    let port = process.env.PORT || 3000;
    await app.start(port);

    console.log(`⚡️ Bolt app is running on port ${port}!`);
})();

