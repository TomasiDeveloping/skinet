import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AccountService} from '../../account/account.service';
import {ToastrService} from 'ngx-toastr';
import {IAddress} from '../../shared/models/address';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.css']
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkOutForm: FormGroup;

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  saveUserAddress(): void {
    this.accountService.updateUserAddress(this.checkOutForm.get('addressForm').value).subscribe((address: IAddress) => {
      this.toastr.success('Address saved');
      this.checkOutForm.get('addressForm').reset(address);
    }, error => {
      this.toastr.error(error.message);
      console.log(error);
    });
  }

}
