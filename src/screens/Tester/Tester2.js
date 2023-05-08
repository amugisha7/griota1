import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';
import { S3 } from 'aws-sdk';
import { launchImageLibrary } from 'react-native-image-picker';

const Tester2 = ({ bucketName, accessKeyId, secretAccessKey, region }) => {
  const [image, setImage] = useState(null);

  const pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: 'Select Image' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };

  const uploadImageHandler = () => {
    const s3 = new S3({
      accessKeyId,
      secretAccessKey,
      region,
    });

    const keyName = `uploads/${Date.now()}.jpg`;

    const params = {
      Bucket: bucketName,
      Key: keyName,
      Body: {
        uri: image.uri,
        name: keyName,
        type: "image/jpeg",
      },
      ACL: 'public-read',
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error uploading to S3: ', err);
      } else {
        console.log('Successfully uploaded to S3: ', data);
      }
    });
  };

  return (
    <View>
      {image && <Image source={image} style={{ width: 200, height: 200 }} />}
      <Button title="Pick Image" onPress={pickImageHandler} />
      <Button title="Upload Image" onPress={uploadImageHandler} disabled={!image} />
    </View>
  );
};

export default Tester2;
