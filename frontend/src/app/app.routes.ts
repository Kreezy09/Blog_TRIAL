import { Routes } from "@angular/router";
import { PostListComponent } from "./post-list/post-list.component";
import { PostCreateComponent } from "./post-create/post-create.component";

export const routes: Routes = [
    { path: '', component: PostListComponent}, //shows list of posts
    { path: 'create', component: PostCreateComponent}
];

