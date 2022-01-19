(self.webpackChunke_consult_angular_app=self.webpackChunke_consult_angular_app||[]).push([[763],{2763:(r,e,t)=>{"use strict";t.r(e),t.d(e,{SignupModule:()=>U});var n=t(1116),o=t(3337),a=t(5366),s=t(2797),i=t(1041),u=t(2693),l=t(3070),m=t(9550),p=t(4369);function g(r,e){1&r&&(a.TgZ(0,"mat-error"),a._uU(1," Please provide a valid email address "),a.qZA())}function c(r,e){1&r&&(a.TgZ(0,"mat-error"),a._uU(1," Email is "),a.TgZ(2,"strong"),a._uU(3,"required!!!"),a.qZA(),a.qZA())}function Z(r,e){1&r&&(a.TgZ(0,"mat-error"),a._uU(1," Password should be at least 5 characters "),a.qZA())}function d(r,e){1&r&&(a.TgZ(0,"mat-error"),a._uU(1," Password is "),a.TgZ(2,"strong"),a._uU(3,"required!!!"),a.qZA(),a.qZA())}let f=(()=>{class r{constructor(r,e,t){this.router=r,this.httpClient=e,this.activatedRoute=t,this.signUpForm=new i.cw({name:new i.NI("",[i.kI.required]),email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.minLength(5)])})}ngOnInit(){}onSubmit(){console.log(this.signUpForm.value),this.httpClient.post("https://e-consult-app-default-rtdb.firebaseio.com/users.json",this.signUpForm.value).subscribe(r=>{console.log(r),this.router.navigate(["/auth","login"]),this.signUpForm.reset()},r=>{console.log(r)})}}return r.\u0275fac=function(e){return new(e||r)(a.Y36(o.F0),a.Y36(u.eN),a.Y36(o.gz))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-signup-form"]],decls:32,vars:6,consts:[[1,"mt-3",3,"formGroup","ngSubmit"],["appearance","outline",1,"w-75"],["matInput","","type","text","formControlName","name"],["matInput","","type","email","autocomplete","email","formControlName","email"],[4,"ngIf"],["matInput","","type","password","autocomplete","new-password","formControlName","password"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["routerLink","../login"]],template:function(r,e){if(1&r&&(a.TgZ(0,"form",0),a.NdJ("ngSubmit",function(){return e.onSubmit()}),a.TgZ(1,"p"),a.TgZ(2,"mat-form-field",1),a.TgZ(3,"mat-label"),a._uU(4,"Name"),a.qZA(),a._UZ(5,"input",2),a.TgZ(6,"mat-error"),a._uU(7,"Name is "),a.TgZ(8,"strong"),a._uU(9,"required!!!"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"p"),a.TgZ(11,"mat-form-field",1),a.TgZ(12,"mat-label"),a._uU(13,"Email"),a.qZA(),a._UZ(14,"input",3),a.YNc(15,g,2,0,"mat-error",4),a.YNc(16,c,4,0,"mat-error",4),a.qZA(),a.qZA(),a.TgZ(17,"p"),a.TgZ(18,"mat-form-field",1),a.TgZ(19,"mat-label"),a._uU(20,"Password"),a.qZA(),a._UZ(21,"input",5),a.YNc(22,Z,2,0,"mat-error",4),a.YNc(23,d,4,0,"mat-error",4),a.qZA(),a.qZA(),a.TgZ(24,"p"),a.TgZ(25,"button",6),a._uU(26," Signup "),a.qZA(),a.qZA(),a.TgZ(27,"span"),a.TgZ(28,"h4"),a._uU(29,"Already have an account? "),a.TgZ(30,"a",7),a._uU(31,"Click here to Login"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&r){let r,t,n,o;a.Q6J("formGroup",e.signUpForm),a.xp6(15),a.Q6J("ngIf",(null==(r=e.signUpForm.get("email"))?null:r.hasError("email"))&&!(null!=(r=e.signUpForm.get("email"))&&r.hasError("required"))),a.xp6(1),a.Q6J("ngIf",null==(t=e.signUpForm.get("email"))?null:t.hasError("required")),a.xp6(6),a.Q6J("ngIf",(null==(n=e.signUpForm.get("password"))?null:n.hasError("minlength"))&&!(null!=(n=e.signUpForm.get("password"))&&n.hasError("required"))),a.xp6(1),a.Q6J("ngIf",null==(o=e.signUpForm.get("password"))?null:o.hasError("required")),a.xp6(2),a.Q6J("disabled",!e.signUpForm.valid)}},directives:[i._Y,i.JL,i.sg,l.KE,l.hX,m.Nt,i.Fj,i.JJ,i.u,l.TO,n.O5,p.lW,o.yS],styles:[""]}),r})();const q=[{path:"",component:(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-signup"]],decls:9,vars:0,consts:[[1,"container"],[1,"row","mt-5"],[1,"col-12","col-lg-4","offset-lg-4"],[1,"text-center","mt-5"]],template:function(r,e){1&r&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"mat-card",3),a.TgZ(4,"mat-card-header"),a.TgZ(5,"mat-card-title"),a._uU(6,"Create Account"),a.qZA(),a.qZA(),a.TgZ(7,"mat-card-content"),a._UZ(8,"app-signup-form"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA())},directives:[s.a8,s.dk,s.n5,s.dn,f],styles:[""]}),r})()}];let A=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[o.Bz.forChild(q)],o.Bz]}),r})();var h=t(1994);let U=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[n.ez,A,i.UX,h.q]]}),r})()}}]);