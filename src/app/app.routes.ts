import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'detalle-producto',
        title: 'Detalle Producto',
        loadComponent: () => import ('./components/detalle-producto/detalle-producto.component'),
        // canMatch:[authGuard],
    },
    {
        path: 'completar-pedido',
        title: 'Coompletar Pedido',
        loadComponent: () => import ('./components/completar-pedido/completar-pedido.component'),
        // canMatch:[authGuard],
    },
    {
        path: 'detalle-rastreo',
        title: 'Tracking',
        loadComponent: () => import ('./components/detalle-rastreo/detalle-rastreo.component'),
        // canMatch:[authGuard],
    },

    {
        path: '',
        redirectTo: '/detalle-producto',
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     title:"Not-found",
    //     loadComponent: () => import ('./components/not-found/not-found.component'),
    //     // canMatch:[authGuard],
    // }
    




];
