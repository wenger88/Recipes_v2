/**
 * Created by goran.pavlovski on 12/1/2016.
 */

import {Component} from "@angular/core";
import {CloudinaryOptions} from "ng2-cloudinary";
@Component({
    selector: 'cloudinary-images',
    template: require('./cloudinary-image.component.html'),
    styles: [require('./cloudinary-image.component.scss')]
})

export class CloudinaryImageComponent{
    options: CloudinaryOptions = new CloudinaryOptions({ cloud_name: 'wenger88'});
}