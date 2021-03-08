const AWS = require('aws-sdk');

const sns = new AWS.SNS({
    apiVersion: '2010-03-31',
    region: "eu-west-1"
});


const publishMessageToSns = async (req, res, next) => {
    const Message = req.body.message;
    try {
        const data = await sns.publish({
            Message,
            TopicArn: process.env.SNS_TOPIC_ARN
        }).promise();

        req.messageId = data.MessageId;
        next();
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    publishMessageToSns
};