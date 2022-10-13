/* eslint-disable vue/multi-word-component-names */
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
// import "./main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import Avatar from "primevue/avatar";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import DataTable from "primevue/datatable";
import DialogService from "primevue/dialogservice";
import Dropdown from "primevue/dropdown";
import DynamicDialog from "primevue/dynamicdialog";
import FieldLabel from "./components/common/FieldLabel.vue";
import Knob from "primevue/knob";
import MegaMenu from "primevue/megamenu";
import Panel from "primevue/panel";
import PrimeVue from "primevue/config";
import Row from "primevue/row";

export const app = createApp(App);

app.use(DialogService);
app.use(PrimeVue);

app.component("Avatar", Avatar);
app.component("Button", Button);
app.component("Calendar", Calendar);
app.component("Card", Card);
app.component("Checkbox", Checkbox);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("DataTable", DataTable);
app.component("Dropdown", Dropdown);
app.component("DynamicDialog", DynamicDialog);
app.component("FieldLabel", FieldLabel);
app.component("Knob", Knob);
app.component("MegaMenu", MegaMenu);
app.component("Panel", Panel);
app.component("Row", Row);

app.mount("#app");
