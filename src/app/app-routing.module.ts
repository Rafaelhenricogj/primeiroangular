import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NavbarComponent } from "./navbar/navbar.component";
import { FormComponent } from "./form/form.component";
import { SlideComponent } from "./slide/slide.component";

const routes: Routes = [
    {path: '', component: NavbarComponent},
    {path: 'form', component: FormComponent},
    {path: 'slide', component: SlideComponent},
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}