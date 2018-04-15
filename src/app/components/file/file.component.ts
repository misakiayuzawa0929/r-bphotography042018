import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from '../../auth.service';
import { FirebaseStorage } from '@firebase/storage-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { DisplayfileService} from '../../display/displayfile.service';
import {FileUpload} from '../../model/fileupload';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {

  // //main task
  // task: AngularFireUploadTask;
  // //progress monitoring
  // percentage: Observable<number>;

  // snapshot: Observable<any>;

  // //Download Url
  // downloadURL: Observable<string>;
  // //state for dropzone CSS toogling
  // isHovering: boolean;

  // constructor(public authService: AuthService, private storage: AngularFireStorage, private router: Router) { }

  // toogleHover(event: boolean){
  //   this.isHovering = event;
  // }

  // startUpload(event: FileList){
  //   //the file object
  //   const file = event.item(0);

  //   //client-side validation example
  //   if(file.type.split('/')[0] !== 'image'){
  //     console.error('unsupported file type :( ');
  //     return;
  //   }

  //   //the storage path
  //   const path = `uploads/${new Date().getTime()}_${file.name}`;

  //   //totally optional metadata
  //   const customMetaData = { app: 'My AngularFire-powered PWA! '};

  //   const ref = this.storage.ref(path);

  //   //the main task
  //   this.task = ref.put(file);
  //   // this.task = ref.put({customMetaData});    
  //   this.percentage = this.task.percentageChanges();

  //   // this.snapshot = this.task.percentageChanges();
  //   // this.snapshot = this.

  //   //the file's download URL
  //   // this.downloadURL = this.task.downloadURL();
  // }

  // // isActive(snapshot){
  // //   return snapshot.state === 'running...' && snapshot.bytesTransferred < snapshot.totalBytes;
  // // }
  
//   fileUpload: FileUpload;
  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}
  fileUploads: any[];
 
  constructor(private uploadService: DisplayfileService, public authService: AuthService, private router: Router) {}
 
  onInit(){
    this.uploadService.getFileUploads(6).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }
 
  selectFile(event) {
    const file = event.target.files.item(0)
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
 
  upload() {
    const file = this.selectedFiles.item(0)
    this.selectedFiles = undefined
 
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress)
  }
  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload)
  }
  
  accountClick(){
    this.router.navigate(['/account']);
  }
  productClick(){
    this.router.navigate(['/items']);
  }
  packageClick(){
    this.router.navigate(['/items1']);
  }
  homeClick(){
    this.router.navigate(['/home']);
  }
  aboutClick(){
    this.router.navigate(['/about']);
  }
  ordersClick(){
    this.router.navigate(['/orders']);    
  }
  reportClick(){
    this.router.navigate(['/reports']);
  }
  logoutClick(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
