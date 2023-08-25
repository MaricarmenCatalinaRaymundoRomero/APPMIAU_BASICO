import { Camera, CameraResultType } from '@capacitor/camera';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

const Tab1: React.FC = () => {
  const [image, setImage] = useState<any>(null);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    const img = `data:image/jpeg;base64,${image.base64String}`;
    setImage(img);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>𝐄𝐣𝐞𝐦𝐩𝐥𝐨 𝐝𝐞 𝐢𝐦𝐚𝐠𝐞𝐧</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={takePicture}>
        𝐇𝐚𝐳 𝐮𝐧𝐚 𝐟𝐨𝐭𝐨
        </IonButton>
        <img src={image} alt="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;