export const placeholderMenu = [{
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