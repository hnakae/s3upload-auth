const s3 = require("../libs/s3");

async function getFileControlelr(req, res) {
  const data = await s3
    .getObject({
      Key: req.params.filename,
      Bucket: process.env.BUCKET_NAME,
    })
    .promise();
  res.attachment(req.params.filename);
  res.tpe(data.ContentType);
  res.send(data.body);
}

module.exports = getFileController;
