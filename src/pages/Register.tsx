import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log('doRegister');
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'tertiary'}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐫𝐬𝐞</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={doRegister}>
                    <IonInput fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="Maricarmen@cat.com"></IonInput>
                    <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" placeholder="****"></IonInput>
                    <IonButton type="submit" expand="block" className="ion-margin-top">
                    𝐂𝐫𝐞𝐚𝐫 𝐦𝐢 𝐜𝐮𝐞𝐧𝐭𝐚
                      <IonIcon icon={checkmarkDoneOutline} slot="end" />
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;