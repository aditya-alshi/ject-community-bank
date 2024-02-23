const  { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const dotenv = require('dotenv');
dotenv.config();

const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const jectS3Client = new S3Client({
    credentials : {
        accessKeyId : accessKey,
        secretAccessKey: secretAccessKey
    },
    region: bucketRegion
})

module.exports.sendS3Command = async(originalname, buffer, mimetype)=>{
    const param = {
        Bucket: bucketName,
        Key : originalname,
        Body: buffer,
        ContentType: mimetype
    }
    
    const command = new PutObjectCommand(param)
    const result = await jectS3Client.send(command);
    console.log("Result from jectBucket: ", result);
}

module.exports.getTheSignedUrlOfImage = async(imageName)=>{
    const param = {
        Bucket: bucketName,
        Key: imageName
    }

    const command = new GetObjectCommand(param);
    const url = await getSignedUrl(jectS3Client, command, { expiresIn:3600 });
    return url;
}