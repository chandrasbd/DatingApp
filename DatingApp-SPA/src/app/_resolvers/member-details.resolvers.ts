import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import {AlertifyService} from '../_services/alertify.service';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()

export class MemberDetailsResolver implements Resolve<User> {
  constructor(private userService: UserService,
              private route: Router,
              private alertify: AlertifyService) {}

resolve(route: ActivatedRouteSnapshot): Observable<User> {
  return this.userService.getUser(route.params['id']).pipe(
    catchError(err => {
      this.alertify.message('Problem retrieving data.');
      this.route.navigate(['/members']);
      return of(null);
    })
  );
}
}


