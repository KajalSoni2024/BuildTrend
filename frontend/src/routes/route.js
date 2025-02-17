import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    name: "Register",
    component: () => import("../components/Register.vue"),
    path: "/",
  },
  {
    name: "Login",
    component: () => import("../components/Login.vue"),
    path: "/login",
  },
  {
    name: "ForgetPassword",
    component: () => import("../components/forgetPass.vue"),
    path: "/forgetPass",
  },
  {
    name: "Property",
    component: () => import("../components/Property.vue"),
    path: "/property",
    meta: { requiredAuth: true },
  },
  {
    name: "AddProperty",
    component: () => import("../components/AddProperty.vue"),
    path: "/addProperty",
    meta: { requiredAuth: true },
  },
  {
    name: "JobForm",
    component: () => import("../components/JobForm.vue"),
    path: "/addJob/:id",
    meta: { requiredAuth: true },
  },
  {
    name: "UpdateProperty",
    component: () => import("../components/updateProperty.vue"),
    path: "/updateProperty/:id",
    meta: { requiredAuth: true },
  },
  {
    name: "ShowJob",
    component: () => import("../components/ShowJob.vue"),
    path: "/showJobs",
    meta: { requiredAuth: true },
  },
  {
    name: "ShowTask",
    component: () => import("../components/ShowTask.vue"),
    path: "/showTask",
    meta: { requiredAuth: true },
  },
  {
    name: "ContractorContacts",
    component: () => import("../components/ContractorContacts.vue"),
    path: "/contacts",
    meta: { requiredAuth: true },
  },
  {
    name: "OwnerContacts",
    component: () => import("../components/OwnerContacts.vue"),
    path: "/contactList",
    meta: { requiredAuth: true },
  },
  {
    name: "ContractorMsg",
    component: () => import("../components/ContractorMsg.vue"),
    path: "/messageCon",
    meta: { requiredAuth: true },
  },
  {
    name: "OwnerJobs",
    component: () => import("../components/OwnerJobs.vue"),
    path: "/jobs",
    meta: { requiredAuth: true },
  },
  {
    name: "Estimates",
    component: () => import("../components/Estimates.vue"),
    path: "/estimates/:job_id",
    meta: { requiredAuth: true },
  },
  {
    name: "OwnerMsg",
    component: () => import("../components/OwnerMsg.vue"),
    path: "/messages",
    meta: { requiredAuth: true },
  },
  {
    name: "WorkProofForm",
    component: () => import("../components/workProofForm.vue"),
    path: "/addWorkProof",
    meta: { requiredAuth: true },
  },
  {
    name: "WorkProofs",
    component: () => import("../components/showWorkProof.vue"),
    path: "/showWorkProofs/:job_id",
    meta: { requiredAuth: true },
  },
  {
    name: "WorkProofContractor",
    component: () => import("../components/WorkProofContractor.vue"),
    path: "/workProofs",
    meta: { requiredAuth: true },
  },
  {
    name: "PaymentSuccess",
    component: () => import("../components/PaymentSuccess.vue"),
    path: "/success",
    meta: { requiredAuth: true },
  },
  {
    name: "PaymentFailure",
    component: () => import("../components/PaymentFailure.vue"),
    path: "/error",
    meta: { requiredAuth: true },
  },
  {
    name: "Profile",
    component: () => import("../components/profile.vue"),
    path: "/profile",
    meta: { requiredAuth: true },
  },
  {
    name: "ArchivedJobOwner",
    component: () => import("../components/ArchivedJobOwner.vue"),
    path: "/archivedJobsOfOwner",
    meta: { requiredAuth: true },
  },
  {
    name: "ArchivedJobContractor",
    component: () => import("../components/ArchivedJobContractor.vue"),
    path: "/archivedJobOfContractor",
    meta: { requiredAuth: true },
  },
  {
    name: "ArchivedJobTask",
    component: () => import("../components/ArchivedJobTask.vue"),
    path: "/archivedTask",
    meta: { requiredAuth: true },
  },
  {
    name: "ArchivedJobProof",
    component: () => import("../components/ArchivedJobProof.vue"),
    path: "/archivedProof",
    meta: { requiredAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
