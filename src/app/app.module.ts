import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage, LoginPage, JornadasPage, EquiposPage, EquiposAddPage, JugadoresPage, JugadoresAddPage, JugadoresListPage, JugadoresDetailsPage, JornadasDetailPage, PartidasAddPage } from '../pages/index.pages';
import { NuevaJornadaPage } from '../pages/nueva-jornada/nueva-jornada'

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import firebaseConfig from '../firebaseConfig';
import { AuthService } from '../services/auth.service';
import { JugadoresProvider } from '../providers/jugadores/jugadores';
import { EquiposProvider } from '../providers/equipos/equipos';
import { JornadasProvider } from '../providers/jornadas/jornadas';

@NgModule({
  declarations: [
    MyApp,
	HomePage,
	LoginPage,
	JornadasPage,
	EquiposPage,
	EquiposAddPage,
	JugadoresPage,
	JugadoresAddPage,
	JugadoresListPage,
	JugadoresDetailsPage,
	NuevaJornadaPage,
	JornadasDetailPage,
	PartidasAddPage
  ],
  imports: [
    BrowserModule,
	IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	HomePage,
	LoginPage,
	JornadasPage,
	EquiposPage,
	EquiposAddPage,
	JugadoresPage,
	JugadoresAddPage,
	JugadoresListPage,
	JugadoresDetailsPage,
	NuevaJornadaPage,
	JornadasDetailPage,
	PartidasAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	{provide: ErrorHandler, useClass: IonicErrorHandler},
	AuthService,
	AngularFireAuth,
    JugadoresProvider,
    EquiposProvider,
    JornadasProvider
  ]
})
export class AppModule {}
