import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialExampleModule } from './materiyal/materiyal.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExamsComponent } from './components/exams/exams.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { RatingAndReviewComponent } from './components/rating-and-review/rating-and-review.component';
import { AddTemplateComponent } from './components/rating-and-review/add-template/add-template.component';
import { FeedbackFormComponent } from './components/rating-and-review/feedback-form/feedback-form.component';
import { ManageSchoolsComponent } from './components/manage-schools/manage-schools.component';
import { SchoolNameComponent } from './components/manage-schools/school-name/school-name.component';
import { SchoolDetailsComponent } from './components/manage-schools/school-name/school-details/school-details.component';
import { ZenicEditionComponent } from './components/manage-schools/school-name/zenic-edition/zenic-edition.component';
import { CoursesOfferedComponent } from './components/manage-schools/school-name/courses-offered/courses-offered.component';
import { PaymentHistoryComponent } from './components/manage-schools/school-name/payment-history/payment-history.component';
import { AddSchoolComponent } from './components/manage-schools/add-school/add-school.component';
import { ProgressComponent } from './components/manage-schools/progress/progress.component';
import { ProgressStepComponent } from './components/manage-schools/progress/progress-step/progress-step.component';
import { ProgressStepDirective } from './components/manage-schools/progress/progress-step.directive';
import { CourseListComponent } from './components/course-list/course-list.component';
import { ProgrammeComponent } from './components/course-list/programme/programme.component';
import { LessonNoteComponent } from './components/course-list/lesson-note/lesson-note.component';
import { PathwayComponent } from './components/course-list/pathway/pathway.component';
import { CategoriesComponent } from './components/course-list/categories/categories.component';
import { CoursesComponent } from './components/course-list/courses/courses.component';
import { MessageComponent } from './components/message/message.component';
import { EmailComponent } from './components/email/email.component';
import { ViewMessagesComponent } from './components/message/view-messages/view-messages.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { RolesComponent } from './components/user-management/roles/roles.component';
import { UsersComponent } from './components/user-management/users/users.component';
import { AddROleComponent } from './components/user-management/roles/add-role/add-role.component';
import { EmailHistoryComponent } from './components/email/email-history/email-history.component';
import { EmailAddTamplateComponent } from './components/email/email-add-tamplate/email-add-tamplate.component';
import { EmailViewComponent } from './components/email/email-view/email-view.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HelpComponent } from './components/settings/help/help.component';
import { TermConditionComponent } from './components/settings/term-condition/term-condition.component';
import { HelpAddquestionComponent } from './components/settings/help/help-addquestion/help-addquestion.component';
import { AddTermconditionComponent } from './components/settings/term-condition/add-termcondition/add-termcondition.component';
import { ViewTermconditionComponent } from './components/settings/term-condition/view-termcondition/view-termcondition.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ManagePlansComponent } from './components/manage-plans/manage-plans.component';
import { SubscriptionPlansComponent } from './components/manage-plans/subscription-plans/subscription-plans.component';
import { RunningPlansComponent } from './components/manage-plans/running-plans/running-plans.component';
import { SubscribePlanViewCardComponent } from './components/manage-plans/subscription-plans/subscribe-plan-view-card/subscribe-plan-view-card.component';
import { SubscribePlanViewTableComponent } from './components/manage-plans/subscription-plans/subscribe-plan-view-table/subscribe-plan-view-table.component';
import { SubscribePlanCreatePlanComponent } from './components/manage-plans/subscription-plans/subscribe-plan-create-plan/subscribe-plan-create-plan.component';
import { SubscribePlanViewDetailsComponent } from './components/manage-plans/subscription-plans/subscribe-plan-view-details/subscribe-plan-view-details.component';
import { RunningPlansViewDetailsComponent } from './components/manage-plans/running-plans/running-plans-view-details/running-plans-view-details.component';
import { ActivityLogComponent } from './components/activity-log/activity-log.component';
import { ChartTableComponent } from './components/dashboard/chart-table/chart-table.component';
import { ChartComponent } from './components/dashboard/chart/chart.component';
FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);
import { NgChartsModule } from 'ng2-charts';
import { PieChartComponent } from './components/dashboard/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/dashboard/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    SidenavComponent,
    DashboardComponent,
    ExamsComponent,
    RatingAndReviewComponent,
    AddTemplateComponent,
    FeedbackFormComponent,
    ManageSchoolsComponent,
    SchoolDetailsComponent,
    SchoolNameComponent,
    ZenicEditionComponent,
    CoursesOfferedComponent,
    PaymentHistoryComponent,
    AddSchoolComponent,
    ProgressComponent,
    ProgressStepComponent,
    ProgressStepDirective,
    CourseListComponent,
    ProgrammeComponent,
    LessonNoteComponent,
    PathwayComponent,
    CategoriesComponent,
    CoursesComponent,
    MessageComponent,
    EmailComponent,
    ViewMessagesComponent,
    UserManagementComponent,
    RolesComponent,
    UsersComponent,
    AddROleComponent,
    EmailHistoryComponent,
    EmailAddTamplateComponent,
    EmailViewComponent,
    SettingsComponent,
    HelpComponent,
    TermConditionComponent,
    HelpAddquestionComponent,
    AddTermconditionComponent,
    ViewTermconditionComponent,
    CalendarComponent,
    ManagePlansComponent,
    SubscriptionPlansComponent,
    RunningPlansComponent,
    SubscribePlanViewCardComponent,
    SubscribePlanViewTableComponent,
    SubscribePlanCreatePlanComponent,
    SubscribePlanViewDetailsComponent,
    RunningPlansViewDetailsComponent,
    ActivityLogComponent,
    ChartTableComponent,
    ChartComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MaterialExampleModule,
    AngularEditorModule,
    FullCalendarModule,
    NgbModule,
    NgChartsModule
  ],
})
export class DashboardModule {}
