import { Component, OnInit } from '@angular/core';
import { NodeService } from './nodeservice';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    title = 'primetree';

    display: boolean = false;

    files1: TreeNode[];

    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files1 = files);
    }

    functDelete() {
        this.display = true;
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

