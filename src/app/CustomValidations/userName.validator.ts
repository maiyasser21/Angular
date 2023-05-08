import { AbstractControl } from "@angular/forms";

export function ForbbidenNameValidator(control:AbstractControl)
{
  const forbbiden=/^(admin|administrator)$/.test(control.value);
  return forbbiden ? {'forbiddenName':{'value':control.value}} : null;
}
