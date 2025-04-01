import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-60639","appId":"1:733953234229:web:7dc50fca78da9cd19ba87c","storageBucket":"danotes-60639.firebasestorage.app","apiKey":"AIzaSyDcfeEqY6huPv09o9bpYQIz3jIYsSA_sLQ","authDomain":"danotes-60639.firebaseapp.com","messagingSenderId":"733953234229"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
