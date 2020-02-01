import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './contact/login/login.component';
import { JoingComponent } from './components/joing/joing.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { RegisterComponent } from './contact/register/register.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { SportComponent } from './components/sport/sport.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { ExercicecoachComponent } from './components/exercicecoach/exercicecoach.component';
import { GestionaireComponent } from './components/gestionaire/gestionaire.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    JoingComponent,
    CalculatorComponent,
    RegisterComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    TableComponent,
    SportComponent,
    ModalComponent,
    ExerciceComponent,
    ExercicecoachComponent,
    GestionaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
