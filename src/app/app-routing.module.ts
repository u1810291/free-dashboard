import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './view/Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './view/Layout/pages-layout/pages-layout.component';
// DEMO PAGES
// Dashboards
import { AnalyticsComponent } from './view/DemoPages/Dashboards/analytics/analytics.component';
// Pages
import { ForgotPasswordBoxedComponent } from './view/DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './view/DemoPages/UserPages/login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './view/DemoPages/UserPages/register-boxed/register-boxed.component';
// Elements
import { StandardComponent } from './view/DemoPages/Elements/Buttons/standard/standard.component';
import { DropdownsComponent } from './view/DemoPages/Elements/dropdowns/dropdowns.component';
import { CardsComponent } from './view/DemoPages/Elements/cards/cards.component';
import { ListGroupsComponent } from './view/DemoPages/Elements/list-groups/list-groups.component';
import { TimelineComponent } from './view/DemoPages/Elements/timeline/timeline.component';
import { IconsComponent } from './view/DemoPages/Elements/icons/icons.component';
// Components
import { AccordionsComponent } from './view/DemoPages/Components/accordions/accordions.component';
// import {TabsComponent} from './DemoPages/Components/tabs/tabs.component';
import { CarouselComponent } from './view/DemoPages/Components/carousel/carousel.component';
import { ModalsComponent } from './view/DemoPages/Components/modals/modals.component';
import { ProgressBarComponent } from './view/DemoPages/Components/progress-bar/progress-bar.component';
import { PaginationComponent } from './view/DemoPages/Components/pagination/pagination.component';
import { TooltipsPopoversComponent } from './view/DemoPages/Components/tooltips-popovers/tooltips-popovers.component';
// Tables
import { TablesMainComponent } from './view/DemoPages/Tables/tables-main/tables-main.component';
// Widgets
import { ChartBoxes3Component } from './view/DemoPages/Widgets/chart-boxes3/chart-boxes3.component';
// Forms Elements
import { ControlsComponent } from './view/DemoPages/Forms/Elements/controls/controls.component';
import { LayoutComponent } from './view/DemoPages/Forms/Elements/layout/layout.component';
// Charts
import { ChartjsComponent } from './view/DemoPages/Charts/chartjs/chartjs.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // // Dashboads

      // {path: '', component: AnalyticsComponent, data: {extraParameter: 'dashboardsMenu'}},

      // // Elements

      // {path: 'elements/buttons-standard', component: StandardComponent, data: {extraParameter: 'elementsMenu'}},
      // {path: 'elements/dropdowns', component: DropdownsComponent, data: {extraParameter: 'elementsMenu'}},
      // {path: 'elements/icons', component: IconsComponent, data: {extraParameter: 'elementsMenu'}},
      // {path: 'elements/cards', component: CardsComponent, data: {extraParameter: 'elementsMenu'}},
      // {path: 'elements/list-group', component: ListGroupsComponent, data: {extraParameter: 'elementsMenu'}},
      // {path: 'elements/timeline', component: TimelineComponent, data: {extraParameter: 'elementsMenu'}},

      // // Components

      // // {path: 'components/tabs', component: TabsComponent, data: {extraParameter: 'componentsMenu'}},
      // {path: 'components/accordions', component: AccordionsComponent, data: {extraParameter: 'componentsMenu'}},
      // {path: 'components/modals', component: ModalsComponent, data: {extraParameter: 'componentsMenu'}},
      // {path: 'components/progress-bar', component: ProgressBarComponent, data: {extraParameter: 'componentsMenu'}},
      // {path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: {extraParameter: 'componentsMenu'}},
      // {path: 'components/carousel', component: CarouselComponent, data: {extraParameter: 'componentsMenu'}},
      // {path: 'components/pagination', component: PaginationComponent, data: {extraParameter: 'componentsMenu'}},

      // // Tables

      // {path: 'tables/bootstrap', component: TablesMainComponent, data: {extraParameter: 'tablesMenu'}},

      // // Widgets

      // {path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: {extraParameter: 'pagesMenu3'}},

      // // Forms Elements

      // {path: 'forms/controls', component: ControlsComponent, data: {extraParameter: 'formElementsMenu'}},
      // {path: 'forms/layouts', component: LayoutComponent, data: {extraParameter: 'formElementsMenu'}},

      // // Charts

      { path: '', component: ChartjsComponent, data: { extraParameter: '' } },

    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages

      { path: 'login', component: LoginBoxedComponent, data: { extraParameter: '' } },
      { path: 'register', component: RegisterBoxedComponent, data: { extraParameter: '' } },
      { path: 'forgot-password', component: ForgotPasswordBoxedComponent, data: { extraParameter: '' } },
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
