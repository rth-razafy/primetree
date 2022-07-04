import {Component,OnInit} from '@angular/core';
import {NodeService} from './nodeservice';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 

  title = 'primetree';
    files1: TreeNode[];
    
    files2: TreeNode[];
    
    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files1 = files);
        this.nodeService.getFiles().then(files => this.files2 = files);
    }
    expandAll(){
        this.files2.forEach( node => {
            this.expandRecursive(node, true);
        } );
    }

    nodeSelect(event) {
        console.log("Event " + event);
    }

    collapseAll(){
        this.files2.forEach( node => {
            this.expandRecursive(node, false);
        } );
    }
    
    private expandRecursive(node:TreeNode, isExpand:boolean){
        node.expanded = isExpand;
        if (node.children){
            node.children.forEach( childNode => {
                this.expandRecursive(childNode, isExpand);
            } );
        }
    }
}

