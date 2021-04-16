import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, UIState } from './view/ThemeOptions/store';
import { ConfigActions } from './view/ThemeOptions/store/config/config.actions';
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// BOOTSTRAP COMPONENTS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// LAYOUT
import { BaseLayoutComponent } from './view/Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './view/Layout/pages-layout/pages-layout.component';
import { PageTitleComponent } from './view/Layout/Components/page-title/page-title.component';
// HEADER
import { HeaderComponent } from './view/Layout/Components/header/header.component';
import { SearchBoxComponent } from './view/Layout/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './view/Layout/Components/header/elements/user-box/user-box.component';
// SIDEBAR
import { SidebarComponent } from './view/Layout/Components/sidebar/sidebar.component';
import { LogoComponent } from './view/Layout/Components/sidebar/elements/logo/logo.component';
// FOOTER
import { FooterComponent } from './view/Layout/Components/footer/footer.component';
// Pages
import { ForgotPasswordBoxedComponent } from './view/DemoPages/Auth/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './view/DemoPages/Auth/login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './view/DemoPages/Auth/register-boxed/register-boxed.component';
// Widgets
import { ChartBoxes3Component } from './view/DemoPages/Widgets/chart-boxes3/chart-boxes3.component';
// Charts
import { ChartjsComponent } from './view/DemoPages/Charts/chartjs/chartjs.component';
// Chart.js Examples
import { LineChartComponent } from './view/DemoPages/Charts/chartjs/examples/line-chart/line-chart.component';
import { BarChartComponent } from './view/DemoPages/Charts/chartjs/examples/bar-chart/bar-chart.component';
import { ScatterChartComponent } from './view/DemoPages/Charts/chartjs/examples/scatter-chart/scatter-chart.component';
import { RadarChartComponent } from './view/DemoPages/Charts/chartjs/examples/radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './view/DemoPages/Charts/chartjs/examples/polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './view/DemoPages/Charts/chartjs/examples/bubble-chart/bubble-chart.component';
import { DynamicChartComponent } from './view/DemoPages/Charts/chartjs/examples/dynamic-chart/dynamic-chart.component';
import { DoughnutChartComponent } from './view/DemoPages/Charts/chartjs/examples/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './view/DemoPages/Charts/chartjs/examples/pie-chart/pie-chart.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    // LAYOUT
    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    PageTitleComponent,
    // HEADER
    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,
    // SIDEBAR
    SidebarComponent,
    LogoComponent,
    // FOOTER
    FooterComponent,
    // User Pages
    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    RegisterBoxedComponent,
    // Dashboard Boxes
    ChartBoxes3Component,
    // CHARTS
    ChartjsComponent,
    // Chart.js Examples
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    DynamicChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    CommonModule,
    LoadingBarRouterModule,
    // Angular Bootstrap Components
    PerfectScrollbarModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Charts
    ChartsModule
  ],
  providers: [
    {
      provide:
        PERFECT_SCROLLBAR_CONFIG,
      useValue:
        DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    ConfigActions,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<UIState>, devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as UIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
