import { ErrorHandler } from '@angular/core';

export class ApplicationErrorHandler implements ErrorHandler {

  handleError(err: any) {
    console.log(err);
    let error = err['originalError'].error;
    if (error && error.errorMessage) {
      alert(error.errorMessage);
    } else {
      alert('An unexpected error occurred.');
    }
  }

}
