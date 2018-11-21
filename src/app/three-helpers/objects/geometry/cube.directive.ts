import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../abstract-object-3d';
import { Color } from 'three';

@Directive({
  selector: 'three-cube',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => CubeDirective) }]
})
export class CubeDirective extends AbstractObject3D<THREE.Mesh> {

  @Input() width: number;
  @Input() height: number;
  @Input() depth: number; 
  @Input() color: Color;

  constructor() {
    super();
    console.log('CubeDirective.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    var boxBuffer : THREE.BoxBufferGeometry  = new THREE.BoxBufferGeometry(this.width, this.height, this.depth);
    var texture : THREE.Texture = new THREE.TextureLoader().load( 'assets/textures/cardboard.jpg' );
    var material : THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({map: texture});
    console.log('CubeDirective.newObject3DInstance');
    return new THREE.Mesh(boxBuffer, material);
  }

  protected afterInit(): void {
    console.log('CubeDirective.afterInit');
  }

}
