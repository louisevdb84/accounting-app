import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'accounts', component: AccountsComponent},
            { path: 'user', component: UserComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];