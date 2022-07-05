import { Component, OnInit } from '@angular/core';
import { NodeService } from './nodeservice';
import { TreeNode } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    title = 'primetree';

    display: boolean = false;

    addGroupe: boolean = false;
    addUo: boolean = false;

    files1: TreeNode[];

    list1: any[];

    list2: any[];

    constructor(private nodeService: NodeService, private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files1 = files);
        this.list1 = [
            {
                label: "Nom 1",
                indice: 2451,
                color: "primary"
            },
            {
                label: "Nom 2",
                indice: 2452,
                color: "primary"
            },
            {
                label: "Nom 3",
                indice: 2453,
                color: "primary"
            },
            {
                label: "Nom 4",
                indice: 2454,
                color: "primary"
            }
        ];
        this.list2 = [];
    }

    functDelete() {
        this.confirmationService.confirm({
            message: 'Avez vous sûre ?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    }
    addGrpPort() {
        this.addGroupe = true;
    }
    addUoCustom() {
        this.addUo = true;
    }
    functModify() {
        alert("Modifié");
    }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }
}

