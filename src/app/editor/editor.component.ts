import { Component, AfterViewInit, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { Package } from 'src/app/shared/models/package.model';

@Component({
  selector: 'app-create',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit, OnInit {

  /* Tools */
  public selectedColor: string = '#ffffff';
  public selectedSecondaryColor: string = '#ffffff';

  /* Demo, unused content */
  public selectedThickness: string;
  public thickness: string[] = ['2mm', '3mm', '5mm', '6mm'];


  /* THREEJS assets */
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private cameraTarget: THREE.Vector3;
  private package3D: THREE.CubeGeometry;
  public scene: THREE.Scene;
  public controls: THREE.OrbitControls;

  public fieldOfView: number = 60;
  public nearClippingPane: number = 1;
  public farClippingPane: number = 1100;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private packageMesh: THREE.Mesh;

  private packageWireframe: THREE.LineSegments;

  private packageMainSide: THREE.Mesh;

  private packageSecondarySide: THREE.Mesh;

  public package = new Package(10, 10, 10, new THREE.Color(this.selectedColor), new THREE.Color(this.selectedSecondaryColor));

  constructor() {
    this.render = this.render.bind(this);
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.createScene();
    this.createLight();
    this.createCamera();
    this.addPackage();
    this.startRendering();
    this.addControls();
  }

  onSubmit() { this.updatePackage(); }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private startRendering() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.autoClear = true;

    let component: EditorComponent = this;

    (function render() {
      //requestAnimationFrame(render);
      component.render();
    }());
  }


  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  private createCamera() {
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );

    // Set position and look at
    this.camera.position.x = 10;
    this.camera.position.y = 10;
    this.camera.position.z = 100;
  }

  private getAspectRatio(): number {
    let height = this.canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private createScene() {
    this.scene = new THREE.Scene();
    // this.scene.add(new THREE.AxesHelper(200));
    var loader = new THREE.ColladaLoader();
  }

  private createLight() {
    var light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 0, 100);
    this.scene.add(light);

    var light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 0, -100);
    this.scene.add(light);
  }

  public addControls() {
    /* Limit the controls scope with the second argument */
    this.controls = new THREE.OrbitControls(this.camera, document.getElementById('canvas'));
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.addEventListener('change', this.render);
  }

  public addPackage() {
    var boxBuffer = new THREE.BoxBufferGeometry(this.package.width, this.package.height, this.package.depth);
    var material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: this.package.color });
    this.packageMesh = new THREE.Mesh(boxBuffer, material);
    var edges = new THREE.EdgesGeometry(boxBuffer);
    this.packageWireframe = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000 }));
    this.scene.add(this.packageMesh);
    this.scene.add(this.packageWireframe);

    var planeGeometry = new THREE.PlaneGeometry(this.package.width, this.package.height);
    var planeMaterial = new THREE.MeshBasicMaterial({ color: this.package.secondaryColor, side: THREE.DoubleSide });



    this.packageMainSide = new THREE.Mesh(planeGeometry, planeMaterial);
    this.packageMainSide.translateZ((this.package.depth/2 +0.01));

    this.packageSecondarySide = new THREE.Mesh(planeGeometry, planeMaterial);
    this.packageSecondarySide.translateZ(-(this.package.depth/2 +0.01));

    this.scene.add(this.packageMainSide);
    this.scene.add(this.packageSecondarySide);
  }

  public updatePackage() {
    this.clearScene();
    this.addPackage();
    this.render();
  }

  public clearScene() {
    this.scene.remove(this.packageMesh);
    this.scene.remove(this.packageWireframe);
    this.scene.remove(this.packageMainSide);
    this.scene.remove(this.packageSecondarySide);
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: Event) {
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    console.log("onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight);

    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.render();
  }

  public onColorSelect(color) {
    this.package.updateColor(color);
    this.updatePackage();
  }

  public onSecondaryColorSelect(color) {
    this.package.updateSecondaryColor(color);
    this.updatePackage();
  }
}
