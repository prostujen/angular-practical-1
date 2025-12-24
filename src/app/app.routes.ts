import { Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list';
import { ItemDetailsComponent } from './item-details/item-details';
import { ItemFormComponent } from './item-form/item-form'; // <--- Імпорт

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ItemsListComponent },
  { path: 'add-item', component: ItemFormComponent }, // <--- Нова сторінка
  { path: 'items/:id', component: ItemDetailsComponent }
];