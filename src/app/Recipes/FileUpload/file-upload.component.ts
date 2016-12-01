/**
 * Created by goran.pavlovski on 12/1/2016.
 */

import {Component, Input} from "@angular/core";
import {CloudinaryOptions, CloudinaryUploader} from "ng2-cloudinary";
import {Recipe} from "../../shared/interfaces";
@Component({
    selector: 'file-upload',
    template: require('./file-upload.component.html'),
    styles: [require('./file-upload.component.scss')]
})

export class FileUploadComponent{

    @Input() recipe:Recipe;

    cloudinaryImage: any;

    cloudinaryOptions: CloudinaryOptions = new CloudinaryOptions({
        cloud_name: 'wenger88',
        upload_preset: 'uqocz1cg',
        autoUpload: true
    });

    uploader: CloudinaryUploader = new CloudinaryUploader(this.cloudinaryOptions);


    constructor() {
        let _self = this;

        //Override onSuccessItem function to record cloudinary response data
        this.uploader.onSuccessItem = function (item: any, response: string, status: number, headers: any) {
            //response is the cloudinary response
            //see http://cloudinary.com/documentation/upload_images#upload_response
            _self.cloudinaryImage = JSON.parse(response);

            return {item, response, status, headers};
        };
    }
}