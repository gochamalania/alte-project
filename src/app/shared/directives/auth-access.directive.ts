import { AfterViewInit, Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/core/services';

@Directive({
  selector: '[appAuthAccess]'
})
export class AuthAccessDirective implements AfterViewInit {

  constructor(
    private authService: AuthService,
    private template: TemplateRef <any>,
    private container: ViewContainerRef
  ) { }

  ngAfterViewInit(): void{
    console.log(this.authService.token);
    if(!this.authService.token){
      this.container.clear()
    }else{
      this.container.createEmbeddedView(this.template)
    }
    
  }

}
