import React from 'react';

import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Fintech from './pages/Fintech';
import Customers from './pages/ecommerce/Customers';
import Orders from './pages/ecommerce/Orders';
import Invoices from './pages/ecommerce/Invoices';
import Shop from './pages/ecommerce/Shop';
import Shop2 from './pages/ecommerce/Shop2';
import Product from './pages/ecommerce/Product';
import Cart from './pages/ecommerce/Cart';
import Cart2 from './pages/ecommerce/Cart2';
import Cart3 from './pages/ecommerce/Cart3';
import Pay from './pages/ecommerce/Pay';
import Campaigns from './pages/Campaigns';
import UsersTabs from './pages/community/UsersTabs';
import UsersTiles from './pages/community/UsersTiles';
import Profile from './pages/community/Profile';
import Feed from './pages/community/Feed';
import Forum from './pages/community/Forum';
import ForumPost from './pages/community/ForumPost';
import Meetups from './pages/community/Meetups';
import MeetupsPost from './pages/community/MeetupsPost';
import CreditCards from './pages/finance/CreditCards';
import Transactions from './pages/finance/Transactions';
import TransactionDetails from './pages/finance/TransactionDetails';
import JobListing from './pages/job/JobListing';
import JobPost from './pages/job/JobPost';
import CompanyProfile from './pages/job/CompanyProfile';
import Messages from './pages/Messages';
import TasksKanban from './pages/tasks/TasksKanban';
import TasksList from './pages/tasks/TasksList';
import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Account from './pages/settings/Account';
import Notifications from './pages/settings/Notifications';
import Apps from './pages/settings/Apps';
import Plans from './pages/settings/Plans';
import Billing from './pages/settings/Billing';
import Feedback from './pages/settings/Feedback';
import Changelog from './pages/utility/Changelog';
import Roadmap from './pages/utility/Roadmap';
import Faqs from './pages/utility/Faqs';
import EmptyState from './pages/utility/EmptyState';
// import PageNotFound from './pages/utility/PageNotFound';
import KnowledgeBase from './pages/utility/KnowledgeBase';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Onboarding01 from './pages/Onboarding01';
import Onboarding02 from './pages/Onboarding02';
import Onboarding03 from './pages/Onboarding03';
import Onboarding04 from './pages/Onboarding04';
import ButtonPage from './pages/component/ButtonPage';
import FormPage from './pages/component/FormPage';
import DropdownPage from './pages/component/DropdownPage';
import AlertPage from './pages/component/AlertPage';
import ModalPage from './pages/component/ModalPage';
import PaginationPage from './pages/component/PaginationPage';
import TabsPage from './pages/component/TabsPage';
import BreadcrumbPage from './pages/component/BreadcrumbPage';
import BadgePage from './pages/component/BadgePage';
import AvatarPage from './pages/component/AvatarPage';
import TooltipPage from './pages/component/TooltipPage';
import AccordionPage from './pages/component/AccordionPage';
import IconsPage from './pages/component/IconsPage';
import StudentDashboard from './pages/studentDashboard/StudentDashboard';
import StudentCourses from './pages/studentDashboard/StudentCourses';
import StudentFees from './pages/studentDashboard/StudentFees';
import StudentCheckResult from './pages/studentDashboard/StudentCheckResult';
import StudentTranscript from './pages/studentDashboard/StudentTranscript';
import StudentRegistration from './pages/studentDashboard/StudentRegistration';
import StudentHostel from './pages/studentDashboard/StudentHostel';
import LecturerDashboard from './pages/lecturerPage/LecturerDashboard';
// import Transactions from './pages/finance/Transactions';
import AdminDashboard from './pages/adminPage/AdminDashboard';
import routes from './routes';

const pages = [
    { path: routes.home, element: <Dashboard /> },
    { path: routes.dashboardAnalytics, element: <Analytics /> },
    { path: routes.dashboardFintech, element: <Fintech /> },
    { path: routes.ecommerceCustomers, element: <Customers /> },
    { path: routes.ecommerceOrders, element: <Orders /> },
    { path: routes.ecommerceInvoice, element: <Invoices /> },
    { path: routes.ecommerceShop, element: <Shop /> },
    { path: routes.ecommerceShop2, element: <Shop2 /> },
    { path: routes.ecommerceProduct, element: <Product /> },
    { path: routes.ecommerceCart, element: <Cart /> },
    { path: routes.ecommerceCart2, element: <Cart2 /> },
    { path: routes.ecommerceCart3, element: <Cart3 /> },
    { path: routes.ecommercePay, element: <Pay /> },
    { path: routes.campaigns, element: <Campaigns /> },
    { path: routes.communityUsersTabs, element: <UsersTabs /> },
    { path: routes.communityUsersTiles, element: <UsersTiles /> },
    { path: routes.communityProfile, element: <Profile /> },
    { path: routes.communityFeed, element: <Feed /> },
    { path: routes.communityForum, element: <Forum /> },
    { path: routes.communityForumPost, element: <ForumPost /> },
    { path: routes.communityMeetups, element: <Meetups /> },
    { path: routes.communityMeetingsPost, element: <MeetupsPost /> },
    { path: routes.financeCards, element: <CreditCards /> },
    { path: routes.financeTransaction, element: <Transactions /> },
    { path: routes.financeTransactionDetails, element: <TransactionDetails /> },
    { path: routes.jobJobListing, element: <JobListing /> },
    { path: routes.jobJobPost, element: <JobPost /> },
    { path: routes.jobCompanyProfile, element: <CompanyProfile /> },
    { path: routes.messages, element: <Messages /> },
    { path: routes.tasksKanban, element: <TasksKanban /> },
    { path: routes.inbox, element: <Inbox /> },
    { path: routes.calendar, element: <Calendar /> },
    { path: routes.settingsAccount, element: <Account /> },
    { path: routes.settingNotification, element: <Notifications /> },
    { path: routes.settingApp, element: <Apps /> },
    { path: routes.plans, element: <Plans /> },
    { path: routes.billing, element: <Billing /> },
    { path: routes.feedback, element: <Feedback /> },
    { path: routes.changelog, element: <Changelog /> },
    { path: routes.roadmap, element: <Roadmap /> },
    { path: routes.faqs, element: <Faqs /> },
    { path: routes.empty, element: <EmptyState /> },
    // { path: routes., element: <PageNotFound /> },
    { path: routes.Knowledge, element: <KnowledgeBase /> },
    { path: routes.signin, element: <Signin /> },
    { path: routes.signup, element: <Signup /> },
    { path: routes.reset, element: <ResetPassword /> },
    { path: routes.onboarding1, element: <Onboarding01 /> },
    { path: routes.onboarding2, element: <Onboarding02 /> },
    { path: routes.onboarding3, element: <Onboarding03 /> },
    { path: routes.onboarding4, element: <Onboarding04 /> },
    { path: routes.form, element: <FormPage /> },
    { path: routes.dropdown, element: <DropdownPage /> },
    { path: routes.alert, element: <AlertPage /> },
    { path: routes.modal, element: <ModalPage /> },
    { path: routes.pagination, element: <PaginationPage /> },
    { path: routes.tabs, element: <TabsPage /> },
    { path: routes.breadcrumb, element: <BreadcrumbPage /> },
    { path: routes.badge, element: <BadgePage /> },
    { path: routes.avatar, element: <AvatarPage /> },
    { path: routes.tooltip, element: <TooltipPage /> },
    { path: routes.button, element: <ButtonPage /> },
    { path: routes.icons, element: <IconsPage /> },
    // { path: routes.tooltip, element: <TooltipPage /> },
    { path: routes.according, element: <AccordionPage /> },
    { path: routes.studentDashboard, element: <StudentDashboard /> },
    { path: routes.studentCourses, element: <StudentCourses /> },
    { path: routes.studentFees, element: <StudentFees /> },
    { path: routes.studentCheckResult, element: <StudentCheckResult /> },
    { path: routes.studentTranscript, element: <StudentTranscript /> },
    { path: routes.studentRegistration, element: <StudentRegistration /> },
    { path: routes.studentHostel, element: <StudentHostel /> },
    {path:  routes.lecturerDashboard, element: <LecturerDashboard />},
    {path:  routes.adminDashbaord, element: <AdminDashboard />},
    // { path: '/', element: < /> },

];

const student = [
    { path: routes.home, element: <Dashboard /> },
    { path: routes.signin, element: <Signin /> },
    { path: routes.studentDashboard, element: <StudentDashboard /> },
    { path: routes.studentCourses, element: <StudentCourses /> },
    { path: routes.studentFees, element: <StudentFees /> },
    { path: routes.studentCheckResult, element: <StudentCheckResult /> },
    { path: routes.studentTranscript, element: <StudentTranscript /> },
    { path: routes.studentRegistration, element: <StudentRegistration /> },
    { path: routes.studentHostel, element: <StudentHostel /> },
]

const hod = [
    { path: '/', element: <h1>HOD Dashboard</h1> },
    { path: routes.signin, element: <Signin /> },
]
const lecturer = [
   {path:  routes.lecturerDashboard, element: <LecturerDashboard />},
]

const accountant = [
    { path: '/', element: <h1>Accountant Dashboard</h1> },
    { path: routes.signin, element: <Signin /> },

]

const registrar = [
    { path: '/', element: <h1>Registrar Dashboard</h1> },
    { path: routes.signin, element: <Signin /> },
]

const loggedOut = [
    { path: routes.signin, element: <Signin /> },
]

export const general = () => {
    const routes = [
        { path: "*", element: <div style={{ minHeight: '100vh' }} className="flex justify-center items-center"><h1>404 not found</h1></div> },
    ]
    return routes;
}


export default { pages, student, hod, registrar, loggedOut, accountant, lecturer }