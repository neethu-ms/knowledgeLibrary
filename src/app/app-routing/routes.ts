import { Routes } from '@angular/router';
import { BookdetailComponent } from '../bookdetail/bookdetail.component';
import { LibraryComponent} from '../library/library.component';

export const routes: Routes=[
  { path: 'bookdetail/:id', component: BookdetailComponent },

  { path:'',component: LibraryComponent }

];
