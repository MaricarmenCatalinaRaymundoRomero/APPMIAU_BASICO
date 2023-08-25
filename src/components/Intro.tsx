import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Intro1Svg from '../assets/intro/1.svg';
import Intro2Svg from '../assets/intro/2.svg';
import Intro3Svg from '../assets/intro/3.svg';
import './Intro.css';

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={Intro1Svg} alt="Intro 1" />
        <IonText>
          <h3>𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨𝐬 𝐚 𝐀𝐏𝐏𝐌𝐈𝐀𝐔</h3>
        </IonText>
        <SwiperButtonNext>Siguiente</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro2Svg} alt="Intro 2" />
        <IonText>
          <h3>𝐄𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚𝐬 𝐥𝐨𝐬 </h3>
            <h3>𝐦𝐞𝐣𝐨𝐫𝐞𝐬 𝐯𝐞𝐭𝐞𝐫𝐢𝐧𝐚𝐫𝐢𝐨𝐬</h3>
        </IonText>
        <SwiperButtonNext>Siguiente</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro3Svg} alt="Intro 3" />
        <IonText>
          <h3>𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐞 𝐠𝐫𝐚𝐭𝐢𝐬!</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Siguiente</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
