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


export const landingPage = `
<h1>Action Raptor</h1>
<p>rawr</p>
<p>This app helps you to keep your team and yourself accountable for action items people have committed to. You can add and complete items. You can have your team be reminded of the items. Behind the scenes, we'll keep track of some analytics and show them to each user on the app's home page.
</p>
<p>Click the link below to install!!</p>
<a href="https://slack.com/oauth/v2/authorize?client_id=6124229605.904278581350&scope=chat:write,commands&user_scope="><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
<p>See our privacy policy <a href="https://action-raptor.herokuapp.com/privacy-policy">here</a></p>
`;
