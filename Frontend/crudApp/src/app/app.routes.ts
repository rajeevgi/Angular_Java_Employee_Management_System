import { Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { GetEmployeeComponent } from './components/get-employee/get-employee.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [

    // default routes
    {
        path: 'app-register',
        component: RegisterComponent
    },

    
    {
        path: '',
        redirectTo: '/app-login',
        pathMatch: 'full'
    },

    {
        path: 'app-login',
        component: LoginComponent,
        children: [
            {
                path: 'app-list-employees',
                component: ListEmployeesComponent
            },

            {
                path: 'app-get-employee/:id',
                component: GetEmployeeComponent
            },

            {
                path: 'app-create-employee',
                component: CreateEmployeeComponent
            },

            {
                path: 'app-update-employee/:id',
                component: UpdateEmployeeComponent
            }
        ]
    }        

];
