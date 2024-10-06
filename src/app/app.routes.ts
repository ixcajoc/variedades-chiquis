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
        loadComponent: () => import ('./components/detalle-producto/detalle-producto.component'),
        // canMatch:[authGuard],
    },
    {
        path: 'Detalle-Rastreo',
        title: 'Tracking',
        loadComponent: () => import ('./components/detalle-producto/detalle-producto.component'),
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
