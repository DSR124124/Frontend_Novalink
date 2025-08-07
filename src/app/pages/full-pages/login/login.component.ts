import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent{

  data: TreeNode[] = [
    {
        label: 'Argentina',
        expanded: true,
        data: 'ar',
        children: [
            {
                label: 'Argentina',
                expanded: true,
                data: 'ar',
                children: [
                    {
                        label: 'Argentina',
                        data: 'ar'
                    },
                    {
                        label: 'Croatia',
                        data: 'hr'
                    }
                ]
            },
            {
                label: 'France',
                expanded: true,
                data: 'fr',
                children: [
                    {
                        label: 'France',
                        data: 'fr'
                    },
                    {
                        label: 'Morocco',
                        data: 'ma'
                    }
                ]
            }
        ]
    }
];


}


