const {App} = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: "xoxb-6124229605-1307629092149-9PV3qbvGQFsYx3Ra8n4qvnXE",
    signingSecret: "c7c5679b89fa403731fd4a32a0e0fc71"
});

app.message('hello', async ({message, say}) => {
    // say() sends a message to the channel where the event was triggered
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

    const blocks = [{
        type: "section",
        text: {
            type: "mrkdwn",
            text: "Open action items:"
        },
        accessory: {
            "type": "button",
            "action_id": `open_settings`,
            "text": {
                "type": "plain_text",
                "text": "⚙️",
            }
        }
    }, {
        type: "divider"
    }, {
        type: "section",
        text: {
            type: "mrkdwn",
            text: "do some stuff"
        },
        accessory: {
            "type": "button",
            "action_id": `complete:fakeActionId`,
            "text": {
                "type": "plain_text",
                "text": "Complete",
            }
        }
    }, {
        type: "actions",
        elements: [
            {
                type: "button",
                action_id: "close_menu",
                text: {
                    type: "plain_text",
                    text: "Close"
                },
                style: "danger"
            },
            {
                type: "button",
                action_id: "add_action_item",
                text: {
                    type: "plain_text",
                    text: "Add"
                }
            },
            {
                type: "button",
                action_id: "post_to_channel",
                text: {
                    type: "plain_text",
                    text: "Post"
                },
                style: "primary"
            },
        ]
    }];

    console.log('here we are again...');
    await say({
        blocks: blocks
    });
});

(async () => {
    // Start your app
    let port = process.env.PORT || 3000;
    await app.start(port);

    console.log(`⚡️ Bolt app is running on port ${port}!`);
})();

