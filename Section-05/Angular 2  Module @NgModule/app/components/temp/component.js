import { No1Component, No2Component, ... } from './components';

@Component({
    selector: 'a-cmp',
    templateUrl: 'a-cmp.component.html',
    directives: [No1Component, No2Component, ...] // inject all 10 components here
})
export class AComponent {}


@Component({
  selector: 'a-cmp',
  templateUrl: 'a-cmp.component.html' 
  // no more directives, no more importing component to component
})
export class AComponent {
}