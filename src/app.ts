require('dotenv').config();

import {landingPage, placeholderMenu} from "./views";

const {App, ExpressReceiver} = require('@slack/bolt');

const receiver = new ExpressReceiver({signingSecret: process.env.SLACK_SIGNING_SECRET});
const app = new App({
    token: process.env.SLACK_TOKEN,
    receiver
});


app.message('hello', async ({message, say}: any) => {
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

app.action('button_click', async ({body, ack, say}: any) => {
    // Acknowledge the action
    await ack();
    await say(`<@${body.user.id}> clicked the button`);
});

app.command('/reaction', async ({command, ack, say}: any) => {
    await ack({
        blocks: placeholderMenu
    });
});

receiver.router.get('/', (req: any, res: any) => {
    res.send(landingPage);
});

(async () => {
    // Start your app
    let port = process.env.PORT || 3000;
    await app.start(port);

    console.log(`⚡️ Bolt app is running on port ${port}!`);
})();

