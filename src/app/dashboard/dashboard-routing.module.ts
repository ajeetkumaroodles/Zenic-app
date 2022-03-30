import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityLogComponent } from './components/activity-log/activity-log.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CategoriesComponent } from './components/course-list/categories/categories.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CoursesComponent } from './components/course-list/courses/courses.component';
import { LessonNoteComponent } from './components/course-list/lesson-note/lesson-note.component';
import { PathwayComponent } from './components/course-list/pathway/pathway.component';
import { ProgrammeComponent } from './components/course-list/programme/programme.component';
import { ChartTableComponent } from './components/dashboard/chart-table/chart-table.component';
import { ChartComponent } from './components/dashboard/chart/chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmailAddTamplateComponent } from './components/email/email-add-tamplate/email-add-tamplate.component';
import { EmailHistoryComponent } from './components/email/email-history/email-history.component';
import { EmailViewComponent } from './components/email/email-view/email-view.component';
import { EmailComponent } from './components/email/email.component';
import { ExamsComponent } from './components/exams/exams.component';
import { ManagePlansComponent } from './components/manage-plans/manage-plans.component';
import { RunningPlansViewDetailsComponent } from './components/manage-plans/running-plans/running-plans-view-details/running-plans-view-details.component';
import { RunningPlansComponent } from './components/manage-plans/running-plans/running-plans.component';
import { SubscribePlanCreatePlanComponent } from './components/manage-plans/subscription-plans/subscribe-plan-create-plan/subscribe-plan-create-plan.component';
import { SubscribePlanViewCardComponent } from './components/manage-plans/subscription-plans/subscribe-plan-view-card/subscribe-plan-view-card.component';
import { SubscribePlanViewDetailsComponent } from './components/manage-plans/subscription-plans/subscribe-plan-view-details/subscribe-plan-view-details.component';
import { SubscribePlanViewTableComponent } from './components/manage-plans/subscription-plans/subscribe-plan-view-table/subscribe-plan-view-table.component';
import { SubscriptionPlansComponent } from './components/manage-plans/subscription-plans/subscription-plans.component';
import { AddSchoolComponent } from './components/manage-schools/add-school/add-school.component';
import { ManageSchoolsComponent } from './components/manage-schools/manage-schools.component';
import { CoursesOfferedComponent } from './components/manage-schools/school-name/courses-offered/courses-offered.component';
import { PaymentHistoryComponent } from './components/manage-schools/school-name/payment-history/payment-history.component';
import { SchoolDetailsComponent } from './components/manage-schools/school-name/school-details/school-details.component';
import { SchoolNameComponent } from './components/manage-schools/school-name/school-name.component';
import { ZenicEditionComponent } from './components/manage-schools/school-name/zenic-edition/zenic-edition.component';
import { MessageComponent } from './components/message/message.component';
import { ViewMessagesComponent } from './components/message/view-messages/view-messages.component';
import { AddTemplateComponent } from './components/rating-and-review/add-template/add-template.component';
import { FeedbackFormComponent } from './components/rating-and-review/feedback-form/feedback-form.component';
import { RatingAndReviewComponent } from './components/rating-and-review/rating-and-review.component';
import { HelpAddquestionComponent } from './components/settings/help/help-addquestion/help-addquestion.component';
import { HelpComponent } from './components/settings/help/help.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddTermconditionComponent } from './components/settings/term-condition/add-termcondition/add-termcondition.component';
import { TermConditionComponent } from './components/settings/term-condition/term-condition.component';
import { ViewTermconditionComponent } from './components/settings/term-condition/view-termcondition/view-termcondition.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AddROleComponent } from './components/user-management/roles/add-role/add-role.component';
import { RolesComponent } from './components/user-management/roles/roles.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UsersComponent } from './components/user-management/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        children:[
          {path:'',component:ChartComponent},
          { path:'charttable', component:ChartTableComponent}
        ]
      },
      {
        path: 'exams',
        component: ExamsComponent,
      },
      {
        path: 'ratingandreview',
        component: RatingAndReviewComponent,
      },
      {
        path: 'addtamplate',
        component: AddTemplateComponent,
      },
      {
        path: 'feedbackform',
        component: FeedbackFormComponent,
      },
      {
        path: 'manageschools',
        component: ManageSchoolsComponent,
      },

      {
        path: 'schoolname',
        component: SchoolNameComponent,
        children: [
          {
            path: '',
            component: SchoolDetailsComponent,
          },
          {
            path: 'zenicedition',
            component: ZenicEditionComponent,
          },
          {
            path: 'coursesoffered',
            component: CoursesOfferedComponent,
          },
          {
            path: 'paymenthistory',
            component: PaymentHistoryComponent,
          },
        ],
      },
      {
        path: 'addschool',
        component: AddSchoolComponent,
      },
      {
        path: 'courselist',
        component: CourseListComponent,
      },
      {
        path: 'programme',
        component: ProgrammeComponent,
      },
      {
        path: 'lessonnote',
        component: LessonNoteComponent,
      },
      {
        path: 'pathway',
        component: PathwayComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'message',
        component: MessageComponent,
      },
      {
        path: 'viewmessage',
        component: ViewMessagesComponent,
      },
      {
        path: 'email',
        component: EmailComponent,
      },
      {
        path: 'emailview',
        component: EmailViewComponent,
      },
      {
        path: 'emailhistory',
        component: EmailHistoryComponent,
      },
      {
        path: 'emailaddtamplate',
        component: EmailAddTamplateComponent,
      },
      {
        path: 'usermanagement',
        component: UserManagementComponent,
      },
      {
        path: 'roles',
        component: RolesComponent,
      },
      {
        path: 'addrole',
        component: AddROleComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          { path: '', component: HelpComponent },
          {
            path: 'termcondition',
            component: TermConditionComponent,
          },
        ],
      },
      {
        path: 'helpaddquestion',
        component: HelpAddquestionComponent,
      },
      {
        path: 'addtermcondition',
        component: AddTermconditionComponent,
      },
      {
        path: 'viewtermcondition',
        component: ViewTermconditionComponent,
      },
      {
        path: 'calender',
        component: CalendarComponent,
      },
      {
        path: 'manageplane',
        component: ManagePlansComponent,
        children: [
          {
            path: '',
            component: SubscriptionPlansComponent,
            children: [
              { path: '', component: SubscribePlanViewCardComponent },
              {
                path: 'subplnviewtable',
                component: SubscribePlanViewTableComponent,
              },
            ],
          },
          {
            path: 'runningplan',
            component: RunningPlansComponent,
          },
        ],
      },
      {
        path: 'subcreateplan',
        component: SubscribePlanCreatePlanComponent,
      },
      {
        path:'subviewdetail',
        component:SubscribePlanViewDetailsComponent
      },
      {
        path:'runningplanviewdetail',
        component:RunningPlansViewDetailsComponent
      },
      {
        path:'activitylog',
        component:ActivityLogComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
